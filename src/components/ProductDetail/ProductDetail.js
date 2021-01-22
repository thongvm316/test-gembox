import React, { useState, useEffect } from 'react'
import './ProductDetail.scss'
import { Row, Col, Button, Space, Divider } from 'antd'
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import axios from 'axios'
import HighchartsReact from 'highcharts-react-official';
import Card2 from '../../images/Card_2.png';
import Card3 from '../../images/Card_3.png';
import { API_URL } from '../../constants/appConstants';


const ProductDetail = (props) => {
    console.log(props.location.state.product)

    const [product, setProduct] = useState(props.location.state.product)
    const [categoryRanking, setCategoryRanking] = useState()
    const [saleRanking, setSaleRanking] = useState()
    const [shareRanking, setShareKing] = useState()


    useEffect(() => {
        getCategoryRanking();
        getSaleRanking();
        getShareRanking();
    }, [])

    const getCategoryRanking = async () => {

        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'X-Auth-Token': localStorage.getItem('token-user')
            }
        }
        try {
            const res = await axios.get(`${API_URL}/product/detail/categoryrank?id=${product.id}`,
                config)

            if (res.status == 200) {
                setCategoryRanking(res.data.data.result.category_rank)
            }
        } catch (error) {
            console.log(error.response.data)

        }
    }

    const getSaleRanking = async () => {

        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'X-Auth-Token': localStorage.getItem('token-user')
            }
        }
        try {
            const res = await axios.get(`${API_URL}/product/detail/salerank?id=${product.id}`,
                config)

            if (res.status == 200) {
                setSaleRanking(res.data.data.result.total_rank)

            }
        } catch (error) {
            console.log(error.response.data)

        }
    }

    const getShareRanking = async () => {

        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'X-Auth-Token': localStorage.getItem('token-user')
            }
        }
        try {
            const res = await axios.get(`${API_URL}/product/detail/share?id=${product.id}`,
                config)

            if (res.status == 200) {
                setShareKing(res.data.data.result.share)

            }
        } catch (error) {
            console.log(error.response.data)

        }
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
        title: false,
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
                formatter: function () {
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
                formatter: function () {
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

    const optionsLineAndColumnChart = {
        title: '',
        chart: {
            zoomType: 'xy'
        },
        xAxis: false,
        yAxis: [{
            labels: false,
            title: false,
            gridLineColor: 'transparent',
        }, { // Secondary yAxis
            title: false,
            labels: false,
            opposite: true,
            gridLineColor: 'transparent',
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: '',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: '',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '°C'
            },
            marker: {
                enabled: false
            }
        }]
    }


    const goToStore = () => {
        var win = window.open(product.url, '_blank');
        win.focus();
    }


    return (
        <>
            <Row className="card-border main-header" style={{ padding: '60px', marginBottom: '120px' }}>
                <Col span={24}>
                    <div className="info">
                        <div className="avatar">

                        </div>
                        <div className="text">
                            <div>
                                <h4>{product.category_tag}</h4>
                                <h2>{product.name}</h2>
                                <Space size="large">
                                    <h4>{product.market_name}</h4>
                                    <h4>{product.bander_name}</h4>
                                </Space>
                                <br />
                                <Button onClick={goToStore} className="btn-light-orange">판매 사이트 가기</Button>

                            </div>
                            <div className="price">
                                <Space>
                                    <div>총판매액</div>
                                    <h2>₩{product.seller_price * product.sold}</h2>
                                </Space>
                                <Space>
                                    <div>가격</div>
                                    <h2>₩{product.seller_price}</h2>
                                </Space>
                                <Space>
                                    <div>리뷰</div>
                                    <h2>₩{product.review}</h2>
                                </Space>
                                <Space>
                                    <div>판매수</div>
                                    <h2>₩{product.sold}</h2>
                                </Space>
                            </div>
                        </div>
                    </div>
                </Col>
                <Divider />
                <div className="gust-header">
                    <div className="card-item-border card-item">
                        <div className="card-item-text">
                            <h2 style={{ color: '#2A4EAA' }}>유아 인형 카테고리 순위</h2>
                            <h2 style={{ color: '#6E798C' }}>{categoryRanking}위</h2>
                        </div>
                        <div className="card-item-icon">
                            <img src={Card2} />
                        </div>
                    </div>
                    <div className="card-item-border card-item">
                        <div className="card-item-text">
                            <h2 style={{ color: '#2A4EAA' }}>종합 판매순위</h2>
                            <h2 style={{ color: '#6E798C' }}>{saleRanking}위</h2>
                        </div>
                        <div className="card-item-icon">
                            <img src={Card3} />
                        </div>
                    </div>
                    <div className="card-item-border card-chart">
                        <div className="card-item-chart">
                            <PieChart highcharts={Highcharts} options={options} />
                        </div>
                    </div>
                </div>
            </Row>
            {/* <Row gutter={24} style={{ marginTop: '30px' }}>
                <Col span={18} offset={2}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <div style={{ height: '150px' }} className="card-border">
                                <h4>종합 판매순위</h4>
                                <h2 style={{ fontSize: '40px' }}>56위</h2>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ height: '150px' }} className="card-border">
                                <div>
                                    <h4>유아 인형</h4>
                                    <h4>카테고리 순위</h4>
                                </div>
                                <h2 style={{ fontSize: '40px' }}>24위</h2>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ height: '150px' }} className="card-border">
                                <PieChart highcharts={Highcharts} options={options} />
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row> */}
            <Row style={{ marginBottom: '20px' }} className="card-border">
                <Col span={24}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={optionsLineChart}
                        {...props}
                    />
                </Col>
            </Row>

            <Row gutter={16} className="card-border">
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={16} className="card-border">
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="card-item-border">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsLineAndColumnChart}
                            {...props}
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetail