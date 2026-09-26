@echo off
chcp 65001 >nul
setlocal
title 剧创云 - 现场演示启动器
cd /d "%~dp0"

echo ============================================================
echo   剧创云 · 稀有剧种数字化新编智能辅助系统
echo   现场演示启动器（生产模式 / 断网可用）
echo ============================================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo [x] 未检测到 npm，请先安装 Node.js: https://nodejs.org/
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [*] 首次运行，正在安装依赖（需要联网，约 1-2 分钟）...
  call npm install
  if errorlevel 1 (
    echo.
    echo [x] 依赖安装失败，请检查网络后重试
    pause
    exit /b 1
  )
)

echo [1/2] 构建生产版本...
call npm run build
if errorlevel 1 (
  echo.
  echo [x] 构建失败。把上面红字的报错截图发出来排查，不要硬上。
  pause
  exit /b 1
)

echo.
echo [2/2] 启动本地演示服务器（端口 4173）...
echo.
echo ------------------------------------------------------------
echo  启动后，在新窗口里找到 "Network:" 开头的行，形如：
echo      http://192.168.x.x:4173/guochuang1/
echo.
echo  【演示步骤】
echo    1. 在笔记本浏览器打开上面这个 Network 地址
echo    2. 确认首页「扫码访问」区域已生成二维码
echo    3. 评委用微信/相机扫码即可打开（需与笔记本同一个 WiFi）
echo.
echo  【网络不通时的兜底】见本目录 README.md「比赛现场演示」一节
echo ------------------------------------------------------------
echo.

start "" cmd /k "npm run preview -- --host 0.0.0.0 --port 4173"

echo 已在新窗口启动服务。本窗口可以关闭。
timeout /t 4 >nul
