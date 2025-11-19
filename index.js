var echarts = require("echarts");
var { createCanvas } = require("canvas");
var fs = require('fs');
var path = require('path');

/**
 * default echart option in case the client doesn't define
 */
function getDefaultOption() {
    return {
        title: {
            text: 'test',
        },
        tooltip: {},
        legend: {
            data: ['test'],
        },
        xAxis: {
            data: ["a", "b", "c", "d", "f", "g"],
        },
        yAxis: {},
        series: [{
            name: 'test',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
        }]
    };
}

/**
 * default config for the option, in case the client doesn't
 * define it.
 * 
 * @param {*} option echart option
 */
function getDefaultConfig(option) {
    return {
        width: 500,
        height: 500,
        option,
        enableAutoDispose: true,
    }
}

/**
 * saves the chart passed in the provided path
 * @param {*} chart chart in which thedom will be retrieved and saved
 * as an image
 * @param {*} path directory to the image that will be saved
 */
function saveChart(chart, path) {
    try {
        fs.writeFileSync(path, chart.getDom().toBuffer());
        console.log("Created image:" + path)
    } catch (err) {
        console.error("Error: write file failed: " + err.message)
    }
}

/**
 * retrieves the buffer of the chart
 * @param {*} chart chart in which the buffer will be retrieved
 */
function getBuffer(chart) {
    return chart.getDom().toBuffer();
}

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
module.exports = function (config) {

    const createdCanvas = createCanvas(128, 128);
    const ctx = createdCanvas.getContext('2d');

    if (config.font) {
        ctx.font = config.font;
    }

    echarts.setCanvasCreator(function () {
        return createdCanvas;
    });

    const option = getDefaultOption();
    const defaultConfig = getDefaultConfig(option);

    config = Object.assign({}, defaultConfig, config);

    config.option.animation = false;
    
    const chart = echarts.init(
        createCanvas(
            parseInt(config.width, 10),
            parseInt(config.height, 10),
        ),
    );

    chart.setOption(config.option);

    try {
        /**
         * if specified the path, the chart will be saved into it
         */
        if (config.path) {
            saveChart(chart, config.path);
            return;
        }

        /**
         * if not, the buffer will be returned
         */
        return getBuffer(chart);
    } finally {

        /**
         * finally, dispose the chart if client defined so
         */
        if (config.enableAutoDispose) {
            chart.dispose();
        }
    }
}