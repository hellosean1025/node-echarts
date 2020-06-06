# node-echarts
Generate chart by Echarts in Nodejs.
### Install
OS | Command
----- | -----
OS X | `brew install pkg-config cairo pango libpng jpeg giflib`
Ubuntu | `sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`
Fedora | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
Windows | `npm i` or `npm install` (canvas will be installed automatically)

```
npm install node-echarts
```

### Usage
```javascript
var node_echarts = require('node-echarts');
var config = {
    width: 500, // Image width, type is number.
    height: 500, // Image height, type is number.
    option: {}, // Echarts configuration, type is Object.
    //If the path  is not set, return the Buffer of image.
    path:  '', // Path is filepath of the image which will be created.
    enableAutoDispose: true  //Enable auto-dispose echarts after the image is created.
}

node_echarts(config)

```

### Config

|name|type|default|description|
|---|---|---|---|
|width|Number|500|Image width|
|height|Number|500|Image height|
|option|Object|{}|Echarts Options|
|path|String|-|Path is filepath of the image which will be created. If the path is empty, return buffer.|
|enableAutoDispose|Boolean|true|Enable auto-dispose echarts after the image is created.|
