import React, { useState } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'
import { API_URL } from '../../constants/appConstants'

import { DatePicker, Button, Row, Col, Select, Card, Spin } from 'antd'
import { MinusOutlined, LoadingOutlined } from '@ant-design/icons'
import Footer from '../../components/Footer'
import GroupButton from './GroupButton/GroupButton'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import * as hcnd from 'highcharts/modules/no-data-to-display'

import './AnalysisMarket.scss'
const { Option } = Select

hcnd(Highcharts)

const AnalysisMarket = (props) => {
  const [selectMarket, setSelectMarket] = useState('11번가')
  const [loading, setLoading] = useState(false)

  // Handle data
  const [data, setData] = useState([])

  const data1 = data.slice(0, 10)
  const data2 = data.slice(10, 20)

  const RenderData = (props) => {
    const data = props.data
    return (
      <>
        {data.map((product, i) => (
          <React.Fragment key={i}>
            <ul
              className="ul-list"
              style={{
                fontWeight: '400',
                fontSize: '16px',
                color: '#495057',
                display: 'flex',
                listStyle: 'none',
                justifyContent: 'space-between',
              }}
            >
              <li
                style={{ fontWeight: 700, fontSize: '16px', color: '#495057' }}
              >
                {product.category_tag}
              </li>
              <li
                style={{ fontWeight: 400, fontSize: '12px', color: '#74788D' }}
              >
                <NumberFormat
                  value={product.total}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₩'}
                />
              </li>
            </ul>
          </React.Fragment>
        ))}
      </>
    )
  }

  // DatePicker
  const [datePicker, setDatePicker] = useState([])

  const toTimestamp = (strDate) => {
    var datum = Date.parse(strDate)
    return datum / 1000
  }

  function onChange(date, dateString) {
    // console.log(date, dateString)
    let storeDay = [toTimestamp(dateString[0]), toTimestamp(dateString[1])]
    setDatePicker(storeDay)
  }

  /* Option of chart */
  const renameKeys = (obj, newKeys) => {
    const keyValues = Object.keys(obj).map((key) => {
      const newKey = newKeys[key] || key
      return { [newKey]: obj[key] }
    })
    return Object.assign({}, ...keyValues)
  }

  // Chart 1
  const colorsChart1 = data.map((color) => {
    let listColor = '#'.concat(
      Math.floor(Math.random() * 16777215).toString(16),
    )
    return listColor
  })

  const dataOfChartOne = data.map((data) => {
    const newKeys = { category_tag: 'name', total: 'y' }
    const renamedObj = renameKeys(data, newKeys)
    const parseToNum = parseInt(renamedObj.y)
    return { name: renamedObj.name, y: parseToNum }
  })

  const options = {
    chart: {
      height: 331,
      type: 'pie',
      renderTo: 'container',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        colors: colorsChart1,
      },
    },
    tooltip: {
      enabled: true,
      formatter: function () {
        return '<b>₩ ' + this.y + '</b>'
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '11번가 카테고리별 분석',
      align: 'left',
      style: {
        color: '#495057',
      },
    },
    series: [
      {
        name: 'Brands',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        data: dataOfChartOne,
      },
    ],
  }

  // Chart 2
  const getTextCategories = data.map((data) => {
    return data.category_tag
  })
  const categories = {
    categories: getTextCategories,
  }

  const dataOfTotalLineAndColumnChart = data.map((data) => {
    const newKeys = { category_tag: 'name', total: 'y' }
    const renamedObj = parseInt(renameKeys(data, newKeys).y)
    const color = '#'.concat(Math.floor(Math.random() * 16777215).toString(16))
    return { y: renamedObj, color }
  })

  const dataOfTotalSoldLineAndColumnChart = data.map((data) => {
    return parseInt(data.total_sold)
  })

  const optionsLineAndColumnChart = {
    title: '',
    chart: {
      zoomType: 'xy',
    },
    xAxis: [categories],
    yAxis: [
      {
        labels: false,
        title: false,
        gridLineColor: 'transparent',
      },
      {
        // Secondary yAxis
        title: false,
        labels: false,
        opposite: true,
        gridLineColor: 'transparent',
      },
    ],
    tooltip: {
      shared: true,
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
        'rgba(255,255,255,0.25)',
    },
    series: [
      {
        name: '',
        type: 'column',
        yAxis: 1,
        data: dataOfTotalLineAndColumnChart,
        tooltip: {
          valueSuffix: ' ₩',
        },
      },
      {
        name: '',
        type: 'spline',
        data: dataOfTotalSoldLineAndColumnChart,
        tooltip: {
          valueSuffix: '',
        },
        marker: {
          enabled: false,
        },
        color: '#34C38F',
      },
    ],
  }

  // Select Market
  function handleChangeSelectMarket(value) {
    setSelectMarket(value)
  }

  // Get Data
  const getData = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': `${localStorage.getItem('token-user')}`,
      },
    }

    try {
      setLoading(true)
      // const { data } = await axios.get(
      //   `${API_URL}/home/market?start=${datePicker[0]}&end=${datePicker[1]}&key=${selectMarket}`,
      //   config,
      // )
      const { data } = await axios.get(
        `${API_URL}/home/market?start=1234567890&end=2345678901&key=${selectMarket}`,
        config,
      )
      const {
        data: { result },
      } = data
      console.log(result)
      setData(result.total_sale)
      setLoading(false)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="analysis-market">
      <GroupButton redirect={props.history.push} clickable="c" />

      <Row
        gutter={16}
        className="aggregate-month card-border"
        justify="space-between"
        align="middle"
      >
        <Col xs={17} sm={20} md={21} lg={21} xl={21} className="date-picker">
          ``
          <Row gutter={[4, 4]}>
            <Col xs={24} sm={3} md={3} lg={2} xl={2}>
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
                  background: '#42abbc',
                  borderColor: '#42abbc',
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

        <Col xs={7} sm={4} md={3} lg={3} xl={3} style={{ textAlign: 'end' }}>
          <Select onChange={handleChangeSelectMarket} defaultValue="11번가">
            <Option value="11번가">11번가</Option>
            <Option value="G마켓">G마켓</Option>
            <Option value="쿠팡">쿠팡</Option>
            <Option value="인터파크">인터파크</Option>
            <Option value="옥션">옥션</Option>
            <Option value="스마트스토어">스마트스토어</Option>
            <Option value="티몬">티몬</Option>
          </Select>
        </Col>
      </Row>

      <Row
        gutter={16}
        className="chart-one card-border"
        style={{ marginTop: '24px' }}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            {...props}
          />
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={12} lg={10} xl={10}>
              <Card title="매출액" style={{ borderRadius: '16px' }}>
                <RenderData data={data1} />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={10} xl={10}>
              <Card title="매출액" style={{ borderRadius: '16px' }}>
                <RenderData data={data2} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: '40px' }} className="chart-two card-border">
        <Col span={24}>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsLineAndColumnChart}
            {...props}
          />
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default AnalysisMarket
