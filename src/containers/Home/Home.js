import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import moment from 'moment'
import homeApi from '../../api/HomeAPI'

import {
  DatePicker,
  Button,
  Row,
  Col,
  Card,
  Divider,
  Spin,
  Popover,
} from 'antd'

import Footer from '../../components/Footer'
import GroupButton from './GroupButton/GroupButton'
import './home.scss'

const Home = (props) => {
  var _0xa935=["\x69\x64","\x6D\x61\x70","\x73\x6C\x69\x63\x65"];const [loading,setLoading]=useState(false);const [dataTopBander,setDataTopBander]=useState([]);const [dataTopProduct,setDataTopProduct]=useState([]);const id1=[1,11];const dataTopBander1=dataTopBander[_0xa935[2]](0,10)[_0xa935[1]]((_0x41a8x3)=>{_0x41a8x3[_0xa935[0]]= id1[0]++;return _0x41a8x3});const dataTopBander2=dataTopBander[_0xa935[2]](10,20)[_0xa935[1]]((_0x41a8x3)=>{_0x41a8x3[_0xa935[0]]= id1[1]++;return _0x41a8x3});const id2=[1,11];const dataTopProduct1=dataTopProduct[_0xa935[2]](0,10)[_0xa935[1]]((_0x41a8x3)=>{_0x41a8x3[_0xa935[0]]= id2[0]++;return _0x41a8x3});const dataTopProduct2=dataTopProduct[_0xa935[2]](10,20)[_0xa935[1]]((_0x41a8x3)=>{_0x41a8x3[_0xa935[0]]= id2[1]++;return _0x41a8x3})

  // Date Picker
  var _0x1835=["\x59\x59\x59\x59\x2D\x4D\x4D","\x66\x6F\x72\x6D\x61\x74","\x75\x74\x63","\x70\x61\x72\x73\x65","\x2D\x30\x31","\x63\x6F\x6E\x63\x61\x74","\x64\x61\x79\x73\x49\x6E\x4D\x6F\x6E\x74\x68","\x2D","","\x75\x6E\x73\x68\x69\x66\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x64\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x74\x68\x65\x6E","\x67\x65\x74\x54\x6F\x70\x52\x65\x76\x65\x6E\x75\x65","\x67\x65\x74\x54\x6F\x70\x53\x65\x6C\x6C","\x61\x6C\x6C","\x59\x59\x59\x59\x2D\x4D\x4D\x2D\x44\x44","\x6D\x6F\x6E\x74\x68","\x73\x74\x61\x72\x74\x4F\x66","\x63\x6C\x6F\x6E\x65","\x65\x6E\x64\x4F\x66"];const [day,setDay]=useState([]);const date= new Date();const currentMonth=moment[_0x1835[2]](date)[_0x1835[1]](_0x1835[0]);const toTimestamp=(_0xfdc5x4)=>{var _0xfdc5x5=Date[_0x1835[3]](_0xfdc5x4);return _0xfdc5x5/ 1000};const onChange=(date,_0xfdc5x7)=>{const _0xfdc5x8=_0xfdc5x7[_0x1835[5]](_0x1835[4]);const _0xfdc5x9=moment(_0xfdc5x7,_0x1835[0])[_0x1835[6]]();const _0xfdc5xa=_0xfdc5x7[_0x1835[5]](`${_0x1835[7]}${_0xfdc5x9}${_0x1835[8]}`);const _0xfdc5xb=[];_0xfdc5xb[_0x1835[9]](toTimestamp(_0xfdc5xa));_0xfdc5xb[_0x1835[9]](toTimestamp(_0xfdc5x8));setDay(_0xfdc5xb)};const callApiHome=async (_0xfdc5xd)=>{setLoading(true); await Promise[_0x1835[18]]([homeApi[_0x1835[16]](_0xfdc5xd)[_0x1835[15]]((_0xfdc5xf)=>{console[_0x1835[11]](_0xfdc5xf);if(_0xfdc5xf&& _0xfdc5xf[_0x1835[13]]&& _0xfdc5xf[_0x1835[13]][_0x1835[14]]){setDataTopBander(_0xfdc5xf[_0x1835[13]][_0x1835[14]])}})[_0x1835[12]]((_0xfdc5xe)=>{return console[_0x1835[11]](_0xfdc5xe[_0x1835[10]])}),homeApi[_0x1835[17]](_0xfdc5xd)[_0x1835[15]]((_0xfdc5xf)=>{console[_0x1835[11]](_0xfdc5xf);if(_0xfdc5xf&& _0xfdc5xf[_0x1835[13]]&& _0xfdc5xf[_0x1835[13]][_0x1835[14]]){setDataTopProduct(_0xfdc5xf[_0x1835[13]][_0x1835[14]])}})[_0x1835[12]]((_0xfdc5xe)=>{return console[_0x1835[11]](_0xfdc5xe[_0x1835[10]])})]);setLoading(false)};const getData=()=>{const _0xfdc5xd={start:day[0]?day[0]:allDateOfCurrentMonth[0],end:day[1]?day[1]:allDateOfCurrentMonth[1]};callApiHome(_0xfdc5xd)};const startOfMonth=moment()[_0x1835[22]]()[_0x1835[21]](_0x1835[20])[_0x1835[1]](_0x1835[19]);const endOfMonth=moment()[_0x1835[22]]()[_0x1835[23]](_0x1835[20])[_0x1835[1]](_0x1835[19]);const allDateOfCurrentMonth=[toTimestamp(startOfMonth),toTimestamp(endOfMonth)];useEffect(()=>{const _0xfdc5xd={start:allDateOfCurrentMonth[0],end:allDateOfCurrentMonth[1]};callApiHome(_0xfdc5xd)},[])

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
                  flexBasis: '15%',
                  fontWeight: '700',
                  fontSize: '20px',
                  color: '#495057',
                }}
              >
                {db.id}
              </li>

              <li style={{ flexBasis: '55%' }}>
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
                  <Popover content={db.bander_name ? db.bander_name : db.name}>
                    <li className="style-text-home">
                      <a
                        target="_blank"
                        style={{
                          fontWeight: 700,
                          fontSize: '14px',
                          color: '#495057',
                        }}
                        href={db.bander_name ? db.bander_url : db.url}
                      >
                        {db.bander_name ? db.bander_name : db.name}
                      </a>
                    </li>
                  </Popover>
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
            disabled={loading}
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
        <Row
          className="site-card-wrapper"
          style={{ marginTop: '24px' }}
          gutter={[32, 32]}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={12}
            className="style-small-device"
          >
            <Card title="TOP 20 매출 벤더">
              <Row gutter={32}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopBander1} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopBander2} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={12}
            className="style-small-device"
          >
            <Card title="TOP 20 판매 상품">
              <Row gutter={32}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <RenderData data={dataTopProduct1} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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
