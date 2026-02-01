# 贡献指南

感谢您有兴趣为"宇宙迷航"项目做出贡献！本文档提供了有关如何参与项目的详细信息。

## 开发环境设置

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/universe-model.git
   cd universe-model
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **本地运行**
   ```bash
   npm start
   ```

## 代码结构

```
universe-model/
├── index.html              # 主页面
├── README.md              # 项目说明
├── PROJECT_OVERVIEW.md    # 项目概述
├── LICENSE                # 许可证
├── .github/               # GitHub配置文件
│   ├── workflows/         # GitHub Actions
│   └── FUNDING.yml        # 资助信息
├── docs/                  # 文档
├── deploy.sh              # Linux部署脚本
├── deploy.bat             # Windows部署脚本
└── ...
```

## 贡献流程

### 1. Fork 仓库
- 点击 GitHub 上的 "Fork" 按钮
- 克隆您的 fork 到本地

### 2. 创建分支
```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b bugfix/issue-description
```

### 3. 开发
- 遵循现有代码风格
- 添加适当的注释
- 确保代码性能良好
- 测试跨浏览器兼容性

### 4. 提交更改
```bash
git add .
git commit -m "描述您的更改"
```

### 5. 推送并创建 Pull Request
```bash
git push origin feature/your-feature-name
```
然后在 GitHub 上创建 Pull Request。

## 代码规范

### JavaScript
- 使用 ES6+ 语法
- 遵循驼峰命名法
- 函数和变量名应具有描述性
- 保持函数简短和单一职责

### CSS
- 使用有意义的类名
- 避免过度嵌套
- 使用 CSS 变量以保持一致性

### HTML
- 语义化标签
- 适当的缩进
- 清晰的注释

## 可接受的贡献类型

- **Bug 修复**: 修复错误和问题
- **功能添加**: 添加新功能
- **文档改进**: 完善文档
- **性能优化**: 提升性能
- **用户体验改进**: 优化 UI/UX
- **国际化**: 添加多语言支持

## 报告问题

当报告问题时，请包含：
- 详细的错误描述
- 重现步骤
- 预期行为
- 实际行为
- 您的环境信息

## 代码审查

所有 Pull Request 都需要经过审查。审查过程包括：
- 代码质量检查
- 性能评估
- 功能完整性验证
- 代码风格符合性

## 联系方式

如果您有任何问题，请通过以下方式联系：
- 创建 Issue
- 发送邮件至 [your-email@example.com]

## 许可证

通过贡献，您同意您的贡献将根据项目许可证发布。

---

再次感谢您对项目的贡献！ 🚀