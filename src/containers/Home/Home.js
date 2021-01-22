import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import moment from 'moment'
import axios from 'axios'

import { DatePicker, Button, Row, Col, Card, Divider, Spin } from 'antd'

import Footer from '../../components/Footer'
import GroupButton from './GroupButton/GroupButton'
import { API_URL } from '../../constants/appConstants'
import './home.scss'

const Home = (props) => {
  // Spin
  const [loading, setLoading] = useState(false)

  // const fakeData = [
  //   {
  //     bander_name: '좋은책어린이',
  //     market_name: '인터파크',
  //     revenue: '441112734765',
  //   },
  //   {
  //     bander_name: '이영준',
  //     market_name: '인터파크',
  //     revenue: '422381749142',
  //   },
  //   {
  //     bander_name: '송진우',
  //     market_name: '인터파크',
  //     revenue: '267923800272',
  //   },
  //   {
  //     bander_name: '이영림',
  //     market_name: '인터파크',
  //     revenue: '196965738600',
  //   },
  //   {
  //     bander_name: '삼성출판사',
  //     market_name: '인터파크',
  //     revenue: '78402303080',
  //   },
  //   {
  //     bander_name: 'coupang',
  //     market_name: '쿠팡',
  //     revenue: '36163983230',
  //   },
  //   {
  //     bander_name: '최우수판매자',
  //     market_name: '옥션',
  //     revenue: '33559781230',
  //   },
  //   {
  //     bander_name: '브랜드 카탈로그',
  //     market_name: '스마트스토어',
  //     revenue: '28405122440',
  //   },
  //   {
  //     bander_name: '★젤리스푼★',
  //     market_name: 'G마켓',
  //     revenue: '26969310410',
  //   },
  //   {
  //     bander_name: '(주)오보소',
  //     market_name: 'G마켓',
  //     revenue: '23587712620',
  //   },
  //   {
  //     bander_name: '이소을',
  //     market_name: '인터파크',
  //     revenue: '17998160850',
  //   },
  //   {
  //     bander_name: '매일분유',
  //     market_name: 'G마켓',
  //     revenue: '17092919880',
  //   },
  //   {
  //     bander_name: '시공주니어',
  //     market_name: '인터파크',
  //     revenue: '16795426460',
  //   },
  //   {
  //     bander_name: '한독몰',
  //     market_name: '스마트스토어',
  //     revenue: '16436992000',
  //   },
  //   {
  //     bander_name: '매일유업공식판매업체',
  //     market_name: 'G마켓',
  //     revenue: '16163833020',
  //   },
  //   {
  //     bander_name: '깨끗한나라_공식SHOP',
  //     market_name: 'G마켓',
  //     revenue: '14943221410',
  //   },
  //   {
  //     bander_name: '베이비하우스365',
  //     market_name: '옥션',
  //     revenue: '13999957680',
  //   },
  //   {
  //     bander_name: '분유나라_',
  //     market_name: 'G마켓',
  //     revenue: '13050088870',
  //   },
  //   {
  //     bander_name: 'CoCo BeBe',
  //     market_name: 'G마켓',
  //     revenue: '12970623930',
  //   },
  //   {
  //     bander_name: '매일분유번동유통',
  //     market_name: '옥션',
  //     revenue: '11846032830',
  //   },
  // ]

  // Handle Data
  const [dataTopBander, setDataTopBander] = useState([])
  const [dataTopProduct, setDataTopProduct] = useState([])

  const id1 = [1, 11]
  const dataTopBander1 = dataTopBander.slice(0, 10).map((db) => {
    db.id = id1[0]++
    return db
  })

  const dataTopBander2 = dataTopBander.slice(10, 20).map((db) => {
    db.id = id1[1]++
    return db
  })

  const id2 = [1, 11]
  const dataTopProduct1 = dataTopProduct.slice(0, 10).map((db) => {
    db.id = id2[0]++
    return db
  })

  const dataTopProduct2 = dataTopProduct.slice(10, 20).map((db) => {
    db.id = id2[1]++
    return db
  })

  const RenderData = (props) => {
    const data = props.data
    return (
      <>
        {data.map((db, i) => (
          <React.Fragment key={i}>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <li
                style={{
                  flexBasis: '10%',
                  fontWeight: '700',
                  fontSize: '20px',
                  color: '#495057',
                }}
              >
                {db.id}
              </li>

              <li style={{ flexBasis: '60%' }}>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <li
                    style={{
                      fontWeight: '400',
                      fontSize: '12px',
                      color: '#74788D',
                    }}
                  >
                    {db.market_name}
                  </li>
                  <li
                    style={{
                      fontWeight: '700',
                      fontSize: '14px',
                      color: '#495057',
                    }}
                  >
                    {db.bander_name ? db.bander_name : db.name}
                  </li>
                </ul>
              </li>

              <li
                style={{
                  flexBasis: '30%',
                  textAlign: 'end',
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#495057',
                }}
              >
                {db.revenue ? (
                  <NumberFormat
                    value={db.revenue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₩'}
                  />
                ) : (
                  db.sold
                )}
              </li>
            </ul>
            <Divider className="edit-margin" />
          </React.Fragment>
        ))}
      </>
    )
  }

  // Date Picker
  const [day, setDay] = useState([])
  const date = new Date()
  const currentMonth = moment.utc(date).format('YYYY-MM')

  const toTimestamp = (strDate) => {
    var datum = Date.parse(strDate)
    return datum / 1000
  }

  function onChange(date, dateString) {
    const startDay = dateString.concat('-01')
    const allDayInMonth = moment(dateString, 'YYYY-MM').daysInMonth()
    const endDay = dateString.concat(`-${allDayInMonth}`)

    const startAndEndDay = []
    startAndEndDay.unshift(toTimestamp(endDay))
    startAndEndDay.unshift(toTimestamp(startDay))
    setDay(startAndEndDay)
  }

  /* Get Data */
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${localStorage.getItem('token-user')}`,
    },
  }

  const getData = async () => {
    setLoading(true)

    await Promise.all([
      axios
        .get(
          `${API_URL}/home/revenue/toprevenue?start=1234567890&end=2345678901`,
          config,
        )
        // .get(
        //   `${API_URL}/home/revenue/toprevenue?start=${day[0]}&end=${day[1]}`,
        //   config,
        // )
        .then((value) => {
          console.log(value)
          setDataTopBander(value.data.data.result)
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(
          `${API_URL}/home/revenue/topsellitem?start=1234567890&end=2345678901`,
          config,
        )
        // .get(
        //   `${API_URL}/home/revenue/topsellitem?start=${day[0]}&end=${day[1]}`,
        //   config,
        // )
        .then((value) => {
          console.log(value)
          setDataTopProduct(value.data.data.result)
        })
        .catch((error) => console.log(error.response)),
    ])
    setLoading(false)
  }

  // Get data of current month
  // useEffect(async () => {
  //   setLoading(true)
  //   let startOfMonth = moment().clone().startOf('month').format('YYYY-MM-DD')
  //   let endOfMonth = moment().clone().endOf('month').format('YYYY-MM-DD')
  //   let allDateOfCurrentMonth = [
  //     toTimestamp(startOfMonth),
  //     toTimestamp(endOfMonth),
  //   ]

  //   try {
  //     const { data } = await axios.get(
  //       `${API_URL}/home/revenue?start=123456789&end=2134567890`,
  //       config,
  //     )
  // const { data } = await axios.get(`${API_URL}/home/revenue?start=${allDateOfCurrentMonth[0]}&end=${allDateOfCurrentMonth[1]}`, config);
  //     console.log(data)
  //     setDataTopBander(data.data.result.top_20_revenue)
  //     setDataTopProduct(data.data.result.top_20_selling)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  // }, [])

  return (
    <div className="home-page">
      <GroupButton redirect={props.history.push} clickable="a" />

      <Row className="aggregate-month card-border">
        <h1
          style={{
            marginRight: '41px',
            paddingTop: '5px',
            color: '#495057',
            fontWeight: '700px',
            fontSize: '16px',
          }}
        >
          집계 월
        </h1>
        <Col xl={20} className="date-picker">
          <DatePicker
            defaultValue={moment(currentMonth, 'YYYY-MM')}
            onChange={onChange}
            bordered={false}
            picker="month"
          />
          <Button
            style={{
              background: '#42abbc',
              borderColor: '#42abbc',
              fontWeight: 'bold',
            }}
            type="primary"
            onClick={getData}
          >
            적용하기
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Spin size="large" />
      ) : (
        <Row className="site-card-wrapper" gutter={32}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="style-small-device"
          >
            <Card title="TOP 20 매출 벤더">
              <Row gutter={32}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopBander1} />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopBander2} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="style-small-device"
          >
            <Card title="TOP 20 판매 상품">
              <Row gutter={32}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopProduct1} />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopProduct2} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
      <Footer marginTop={'80vh'} />
    </div>
  )
}

export default Home
