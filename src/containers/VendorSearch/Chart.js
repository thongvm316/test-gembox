import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = () => {

    const options = {
        chart: {
            type: 'column'
        },  
        title: {
            text: '잼팩토리 2개월 평균 비교'
        },
        credits: {
            enabled: false
        },  
        xAxis: {
            categories: ['1', '2', '3', '4', '5']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        tooltip: {
            backgroundColor: '#fff',
            borderColor: 'none',
            borderRadius: 10,
            shadow: true,
            useHTML: true,
            headerFormat: '<small>판매 건수</small><table>',
            pointFormat: '<tr><td>{point.y}</td>' +
                '</tr>' + '<tr><td>{point.name}</td>' + '</tr>',
            footerFormat: '</table>',
        },
        series: [{
            name: 'Chart',
            data: [{
                name: 'Product 1',
                color: '#FF21B4',
                y: 50
            },
            {
                name: 'Product 2',
                color: '#5b4a99',
                y: 40
            },
            {
                name: 'Product 3',
                color: '#ff9900',
                y: 100
            },
            {
                name: 'Product 4',
                color: '#28cbff',
                y: 150
            },
            {
                name: 'Product 5',
                color: '#9e00ff',
                y: 80
            }]
        }]
    }

    const optionsChartTwo = {
        title: {
            text: '상품 비교'
        },
    
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    }

    return (
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsChartTwo}
            />
        </div>
    )
}

export default Chart
