<#
.SYNOPSIS
    剧创云 - 数字化新编智能系统 一键启动脚本
.DESCRIPTION
    自动启动开发服务器和公网访问服务，生成可分享的公网链接
#>

$ErrorActionPreference = "Stop"
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Definition

Write-Host ""
Write-Host "╔══════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║        剧创云 - 数字化新编智能系统          ║" -ForegroundColor Cyan
Write-Host "║              一键启动脚本                    ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "📌 使用说明：" -ForegroundColor Yellow
Write-Host "   1. 等待两个新窗口弹出" -ForegroundColor White
Write-Host "   2. 在第二个窗口中找到公网链接" -ForegroundColor White
Write-Host "   3. 复制链接发送给队友即可访问" -ForegroundColor White
Write-Host ""
Write-Host "🚨 重要提示：两个窗口都要保持打开，关闭后链接会失效" -ForegroundColor Red
Write-Host ""

try {
    Write-Host "=============================================" -ForegroundColor Gray
    Write-Host "正在启动开发服务器..." -ForegroundColor White
    Write-Host "=============================================" -ForegroundColor Gray
    Write-Host ""

    Start-Process -FilePath "cmd.exe" -ArgumentList "/k cd /d `"$projectPath`" && npm run dev -- --host 0.0.0.0 --port 5173" -WindowStyle Normal

    Write-Host "等待开发服务器启动..." -ForegroundColor Yellow
    Start-Sleep -Seconds 8

    Write-Host ""
    Write-Host "=============================================" -ForegroundColor Gray
    Write-Host "正在启动公网访问服务..." -ForegroundColor White
    Write-Host "=============================================" -ForegroundColor Gray
    Write-Host ""

    Start-Process -FilePath "cmd.exe" -ArgumentList "/k cd /d `"$projectPath`" && npx localtunnel --port 5173" -WindowStyle Normal

    Write-Host ""
    Write-Host "╔══════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║              ✅ 启动完成！                   ║" -ForegroundColor Green
    Write-Host "╚══════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 本地访问地址：http://localhost:5173" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📍 请在"公网访问"窗口中查找类似这样的链接：" -ForegroundColor Yellow
    Write-Host "   your url is: https://xxx.loca.lt" -ForegroundColor White
    Write-Host ""
    Write-Host "📍 将该链接发送给队友，队友打开浏览器即可访问" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "╔══════════════════════════════════════════════╗" -ForegroundColor Gray
    Write-Host "║     🔒 安全提醒：                            ║" -ForegroundColor Gray
    Write-Host "║     - 链接通过 HTTPS 加密传输               ║" -ForegroundColor White
    Write-Host "║     - 请勿输入真实个人信息                   ║" -ForegroundColor White
    Write-Host "║     - 链接关闭后自动失效                     ║" -ForegroundColor White
    Write-Host "╚══════════════════════════════════════════════╝" -ForegroundColor Gray
    Write-Host ""
    Write-Host "按任意键关闭此窗口（两个服务窗口仍会继续运行）..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
catch {
    Write-Host ""
    Write-Host "❌ 启动失败：$_" -ForegroundColor Red
    Write-Host ""
    Write-Host "请手动执行以下命令：" -ForegroundColor Yellow
    Write-Host "cd `"$projectPath`"" -ForegroundColor White
    Write-Host "npm run dev -- --host 0.0.0.0 --port 5173" -ForegroundColor White
    Write-Host ""
    Write-Host "然后打开新命令行窗口执行：" -ForegroundColor Yellow
    Write-Host "npx localtunnel --port 5173" -ForegroundColor White
    Write-Host ""
    Write-Host "按任意键退出..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
