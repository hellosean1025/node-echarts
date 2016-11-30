var node_echarts = require('../index.js');
var path = require('path');
node_echarts({
    path: __dirname + '/test.jpg',
    echarts: path.dirname(__dirname) + '/node_modules/echarts/dist/echarts.js'
})
