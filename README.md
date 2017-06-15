# node-echarts
nodejs后台生成echarts图表文件
# Install
OS | Command
----- | -----
OS X | `brew install pkg-config cairo pango libpng jpeg giflib`
Ubuntu | `sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`
Fedora | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
Windows | [Instructions on our wiki](https://github.com/Automattic/node-canvas/wiki/Installation---Windows)

```
npm install node-echarts
```

# 使用方法
```javascript
var node_echarts = require('node-echarts');
node_echarts({
    path: __dirname + '/pie.png', //生成文件路径
    option: option, //option是echarts配置参数
    width: 500, //图表生成宽度
    height: 500 //图表生成高度
})

```
# 中文无法显示或乱码解决办法

中文无法显示是因为node-canvas库缺乏相应的字体，node-canvas某一分支提供了加入字体的api,下面是解决办法:   
1. git clone https://github.com/chearon/node-canvas.git   ,然后进入到clone的项目目录，执行npm install

2. 下载所需要的字体

3. 具体代码如下：

```javascript
var node_echarts = require('node-echarts');
var path = require('path');
var Canvas =require('./node-canvas'); //这里的路径是刚clone项目路径
Canvas.registerFont(path.join(__dirname, "华文仿宋.ttf"), { family: "华文仿宋"});
node_echarts({
    canvas: Canvas,
    font: '12px 华文仿宋',
    path: __dirname + '/中文字体demo.png',
    option: option,
    width:  1000,
    height: 500
})

```

可查看demo下中文字体demo.js
