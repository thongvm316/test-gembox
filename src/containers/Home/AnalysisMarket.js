import React, { useState, useEffect } from 'react'
import moment from 'moment'
import homeApi from '../../api/HomeAPI'
import NumberFormat from 'react-number-format'

import { DatePicker, Button, Row, Col, Select, Card, Spin, Modal } from 'antd'
import { MinusOutlined, LoadingOutlined } from '@ant-design/icons'
import Footer from '../../components/Footer'
import GroupButton from './GroupButton/GroupButton'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import * as hcnd from 'highcharts/modules/no-data-to-display'

import './AnalysisMarket.scss'
import axios from 'axios'
const { Option } = Select

hcnd(Highcharts)

const AnalysisMarket = (props) => {

  // Handle data
  var _0x33c5=["\x73\x6C\x69\x63\x65"];const [data,setData]=useState([]);const data1=data[_0x33c5[0]](0,10);const data2=data[_0x33c5[0]](10,20)
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

  var _0xc61a=["\x31\x31\uBC88\uAC00"];const [selectMarket,setSelectMarket]=useState(_0xc61a[0]);const [loading,setLoading]=useState(false);const [loadingUseEfect,setLoadingUseEfect]=useState(false);const [marketTotalSale,setMarketTotalSale]=useState(0)

  // DatePicker
 var _0x496a=["\x70\x61\x72\x73\x65","\x59\x59\x59\x59\x2D\x4D\x4D\x2D\x44\x44","\x66\x6F\x72\x6D\x61\x74","","\x64\x61\x79\x73\x49\x6E\x4D\x6F\x6E\x74\x68","\x59\x59\x59\x59\x2D\x4D\x4D","\x44\x44","\uC2DC\uC791\uC77C\uC740\x20\uC6D4\uC758\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uAC00\x20\uB420\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC744\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uB85C\x20\uC120\uD0DD\x20\uD560\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC740\x20\uC885\uB8CC\uC77C\uACFC\x20\uAC19\uC744\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\x6C\x65\x6E\x67\x74\x68","\uC5D0\uB7EC","\x65\x72\x72\x6F\x72"];const [datePicker,setDatePicker]=useState([]);const [hackValue,setHackValue]=useState();const [value,setValue]=useState();const [dates,setDates]=useState([]);const toTimestamp=(_0x7a0cx2)=>{var _0x7a0cx3=Date[_0x496a[0]](_0x7a0cx2);return _0x7a0cx3/ 1000};const onChangeRangePicker=(_0x7a0cx5)=>{setValue(_0x7a0cx5);if(_0x7a0cx5&& _0x7a0cx5[0]&& _0x7a0cx5[1]){const _0x7a0cx6=moment(_0x7a0cx5[0])[_0x496a[2]](_0x496a[1]);const _0x7a0cx7=moment(_0x7a0cx5[1])[_0x496a[2]](_0x496a[1]);if(_0x7a0cx6== _0x7a0cx7){setValue(_0x496a[3])};let _0x7a0cx8=[toTimestamp(_0x7a0cx6),toTimestamp(_0x7a0cx7)];setDatePicker(_0x7a0cx8)}};const onCalendarChange=(_0x7a0cx5)=>{if(_0x7a0cx5&& _0x7a0cx5[0]){const _0x7a0cxa=parseInt(moment(_0x7a0cx5[0],_0x496a[5])[_0x496a[4]]());const _0x7a0cxb=parseInt(moment(_0x7a0cx5[0])[_0x496a[2]](_0x496a[6]));if(_0x7a0cxa== _0x7a0cxb){modal(_0x496a[7]);return}};if(_0x7a0cx5&& _0x7a0cx5[1]){const _0x7a0cxb=parseInt(moment(_0x7a0cx5[1])[_0x496a[2]](_0x496a[6]));if(1== _0x7a0cxb){modal(_0x496a[8]);return}};if(_0x7a0cx5&& _0x7a0cx5[0]&& _0x7a0cx5[1]){const _0x7a0cxc=parseInt(moment(_0x7a0cx5[0])[_0x496a[2]](_0x496a[6]));const _0x7a0cxd=parseInt(moment(_0x7a0cx5[1])[_0x496a[2]](_0x496a[6]));if(_0x7a0cxc== _0x7a0cxd){modal(_0x496a[9]);return}};setDates(_0x7a0cx5)};const disabledDate=(_0x7a0cxf)=>{const _0x7a0cxa=parseInt(moment(_0x7a0cxf,_0x496a[5])[_0x496a[4]]());if(!dates|| dates[_0x496a[10]]=== 0){const _0x7a0cx10=(_0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== 1)|| (_0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== 15)|| (_0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== _0x7a0cxa);return !_0x7a0cx10}else {if(dates[0]){return !((moment(dates[0])[_0x496a[2]](_0x496a[5])== moment(_0x7a0cxf)[_0x496a[2]](_0x496a[5])&& _0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== 1)|| (moment(dates[0])[_0x496a[2]](_0x496a[5])== moment(_0x7a0cxf)[_0x496a[2]](_0x496a[5])&& _0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== 15)|| (moment(dates[0])[_0x496a[2]](_0x496a[5])== moment(_0x7a0cxf)[_0x496a[2]](_0x496a[5])&& _0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== _0x7a0cxa))};if(dates[1]){return !((moment(dates[1])[_0x496a[2]](_0x496a[5])== moment(_0x7a0cxf)[_0x496a[2]](_0x496a[5])&& _0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== 1)|| (moment(dates[1])[_0x496a[2]](_0x496a[5])== moment(_0x7a0cxf)[_0x496a[2]](_0x496a[5])&& _0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== 15)|| (moment(dates[1])[_0x496a[2]](_0x496a[5])== moment(_0x7a0cxf)[_0x496a[2]](_0x496a[5])&& _0x7a0cxf&& moment(_0x7a0cxf)[_0x496a[2]](_0x496a[6])== _0x7a0cxa))}}};const onOpenChange=(_0x7a0cx12)=>{if(_0x7a0cx12){setHackValue([]);setDates([])}else {setHackValue(undefined)}};const modal=(_0x7a0cx14)=>{Modal[_0x496a[12]]({title:_0x496a[11],content:_0x7a0cx14})}

  /* Option of chart */
  var _0xccf6=["\x6D\x61\x70","\x6B\x65\x79\x73","\x61\x73\x73\x69\x67\x6E","","\x20\uCE74\uD14C\uACE0\uB9AC\uBCC4\x20\uBD84\uC11D","\x23\x46\x46\x36\x36\x33\x33","\x23\x46\x46\x42\x33\x39\x39","\x23\x46\x46\x33\x33\x46\x46","\x23\x46\x46\x46\x46\x39\x39","\x23\x30\x30\x42\x33\x45\x36","\x23\x45\x36\x42\x33\x33\x33","\x23\x33\x33\x36\x36\x45\x36","\x23\x39\x39\x39\x39\x36\x36","\x23\x39\x39\x46\x46\x39\x39","\x23\x42\x33\x34\x44\x34\x44","\x23\x38\x30\x42\x33\x30\x30","\x23\x38\x30\x39\x39\x30\x30","\x23\x45\x36\x42\x33\x42\x33","\x23\x36\x36\x38\x30\x42\x33","\x23\x36\x36\x39\x39\x31\x41","\x23\x46\x46\x39\x39\x45\x36","\x23\x43\x43\x46\x46\x31\x41","\x23\x46\x46\x31\x41\x36\x36","\x23\x45\x36\x33\x33\x31\x41","\x23\x33\x33\x46\x46\x43\x43","\x6E\x61\x6D\x65","\x79","\x70\x69\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x3C\x73\x6D\x61\x6C\x6C\x3E\x7B\x70\x6F\x69\x6E\x74\x2E\x6B\x65\x79\x7D\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E\x3C\x74\x61\x62\x6C\x65\x3E","\x3C\x74\x72\x3E\x3C\x74\x64\x3C\x2F\x74\x64\x3E","\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x72\x69\x67\x68\x74\x22\x3E\x3C\x62\x3E\u20A9\x7B\x70\x6F\x69\x6E\x74\x2E\x79\x7D\x3C\x2F\x62\x3E\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E","\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\x6C\x65\x66\x74","\x23\x34\x39\x35\x30\x35\x37","\x42\x72\x61\x6E\x64\x73"];const renameKeys=(_0x1e72x2,_0x1e72x3)=>{const _0x1e72x4=Object[_0xccf6[1]](_0x1e72x2)[_0xccf6[0]]((_0x1e72x5)=>{const _0x1e72x6=_0x1e72x3[_0x1e72x5]|| _0x1e72x5;return {[_0x1e72x6]:_0x1e72x2[_0x1e72x5]}});return Object[_0xccf6[2]]({},..._0x1e72x4)};const titleOfChartOne=`${_0xccf6[3]}${selectMarket}${_0xccf6[4]}`;const colorsChart1=[_0xccf6[5],_0xccf6[6],_0xccf6[7],_0xccf6[8],_0xccf6[9],_0xccf6[10],_0xccf6[11],_0xccf6[12],_0xccf6[13],_0xccf6[14],_0xccf6[15],_0xccf6[16],_0xccf6[17],_0xccf6[18],_0xccf6[19],_0xccf6[20],_0xccf6[21],_0xccf6[22],_0xccf6[23],_0xccf6[24]];const dataOfChartOne=data[_0xccf6[0]]((_0x1e72xa)=>{const _0x1e72x3={category_tag:_0xccf6[25],total:_0xccf6[26]};const _0x1e72xb=renameKeys(_0x1e72xa,_0x1e72x3);const _0x1e72xc=parseInt(_0x1e72xb[_0xccf6[26]]);return {name:_0x1e72xb[_0xccf6[25]],y:_0x1e72xc}});const options={chart:{height:600,type:_0xccf6[27],renderTo:_0xccf6[28]},plotOptions:{pie:{allowPointSelect:true,colors:colorsChart1}},tooltip:{shared:true,useHTML:true,headerFormat:_0xccf6[29],pointFormat:_0xccf6[30]+ _0xccf6[31],footerFormat:_0xccf6[32]},credits:{enabled:false},title:{text:titleOfChartOne,align:_0xccf6[33],style:{color:_0xccf6[34]}},series:[{name:_0xccf6[35],dataLabels:{enabled:false},showInLegend:true,data:dataOfChartOne}]}

  // Chart 2
  var _0x81a7=["\x63\x61\x74\x65\x67\x6F\x72\x79\x5F\x74\x61\x67","\x6D\x61\x70"];const getTextCategories=data[_0x81a7[1]]((_0xa118x2)=>{return _0xa118x2[_0x81a7[0]]});const categories={categories:getTextCategories}

  const dataOfTotalLineAndColumnChart = data.map((data) => {
    const newKeys = { category_tag: 'name', total: 'y' }
    const renamedObj = parseInt(renameKeys(data, newKeys).y)
    const color = '#'.concat(Math.floor(Math.random() * 16777215).toString(16))
    return { y: renamedObj, color }
  })

  var _0xa546=["\x74\x6F\x74\x61\x6C\x5F\x73\x6F\x6C\x64","\x6D\x61\x70","","\x78\x79","\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74","\x76\x65\x72\x74\x69\x63\x61\x6C","\x6C\x65\x66\x74","\x74\x6F\x70","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x6C\x65\x67\x65\x6E\x64","\x64\x65\x66\x61\x75\x6C\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x72\x67\x62\x61\x28\x32\x35\x35\x2C\x32\x35\x35\x2C\x32\x35\x35\x2C\x30\x2E\x32\x35\x29","\x63\x6F\x6C\x75\x6D\x6E","\u20A9","\x73\x70\x6C\x69\x6E\x65","\x23\x33\x34\x43\x33\x38\x46","\x67\x65\x74\x41\x6E\x61\x6C\x79\x73\x69\x73\x4D\x61\x72\x6B\x65\x74","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x74\x6F\x74\x61\x6C\x5F\x73\x61\x6C\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x59\x59\x59\x59\x2D\x4D\x4D\x2D\x44\x44","\x66\x6F\x72\x6D\x61\x74","\x6D\x6F\x6E\x74\x68","\x73\x74\x61\x72\x74\x4F\x66","\x63\x6C\x6F\x6E\x65","\x65\x6E\x64\x4F\x66","\x67\x65\x74\x4D\x61\x72\x6B\x65\x74\x54\x6F\x74\x61\x6C\x53\x61\x6C\x65"];const dataOfTotalSoldLineAndColumnChart=data[_0xa546[1]]((_0x6c72x2)=>{return parseInt(_0x6c72x2[_0xa546[0]])});const optionsLineAndColumnChart={title:_0xa546[2],chart:{zoomType:_0xa546[3]},xAxis:[categories],yAxis:[{labels:false,title:false,gridLineColor:_0xa546[4]},{title:false,labels:false,opposite:true,gridLineColor:_0xa546[4]}],tooltip:{shared:true},legend:{layout:_0xa546[5],align:_0xa546[6],x:120,verticalAlign:_0xa546[7],y:100,floating:true,backgroundColor:Highcharts[_0xa546[10]][_0xa546[9]][_0xa546[8]]|| _0xa546[11]},series:[{name:_0xa546[2],type:_0xa546[12],yAxis:1,data:dataOfTotalLineAndColumnChart,tooltip:{valuePrefix:_0xa546[13]}},{name:_0xa546[2],type:_0xa546[14],data:dataOfTotalSoldLineAndColumnChart,tooltip:{valueSuffix:_0xa546[2]},marker:{enabled:false},color:_0xa546[15]}]};function handleChangeSelectMarket(_0x6c72x5){setSelectMarket(_0x6c72x5)}const getData=async ()=>{const _0x6c72x7={start:datePicker[0]?datePicker[0]:allDateOfCurrentMonth[0],end:datePicker[1]?datePicker[1]:allDateOfCurrentMonth[1],key:selectMarket};try{setLoading(true);const _0x6c72x5= await homeApi[_0xa546[16]](_0x6c72x7);if(_0x6c72x5&& _0x6c72x5[_0xa546[18]][_0xa546[17]]&& _0x6c72x5[_0xa546[18]][_0xa546[17]][_0xa546[19]]){setData(_0x6c72x5[_0xa546[18]][_0xa546[17]][_0xa546[19]])};setLoading(false)}catch(error){setLoading(false);console[_0xa546[21]](error[_0xa546[20]])}};const startOfMonth=moment()[_0xa546[26]]()[_0xa546[25]](_0xa546[24])[_0xa546[23]](_0xa546[22]);const endOfMonth=moment()[_0xa546[26]]()[_0xa546[27]](_0xa546[24])[_0xa546[23]](_0xa546[22]);let allDateOfCurrentMonth=[toTimestamp(startOfMonth),toTimestamp(endOfMonth)];useEffect(async ()=>{setLoadingUseEfect(true);const _0x6c72x7={start:allDateOfCurrentMonth[0],end:allDateOfCurrentMonth[1],key:selectMarket};try{const _0x6c72x5= await homeApi[_0xa546[16]](_0x6c72x7);if(_0x6c72x5&& _0x6c72x5[_0xa546[18]][_0xa546[17]]&& _0x6c72x5[_0xa546[18]][_0xa546[17]][_0xa546[19]]){setData(_0x6c72x5[_0xa546[18]][_0xa546[17]][_0xa546[19]]);setLoadingUseEfect(false)}}catch(error){console[_0xa546[21]](error[_0xa546[20]]);setLoadingUseEfect(false)}},[]);useEffect(async ()=>{const _0x6c72x7={start:allDateOfCurrentMonth[0],end:allDateOfCurrentMonth[1],key:selectMarket};try{const _0x6c72xb= await homeApi[_0xa546[28]](_0x6c72x7);if(_0x6c72xb&& _0x6c72xb[_0xa546[18]][_0xa546[17]]&& _0x6c72xb[_0xa546[18]][_0xa546[17]][_0xa546[19]]){setMarketTotalSale(_0x6c72xb[_0xa546[18]][_0xa546[17]][_0xa546[19]])}}catch(error){console[_0xa546[21]](error[_0xa546[20]])}},[]);const getMarketTotalSale=async ()=>{const _0x6c72x7={start:datePicker[0]?datePicker[0]:allDateOfCurrentMonth[0],end:datePicker[1]?datePicker[1]:allDateOfCurrentMonth[1],key:selectMarket};try{const _0x6c72xb= await homeApi[_0xa546[28]](_0x6c72x7);if(_0x6c72xb&& _0x6c72xb[_0xa546[18]][_0xa546[17]]&& _0x6c72xb[_0xa546[18]][_0xa546[17]][_0xa546[19]]){setMarketTotalSale(_0x6c72xb[_0xa546[18]][_0xa546[17]][_0xa546[19]])}}catch(error){console[_0xa546[21]](error[_0xa546[20]])}}

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
                separator={<MinusOutlined />}
                value={hackValue || value}
                // disabledDate={disabledDate}
                // onCalendarChange={(val) => onCalendarChange(val)}
                onChange={(val) => onChangeRangePicker(val)}
                onOpenChange={onOpenChange}
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
                onClick={() => {
                  getData()
                  getMarketTotalSale()
                }}
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

      <Row gutter={16} style={{ marginTop: '20px' }} className="card-border">
        <Col span={24}>
          <h1 style={{ display: 'inline-block', marginBottom: '0px' }}>
            {selectMarket} 총매출
          </h1>
          <h1
            style={{
              display: 'inline-block',
              marginLeft: '25px',
              marginBottom: '0px',
            }}
          >
            <NumberFormat
              value={marketTotalSale}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₩'}
            />
          </h1>
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
