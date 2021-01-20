import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Input, DatePicker, Space, Table, Spin, Image } from 'antd';
import { MinusOutlined, LoadingOutlined } from '@ant-design/icons';

import axios from 'axios';
import { API_URL } from '../../constants/appConstants'

import SaleStatus1 from '../../images/SaleStatus1.png'
import SaleStatus2 from '../../images/SaleStatus2.png'
import SaleStatus3 from '../../images/SaleStatus3.png'
import SaleStatus4 from '../../images/SaleStatus4.png'

import Market1 from "../../images/market1.png";
import Market2 from "../../images/market2.png";
import Market3 from "../../images/market3.png";
import Market4 from "../../images/market4.png";
import Market5 from "../../images/market5.png";
import Market6 from "../../images/market6.png";
import Market7 from "../../images/market7.png";
import Market8 from "../../images/market8.png";
import Spiner from '../../images/spiner.gif';
import Footer from '../../components/Footer';
import './SaleStatus.scss'


const SaleStatus = () => {

    // Table
    const columns = [
        {
            title: '상품명',
            dataIndex: 'name',
            render: (text) => <p style={{ fontWeight: '500' }}>{text}</p>,
        },
        {
            title: '카테고리',
            dataIndex: 'category_tag',
        },
        {
            title: '마켓명',
            dataIndex: 'market_name',
        },
        {
            title: '가격',
            dataIndex: 'seller_price',
            render: (text) => <p>￦ {text}</p>,
        },
        {
            title: '리뷰',
            dataIndex: 'review',
        },
        {
            title: '판매수',
            dataIndex: 'sold',
        },
    ];

    /* DatePicker */
    const [datePicker, setDatePicker] = useState([]);

    const toTimestamp = (strDate) => {
        var datum = Date.parse(strDate);
        return datum / 1000;
    }

    function onChange(date, dateString) {
        let storeDay = [toTimestamp(dateString[0]), toTimestamp(dateString[1])];
        setDatePicker(storeDay)
    }

    /* Get Data */
    // Note: Lazy load and add lastindex - Redux
    const [valueOfSearchInput, setValueOfSearchInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [data, setData] = useState({
        totalProductCount: [],
        totalReviewCount: [],
        saleCountRank: [],
        saleRank: [],
    })
    console.log(data);

    const getValueOfInputSearch = (e) => {
        setValueOfSearchInput(e.target.value);
    }

    const lastIndex = 0;

    const config = {
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'X-Auth-Token': `${localStorage.getItem('token-user')}`
        }
    };

    const getDataSearch = async () => {
        try {
            setLoading(true);
            // const { data } = await axios.get(`${API_URL}/myproduct/search?start=${datePicker[0]}&end=${datePicker[1]}&lastIndex=${lastIndex}&key=${valueOfSearchInput}`, config)
            const { data } = await axios.get(`${API_URL}/myproduct/search?start=1234567890&end=2134567890&lastIndex=${lastIndex}&key=${valueOfSearchInput}`, config);
            setDataSearch(data.data.result.product);
            setLoading(false);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(async () => {
        console.log('Waiting for data...');
        await Promise.all([
            axios.get(`${API_URL}/myproduct/productcount`, config).then((value) => {
                setData(prevState => ({ ...prevState, totalProductCount: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/myproduct/reviewinfo`, config).then((value) => {
                setData(prevState => ({ ...prevState, totalReviewCount: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/myproduct/saleinfo`, config).then((value) => {
                setData(prevState => ({ ...prevState, saleCountRank: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/myproduct/revenueinfo`, config).then((value) => {
                setData(prevState => ({ ...prevState, saleRank: value.data.data.result }))
            }).catch(error => console.log(error.response)),
        ])
    }, [])

    /*  For render market of user set */
    const markets = [
        { market: '11번가', img: Market1 },
        { market: 'G마켓', img: Market2 },
        { market: '쿠팡', img: Market3 },
        { market: '인터파크', img: Market4 },
        { market: '옥션', img: Market5 },
        { market: '스마트스토어', img: Market6 },
        { market: '티몬', img: Market7 },
        { market: '위메프', img: Market8 }
    ]

    return (
        <div className="sale-status">
            <Row justify="space-around">
                <Col sm={24} md={11} lg={11} xl={5} className="card-item-border card-item">
                    <div className="card-item-text">
                        <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>총 상품 수</h2>
                        <h2 style={{ color: '#6E798C', fontSize: '36px', fontWeight: '700' }}>{data.totalProductCount}개</h2>
                    </div>
                    <div className="card-item-icon">
                        <img src={SaleStatus1} />
                    </div>
                </Col>
                <Col sm={24} md={11} lg={11} xl={5} className="card-item-border card-item">
                    <div className="card-item-text">
                        <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>총 리뷰</h2>
                        <h2 style={{ color: '#6E798C', fontSize: '36px', fontWeight: '700', marginBottom: '0' }}>{data.totalReviewCount.review_rank}위</h2>
                        <p style={{ fontSize: '16px', fontWeight: '500', color: '#495057' }}>{data.totalReviewCount.total_review}건</p>
                    </div>
                    <div className="card-item-icon">
                        <img src={SaleStatus2} />
                    </div>
                </Col>
                <Col sm={24} md={11} lg={11} xl={5} className="card-item-border card-item">
                    <div className="card-item-text">
                        <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>종합 판매순위</h2>
                        <h2 style={{ color: '#6E798C', fontSize: '36px', fontWeight: '700' }}>{data.saleCountRank.sale_rank}위</h2>
                    </div>
                    <div className="card-item-icon">
                        <img src={SaleStatus3} />
                    </div>
                </Col>
                <Col sm={24} md={11} lg={11} xl={5} className="card-item-border card-item">
                    <div className="card-item-text">
                        <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>종합 매출순위</h2>
                        <h2 style={{ color: '#6E798C', fontSize: '36px', fontWeight: '700', marginBottom: '0' }}>{data.saleRank.revenue_rank}위</h2>
                        <p style={{ fontSize: '16px', fontWeight: '500', color: '#495057' }}>₩ {data.saleRank.revenue}</p>
                    </div>
                    <div className="card-item-icon">
                        <img src={SaleStatus4} />
                    </div>
                </Col>
            </Row>

            <Row className='bar-style'>
                <Col sm={24} md={24} lg={24} xl={24} className="card-border info-search">
                    <Space className="space-small" style={{ marginRight: '2rem' }}>
                        <DatePicker.RangePicker bordered={false} separator={<MinusOutlined />} onChange={onChange} />
                        <Button style={{ backgroundColor: '#71c4d5', border: 'none' }} onClick={getDataSearch} type="primary">
                            {loading ? (
                                <Spin indicator={<LoadingOutlined style={{ color: "#fff" }} />} />
                            ) : (
                                    ""
                                )}<span style={loading ? { marginLeft: "5px" } : {}}>적용하기</span>
                        </Button>
                    </Space>
                    <Space>
                        <Input style={{ borderRadius: '6px' }} onChange={getValueOfInputSearch} placeholder="Search" />
                        <Button style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">EXCEL</Button>
                    </Space>
                </Col>
            </Row>

            <Row gutter={24} className='market-of-user'>
                {
                    markets.map((market, i) => (
                        <Col
                            key={i}
                            xs={12}
                            sm={6}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                            className="total-sale"
                        >
                            <div>
                                <img src={market.img} />
                                <span style={{ marginLeft: '.5rem' }}>{market.market}</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "1rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                            </p>
                        </Col>
                    ))
                }
            </Row>

            <Row>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={dataSearch}
                        pagination={false}
                        scroll={{ x: 1300 }}
                        rowKey={obj => obj.id}
                    />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default SaleStatus
