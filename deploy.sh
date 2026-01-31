#!/bin/bash
# 部署脚本 - 将更新推送到GitHub

# 检查是否有未提交的更改
if [[ $(git status --porcelain) ]]; then
    echo "检测到未提交的更改，正在添加..."
    git add .
    
    # 获取提交信息
    read -p "请输入提交信息: " commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update universe model"
    fi
    
    git commit -m "$commit_message"
else
    echo "没有检测到更改"
fi

# 推送到远程仓库
echo "正在推送更改到远程仓库..."
git push origin main

if [ $? -eq 0 ]; then
    echo "部署成功！"
else
    echo "部署失败，请检查错误信息"
fi