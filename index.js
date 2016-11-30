var echarts = require("echarts");
var Canvas = require("canvas");
var fs     = require('fs');

echarts.setCanvasCreator(function () {
    var canvas = new Canvas(128, 128);
    return canvas;
});
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
    config.width = config.width || 500;
    config.height = config.height || 500;
    config.option = config.option || option;
    config.path = config.path || process.cwd() + '/test.png';
    config.option.animation = false;
    var chart = echarts.init(new Canvas(parseInt(config.width,10), parseInt(config.height,10)));
    chart.setOption(config.option);
    setTimeout(function(){
        fs.writeFile(config.path, chart.getDom().toBuffer(), function(){
            console.log("Create Img:" +config.path)
        })
    },0)


}
