### 安装和运行

基础环境信息

- node: node16
- python: python3.11

在下载项目代码之后运行下面的命令进行安装和启动(前提是后端项目已经启动)

```sh
# 安装
npm i
# 启动
npm run serve
```

注意, 对于某些本地 html, css, js 文件, 这些原生文件如果希望在本地打开, 则可以通过`http-server`来实现类似 vscode 的效果:

```sh
npm install -g http-server
cd /path/to/your/directory
http-server
```

### 关联项目

- 个人管理后台: [vue-shop](https://github.com/unlessbamboo/vue-shop)
- 基于 docker, docker-compose 的容器化部署: [deploy-shop](https://github.com/unlessbamboo/deploy-shop)
- 个人导航首页: [webbamboo](https://github.com/unlessbamboo/webbamboo)
