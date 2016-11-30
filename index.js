var jsdom = require("jsdom");

/**
 * @param config = {
        width: 图表宽度
        height: 图表高度
        option: echarts配置
        path:  生成文件路径
    }
 *
*/
module.exports = function(config){
    config = config || {};
    var option = {
            title: {
                text: 'test'
            },
            tooltip: {},
            legend: {
                data:['test']
            },
            xAxis: {
                data: ["a","b","c","d","f","g"]
            },
            yAxis: {},
            series: [{
                name: 'test',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
    config.width = config.width || '500px';
    config.height = config.height || '500px';
    config.option = config.option || option;
    config.path = config.path || process.cwd() + '/test.png';
    config.timeout = config.timeout || 0;
    config.option.animation = false;
    config.option.progressive = 0;

    jsdom.env(
      '<div id="main" style="width:'+config.width+'; height:'+config.width+';"></div>',
      [__dirname + '/node_modules/echarts/dist/echarts.js'],
      function (err, window) {
         var document = window.document;
         var echarts = window.echarts;
         var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(config.option);
            setTimeout(function(){
                var data = myChart.getDataURL();
                var fs = require("fs");
                data = data.substr(22);
                var imageBuffer = new Buffer(data, 'base64');
                fs.writeFile(config.path, imageBuffer, function(){
                    process.exit()
                });
            },config.timeout)
      }
    );
}
