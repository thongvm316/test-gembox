import React from 'react'
import './ProductDetail.scss'
import { Row, Col, Button, Space } from 'antd'
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

import HighchartsReact from 'highcharts-react-official';

const ProductDetail = (props) => {

    const optionsLineChart = {
        chart: {
            type: 'spline'
        },
        title: {
            text: '판매 추이 그래프',
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
                data: [1, 5, 3, 5, 4, 7, 5, 3, 6, 4, 9, 12],
                name: 'Product 1',
                color: '#FF21B4'
            }
        ],
        plotOptions: {
            series: {
                pointStart: 1,
                marker: {
                    enabled: false
                }
            }
        },
        xAxis: {
            allowDecimals: false,
            accessibility: {
                rangeDescription: 'Range: 1 to 12'
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
            enable: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
        },
    }

    // const optionsLineChart2 = {
    //     series: [
    //         {
    //             type: 'spline',
    //             data: [1, 5, 3, 6, 7, 9, 4]
    //         },
    //         {
    //             type: 'spline',
    //             data: [9, 2, 6, 3, 7, 8, 8]
    //         },
    //         {
    //             type: 'spline',
    //             data: [5, 5, 8, 7, 4, 8, 5]
    //         }
    //     ]
    // }

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
            headerFormat: '<strong>판매건수 비교 &nbsp; &nbsp; &nbsp; &nbsp;{point.key}</strong><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}:&nbsp; &nbsp; &nbsp; </td>' +
                '<td style="text-align: right"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
        },
    }

    const options = {
        chart: {
            height: 200,
            type: "pie",
            renderTo: 'container',
        },
        tooltip: {
            enabled: true,
            formatter: function () {
                return '<b>' + this.y + '%</b>';
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: '점유율',
            style: {
                fontWeight: 'bold',
            }
        },
        series: [
            {
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
                data: [
                    {
                        y: 100,
                        name: '유아 인형',
                        color: '#ff7b7b'

                    },
                    {
                        y: 50,
                        name: '카카오 라이언 봉제 인형',
                        color: '#b2ffe3'
                    }
                ]
            }
        ],
        legend: {
            align: 'left',
            verticalAlign: 'middle'
        },
    };

    return (
        <>
            <Row gutter={24} style={{marginBottom: '30px'}}>
                <Col span={24}>
                    <Button onClick={() => props.history.push('/product-search')}>목록으로 돌아가기</Button>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24}>
                    <div className="info">
                        <div className="avatar">

                        </div>
                        <div className="text">
                            <div>
                                <h4>유아 인형</h4>
                                <h2>카카오 라이언 봉재 인형</h2>
                                <Space size="large">
                                    <h4>11번가</h4>
                                    <h4>IMVELY</h4>
                                </Space>
                            </div>

                            <Button>판매 사이트 가기</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24} style={{ marginTop: '28px' }}>
                    <Space size={70}>
                        <div>
                            <Space>
                                <div>가격</div>
                                <div><b>₩ 15,000</b></div>
                            </Space>
                        </div>
                        <div>
                            배송비무료
                        </div>
                        <div>
                            <Space>
                                <div>리뷰</div>
                                <div><b>23,454</b></div>
                            </Space>
                        </div>
                        <div>
                            <Space>
                                <div>판매수</div>
                                <div><b>50,000</b></div>
                            </Space>
                        </div>
                    </Space>
                </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: '30px' }}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div className="card">
                        <h4>종합 판매순위</h4>
                        <h2 style={{ fontSize: '40px' }}>56위</h2>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div className="card">
                        <div>
                            <h4>유아 인형</h4>
                            <h4>카테고리 순위</h4>
                        </div>
                        <h2 style={{ fontSize: '40px' }}>24위</h2>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div className="card-chart">
                        <PieChart highcharts={Highcharts} options={options} />
                    </div>
                </Col>
            </Row>
            <Row gutter={24} style={{margin: '28px', border: '1px solid black'}}>
                <Col span={24}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={optionsLineChart2}
                        {...props}
                    />
                </Col>
            </Row>
            <Row gutter={24} style={{margin: '28px', border: '1px solid black'}}>
                <Col span={24}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={optionsLineChart}
                        {...props}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ProductDetail