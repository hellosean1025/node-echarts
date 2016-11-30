# node-echarts
nodejs后台生成echarts图表文件
# Install
npm install node-echarts

#使用方法
```
var node_echarts = require('node-echarts');
node_echarts({
    path: __dirname + '/pie.png', //生成文件路径
    option: option， //option是echarts配置参数
    width: '500px', //图表生成宽度
    height: '500px' //图表生成高度
    echarts: '/var/www/echart.js' //echarts.js 路径 (必填)
})

```
