# 宇宙迷航 - 完整项目文档

## 项目概述

"宇宙迷航"是一个交互式的三维宇宙可视化项目，使用Three.js构建，展现从银河系到地球的多层级宇宙结构。项目支持中英双语界面，提供沉浸式的宇宙探索体验。

## 技术架构

### 前端技术
- **Three.js**: 3D图形渲染引擎
- **WebGL**: 硬件加速渲染
- **Web Audio API**: 程序化音乐生成
- **原生JavaScript**: 无框架依赖
- **CSS3**: 样式与动画

### 系统架构
```
universe-model/
├── index.html              # 主页面 - 三层宇宙可视化
├── blackhole_*.html        # 独立黑洞可视化系列
├── docs/                   # 文档目录
├── .github/                # GitHub配置
│   ├── workflows/          # CI/CD工作流
│   ├── ISSUE_TEMPLATE/     # 问题模板
│   └── FUNDING.yml         # 资助信息
├── README.md              # 项目说明
├── PROJECT_OVERVIEW.md     # 项目概述
├── CONTRIBUTING.md         # 贡献指南
├── CODE_OF_CONDUCT.md      # 行为准则
├── DOCUMENTATION.md        # 完整文档
├── LICENSE                # MIT许可证
├── package.json           # 项目配置
├── deploy.sh              # Linux部署脚本
├── deploy.bat             # Windows部署脚本
├── check-html.js          # HTML检查脚本
├── check-script-syntax.js # JS语法检查脚本
└── TODO.md                # 开发计划
```

## 功能特性

### 1. 银河系层级
- **《星际穿越》风格黑洞**: 基于真实物理模型的三维可视化
  - 事件视界 (Event Horizon)
  - 光子球层 (Photon Sphere)
  - 三维扭曲吸积盘
  - 相对论性喷流
  - 引力透镜效应光环
  - 体积雾效果
- **银河系结构**: 螺旋臂恒星分布
- **太阳系标记**: 可交互的太阳系入口

### 2. 太阳系层级
- **真实比例行星系统**: 八大行星及其轨道
  - 太阳 (多层日冕结构)
  - 行星 (真实纹理与自转)
  - 月球 (轨道与潮汐锁定)
  - 土星光环
- **小天体系统**:
  - 小行星带 (主带、特洛伊群)
  - 彗星系统 (轨道、离子尾、尘埃尾)
  - 柯伊伯带
  - 奥尔特云

### 3. 地球层级
- **高精度地球模型**: 真实地形纹理
- **云层系统**: 动态云层渲染
- **地理标记系统**:
  - 25个主要城市
  - 世界最高峰 (含南北极)
  - 主要湖泊
  - 主要河流
- **地理坐标系统**: 赤道、回归线、极圈、经纬网

## 交互功能

### 导航控制
- 鼠标悬停信息提示
- 点击层级切换
- 返回上级按钮
- 语言切换 (中/英)

### 地球控制面板
- 旋转速度调节
- 云层透明度控制
- 暂停/继续旋转
- 视图重置
- 显示/隐藏控制:
  - 城市标记
  - 山峰标记
  - 湖泊标记
  - 河流标记
  - 地理线系 (赤道、经纬线、回归线、极圈)

### 位置标记功能
- GPS位置获取
- 实时标记功能
- 自定义标记清除

## 技术实现细节

### 动画系统
- **分层动画控制**: 每个层级独立的动画系统
- **物理模拟**: 遵循开普勒定律的轨道运动
- **性能优化**: 自适应渲染质量

### 音频系统
- **Web Audio API**: 程序化音乐生成
- **三层音乐**: 匹配不同宇宙层级
- **实时控制**: 音量调节功能

### 数据管理
- **程序化生成**: 天体数据实时计算
- **真实地理数据**: 精确坐标系统
- **内存优化**: 分层加载与卸载

## 开发指南

### 环境搭建
```bash
# 克隆项目
git clone https://github.com/LeeBoor/universe-model.git
cd universe-model

# 安装依赖
npm install

# 本地运行
npm start
# 或
npx serve .
```

### 代码规范
- ES6+ 语法
- 模块化设计原则
- 性能优先考虑
- 跨浏览器兼容

### 测试流程
```bash
# 代码检查
npm test

# 部署前检查
npm run predeploy
```

## 部署指南

### GitHub Pages 部署
1. 创建 GitHub 仓库
2. 连接远程仓库:
   ```bash
   git remote add origin https://github.com/your-username/universe-model.git
   ```
3. 推送代码:
   ```bash
   git branch -M main
   git push -u origin main
   ```
4. 启用 GitHub Pages (Settings → Pages → Source: main branch)

### 自动部署
使用提供的脚本:
- Windows: `deploy.bat`
- Linux/macOS: `deploy.sh`

## 性能优化

### 渲染优化
- 分层可见性管理
- 粒子系统性能控制
- 动画帧率自适应

### 内存管理
- 对象池复用
- 无用资源清理
- 纹理压缩与缓存

### 加载优化
- 懒加载机制
- 预加载关键资源
- 分块加载策略

## 贡献指南

### 开发流程
1. Fork 仓库
2. 创建功能分支
3. 实现功能
4. 测试验证
5. 提交 Pull Request

### 代码审查标准
- 代码质量
- 性能影响
- 功能完整性
- 代码风格一致性

## 未来发展规划

### 功能扩展
- VR/AR 支持
- 更多天体系统
- 实时天文数据集成
- 用户自定义内容

### 技术升级
- WebGPU 支持
- PWA 功能
- 离线模式
- 更高效的渲染管线

### 社区发展
- 多语言支持
- 教育资源整合
- 互动教程开发
- 用户生成内容

## 支持与联系

### 问题反馈
- GitHub Issues: [https://github.com/LeeBoor/universe-model/issues](https://github.com/LeeBoor/universe-model/issues)
- 邮箱: contact@universe-model.com

### 社区参与
- 代码贡献
- 文档完善
- 测试反馈
- 功能建议

## 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

---

*本项目持续开发中，欢迎贡献和反馈。*