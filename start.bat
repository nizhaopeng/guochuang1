@echo off
setlocal
title 剧创云 - 现场演示启动器
cd /d "%~dp0"

echo ============================================================
echo   剧创云 - 稀有剧种数字化新编智能辅助系统
echo   现场演示启动器（生产模式，断网可用）
echo ============================================================
echo.

where npm >nul 2>nul
if errorlevel 1 goto nonpm

if not exist "node_modules" goto install

:afterinstall
echo [1/2] 正在构建生产版本...
call npm run build
if errorlevel 1 goto buildfail

echo.
echo [2/2] 正在启动本地演示服务器，端口 4173
echo.
echo ------------------------------------------------------------
echo  启动后，在新窗口里找到 Network 开头的那一行，形如
echo      http://192.168.x.x:4173/guochuang1/
echo.
echo  演示步骤
echo    1. 在笔记本浏览器打开上面这个 Network 地址
echo    2. 确认首页扫码访问区域已生成二维码
echo    3. 评委扫码即可打开，需与笔记本在同一个 WiFi
echo.
echo  网络不通时的兜底方案，见 README.md 的比赛现场演示一节
echo ------------------------------------------------------------
echo.

start "剧创云演示服务器" cmd /k "npm run preview -- --host 0.0.0.0 --port 4173"

echo 服务已在新窗口启动，本窗口可以关闭。
goto end

:install
echo [*] 首次运行，正在安装依赖，需要联网，约 1-2 分钟...
call npm install
if errorlevel 1 goto noinstall
goto afterinstall

:nonpm
echo [错误] 未检测到 npm，请先安装 Node.js，下载地址 https://nodejs.org/
pause
exit /b 1

:noinstall
echo [错误] 依赖安装失败，请检查网络后重试
pause
exit /b 1

:buildfail
echo [错误] 构建失败，请把上面的报错截图发出来排查，不要硬上
pause
exit /b 1

:end
endlocal
