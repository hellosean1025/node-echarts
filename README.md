# 2018-07-30 更新内容：
支持注册插件
注：如果出现无法注册成功，那么可能是你引入的多个echarts,因为该项目已经有引进一个echarts了。在你的项目中应该不需要再引入echarts了
# 2018-07-26 更新内容：
将nodejs7的async语法去掉了，支持低版本nodejs
# 2018-05-16 更新内容：
在生成完图片后直接销毁掉chart对象，因为chart在创建成功后会监听一堆事件，导致在生成图片完成后程序还是一直保持监听状态，所有在chart生成完图片后直接销毁掉 
```javascript
chart.dispose();
```
# node-echarts
Generate chart by Echarts in Nodejs.
### Install
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

### Usage
```javascript
var node_echarts = require('node-echarts');
node_echarts({
    width: 500 // Image width, type is number.
    height: 500 // Image height, type is number.
    option: {}, // Echarts configuration, type is Object.
    //If the path  is not set, return the Buffer of image.
    path:  '', // Path is filepath of the image which will be created.
})

```

