import React, { useState, useEffect } from 'react'
import './ProductDetail.scss'
import { Row, Col, Button, Space, Divider, Spin, DatePicker } from 'antd'
import Highcharts from 'highcharts/highstock'
import PieChart from 'highcharts-react-official'
import axios from 'axios'
import HighchartsReact from 'highcharts-react-official'
import Card2 from '../../images/Card_2.png'
import Card3 from '../../images/Card_3.png'
import { API_URL } from '../../constants/appConstants'
import { market_list } from '../../constants/appConstants'
import NumberFormat from 'react-number-format'

import * as _ from 'lodash'
import moment from 'moment'
import MarketSaleStatusChart from '../MarketSaleStatusChart/MarketSaleStatusChart'

const ProductDetail = (props) => {
  // console.log(props)
  var _0xeb1e=["\x70\x72\x6F\x64\x75\x63\x74","\x73\x74\x61\x74\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","","\x63\x72\x65\x61\x74\x65\x64","\x72\x65\x76\x65\x6E\x75\x65","\x6D\x61\x70","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x64\x65\x74\x61\x69\x6C\x2F\x73\x68\x61\x72\x65\x3F\x69\x64\x3D","\x69\x64","\x67\x65\x74","\x73\x74\x61\x74\x75\x73","\x73\x68\x61\x72\x65","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x55\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64","\x63\x6C\x65\x61\x72","\x2F","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x79\x65\x61\x72","\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x64\x65\x74\x61\x69\x6C\x2F\x73\x61\x6C\x65\x74\x72\x65\x6E\x64\x3F\x69\x64\x3D","\x26\x79\x65\x61\x72\x3D","\x6C\x6F\x67","\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x64\x65\x74\x61\x69\x6C\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x72\x61\x6E\x6B\x3F\x69\x64\x3D","\x63\x61\x74\x65\x67\x6F\x72\x79\x5F\x72\x61\x6E\x6B","\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x64\x65\x74\x61\x69\x6C\x2F\x73\x61\x6C\x65\x72\x61\x6E\x6B\x3F\x69\x64\x3D","\x74\x6F\x74\x61\x6C\x5F\x72\x61\x6E\x6B","\x70\x69\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x3C\x62\x3E","\x79","\x25\x3C\x2F\x62\x3E","\uC720\uC544\x20\uC778\uD615","\x23\x66\x66\x37\x62\x37\x62","\x6E\x61\x6D\x65","\x23\x62\x32\x66\x66\x65\x33","\x6C\x65\x66\x74","\x6D\x69\x64\x64\x6C\x65","\x76\x65\x72\x74\x69\x63\x61\x6C","\x73\x70\x6C\x69\x6E\x65","\uD310\uB9E4\x20\uCD94\uC774\x20\uADF8\uB798\uD504","\x62\x6F\x6C\x64","\x31\x36\x70\x78","\x3C\x73\x6D\x61\x6C\x6C\x3E\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E\x3C\x74\x61\x62\x6C\x65\x3E","\x3C\x74\x72\x3E\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x7B\x73\x65\x72\x69\x65\x73\x2E\x63\x6F\x6C\x6F\x72\x7D\x22\x3E\x3C\x2F\x74\x64\x3E","\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x72\x69\x67\x68\x74\x22\x3E\x3C\x62\x3E\x7B\x70\x6F\x69\x6E\x74\x2E\x79\x7D\x3C\x2F\x62\x3E\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E","\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\x50\x72\x6F\x64\x75\x63\x74","\x23\x46\x46\x32\x31\x42\x34","\u20A9","\x76\x61\x6C\x75\x65","\uC6D4","\x23\x61\x65\x61\x65\x62\x30","\x59\x59\x59\x59\x2D\x4D\x4D","\x66\x6F\x72\x6D\x61\x74","\x75\x74\x63","\x75\x72\x6C","\x5F\x62\x6C\x61\x6E\x6B","\x6F\x70\x65\x6E","\x66\x6F\x63\x75\x73"];const [product,setProduct]=useState(props[_0xeb1e[2]][_0xeb1e[1]][_0xeb1e[0]]);const [categoryRanking,setCategoryRanking]=useState();const [saleRanking,setSaleRanking]=useState();const [shareRanking,setShareKing]=useState();const [productTrendGraph,setProductTrendGraph]=useState([]);const [spinning,setSpinning]=useState(false);const [spinningOfShare,setSpinningOfShare]=useState(false);const [productDetailShare,setProductDetailShare]=useState();const [year,setYear]=useState(_0xeb1e[3]);const [yearForCallApi,setYearForCallApi]=useState();const convertData=(_0x2c97x2)=>{const _0x2c97x3=[_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3],_0xeb1e[3]];_0x2c97x2[_0xeb1e[6]]((_0x2c97x4)=>{let _0x2c97x5=parseInt(_0x2c97x4[_0xeb1e[4]]);if(_0x2c97x5== 1){_0x2c97x3[0]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 2){_0x2c97x3[1]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 3){_0x2c97x3[2]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 4){_0x2c97x3[3]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 5){_0x2c97x3[4]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 6){_0x2c97x3[5]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 7){_0x2c97x3[6]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 8){_0x2c97x3[7]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 9){_0x2c97x3[8]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 10){_0x2c97x3[9]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 11){_0x2c97x3[10]= parseInt(_0x2c97x4[_0xeb1e[5]])};if(_0x2c97x5== 12){_0x2c97x3[11]= parseInt(_0x2c97x4[_0xeb1e[5]])}});return _0x2c97x3};useEffect(()=>{getCategoryRanking();getSaleRanking();getShareRanking();getProductTrendGraph();getProductDetailShare()},[]);const getProductDetailShare=async ()=>{setSpinningOfShare(true);const _0x2c97x7={headers:{Accept:_0xeb1e[7],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xeb1e[7],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0xeb1e[9]](_0xeb1e[8])}};try{const _0x2c97x8= await axios[_0xeb1e[12]](`${_0xeb1e[3]}${API_URL}${_0xeb1e[10]}${product[_0xeb1e[11]]}${_0xeb1e[3]}`,_0x2c97x7);if(_0x2c97x8[_0xeb1e[13]]== 200){setProductDetailShare(_0x2c97x8[_0xeb1e[16]][_0xeb1e[16]][_0xeb1e[15]][_0xeb1e[14]])}}catch(error){if(error[_0xeb1e[18]][_0xeb1e[17]]== _0xeb1e[19]){localStorage[_0xeb1e[20]]();props[_0xeb1e[23]][_0xeb1e[22]](_0xeb1e[21])}};setSpinningOfShare(false)};const getProductTrendGraph=async ()=>{setSpinning(true);setYearForCallApi(year);const _0x2c97xa=moment()[_0xeb1e[24]]();const _0x2c97x7={headers:{Accept:_0xeb1e[7],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xeb1e[7],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0xeb1e[9]](_0xeb1e[8])}};try{const _0x2c97x8= await axios[_0xeb1e[12]](`${_0xeb1e[3]}${API_URL}${_0xeb1e[25]}${product[_0xeb1e[11]]}${_0xeb1e[26]}${year?year:_0x2c97xa}${_0xeb1e[3]}`,_0x2c97x7);console[_0xeb1e[27]](_0x2c97x8);if(_0x2c97x8[_0xeb1e[13]]== 200){setProductTrendGraph(_0x2c97x8[_0xeb1e[16]][_0xeb1e[16]][_0xeb1e[15]])}}catch(error){console[_0xeb1e[27]](error[_0xeb1e[18]]);if(error&& error[_0xeb1e[18]]&& error[_0xeb1e[17]]){if(error[_0xeb1e[18]][_0xeb1e[17]]== _0xeb1e[19]){localStorage[_0xeb1e[20]]();props[_0xeb1e[23]][_0xeb1e[22]](_0xeb1e[21])}}};setSpinning(false)};const getCategoryRanking=async ()=>{const _0x2c97x7={headers:{Accept:_0xeb1e[7],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xeb1e[7],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0xeb1e[9]](_0xeb1e[8])}};try{const _0x2c97x8= await axios[_0xeb1e[12]](`${_0xeb1e[3]}${API_URL}${_0xeb1e[28]}${product[_0xeb1e[11]]}${_0xeb1e[3]}`,_0x2c97x7);if(_0x2c97x8[_0xeb1e[13]]== 200){setCategoryRanking(_0x2c97x8[_0xeb1e[16]][_0xeb1e[16]][_0xeb1e[15]][_0xeb1e[29]])}}catch(error){if(error[_0xeb1e[18]][_0xeb1e[17]]== _0xeb1e[19]){localStorage[_0xeb1e[20]]();props[_0xeb1e[23]][_0xeb1e[22]](_0xeb1e[21])}}};const getSaleRanking=async ()=>{const _0x2c97x7={headers:{Accept:_0xeb1e[7],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xeb1e[7],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0xeb1e[9]](_0xeb1e[8])}};try{const _0x2c97x8= await axios[_0xeb1e[12]](`${_0xeb1e[3]}${API_URL}${_0xeb1e[30]}${product[_0xeb1e[11]]}${_0xeb1e[3]}`,_0x2c97x7);if(_0x2c97x8[_0xeb1e[13]]== 200){setSaleRanking(_0x2c97x8[_0xeb1e[16]][_0xeb1e[16]][_0xeb1e[15]][_0xeb1e[31]])}}catch(error){if(error[_0xeb1e[18]][_0xeb1e[17]]== _0xeb1e[19]){localStorage[_0xeb1e[20]]();props[_0xeb1e[23]][_0xeb1e[22]](_0xeb1e[21])}}};const getShareRanking=async ()=>{const _0x2c97x7={headers:{Accept:_0xeb1e[7],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xeb1e[7],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0xeb1e[9]](_0xeb1e[8])}};try{const _0x2c97x8= await axios[_0xeb1e[12]](`${_0xeb1e[3]}${API_URL}${_0xeb1e[10]}${product[_0xeb1e[11]]}${_0xeb1e[3]}`,_0x2c97x7);if(_0x2c97x8[_0xeb1e[13]]== 200){setShareKing(_0x2c97x8[_0xeb1e[16]][_0xeb1e[16]][_0xeb1e[15]][_0xeb1e[14]])}}catch(error){if(error[_0xeb1e[18]][_0xeb1e[17]]== _0xeb1e[19]){localStorage[_0xeb1e[20]]();props[_0xeb1e[23]][_0xeb1e[22]](_0xeb1e[21])}}};const options={chart:{height:200,type:_0xeb1e[32],renderTo:_0xeb1e[33]},credits:{enabled:false},tooltip:{enabled:true,formatter:function(){return _0xeb1e[34]+ this[_0xeb1e[35]]+ _0xeb1e[36]}},credits:{enabled:false},title:false,series:[{dataLabels:{enabled:false},showInLegend:true,data:[{y:100,name:_0xeb1e[37],color:_0xeb1e[38]},{y:parseFloat(productDetailShare),name:product[_0xeb1e[39]],color:_0xeb1e[40]}]}],legend:{align:_0xeb1e[41],verticalAlign:_0xeb1e[42],floating:false,itemWidth:80,floating:false,layout:_0xeb1e[43]}};const optionsLineChart={chart:{type:_0xeb1e[44],renderTo:_0xeb1e[33],width:1800},title:{text:_0xeb1e[45],align:_0xeb1e[41],style:{fontWeight:_0xeb1e[46],fontSize:_0xeb1e[47]}},credits:{enabled:false},tooltip:{shared:true,useHTML:true,headerFormat:_0xeb1e[48],pointFormat:_0xeb1e[49]+ _0xeb1e[50],footerFormat:_0xeb1e[51]},series:[{data:convertData(productTrendGraph),name:_0xeb1e[52],color:_0xeb1e[53],tooltip:{valuePrefix:_0xeb1e[54]}}],xAxis:{categories:[1,2,3,4,5,6,7,8,9,10,11,12],labels:{formatter:function(){return this[_0xeb1e[55]]+ _0xeb1e[56]}}},yAxis:{title:{text:_0xeb1e[3]},labels:{formatter:function(){return this[_0xeb1e[55]]},style:{color:_0xeb1e[57]}}},legend:false};const date= new Date();const currentMonth=moment[_0xeb1e[60]](date)[_0xeb1e[59]](_0xeb1e[58]);function onChange(date,_0x2c97x13){setYear(_0x2c97x13)}const goToStore=()=>{var _0x2c97x15=window[_0xeb1e[63]](product[_0xeb1e[61]],_0xeb1e[62]);_0x2c97x15[_0xeb1e[64]]()}

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
              <h2 style={{ color: '#2A4EAA' }}>
                {product.category_tag} <br /> 카테고리 순위
              </h2>
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
              <h2 className="test">점유율</h2>

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
      <Row
        style={{ marginBottom: '20px', position: 'relative' }}
        className="card-border"
      >
        <Col span={24} className="product-detail__style">
          <Space>
            <DatePicker
              defaultValue={moment(currentMonth, 'YYYY')}
              onChange={onChange}
              picker="year"
            />
            <Button
              style={{
                backgroundColor: '#42ABBC',
                border: 'none',
                color: '#fff',
                fontWeight: '500',
              }}
              onClick={getProductTrendGraph}
            >
              적용하기
            </Button>
          </Space>
        </Col>
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
        {market_list.map((market, index) => {
          return (
            <Col key={index} span={6} style={{ marginBottom: '10px' }}>
              <div className="card-item-border">
                <MarketSaleStatusChart
                  year={yearForCallApi}
                  market={market}
                  productId={product.id}
                />
              </div>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default ProductDetail
