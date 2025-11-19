var option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['a','b','c','d','哈哈']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'a',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'b',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'c',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'d',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'哈哈',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
var node_echarts = require('../index');
var path = require('path');
var Canvas =require('canvas');
Canvas.registerFont(path.join(__dirname, "华文仿宋.ttf"), { family: "华文仿宋"});
node_echarts({
    canvas: Canvas,
    font: '12px 华文仿宋',
    path: __dirname + '/中文字体demo.png',
    option: option,
    width:  1000,
    height: 500
})
