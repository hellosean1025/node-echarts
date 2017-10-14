# node-echarts
Node generate chart by Echarts.
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
    path: __dirname + '/pie.png', //Generate filepath
    option: option, //echarts options
    width: 500, //width Integer
    height: 500 //Height Integer
})

