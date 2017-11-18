var echarts = require("echarts");
var Canvas = require("canvas-prebuilt");
var fs     = require('fs');
var path   = require('path');

/**
 * @param config = {
        width: 500 // Image width, type is number.
        height: 500 // Image height, type is number.
        option: {}, // Echarts configuration, type is Object.
        //If the path  is not set, return the Buffer of image.
        path:  '', // Path is filepath of the image which will be created.
    }
    
 *
*/
module.exports = async (config) => {
    if(config.canvas){
        Canvas = config.canvas;
    }
    echarts.setCanvasCreator(function () {
        return ctx;
    });
    var ctx = new Canvas(128, 128);
    var chart,option = {
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
    if(config.font){
        ctx.font = config.font;
    }
    
    config.option.animation = false;
    chart = echarts.init(new Canvas(parseInt(config.width,10), parseInt(config.height,10)));
    chart.setOption(config.option);
    if (config.path) {
        try {
            fs.writeFileSync(config.path, chart.getDom().toBuffer());
            console.log("Create Img:" + config.path)
        } catch (err) {
            console.error("Error: Write File failed" + err.message)
        } 
    } else {
        return chart.getDom().toBuffer()
    }
}
