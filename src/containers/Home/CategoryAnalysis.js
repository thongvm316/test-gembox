import React, { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/appConstants'

import GroupButton from './GroupButton/GroupButton'
import Footer from '../../components/Footer'
import { DatePicker, Button, Row, Col, Card, Spin, Dropdown, Menu } from 'antd'
import { MinusOutlined, LoadingOutlined } from '@ant-design/icons'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

import Market1 from '../../images/market1.png'
import Market2 from '../../images/market2.png'
import Market3 from '../../images/market3.png'
import Market4 from '../../images/market4.png'
import Market5 from '../../images/market5.png'
import Market6 from '../../images/market6.png'
import Market7 from '../../images/market7.png'
import Market8 from '../../images/market8.png'

import './CategoryAnalysis.scss'
import CategoryList from '../CategoryList/CategoryList'

const CategoryAnalysis = (props) => {
  const [loading, setLoading] = useState(false)
  const [totalSale, setTotalSale] = useState([])
  const [topProduct, setTopProduct] = useState({
    topcoupang: [],
    topauction: [],
    topsmartstore: [],
    topwemake: [],
    toptmon: [],
    topinterpark: [],
    top11str: [],
    topgmarket: [],
  })

  /* Render Data */
  let id = [1, 1, 1, 1, 1, 1, 1, 1]
  const topcoupang = topProduct.topcoupang.map((value) => {
    value.id = id[0]++
    return value
  })

  const topauction = topProduct.topauction.map((value) => {
    value.id = id[1]++
    return value
  })

  const topsmartstore = topProduct.topsmartstore.map((value) => {
    value.id = id[2]++
    return value
  })

  const topwemake = topProduct.topwemake.map((value) => {
    value.id = id[3]++
    return value
  })

  const toptmon = topProduct.toptmon.map((value) => {
    value.id = id[4]++
    return value
  })

  const topinterpark = topProduct.topinterpark.map((value) => {
    value.id = id[5]++
    return value
  })

  const top11str = topProduct.top11str.map((value) => {
    value.id = id[6]++
    return value
  })

  const topgmarket = topProduct.topgmarket.map((value) => {
    value.id = id[7]++
    return value
  })

  const RenderData = (props) => {
    const data = props.data
    return (
      <>
        {data.map((product, i) => (
          <React.Fragment key={i}>
            <ul
              className="ul-list"
              style={{ fontWeight: '400', fontSize: '16px', color: '#495057' }}
            >
              <ul
                className="list-in"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <li style={{ marginRight: '24px', fontWeight: 'bold' }}>
                  {product.id}
                </li>
                <li>{product.name}</li>
              </ul>
              <li>₩ {product.seller_price}</li>
            </ul>
          </React.Fragment>
        ))}
      </>
    )
  }

  /* Chart */
  const fakeDataChart = [
    {
      name: '11번가',
      y: 20,
    },
    {
      name: 'G마켓',
      y: 30,
    },
    {
      name: '쿠팡',
      y: 40,
    },
    {
      name: '인터파크',
      y: 60,
    },
    {
      name: '옥션',
      y: 120,
    },
    {
      name: '스마트스토어',
      y: 150,
    },
    {
      name: '티몬',
      y: 180,
    },
    {
      name: '위메프',
      y: 200,
    },
  ]

  const renameKeys = (obj, newKeys) => {
    const keyValues = Object.keys(obj).map((key) => {
      const newKey = newKeys[key] || key
      return { [newKey]: obj[key] }
    })
    return Object.assign({}, ...keyValues)
  }

  const dataChartRename = totalSale.map((data) => {
    const newKeys = { market_name: 'name', total: 'y' }
    const renamedObj = renameKeys(data, newKeys)
    const convetToNumber = parseInt(renamedObj.y)
    return { ...renamedObj, y: convetToNumber }
  })

  const conditionalRendering = () => {
    if (totalSale.length === 0) {
      return fakeDataChart
    } else {
      return dataChartRename
    }
  }

  const dataRenderChart = conditionalRendering()

  const options = {
    chart: {
      height: 300,
      type: 'pie',
      renderTo: 'container',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        colors: [
          '#ffc26f',
          '#d185d8',
          '#8784d7',
          '#fe7c69',
          '#caeefb',
          '#9bdbaf',
          '#fff1b6',
          '#febeb3',
        ],
      },
    },
    tooltip: {
      enabled: true,
      formatter: function () {
        return '<b>' + this.y + '</b>'
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '2020년 완구 총 점유율 분석',
      align: 'left',
      style: {
        color: '#495057',
      },
    },
    series: [
      {
        name: 'Brands',
        // colorByPoint: true,
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        data: dataRenderChart,
      },
    ],
  }

  const titileCard = (props) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#495057' }}>
        완구TOP10
      </h3>
      <h3 style={{ fontWeight: '700', fontSize: '24px', color: '#495057' }}>
        {props}
      </h3>
    </div>
  )

  /* DatePicker */
  const [datePicker, setDatePicker] = useState([])

  const toTimestamp = (strDate) => {
    var datum = Date.parse(strDate)
    return datum / 1000
  }

  function onChange(date, dateString) {
    // console.log(date, dateString);
    let storeDay = [toTimestamp(dateString[0]), toTimestamp(dateString[1])]
    setDatePicker(storeDay)
    console.log(storeDay)
  }

  /* For render total sale component */
  const markets = [
    { market: '11번가', img: Market1 },
    { market: 'G마켓', img: Market2 },
    { market: '쿠팡', img: Market3 },
    { market: '인터파크', img: Market4 },
    { market: '옥션', img: Market5 },
    { market: '스마트스토어', img: Market6 },
    { market: '티몬', img: Market7 },
    { market: '위메프', img: Market8 },
  ]

  /* Select category */
  const [category, setCategory] = useState('완구')

  /* Get data */
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  const getData = async () => {
    setLoading(true)
    console.log('Waiting for data.....')
    console.log(
      `${API_URL}/home/category/totalsales?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
    )
    await Promise.all([
      axios
        .get(
          `${API_URL}/home/category/totalsales?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTotalSale(value.data.data.result)
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/topcoupang?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            topcoupang: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/topauction?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            topauction: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/topsmartstore?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            topsmartstore: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/topwemake?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            topwemake: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/toptmon?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            toptmon: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/topinterpark?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            topinterpark: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/top11str?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            top11str: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/category/topgmarket?start=${datePicker[0]}&end=${datePicker[1]}&key=${category}`,
          config,
        )
        .then((value) => {
          setTopProduct((prevState) => ({
            ...prevState,
            topgmarket: value.data.data.result,
          }))
        })
        .catch((error) => console.log(error.response)),
    ])
    setLoading(false)
  }

  const onChangeCategory = (value) => {
    setCategory(value)
  }

  return (
    <div className="category-analysis">
      <GroupButton redirect={props.history.push} clickable="b" />

      <Row
        gutter={16}
        className="aggregate-month card-border"
        justify="space-between"
        align="middle"
      >
        <Col xs={17} sm={20} md={21} lg={21} xl={21} className="date-picker">
          <Row gutter={[4, 4]}>
            <Col xs={24} sm={3} md={3} lg={2} xl={1}>
              <h1
                style={{
                  paddingTop: '3px',
                  color: '#495057',
                  fontWeight: '700px',
                  fontSize: '16px',
                }}
              >
                집계 월
              </h1>
            </Col>
            <Col xs={24} sm={10} md={10} lg={10} xl={6}>
              <DatePicker.RangePicker
                onChange={onChange}
                separator={<MinusOutlined />}
              />
            </Col>
            <Col xs={24} sm={2} md={2} lg={2} xl={2}>
              <Button
                style={{
                  background: '#71c4d5',
                  borderColor: '#71c4d5',
                  fontWeight: 'bold',
                }}
                type="primary"
                onClick={getData}
              >
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined style={{ color: '#fff' }} />}
                  />
                ) : (
                  ''
                )}
                <span style={loading ? { marginLeft: '5px' } : {}}>
                  적용하기
                </span>
              </Button>
            </Col>
          </Row>
        </Col>

        <Col
          xs={7}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          style={{ textAlign: 'end' }}
          className="select-category-analysis"
        >
          <CategoryList
            category={category}
            onChangeCategory={(value) => onChangeCategory(value)}
          />
        </Col>
      </Row>

      <Row
        gutter={24}
        className="chart card-border"
        style={{ marginTop: '24px', marginBottom: '24px' }}
      >
        <Col span={24}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            {...props}
          />
        </Col>

        <Col span={24} style={{ marginTop: '150px' }}>
          <h1
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#495057',
            }}
          >
            총 매출액
          </h1>
          <Row>
            {markets.map((market, i) => (
              <Col
                key={i}
                xs={12}
                sm={12}
                md={6}
                lg={3}
                xl={3}
                style={{ textAlign: 'center' }}
                className="total-sale"
              >
                <div className="style-border">
                  <img src={market.img} />
                  <span className="style-market">{market.market}</span>
                </div>
                <p
                  style={{
                    paddingTop: '1rem',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#495057',
                  }}
                >
                  {totalSale.map((total) => {
                    if (total.market_name === market.market) {
                      return total.total
                    }
                  })}
                </p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('11번가')} bordered={false}>
                <RenderData data={topcoupang} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('G마켓')} bordered={false}>
                <RenderData data={topauction} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('쿠팡')} bordered={false}>
                <RenderData data={topsmartstore} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('인터파크')} bordered={false}>
                <RenderData data={topwemake} />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: '1rem' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('옥션')} bordered={false}>
                <RenderData data={toptmon} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('스마트스토어')} bordered={false}>
                <RenderData data={topinterpark} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('티몬')} bordered={false}>
                <RenderData data={top11str} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('위메프')} bordered={false}>
                <RenderData data={topgmarket} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default CategoryAnalysis
