# QianMusic
<div align="center">
    <img src="https://love.mytx.fun/854424096132435968.png" width="120" alt="QianMusic Logo"/>
    <p>🎵 基于网易云音乐API开发的高颜值、高性能Vue3音乐播放器 🎵</p>
    <p>
        <a href="https://music.mytx.fun">在线预览</a> | 
        <a href="https://github.com/YYY887/music.git">Github仓库</a>
    </p>
</div>

<div align="center">
<img src="https://love.mytx.fun/854424432792440832.png" width="100%" alt="QianMusic 预览截图"/>
</div>

---

## ✨ 项目介绍
一款**基于 Vue3 全家桶 + 网易云音乐开放API** 开发的现代化网页版音乐播放器，还原网易云音乐核心功能与交互体验，兼顾颜值与性能，无冗余功能，专注纯粹的听歌体验，接口稳定、响应式适配多端设备，功能完整且轻量化部署。

## 📌 快速直达
✅ **在线体验**: [https://music.mytx.fun](https://music.mytx.fun) (无需部署，开箱即用)
✅ **源码仓库**: [https://github.com/YYY887/music.git](https://github.com/YYY887/music.git)

## 🚀 核心技术栈
> 前端核心 + 数据支撑 + 运行环境
- 核心框架：`Vue3` (Composition API 开发模式)
- 数据来源：网易云音乐官方开放API（稳定无失效）
- 运行环境：`Node.js`
- 工程化：原生前端工程化构建，无冗余依赖，启动极速

## 📦 部署方式 (默认端口：7749 ✅ 已固化)
### 方式一 | 本地源码部署 (开发/自用首选)
```bash
# 克隆项目仓库
git clone https://github.com/YYY887/music.git

# 进入项目根目录
cd music

# 安装项目依赖
npm install

# 启动服务 (端口自动为7749，无需手动配置)
node app.js
```
启动成功后访问 → `http://localhost:7749`

---

### 方式二 | Docker 容器部署 (线上生产/极速部署 推荐✅)
一行命令完成部署，无需配置环境、无需处理依赖，开箱即用，适合云服务器/轻量应用服务器部署
```bash
# 拉取镜像并后台启动，自动映射7749端口，容器命名QianMusic
docker run -d --name QianMusic -p 7749:7749 --restart=always yyy887/qianmusic
```
✅ 启动成功后访问 → `http://你的服务器IP:7749`
✅ `--restart=always` 配置：服务器重启后容器自动启动，无需手动维护

---

## ✨ 核心特性
✅ 完整复刻网易云音乐核心功能：歌单播放、单曲收藏、歌手列表、排行榜、搜索
✅ 支持游客模式/账号登录，数据同步，体验无缝衔接
✅ 响应式页面适配：电脑端/平板端/移动端，全尺寸自适应展示
✅ 轻量化打包，无冗余依赖，启动速度快，运行内存占用低
✅ 接口稳定，无第三方鉴权限制，部署后永久可用

---

<div align="center">
    <p>🎶 聆听美好，从 QianMusic 开始 🎶</p>
</div>

---
