#!/usr/bin/env python3
"""重新生成 src/assets/fonts/ 下的中文字体子集。

背景
----
线上原本用 `@import url('https://fonts.googleapis.com/...')` 加载 Noto Sans SC /
Noto Serif SC，但该域名在国内不可达，首屏会卡住等超时。改成自托管后，如果直接把
fontsource 的完整字库打进 dist，会产生 500+ 个字体文件、十几 MB，现场扫码要加载很久。

所以这里按「项目实际用到的字符」做子集化：体积从 ~17MB 降到 ~1MB，且每个字重
只有一个文件，一次请求即可拿全。

何时需要重跑
------------
改动了界面文案 / 新增了中文字符之后。漏掉的字符不会显示成方块——会自动回退到
系统字体（微软雅黑等），只是字形会和其余文字不一致，细看能看出来。

用法
----
    npm run fonts:subset

依赖
----
  - Python 3 + fonttools + brotli:  pip install fonttools brotli
  - 源字体（完整简体中文全字库），脚本会提示安装：
        npm i -D @fontsource/noto-sans-sc @fontsource/noto-serif-sc
    这两个包只在生成子集时需要，不进生产构建，所以装在 devDependencies 且
    生成完可以卸载（CI 里不需要它们）。
"""

from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "src"
FONT_OUT = SRC_DIR / "assets" / "fonts"

# (fontsource 包名, 字重)。改这里之前先确认 src/style.css 和界面里确实用到该字重。
WEIGHTS = [
    ("noto-sans-sc", 400),   # 正文
    ("noto-sans-sc", 500),   # font-medium
    ("noto-sans-sc", 600),   # .el-card__header / .el-table th
    ("noto-sans-sc", 700),   # font-bold
    ("noto-serif-sc", 600),  # h1-h6
    ("noto-serif-sc", 700),  # 标题加粗
]

# 额外保留的字符范围：ASCII、中文标点、全角符号、通用标点、拉丁补充。
# 界面里动态生成的符号（如「共 12 条」）和英文都靠这些兜底。
EXTRA_RANGES = [
    (0x20, 0x7F),      # 基本拉丁
    (0x00A0, 0x00FF),  # 拉丁补充
    (0x2000, 0x206F),  # 通用标点（破折号、省略号、引号等）
    (0x3000, 0x303F),  # 中文标点
    (0xFF00, 0xFFEF),  # 全角字符
]

# 常见汉字安全缓冲：万一有文案是从别处拼进来、没被扫描到，也不至于立刻掉字体。
# 从 fontsource 的高频切片里取，切片按字符频率排序。
COMMON_SLICE_COUNT = 10


def collect_used_chars() -> set[str]:
    """扫描 src/ 和 index.html，收集所有出现过的字符。"""
    chars: set[str] = set()
    exts = {".vue", ".ts", ".js", ".css", ".html", ".json", ".md"}

    for base in (SRC_DIR, ROOT / "public"):
        if not base.exists():
            continue
        for path in base.rglob("*"):
            if path.is_file() and path.suffix in exts:
                chars |= set(path.read_text(encoding="utf-8", errors="ignore"))

    index_html = ROOT / "index.html"
    if index_html.exists():
        chars |= set(index_html.read_text(encoding="utf-8"))

    return chars


def collect_common_chars(src_root: Path) -> set[str]:
    """从 fontsource 的高频切片里取常见汉字，作为安全缓冲。"""
    try:
        from fontTools.ttLib import TTFont
    except ImportError:
        return set()

    chars: set[str] = set()
    files_dir = src_root / "files"
    for i in range(COMMON_SLICE_COUNT):
        path = files_dir / f"noto-sans-sc-{i}-400-normal.woff"
        if not path.exists():
            continue
        cmap = TTFont(path).getBestCmap()
        chars |= {chr(c) for c in cmap if 0x4E00 <= c <= 0x9FFF}
    return chars


def main() -> int:
    try:
        import brotli  # noqa: F401
        from fontTools.ttLib import TTFont
    except ImportError as exc:
        print(f"[x] 缺少依赖: {exc.name}")
        print("    请先运行: pip install fonttools brotli")
        return 1

    src_root = ROOT / "node_modules" / "@fontsource" / "noto-sans-sc"
    if not src_root.exists():
        print("[x] 找不到源字体包 @fontsource/noto-sans-sc")
        print("    请先运行: npm i -D @fontsource/noto-sans-sc @fontsource/noto-serif-sc")
        return 1

    chars = collect_used_chars()
    print(f"[*] 界面用到的字符: {len(chars)}")
    chars |= collect_common_chars(src_root)
    for lo, hi in EXTRA_RANGES:
        chars |= {chr(c) for c in range(lo, hi + 1)}
    print(f"[*] 含安全缓冲后共: {len(chars)}")

    charset_file = ROOT / ".charset.txt"
    charset_file.write_text("".join(sorted(chars)), encoding="utf-8")

    FONT_OUT.mkdir(parents=True, exist_ok=True)
    total = 0
    failed = False

    for family, weight in WEIGHTS:
        src = (ROOT / "node_modules" / "@fontsource" / family / "files"
               / f"{family}-chinese-simplified-{weight}-normal.woff")
        out = FONT_OUT / f"{family}-{weight}.woff2"

        if not src.exists():
            print(f"[x] 缺少源字体: {src}")
            print("    请先运行: npm i -D @fontsource/noto-sans-sc @fontsource/noto-serif-sc")
            failed = True
            continue

        result = subprocess.run(
            [sys.executable, "-m", "fontTools.subset", str(src),
             f"--text-file={charset_file}",
             f"--output-file={out}",
             "--flavor=woff2",
             "--layout-features=*",
             "--no-hinting",
             "--desubroutinize"],
            capture_output=True, text=True,
        )
        if result.returncode != 0:
            print(f"[x] {family} {weight} 失败: {result.stderr.strip()[:200]}")
            failed = True
            continue

        size = out.stat().st_size
        total += size
        print(f"[+] {family} {weight}: {src.stat().st_size / 1024:6.0f} KB -> {size / 1024:5.1f} KB")

    charset_file.unlink(missing_ok=True)

    if failed:
        return 1

    print(f"[=] 合计 {total / 1024:.0f} KB，输出目录: {FONT_OUT.relative_to(ROOT)}")
    print("[!] 新增字重后记得同步更新 src/fonts.css 里的 @font-face。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
