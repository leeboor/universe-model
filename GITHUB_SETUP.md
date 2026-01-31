# GitHub 上传指南

按照以下步骤将项目上传到GitHub：

## 1. 在GitHub上创建仓库
- 登录 GitHub
- 点击 "New repository"
- 输入仓库名（例如：universe-model）
- 添加描述（可选）
- 选择 "Public" 或 "Private"
- **不要**勾选 "Initialize this repository with a README"
- 点击 "Create repository"

## 2. 连接到您的仓库
在仓库创建完成后，在本地项目目录中运行以下命令（替换 YOUR_USERNAME 和 YOUR_REPOSITORY_NAME 为您的实际用户名和仓库名）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

## 3. 推送到GitHub
```bash
git branch -M main
git push -u origin main
```

## 4. 启用 GitHub Pages
- 进入仓库的 "Settings" 选项卡
- 向下滚动到 "Pages" 部分
- 在 "Source" 下拉菜单中选择 "Deploy from a branch"
- 选择 "main" 分支和 "/" 文件夹
- 点击 "Save"
- GitHub Pages 将在几分钟后部署完成

## 5. 访问您的网站
完成后，您可以通过以下地址访问您的宇宙模型：
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/

## 未来的更新
当您需要更新项目时：
1. 修改文件
2. 运行 `git add .`
3. 运行 `git commit -m "描述您的更改"`
4. 运行 `git push origin main`

或者，您可以使用项目中的 `deploy.bat` 脚本（Windows）或 `deploy.sh` 脚本（Linux/Mac）来自动执行这些步骤。