# node-echarts
后台生成echarts图表，已文件的方式保存

# Install
npm install node-echarts

#使用方法
```
var node_echarts = require('node-echarts');
node_echarts({
    path: __dirname + '/pie.png', //生成文件路径
    option: option， //option是echarts配置参数
    width: 500, //图表生成宽度
    height: 500 //图表生成高度
})

```
