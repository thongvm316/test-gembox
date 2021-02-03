import React, { useState, useEffect } from 'react'
import moment from 'moment'
import homeApi from '../../api/HomeAPI'
import NumberFormat from 'react-number-format'

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
  const [loadingUseEfect, setLoadingUseEfect] = useState(false)

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
  const titleOfChartOne = `${selectMarket} 카테고리별 분석`
  const colorsChart1 = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
  ]

  const dataOfChartOne = data.map((data) => {
    const newKeys = { category_tag: 'name', total: 'y' }
    const renamedObj = renameKeys(data, newKeys)
    const parseToNum = parseInt(renamedObj.y)
    return { name: renamedObj.name, y: parseToNum }
  })

  const options = {
    chart: {
      height: 600,
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
      shared: true,
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat:
        '<tr><td</td>' +
        '<td style="text-align: right"><b>₩{point.y}</b></td></tr>',
      footerFormat: '</table>',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: titleOfChartOne,
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
          valuePrefix: '₩',
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
    const params = {
      start: datePicker[0] ? datePicker[0] : allDateOfCurrentMonth[0],
      end: datePicker[1] ? datePicker[1] : allDateOfCurrentMonth[1],
      key: selectMarket,
    }
    try {
      setLoading(true)
      const value = await homeApi.getAnalysisMarket(params)
      console.log(value)
      if (value && value.data.result && value.data.result.total_sale) {
        setData(value.data.result.total_sale)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  /* Current month and get data */
  const startOfMonth = moment().clone().startOf('month').format('YYYY-MM-DD')
  const endOfMonth = moment().clone().endOf('month').format('YYYY-MM-DD')
  let allDateOfCurrentMonth = [
    toTimestamp(startOfMonth),
    toTimestamp(endOfMonth),
  ]
  useEffect(async () => {
    setLoadingUseEfect(true)
    const params = {
      start: allDateOfCurrentMonth[0],
      end: allDateOfCurrentMonth[1],
      key: selectMarket,
    }
    try {
      const value = await homeApi.getAnalysisMarket(params)
      if (value && value.data.result && value.data.result.total_sale) {
        setData(value.data.result.total_sale)
        setLoadingUseEfect(false)
      }
    } catch (error) {
      console.log(error.response)
      setLoadingUseEfect(false)
    }
  }, [])

  return (
    <div className="analysis-market">
      <GroupButton redirect={props.history.push} clickable="c" />

      <Row
        gutter={16}
        className="aggregate-month card-border"
        justify="space-between"
        align="middle"
      >
        <Col xs={14} sm={20} md={20} lg={21} xl={22} className="date-picker">
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
            <Col xs={24} sm={10} md={10} lg={10} xl={4}>
              <DatePicker.RangePicker
                defaultValue={[moment(startOfMonth), moment(endOfMonth)]}
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
                disabled={loading}
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

        <Col xs={10} sm={4} md={4} lg={3} xl={2} style={{ textAlign: 'end' }}>
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

      {loadingUseEfect ? (
        <Spin className="spin-usefect" size="large" />
      ) : (
        <>
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
        </>
      )}

      <Footer />
    </div>
  )
}

export default AnalysisMarket
