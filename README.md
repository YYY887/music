---

# QianMusic
<div align="center">
    <img src="https://love.mytx.fun/854424096132435968.png" width="120" alt="QianMusic Logo"/>
    <p>🎵 基于网易云音乐API开发的高颜值、高性能Vue3音乐播放器 🎵</p>
    <p>
        <a href="https://music.mytx.fun">在线预览</a> | 
        <a href="https://github.com/YYY887/music.git">Github仓库</a> |
        <a href="https://github.com/YYY887/QianMusic/releases/tag/music">多系统包下载</a>
    </p>
</div>

<div align="center">
<img src="https://love.mytx.fun/854424432792440832.png" width="100%" alt="QianMusic 预览截图"/>
</div>

---

## ✨ 项目介绍
一款**基于 Vue3 全家桶 + 网易云音乐增强版API** 开发的现代化网页版音乐播放器，基于网易云音乐API增强版项目（`@neteasecloudmusicapienhanced/api`）构建，还原网易云音乐核心功能与交互体验，兼顾颜值与性能，无冗余功能，专注纯粹的听歌体验。接口经过增强与维护，稳定性远超原版，响应式适配多端设备，功能完整且轻量化部署。

## 📌 快速直达
✅ **在线体验**: [https://music.mytx.fun](https://music.mytx.fun) (无需部署，开箱即用)
✅ **源码仓库**: [https://github.com/YYY887/music.git](https://github.com/YYY887/music.git)
✅ **多系统可执行包**: [https://github.com/YYY887/QianMusic/releases/tag/music](https://github.com/YYY887/QianMusic/releases/tag/music)（Windows/Linux 免环境部署）

## 🚀 核心技术栈
> 前端核心 + 数据支撑 + 运行环境 + 工程化
- 核心框架：`Vue3` (Composition API 开发模式)
- 数据来源：网易云音乐API增强版（`@neteasecloudmusicapienhanced/api@4.29.20`），基于原版v4.28.0自主维护，接口更稳定
- 运行环境：`Node.js >= 12`（推荐Node18，适配打包构建）
- 核心依赖：Express（服务端）、Axios（请求）、Crypto-JS（加密）、Music-metadata（音频解析）等
- 工程化：ESLint + Prettier 代码规范、Husky 提交校验、Pkg 打包多系统可执行文件

## 📦 部署方式 (默认端口：7749 ✅ 已固化)
### 方式一 | 本地源码部署 (开发/自用首选)
```bash
# 克隆项目仓库
git clone https://github.com/YYY887/music.git

# 进入项目根目录
cd music

# 安装项目依赖（国内源加速，避免下载失败）
npm install --registry=https://registry.npm.taobao.org

# 开发模式启动（带热更新，适合调试）
npm run dev

# 生产模式启动（正式使用）
npm run start
```
启动成功后访问 → `http://localhost:7749`

> ⚠️ 依赖安装排错：
> - 若报依赖冲突：执行 `npm install --force`
> - 若Node版本过低：升级至Node12+（推荐Node18）
> - 若端口被占用：修改`app.js`中端口配置（或执行 `lsof -i:7749` 杀掉占用进程）

---

### 方式二 | 可执行包部署 (免环境/快速启动)
直接下载对应系统的可执行包，无需安装Node和依赖，解压即可运行：
1. 下载地址：[https://github.com/YYY887/QianMusic/releases/tag/music](https://github.com/YYY887/QianMusic/releases/tag/music)
2. 运行方式：
   - Windows：双击 `app.exe`
   - Linux：执行 `./app`
3. 访问地址：`http://localhost:7749`

---

### 方式三 | Docker 容器部署 (线上生产/极速部署 推荐✅)
一行命令完成部署，无需配置环境、无需处理依赖，开箱即用：
```bash
# 拉取镜像并后台启动，自动映射7749端口，容器命名QianMusic
docker run -d --name QianMusic -p 7749:7749 --restart=always yyy887/qianmusic
```
✅ 启动成功后访问 → `http://你的服务器IP:7749`
✅ 容器维护命令：
```bash
# 查看运行状态
docker ps | grep QianMusic

# 重启容器
docker restart QianMusic

# 查看运行日志
docker logs QianMusic

# 停止并删除容器（如需重装）
docker stop QianMusic && docker rm QianMusic
```

---

### 方式四 | 自定义打包可执行文件 (开发者自定义构建)
基于项目`package.json`的打包脚本，可自行构建多系统可执行文件：
```bash
# 安装打包依赖
npm install pkg -g

# 打包Windows版本
npm run pkgwin

# 打包Linux版本
npm run pkglinux

# 打包macOS版本（需macOS环境）
npm run pkgmacos
```
打包产物输出至 `bin/app`，可直接拷贝到对应系统运行。

---

## ✨ 核心特性
✅ 完整复刻网易云音乐核心功能：歌单播放、单曲收藏、歌手列表、排行榜、精准搜索
✅ 支持游客模式/网易云账号登录，数据同步，体验无缝衔接
✅ 响应式页面适配：电脑端/平板端/移动端，全尺寸自适应展示
✅ 轻量化打包：无冗余依赖，启动速度快（启动耗时<3s），运行内存占用<100MB
✅ 接口增强：基于网易云音乐API增强版构建，无第三方鉴权限制，部署后永久可用
✅ 代码规范：ESLint + Prettier 约束，Husky 提交校验，代码可维护性高
✅ 多端部署：支持源码、可执行包、Docker三种部署方式，适配本地/服务器/云环境

---

## 🛠 开发与调试
```bash
# 代码格式校验
npm run lint

# 自动修复格式问题
npm run lint-fix

# 单元测试
npm run test
```

---

<div align="center">
    <p>🎶 聆听美好，从 QianMusic 开始 🎶</p>
    <p>基于网易云音乐API增强版构建 | 版本：v4.29.20</p>
</div>

---

## ⚠️ 注意事项
1. 服务器部署需开放7749端口（安全组/防火墙），否则无法访问；
2. 若接口请求失败，可检查网络代理或修改`axios`代理配置（项目根目录`.env`文件）；
3. 可执行包由`pkg`构建，部分Linux系统需安装`libc6-compat`依赖（`apt install libc6-compat`）。

---
