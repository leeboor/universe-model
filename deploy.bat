@echo off
REM 部署脚本 - 将更新推送到GitHub

echo 正在检查未提交的更改...
git status --porcelain

if "%errorlevel%"=="0" (
    echo 没有检测到更改
    goto end
)

echo 正在添加所有更改...
git add .

set /p commit_msg="请输入提交信息: "
if "%commit_msg%"=="" set commit_msg="Update universe model"

git commit -m "%commit_msg%"

echo 正在推送更改到远程仓库...
git push origin main

if "%errorlevel%"=="0" (
    echo 部署成功！
) else (
    echo 部署失败，请检查错误信息
)

:end
pause