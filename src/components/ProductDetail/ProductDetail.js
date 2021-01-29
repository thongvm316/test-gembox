import React, { useState, useEffect } from 'react'
import './ProductDetail.scss'
import { Row, Col, Button, Space, Divider, Spin } from 'antd'
import Highcharts from 'highcharts/highstock'
import PieChart from 'highcharts-react-official'
import axios from 'axios'
import HighchartsReact from 'highcharts-react-official'
import Card2 from '../../images/Card_2.png'
import Card3 from '../../images/Card_3.png'
import { API_URL } from '../../constants/appConstants';
import { market_list } from '../../constants/appConstants';
import NumberFormat from 'react-number-format'

import * as _ from 'lodash';
import moment from 'moment'
import MarketSaleStatusChart from '../MarketSaleStatusChart/MarketSaleStatusChart'

const ProductDetail = (props) => {
  console.log(props)
  const [product, setProduct] = useState(props.location.state.product)
  const [categoryRanking, setCategoryRanking] = useState()
  const [saleRanking, setSaleRanking] = useState()
  const [shareRanking, setShareKing] = useState()

  const [productTrendGraph, setProductTrendGraph] = useState([])

  const [spinning, setSpinning] = useState(false)
  const [spinningOfShare, setSpinningOfShare] = useState(false)


  const [productDetailShare, setProductDetailShare] = useState()


  useEffect(() => {
    getCategoryRanking()
    getSaleRanking()
    getShareRanking()
    getProductTrendGraph()
    getProductDetailShare()
  }, [])

  const getProductDetailShare = async () => {
    setSpinningOfShare(true)
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }

    try {
      const res = await axios.get(
        `${API_URL}/product/detail/share?id=${product.id}`,
        config,
      )
      if (res.status == 200) {
        setProductDetailShare(res.data.data.result.share)
      }
    } catch (error) {
      if (error.response.data.data.code == 40101) {
        props.history.push('/')
      }
    }
    setSpinningOfShare(false)

  }

  const getProductTrendGraph = async () => {
    setSpinning(true)
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }

    try {
      const res = await axios.get(
        `${API_URL}/product/detail/saletrend?id=${product.id}`,
        config,
      )

      console.log(res)
      if (res.status == 200) {
        setProductTrendGraph(res.data.data.result)
      }
    } catch (error) {
      if (error.response.data.data.code == 40101) {
        props.history.push('/')
      }
    }
    setSpinning(false)

  }

  const getCategoryRanking = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }
    try {
      const res = await axios.get(
        `${API_URL}/product/detail/categoryrank?id=${product.id}`,
        config,
      )

      if (res.status == 200) {
        setCategoryRanking(res.data.data.result.category_rank)
      }
    } catch (error) {
      if (error.response.data.data.code == 40101) {
        props.history.push('/')
      }
    }
  }

  const getSaleRanking = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }
    try {
      const res = await axios.get(
        `${API_URL}/product/detail/salerank?id=${product.id}`,
        config,
      )

      if (res.status == 200) {
        setSaleRanking(res.data.data.result.total_rank)
      }
    } catch (error) {
      if (error.response.data.data.code == 40101) {
        props.history.push('/')
      }
    }
  }

  const getShareRanking = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }
    try {
      const res = await axios.get(
        `${API_URL}/product/detail/share?id=${product.id}`,
        config,
      )

      if (res.status == 200) {
        setShareKing(res.data.data.result.share)
      }
    } catch (error) {
      if (error.response.data.data.code == 40101) {
        props.history.push('/')
      }
    }
  }

  const options = {
    chart: {
      height: 200,
      type: 'pie',
      renderTo: 'container',
    },
    credits: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      formatter: function () {
        return '<b>' + this.y + '%</b>'
      },
    },
    credits: {
      enabled: false,
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
            color: '#ff7b7b',
          },
          {
            y: parseFloat(productDetailShare),
            name: product.name,
            color: '#b2ffe3',
          },
        ],
      },
    ],
    legend: {
      align: 'left',
      verticalAlign: 'middle',
      floating: false,
      itemWidth: 80,
      floating: false,
      layout: 'vertical'
    },
  }

  const optionsLineChart = {
    chart: {
      type: 'spline',
    },
    credits: {
      enabled: false
    },
    title: {
      text: '판매 추이 그래프',
      align: 'left',
      style: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        data: productTrendGraph.map(product => { return parseInt(product.revenue) }),
        name: 'Product',
        color: '#FF21B4',

      },
    ],
    xAxis: {
      categories: productTrendGraph.map(product => { return product.created }),
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        formatter: function () {
          return this.value
        },
        style: {
          color: '#aeaeb0',
        },
      },
    },
    tooltip: {
      enable: true,
    },
    legend: false,
  }

  const goToStore = () => {
    var win = window.open(product.url, '_blank')
    win.focus()
  }

  return (
    <>
      <Row
        className="card-border main-header"
        style={{ padding: '60px', marginBottom: '120px' }}
      >
        <Col span={24}>
          <div className="info">
            <div className="avatar">
              <img src={product.image} style={{ width: '100%' }} />
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
                <Button onClick={goToStore} className="btn-light-orange">
                  판매 사이트 가기
                </Button>
              </div>
              <div className="price">
                <Space>
                  <div>총판매액</div>
                  <h2>
                    <NumberFormat
                      value={product.seller_price * product.sold}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₩'}
                    />
                  </h2>
                </Space>
                <Space>
                  <div>가격</div>
                  <h2>
                    <NumberFormat
                      value={product.seller_price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₩'}
                    />
                  </h2>
                </Space>
                <Space>
                  <div>리뷰</div>
                  <h2>
                    <NumberFormat
                      value={product.review}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₩'}
                    />
                  </h2>
                </Space>
                <Space>
                  <div>판매수</div>
                  <h2>
                    <NumberFormat
                      value={product.sold}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₩'}
                    />
                  </h2>
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
              <Spin tip="Loading..." spinning={spinningOfShare}>
                <PieChart highcharts={Highcharts} options={options} />
              </Spin>
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
          <Spin tip="Loading..." spinning={spinning}>
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsLineChart}
              {...props}
            />
          </Spin>
        </Col>
      </Row>

      <Row gutter={16} className="card-border">
        {
          market_list.map(market => {
            return (
              <Col span={6} style={{ marginBottom: '10px' }}>
                <div className="card-item-border">
                  <MarketSaleStatusChart market={market} productId={product.id} />
                </div>
              </Col>
            )
          })
        }

      </Row>
    </>
  )
}

export default ProductDetail
