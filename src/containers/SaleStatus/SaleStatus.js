import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Input, DatePicker, Space, Table, Modal } from 'antd'
import { MinusOutlined } from '@ant-design/icons'

import fileDownload from 'js-file-download'
import moment from 'moment'
import * as _ from 'lodash'
import NumberFormat from 'react-number-format'
import saleStatusAPI from '../../api/SaleStatusAPI'

import SaleStatus1 from '../../images/SaleStatus1.png'
import SaleStatus2 from '../../images/SaleStatus2.png'
import SaleStatus3 from '../../images/SaleStatus3.png'
import SaleStatus4 from '../../images/SaleStatus4.png'

import Market1 from '../../images/market1.png'
import Market2 from '../../images/market2.png'
import Market3 from '../../images/market3.png'
import Market4 from '../../images/market4.png'
import Market5 from '../../images/market5.png'
import Market6 from '../../images/market6.png'
import Market7 from '../../images/market7.png'
import Market8 from '../../images/market8.png'
import Footer from '../../components/Footer'
import './SaleStatus.scss'
import saleStatusApi from '../../api/SaleStatusAPI'

const SaleStatus = () => {
  // Table
  const columns = [
    {
      title: '상품명',
      render: (record) => {
        // console.log(record)
        return (
          <a
            style={{
              fontWeight: 500,
              fontSize: '16px',
              color: '#74788D',
            }}
            onClick={() => goToStore(record)}
          >
            {record.name}
          </a>
        )
      },
    },
    {
      title: '카테고리',
      dataIndex: 'category_tag',
      sorter: (a, b) => a.category_tag.length - b.category_tag.length,
    },
    {
      title: '마켓명',
      dataIndex: 'market_name',
      sorter: (a, b) => a.market_name.length - b.market_name.length,
    },
    {
      title: '가격',
      dataIndex: 'seller_price',
      render: (text) => (
        <NumberFormat
          value={text}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₩'}
        />
      ),
      sorter: {
        compare: (a, b) => a.seller_price - b.seller_price,
      },
    },
    {
      title: '리뷰',
      dataIndex: 'review',
      sorter: {
        compare: (a, b) => a.review - b.review,
      },
    },
    {
      title: '판매수',
      dataIndex: 'sold',
      sorter: {
        compare: (a, b) => a.sold - b.sold,
      },
    },
  ]

  var _0xc1e7=["\x75\x72\x6C","\x5F\x62\x6C\x61\x6E\x6B","\x6F\x70\x65\x6E","\x66\x6F\x63\x75\x73","\x70\x61\x72\x73\x65","\x59\x59\x59\x59\x2D\x4D\x4D\x2D\x44\x44","\x66\x6F\x72\x6D\x61\x74","","\x64\x61\x79\x73\x49\x6E\x4D\x6F\x6E\x74\x68","\x59\x59\x59\x59\x2D\x4D\x4D","\x44\x44","\uC2DC\uC791\uC77C\uC740\x20\uC6D4\uC758\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uAC00\x20\uB420\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC744\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uB85C\x20\uC120\uD0DD\x20\uD560\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC740\x20\uC885\uB8CC\uC77C\uACFC\x20\uAC19\uC744\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\x6C\x65\x6E\x67\x74\x68","\uC5D0\uB7EC","\x65\x72\x72\x6F\x72","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x6C\x61\x73\x74","\x69\x64","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x64\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x70\x72\x6F\x64\x75\x63\x74","\x63\x6F\x6E\x63\x61\x74","\x74\x68\x65\x6E","\x67\x65\x74\x44\x61\x74\x61\x53\x65\x61\x72\x63\x68","\x67\x65\x74\x50\x72\x6F\x64\x75\x63\x74\x43\x6F\x75\x6E\x74","\x67\x65\x74\x52\x65\x76\x69\x65\x77\x49\x6E\x66\x6F","\x67\x65\x74\x53\x61\x6C\x65\x49\x6E\x66\x6F","\x67\x65\x74\x52\x65\x76\x65\x6E\x75\x65\x49\x6E\x66\x6F","\x67\x65\x74\x4C\x69\x73\x74\x4D\x61\x72\x6B\x65\x74","\x61\x6C\x6C","\x31\x31\uBC88\uAC00","\x47\uB9C8\uCF13","\uCFE0\uD321","\uC778\uD130\uD30C\uD06C","\uC625\uC158","\uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4","\uD2F0\uBAAC","\uC704\uBA54\uD504","\x6D\x61\x70","\x53\x75\x63\x63\x65\x73\x73","\x64\x61\x74\x61\x2E\x78\x6C\x73","\x67\x65\x74\x45\x78\x63\x65\x6C\x46\x69\x6C\x65","\x6D\x6F\x6E\x74\x68","\x73\x74\x61\x72\x74\x4F\x66","\x63\x6C\x6F\x6E\x65","\x65\x6E\x64\x4F\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x72\x61\x6E\x64\x6F\x6D","\x2D"];const goToStore=(_0x7123x2)=>{var _0x7123x3=window[_0xc1e7[2]](_0x7123x2[_0xc1e7[0]],_0xc1e7[1]);_0x7123x3[_0xc1e7[3]]()};const [datePicker,setDatePicker]=useState([]);const [hackValue,setHackValue]=useState();const [value,setValue]=useState();const [dates,setDates]=useState([]);const toTimestamp=(_0x7123x5)=>{var _0x7123x6=Date[_0xc1e7[4]](_0x7123x5);return _0x7123x6/ 1000};const onChangeRangePicker=(_0x7123x8)=>{setValue(_0x7123x8);if(_0x7123x8&& _0x7123x8[0]&& _0x7123x8[1]){const _0x7123x9=moment(_0x7123x8[0])[_0xc1e7[6]](_0xc1e7[5]);const _0x7123xa=moment(_0x7123x8[1])[_0xc1e7[6]](_0xc1e7[5]);if(_0x7123x9== _0x7123xa){setValue(_0xc1e7[7])};let _0x7123xb=[toTimestamp(_0x7123x9),toTimestamp(_0x7123xa)];setDatePicker(_0x7123xb)}};const onCalendarChange=(_0x7123x8)=>{if(_0x7123x8&& _0x7123x8[0]){const _0x7123xd=parseInt(moment(_0x7123x8[0],_0xc1e7[9])[_0xc1e7[8]]());const _0x7123xe=parseInt(moment(_0x7123x8[0])[_0xc1e7[6]](_0xc1e7[10]));if(_0x7123xd== _0x7123xe){modal(_0xc1e7[11]);return}};if(_0x7123x8&& _0x7123x8[1]){const _0x7123xe=parseInt(moment(_0x7123x8[1])[_0xc1e7[6]](_0xc1e7[10]));if(1== _0x7123xe){modal(_0xc1e7[12]);return}};if(_0x7123x8&& _0x7123x8[0]&& _0x7123x8[1]){const _0x7123xf=parseInt(moment(_0x7123x8[0])[_0xc1e7[6]](_0xc1e7[10]));const _0x7123x10=parseInt(moment(_0x7123x8[1])[_0xc1e7[6]](_0xc1e7[10]));if(_0x7123xf== _0x7123x10){modal(_0xc1e7[13]);return}};setDates(_0x7123x8)};const disabledDate=(_0x7123x12)=>{const _0x7123xd=parseInt(moment(_0x7123x12,_0xc1e7[9])[_0xc1e7[8]]());if(!dates|| dates[_0xc1e7[14]]=== 0){const _0x7123x13=(_0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== 1)|| (_0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== 15)|| (_0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== _0x7123xd);return !_0x7123x13}else {if(dates[0]){return !((moment(dates[0])[_0xc1e7[6]](_0xc1e7[9])== moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[9])&& _0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== 1)|| (moment(dates[0])[_0xc1e7[6]](_0xc1e7[9])== moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[9])&& _0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== 15)|| (moment(dates[0])[_0xc1e7[6]](_0xc1e7[9])== moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[9])&& _0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== _0x7123xd))};if(dates[1]){return !((moment(dates[1])[_0xc1e7[6]](_0xc1e7[9])== moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[9])&& _0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== 1)|| (moment(dates[1])[_0xc1e7[6]](_0xc1e7[9])== moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[9])&& _0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== 15)|| (moment(dates[1])[_0xc1e7[6]](_0xc1e7[9])== moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[9])&& _0x7123x12&& moment(_0x7123x12)[_0xc1e7[6]](_0xc1e7[10])== _0x7123xd))}}};const onOpenChange=(_0x7123x15)=>{if(_0x7123x15){setHackValue([]);setDates([])}else {setHackValue(undefined)}};const modal=(_0x7123x17)=>{Modal[_0xc1e7[16]]({title:_0xc1e7[15],content:_0x7123x17})};const [valueOfSearchInput,setValueOfSearchInput]=useState(_0xc1e7[7]);const [loading,setLoading]=useState(false);const [dataSearch,setDataSearch]=useState([]);const [listMarket,setListMarket]=useState([]);const [data,setData]=useState({totalProductCount:[],totalReviewCount:[],saleCountRank:[],saleRank:[]});const getValueOfInputSearch=(_0x7123x19)=>{setValueOfSearchInput(_0x7123x19[_0xc1e7[18]][_0xc1e7[17]]);setDataSearch([])};const lastItemOfDataSearch=_[_0xc1e7[19]](dataSearch)?_[_0xc1e7[19]](dataSearch)[_0xc1e7[20]]:0;const [lastIndex,setLastIndex]=useState(lastItemOfDataSearch);const loadMore=()=>{setLastIndex(lastItemOfDataSearch)};const getData=()=>{const _0x7123x1d={start:datePicker[0]?datePicker[0]:allDateOfCurrentMonth[0],end:datePicker[1]?datePicker[1]:allDateOfCurrentMonth[1],key:valueOfSearchInput,lastIndex:lastIndex};setLoading(true);saleStatusApi[_0xc1e7[29]](_0x7123x1d)[_0xc1e7[28]]((_0x7123x1f)=>{if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]][_0xc1e7[26]]){if(lastIndex> 0){setDataSearch(dataSearch[_0xc1e7[27]](_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]][_0xc1e7[26]]))}else {setDataSearch(_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]][_0xc1e7[26]])}};setLoading(false)})[_0xc1e7[23]]((_0x7123x1e)=>{setLoading(false);console[_0xc1e7[22]](_0x7123x1e[_0xc1e7[21]])})};useEffect(()=>{if(datePicker[_0xc1e7[14]]=== 0){return};getData()},[lastIndex]);useEffect(()=>{Promise[_0xc1e7[35]]([saleStatusAPI[_0xc1e7[30]]()[_0xc1e7[28]]((_0x7123x1f)=>{if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]){setData((_0x7123x21)=>{return ({..._0x7123x21,totalProductCount:_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]})})}})[_0xc1e7[23]]((_0x7123x20)=>{return console[_0xc1e7[22]](_0x7123x20[_0xc1e7[21]])}),saleStatusAPI[_0xc1e7[31]]()[_0xc1e7[28]]((_0x7123x1f)=>{if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]){setData((_0x7123x21)=>{return ({..._0x7123x21,totalReviewCount:_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]})})}})[_0xc1e7[23]]((_0x7123x20)=>{return console[_0xc1e7[22]](_0x7123x20[_0xc1e7[21]])}),saleStatusAPI[_0xc1e7[32]]()[_0xc1e7[28]]((_0x7123x1f)=>{if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]){setData((_0x7123x21)=>{return ({..._0x7123x21,saleCountRank:_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]})})}})[_0xc1e7[23]]((_0x7123x20)=>{return console[_0xc1e7[22]](_0x7123x20[_0xc1e7[21]])}),saleStatusAPI[_0xc1e7[33]]()[_0xc1e7[28]]((_0x7123x1f)=>{if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]){setData((_0x7123x21)=>{return ({..._0x7123x21,saleRank:_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]})})}})[_0xc1e7[23]]((_0x7123x20)=>{return console[_0xc1e7[22]](_0x7123x20[_0xc1e7[21]])}),saleStatusAPI[_0xc1e7[34]]()[_0xc1e7[28]]((_0x7123x1f)=>{console[_0xc1e7[22]](_0x7123x1f);if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]){setListMarket(_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]])}})[_0xc1e7[23]]((_0x7123x20)=>{return console[_0xc1e7[22]](_0x7123x20[_0xc1e7[21]])})])},[]);const newListMarket=listMarket[_0xc1e7[44]]((_0x7123x23)=>{const {market_name,url}=_0x7123x23;if(market_name=== _0xc1e7[36]){return {market_name,url,img:Market1}};if(market_name=== _0xc1e7[37]){return {market_name,url,img:Market2}};if(market_name=== _0xc1e7[38]){return {market_name,url,img:Market3}};if(market_name=== _0xc1e7[39]){return {market_name,url,img:Market4}};if(market_name=== _0xc1e7[40]){return {market_name,url,img:Market5}};if(market_name=== _0xc1e7[41]){return {market_name,url,img:Market6}};if(market_name=== _0xc1e7[42]){return {market_name,url,img:Market7}};if(market_name=== _0xc1e7[43]){return {market_name,url,img:Market8}}});const getExcelFile=async ()=>{setLoading(true);const _0x7123x1d={start:datePicker[0]?datePicker[0]:allDateOfCurrentMonth[0],end:datePicker[1]?datePicker[1]:allDateOfCurrentMonth[1],key:valueOfSearchInput,lastIndex:lastItemOfDataSearch};console[_0xc1e7[22]](_0x7123x1d);saleStatusApi[_0xc1e7[47]](_0x7123x1d)[_0xc1e7[28]]((_0x7123x1f)=>{console[_0xc1e7[22]](_0xc1e7[45]);fileDownload(_0x7123x1f,_0xc1e7[46]);setLoading(false)})[_0xc1e7[23]]((_0x7123x1e)=>{console[_0xc1e7[22]](_0x7123x1e[_0xc1e7[21]]);setLoading(false)})};const startOfMonth=moment()[_0xc1e7[50]]()[_0xc1e7[49]](_0xc1e7[48])[_0xc1e7[6]](_0xc1e7[5]);const endOfMonth=moment()[_0xc1e7[50]]()[_0xc1e7[51]](_0xc1e7[48])[_0xc1e7[6]](_0xc1e7[5]);const allDateOfCurrentMonth=[toTimestamp(startOfMonth),toTimestamp(endOfMonth)];useEffect(()=>{setLoading(true);const _0x7123x1d={start:allDateOfCurrentMonth[0],end:allDateOfCurrentMonth[1],key:valueOfSearchInput,lastIndex:lastIndex};saleStatusApi[_0xc1e7[29]](_0x7123x1d)[_0xc1e7[28]]((_0x7123x1f)=>{if(_0x7123x1f&& _0x7123x1f[_0xc1e7[24]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]]&& _0x7123x1f[_0xc1e7[24]][_0xc1e7[25]][_0xc1e7[26]]){if(lastIndex> 0){setDataSearch(dataSearch[_0xc1e7[27]](_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]][_0xc1e7[26]]))}else {setDataSearch(_0x7123x1f[_0xc1e7[24]][_0xc1e7[25]][_0xc1e7[26]])}};setLoading(false)})[_0xc1e7[23]]((_0x7123x1e)=>{setLoading(false);console[_0xc1e7[22]](_0x7123x1e[_0xc1e7[21]])})},[]);const guidGenerator=()=>{var _0x7123x29=function(){return (((1+ Math[_0xc1e7[53]]())* 0x10000)| 0).toString(16)[_0xc1e7[52]](1)};return (_0x7123x29()+ _0x7123x29()+ _0xc1e7[54]+ _0x7123x29()+ _0xc1e7[54]+ _0x7123x29()+ _0xc1e7[54]+ _0x7123x29()+ _0xc1e7[54]+ _0x7123x29()+ _0x7123x29()+ _0x7123x29())}

  return (
    <div className="sale-status">
      <Row justify="space-around">
        <Col
          sm={24}
          md={11}
          lg={11}
          xl={5}
          className="card-item-border card-item"
        >
          <div className="card-item-text">
            <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>총 상품 수</h2>
            <h2
              style={{ color: '#6E798C', fontSize: '36px', fontWeight: '700' }}
            >
              {data.totalProductCount ? data.totalProductCount : ''}개
            </h2>
          </div>
          <div className="card-item-icon">
            <img src={SaleStatus1 ? SaleStatus1 : ''} />
          </div>
        </Col>
        <Col
          sm={24}
          md={11}
          lg={11}
          xl={5}
          className="card-item-border card-item"
        >
          <div className="card-item-text">
            <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>총 리뷰</h2>
            <h2
              style={{
                color: '#6E798C',
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '0',
              }}
            >
              {data.totalReviewCount.review_rank
                ? data.totalReviewCount.review_rank
                : ''}
              위
            </h2>
            <p
              style={{ fontSize: '16px', fontWeight: '500', color: '#495057' }}
            >
              {data.totalReviewCount.total_review
                ? data.totalReviewCount.total_review
                : ''}
              건
            </p>
          </div>
          <div className="card-item-icon">
            <img src={SaleStatus2 ? SaleStatus2 : ''} />
          </div>
        </Col>
        <Col
          sm={24}
          md={11}
          lg={11}
          xl={5}
          className="card-item-border card-item"
        >
          <div className="card-item-text">
            <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>
              종합 판매순위
            </h2>
            <h2
              style={{ color: '#6E798C', fontSize: '36px', fontWeight: '700' }}
            >
              {data.saleCountRank.sale_rank ? data.saleCountRank.sale_rank : ''}
              위
            </h2>
          </div>
          <div className="card-item-icon">
            <img src={SaleStatus3 ? SaleStatus3 : ''} />
          </div>
        </Col>
        <Col
          sm={24}
          md={11}
          lg={11}
          xl={5}
          className="card-item-border card-item"
        >
          <div className="card-item-text">
            <h2 style={{ color: '#2A4EAA', marginBottom: '0' }}>
              종합 매출순위
            </h2>
            <h2
              style={{
                color: '#6E798C',
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '0',
              }}
            >
              {data.saleRank.revenue_rank ? data.saleRank.revenue_rank : ''}위
            </h2>
            <p
              style={{ fontSize: '16px', fontWeight: '500', color: '#495057' }}
            >
              <NumberFormat
                value={data.saleRank.revenue ? data.saleRank.revenue : ''}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₩ '}
              />
            </p>
          </div>
          <div className="card-item-icon">
            <img src={SaleStatus4 ? SaleStatus4 : ''} />
          </div>
        </Col>
      </Row>

      <Row className="bar-style">
        <Col
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="card-border info-search"
        >
          <Space className="space-small" style={{ marginRight: '2rem' }}>
            <DatePicker.RangePicker
              bordered={false}
              defaultValue={[moment(startOfMonth), moment(endOfMonth)]}
              separator={<MinusOutlined />}
              value={hackValue || value}
              // disabledDate={disabledDate}
              // onCalendarChange={(val) => onCalendarChange(val)}
              onChange={(val) => onChangeRangePicker(val)}
              onOpenChange={onOpenChange}
            />
            <Button
              style={{ backgroundColor: '#71c4d5', border: 'none' }}
              onClick={getData}
              type="primary"
              disabled={loading}
            >
              적용하기
            </Button>
          </Space>
          <Space>
            <Input
              style={{ borderRadius: '6px' }}
              onChange={getValueOfInputSearch}
              placeholder="Search"
            />
            <Button
              disabled={loading}
              style={{ backgroundColor: '#71c4d5', border: 'none' }}
              type="primary"
              onClick={getExcelFile}
            >
              EXCEL
            </Button>
          </Space>
        </Col>
      </Row>

      <Row gutter={24} className="market-of-user">
        {newListMarket.map((market, i) => (
          <Col
            key={i}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            style={{ textAlign: 'center' }}
            className="total-sale"
          >
            <a href={market.url ? market.url : ''} target="_blank">
              <img src={market.img} />
              <span
                style={{
                  fontWeight: '400',
                  fontSize: '16px',
                  color: '#495057',
                  marginLeft: '.5rem',
                }}
              >
                {market.market_name}
              </span>
            </a>
          </Col>
        ))}
      </Row>

      <Row>
        <Col span={24}>
          <Table
            loading={loading}
            columns={columns}
            dataSource={dataSearch}
            pagination={false}
            scroll={{ x: 1300 }}
            rowKey={() => guidGenerator()}
          />
        </Col>

        <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
          {dataSearch.length && dataSearch.length >= 100 ? (
            <Button
              disabled={loading}
              onClick={loadMore}
              className="btn-light-blue border-radius-6"
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
            >
              LOAD MORE
            </Button>
          ) : (
            ''
          )}
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default SaleStatus
