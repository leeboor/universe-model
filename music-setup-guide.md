# 音乐功能使用指南

## 当前状态
音乐功能已成功集成到宇宙模型中，包含：
- 右下角的音乐控制面板
- 音乐开关按钮
- 音量调节滑块
- 不同层级（银河系/太阳系/地球）的自动音乐切换

## 如何使用真正的太空音乐

### 方法1：下载音乐文件（推荐）
1. 从以下网站下载免版权的太空/环境音乐：
   - https://freepd.com/
   - https://www.freesound.org/
   - https://incompetech.com/classical/index.html

2. 将音乐文件放在与index.html同一目录下

3. 修改index.html中的音乐路径：
   ```javascript
   const musicTracks = {
       galaxy: './galaxy-music.mp3',  // 替换为实际的银河系音乐文件名
       solar: './space-music.mp3',   // 替换为实际的太阳系音乐文件名
       earth: './earth-music.mp3'    // 替换为实际的地球音乐文件名
   };
   ```

### 方法2：使用在线音乐资源
1. 在网上搜索"免版权太空音乐"或"copyright free space music"
2. 复制音乐文件的直接链接
3. 替换index.html中的音乐URL

## 重要提醒
由于浏览器的安全策略，某些外部音乐资源可能因跨域问题无法播放。本地测试时最好使用本地音乐文件。

## 测试音乐功能
1. 在浏览器中打开index.html
2. 查找右下角的音乐控制面板
3. 点击音乐开关按钮
4. 调节音量滑块

## 故障排除
- 如果音乐无法播放，请检查浏览器控制台是否有错误信息
- 确保音乐文件路径正确
- 检查音乐文件格式是否受支持（MP3、WAV、OGG等）