import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Row, Col, Checkbox } from 'antd'
import './Chart.scss'

const Chart = () => {

    // For Chart
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: '잼팩토리 2개월 평균 비교',
            style: {
                fontWeight: 'bold',
            }

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
            },
            labels: {
                formatter: function() {
                    return this.value + '%';
                },
                style: {
                    color: '#826af9'
                }
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
            style: {
                color: 'black',
                fontSize: '16px',
            },
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

    const optionsLineChart2 = {
        chart: {
            type: 'spline'
        },
        title: {
            text: '최근 3개월 경쟁사 분석',
            align: 'left',
            style: {
                fontWeight: 'bold',
                fontSize: '16px'
            }
        },
        credits: {
            enabled: false
        },  
        series: [
            {   
                data: [1, 5, 3],
                name: 'Product 1',
                color: '#FF21B4'
            },
            {
                data: [9, 2, 6],
                name: 'Product 2',
                color: '#5b4a99',
            },
            {
                data: [5, 5, 8],
                name: 'Product 3',
                color: '#ff9900'
            },
            {
                data: [3, 5, 7],
                name: 'Product 4',
                color: '#28cbff',
            },
            {
                data: [1, 0, 9],
                name: 'Product 5',
                color: '#9e00ff',
            }
        ],
        plotOptions: {
            series: {
                pointStart: 10,
                marker: {
                    enabled: false
                }
            }
        },
        xAxis: {
            allowDecimals: false,
            accessibility: {
                rangeDescription: 'Range: 10 to 12'
            },
            labels: {
                formatter: function() {
                    return this.value + '월';
                },
                style: {
                    color: '#aeaeb0'
                }
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                    return this.value + 'M';
                },
                style: {
                    color: '#aeaeb0'
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '16px',
            },
            crosshairs: {
                width: 1,
                color: 'purple'
            },
            shared: true,
            backgroundColor: '#fff',
            borderColor: 'none',
            borderRadius: 10,
            shadow: true,
            useHTML: true,           
            headerFormat: '<small>판매건수 비교 &nbsp; &nbsp; &nbsp; &nbsp;{point.key}</small><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}:&nbsp; &nbsp; &nbsp; </td>' +
                '<td style="text-align: right"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
        },
    }
    
    // For Checkbox
    const optionsCheckbox = [
        { label: '가격비교', value: '가격비교' },
        { label: '판매 수 비교', value: ' 수 비교' },
        { label: '리뷰 수 비교', value: '리뷰 수 비교' },
    ];
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <Row gutter={32} style={{ marginBottom: '1rem' }}>
                <Col span={3}>
                    <h1 style={{ fontWeight: 700, fontSize: '14px' }}>상품 비교</h1>
                </Col>
                <Col span={21}>
                    <Checkbox.Group options={optionsCheckbox} onChange={onChange} />
                </Col>
            </Row>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsLineChart2}
            />
        </div>
    )
}

export default Chart
