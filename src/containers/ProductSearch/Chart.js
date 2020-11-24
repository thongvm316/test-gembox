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
        xAxis: {
            categories: ['1', '2', '3', '4', '5']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                lineWidth: 1,
                marker: {
                    enable: false
                }
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
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
        
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                    return this.value + 'M';
                }
            }
        },
    
        xAxis: {
            categories: ['10월', '11월', '12월'],
        },

        tooltip: {
            crosshairs: {
                width: 1,
                color: 'purple'
            },
            shared: true,
            backgroundColor: '#fff',
            borderColor: 'none',
            borderRadius: 10,
            shadow: true,
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        series: [{
            name: 'Manufacturing',
            data: [30, 70, 90],
            color: 'pink',
           
        }, {
            name: 'Sales',
            data: [10, 40, 150],
            color: 'purple',
           
        },{
            name: 'Manufacturing',
            data: [0, 55, 120],
            color: 'yellow',
            
        }, {
            name: 'Sales',
            data: [20, 46, 100],
            color: 'cyan',
            
        }, {
            name: 'Sales',
            data: [3, 86, 140],
            color: '#9e00ff',
            
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
