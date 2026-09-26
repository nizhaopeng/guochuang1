# 剧创云 · 稀有剧种数字化新编智能辅助系统

面向稀有剧种（23 个剧种、约 1.5 万条资料）的数字化整理与剧本创编辅助系统。
Vue 3 + Vite + Element Plus + ECharts，**纯前端静态应用，无后端、无外部接口依赖，可完全离线运行**。

- 线上地址：`https://nizhaopeng.github.io/guochuang1/`

---

## 🎯 比赛现场演示

### 演示前一天的准备（务必做完）

1. **在比赛用的那台笔记本上装好依赖**。现场不要依赖网络装包：
   ```bash
   npm install
   ```
2. **跑一次完整流程**，确认能构建、能打开、二维码能生成：
   ```bash
   双击 start.bat
   ```
3. **确认线上地址能打开**（手机 4G 流量下试一次，别只用宽带试）。
4. **手机连笔记本热点**试一次扫码访问，提前排除局域网问题。

### 现场三步走

1. 双击项目里的 **`start.bat`** —— 它会自动构建并启动本地演示服务器。
2. 在弹出窗口中找到 `Network:` 那一行，形如 `http://192.168.x.x:4173/guochuang1/`，
   **用笔记本浏览器打开它**（不要用 localhost，否则二维码会指向 localhost，评委扫不开）。
3. 首页「扫码访问」区域会自动生成二维码 —— 它编码的就是你当前浏览器地址。
   评委用微信或相机扫码即可打开。

> 💡 二维码逻辑：生产构建下前端直接取 `window.location.href`，
> 所以你打开哪个地址，评委就访问哪个地址，不需要手工填 IP。

### 现场检查清单

- [ ] 笔记本**关闭自动休眠**、插上电源
- [ ] 浏览器**隐藏书签栏**、适度放大字号（评委离得远）
- [ ] **关闭微信/QQ 等通知弹窗**，避免演示中弹消息
- [ ] 手机开好热点备用（见下方兜底 B）
- [ ] 提前把线上地址存成书签
- [ ] `npm install` 已经跑过，`node_modules` 存在

### 网络不通时的三种兜底

按可靠性从高到低，现场按需降级：

| 方案 | 做法 | 依赖 |
|---|---|---|
| **A. 笔记本热点（最稳）** | 笔记本开移动热点 → 手机连该热点 → 评委扫码访问 Network 地址 | 不依赖场馆网络 |
| **B. 线上地址** | 直接打开 `https://nizhaopeng.github.io/guochuang1/`，首页二维码会让评委访问线上版 | 需要能上网 |
| **C. 纯投屏** | 就在笔记本上跑 `http://localhost:4173/guochuang1/`，用投影演示，不发二维码 | 完全不依赖网络 |

> ⚠️ **最大的坑是场馆 WiFi 的 AP 隔离**：很多场馆的公共 WiFi 禁止设备之间互访，
> 此时评委扫码一定打不开。所以方案 A（笔记本热点）才是现场首选。

---

## 💻 本地开发

```bash
npm install
npm run dev        # 开发服务器，http://localhost:5173/guochuang1/
npm run build      # 生产构建，输出到 dist/
npm run preview    # 本地预览构建产物
npm run check      # 仅做 TypeScript 类型检查
```

> 注意 `vite.config.ts` 里 `base: '/guochuang1/'`，所以本地地址也带 `/guochuang1/` 前缀。
> 这个前缀必须和 GitHub 仓库名一致，改名仓库时记得同步改。

---

## 🚀 部署到 GitHub Pages

推送到 `main` 分支即自动部署，工作流见 `.github/workflows/deploy.yml`。

**首次部署需要手动开一次 Pages**（只做一次）：

> 仓库页 → **Settings → Pages → Build and deployment → Source** 选 **`GitHub Actions`**

之后每次 `git push` 都会自动重新构建发布。也可以在
**Actions → Deploy to GitHub Pages → Run workflow** 手动触发一次。

部署约 1 分钟，地址固定在 `https://<用户名>.github.io/guochuang1/`。

---

## 🔤 关于中文字体

界面用 Noto Sans SC / Noto Serif SC。**没有**引用 `fonts.googleapis.com` ——
该域名在国内不可达，会让首屏卡在等待超时。

取而代之的是 `src/assets/fonts/` 下的**字体子集**：按项目实际用到的字符裁剪过，
6 个字重合计约 1MB（完整字库是 17MB / 588 个文件），每个字重一个文件、一次请求即可拿全。

**改动界面文案后请重新生成子集**，否则新字符会回退到系统字体，字形和其余文字不一致：

```bash
pip install fonttools brotli
npm i -D @fontsource/noto-sans-sc @fontsource/noto-serif-sc   # 提供完整源字库
npm run fonts:subset
npm uninstall @fontsource/noto-sans-sc @fontsource/noto-serif-sc
```

详见 `scripts/subset-fonts.py`。

---

## 📖 系统功能

| 模块 | 说明 |
|---|---|
| **资料管理** | 23 个稀有剧种的资料浏览、按剧种/类型筛选、关键词搜索、查看详情与新增 |
| **智能分析** | 选择剧种分析，展示高频词云图与主题分析结果 |
| **剧本创编** | 选择剧种与主题，一键生成剧本大纲，编辑并保存 |
| **我的作品** | 已保存剧本的管理、导出与删除 |

---

## ❓ 常见问题

**Q: 提示 "npm 不是内部或外部命令"**
A: 未安装 Node.js，去 https://nodejs.org/ 装 LTS 版本。

**Q: 端口被占用**
A: 关掉占用进程，或改 `start.bat` 里的 `--port 4173`。

**Q: 评委扫码后打不开 / 一直转圈**
A: 八成是场馆 WiFi 的 AP 隔离。改用笔记本热点（见「兜底 A」）。

**Q: 二维码指向 `localhost`，评委扫不开**
A: 说明你是在 `localhost` 下打开的页面。换成 `Network:` 那个 `192.168.x.x` 地址重新打开，二维码会跟着变。

**Q: 页面字体和平时不一样**
A: 说明出现了字体子集没覆盖到的字。按上文「关于中文字体」重新生成子集即可。

**Q: 构建报 TypeScript 错误**
A: `npm run build` 会先跑 `vue-tsc` 类型检查。可先 `npm run check` 单独定位错误。

---

## ⚠️ 说明

- 系统内所有数据**均为模拟数据**，不涉及真实敏感信息。
- `软著申请材料/` 目录已加入 `.gitignore`，不会进入公开仓库。
