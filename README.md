# 星名片3.1

> 这是一个校园通信录的webApp，通过登录可以实现快速查找到团体里某个成员的联系方式，并且还实现了快速打电话和发短信的功能。

## 技术栈

此webApp使用了vue + vuex + vue-router来搭建界面，vue来实现页面的渲染，vuex来管理用户状态和页面的状态，vue-router来控制页面的条状。此项目使用了webpack来打包优化。

## 运行方式

``` bash
# 拷贝项目代码
$ git clone https://github.com/kunkuntang/xingcard3.0.git

# 安装依赖
$ npm install

# 启动项目，通过localhost:8080来访问项目
$ npm run dev
```

## 效果截图

![项目效果](https://github.com/kunkuntang/xingcard3.0/raw/master/xingcard3.0.gif)

## 最近更新

- 添加了service worker离线支持
- 支持pwa，可添加到主屏
- 优化了首屏加载
- 去除了一些不必要的第三方库，改用原生JavaScript实现

# xingcard3.0

> This is a webApp application of campus contact. You can find someone's contact information quickly in your gruop via login with association ID. What's more you can also make a call or send a sms directly via this webApp

## Technology

This application is build with vue + vuex + vue-router while vue is used to render the interface and vuex is used to manage the user's status and interface's status, and we used vue-router to controll the web route. Meanwhile we used the webpack to help us optimize our application.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Change Log

- add the offline support via service worker
- support pwa，add webApp to the homepage is available
- optimize the first screen loaded
- use JavaScript instand of three part lib

