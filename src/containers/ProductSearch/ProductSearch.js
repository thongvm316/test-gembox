import React, { useState, useEffect } from 'react'
import { Button, DatePicker, Row, Col, Table, Modal, Select } from 'antd'
import Filter from './Filter'
import Chart from './Chart'
import './ProductSearch.scss'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import fileDownload from 'js-file-download'
import * as _ from 'lodash'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import NumberFormat from 'react-number-format'
import saleStatusApi from '../../api/SaleStatusAPI'

const { Option } = Select

const ProductSearch = (props) => {
  var _0xf4d8=["\x63\x61\x74\x65\x67\x6F\x72\x79","\uC804\uCCB4\uBCF4\uAE30","","\x6D\x61\x72\x6B\x65\x74\x73","\x6C\x65\x6E\x67\x74\x68","\x26\x6D\x61\x72\x6B\x65\x74\x5B\x5D\x3D","\x65\x61\x63\x68","\x26","\x3D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x73\x65\x61\x72\x63\x68\x3F\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x3D","\x67\x65\x74","\x6C\x6F\x67","\x73\x74\x61\x74\x75\x73","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x63\x6F\x6E\x63\x61\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74","\x55\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64","\x63\x6C\x65\x61\x72","\x2F","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x6F\x62\x6A\x65\x63\x74","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x75\x72\x6C","\x5F\x62\x6C\x61\x6E\x6B","\x6F\x70\x65\x6E","\x66\x6F\x63\x75\x73"];const [productList,setProductList]=useState([]);const [loading,setLoading]=useState(false);const [startDate,setStartDate]=useState();const [endDate,setEndDate]=useState();const [lastIndex,setLastIndex]=useState(0);const [filters,setFilters]=useState();const [params,setParams]=useState();const [visible,setVisible]=useState(false);useEffect(()=>{getProducts()},[filters,lastIndex]);const showModal=()=>{setVisible(true)};const handleOk=(_0x1becx3)=>{setLastIndex(0);setFilters(_0x1becx3);setVisible(false)};const getProducts=async ()=>{setLoading(true);if(filters&& filters[_0xf4d8[0]]&& filters[_0xf4d8[0]]=== _0xf4d8[1]){delete filters[_0xf4d8[0]]};let _0x1becx5=_0xf4d8[2];if(filters&& filters[_0xf4d8[3]]&& filters[_0xf4d8[3]][_0xf4d8[4]]){_[_0xf4d8[6]](filters[_0xf4d8[3]],(_0x1becx6,_0x1becx7)=>{_0x1becx5+= `${_0xf4d8[5]}${_0x1becx6}${_0xf4d8[2]}`})};for(const _0x1becx8 in filters){if(filters[_0x1becx8]){_0x1becx5+= `${_0xf4d8[7]}${_0x1becx8}${_0xf4d8[8]}${filters[_0x1becx8]}${_0xf4d8[2]}`}};const _0x1becx9={headers:{Accept:_0xf4d8[9],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xf4d8[9],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0xf4d8[11]](_0xf4d8[10])}};try{const _0x1becxa= await axios[_0xf4d8[13]](`${_0xf4d8[2]}${API_URL}${_0xf4d8[12]}${lastIndex}${_0xf4d8[2]}${_0x1becx5}${_0xf4d8[2]}`,_0x1becx9);console[_0xf4d8[14]](_0x1becxa);if(_0x1becxa[_0xf4d8[15]]== 200){if(lastIndex> 0){setProductList(productList[_0xf4d8[18]](_0x1becxa[_0xf4d8[17]][_0xf4d8[17]][_0xf4d8[16]]))}else {setProductList(_0x1becxa[_0xf4d8[17]][_0xf4d8[17]][_0xf4d8[16]])}};setLoading(false)}catch(error){if(error&& error[_0xf4d8[19]]&& error[_0xf4d8[19]][_0xf4d8[20]]== _0xf4d8[21]){localStorage[_0xf4d8[22]]();props[_0xf4d8[25]][_0xf4d8[24]](_0xf4d8[23])};setLoading(false)};if( typeof filters=== _0xf4d8[26]){filters[_0xf4d8[0]]= _0xf4d8[1]}};const handleCancel=(_0x1becxc)=>{setVisible(false)};const [visibleTwo,setVisibleTwo]=useState(false);const showModalTwo=()=>{setVisibleTwo(true)};const handleOkTwo=(_0x1becxc)=>{setVisibleTwo(false)};const handleCancelTwo=(_0x1becxc)=>{setVisibleTwo(false)};const goToWeb=(_0x1becxc,_0x1becx11)=>{_0x1becxc[_0xf4d8[27]]();var _0x1becx12=window[_0xf4d8[30]](_0x1becx11[_0xf4d8[28]],_0xf4d8[29]);_0x1becx12[_0xf4d8[31]]()}

  /* ---- Of Table ---- */
  var _0x87f9=[];const [stateSort,setStateSort]=useState({sortedInfo:null});let {sortedInfo}=stateSort;sortedInfo= sortedInfo|| {};const handleChangeTable=(_0xb71bx2,_0xb71bx3,_0xb71bx4)=>{setStateSort({sortedInfo:_0xb71bx4})}

  var _0x351a=["\x6C\x65\x6E\x67\x74\x68","\x69\x64","\x73\x65\x6C\x65\x63\x74\x65\x64\x52\x6F\x77\x4B\x65\x79\x73\x3A\x20","","\x73\x65\x6C\x65\x63\x74\x65\x64\x52\x6F\x77\x73\x3A\x20","\x6C\x6F\x67","\x70\x61\x72\x73\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x65\x79\x4A\x68\x62\x47\x63\x69\x4F\x69\x4A\x49\x55\x7A\x49\x31\x4E\x69\x49\x73\x49\x6E\x52\x35\x63\x43\x49\x36\x49\x6B\x70\x58\x56\x43\x49\x73\x49\x6D\x56\x34\x63\x43\x49\x36\x49\x6A\x49\x77\x4D\x54\x63\x77\x4D\x54\x41\x78\x4D\x44\x41\x77\x4D\x43\x4A\x39\x2E\x65\x79\x4A\x7A\x61\x57\x51\x69\x4F\x69\x49\x78\x4D\x6A\x4D\x30\x4E\x54\x59\x33\x4F\x44\x6B\x77\x4D\x54\x49\x7A\x4E\x44\x55\x32\x4E\x7A\x67\x35\x4D\x43\x49\x73\x49\x6D\x4E\x76\x5A\x47\x55\x69\x4F\x69\x4A\x68\x59\x6D\x4E\x6B\x5A\x58\x4A\x6D\x5A\x32\x68\x70\x49\x69\x77\x69\x63\x32\x56\x7A\x63\x32\x6C\x76\x62\x69\x49\x36\x49\x6B\x6C\x48\x55\x55\x52\x51\x65\x54\x59\x72\x53\x57\x5A\x50\x52\x30\x30\x33\x4F\x55\x5A\x71\x54\x33\x64\x44\x49\x6E\x30\x2E\x77\x50\x4D\x37\x4D\x71\x61\x58\x49\x6C\x62\x4A\x78\x5A\x38\x4D\x62\x34\x51\x67\x64\x32\x76\x68\x69\x42\x31\x4B\x49\x42\x70\x4B\x6D\x47\x74\x56\x62\x46\x37\x65\x5A\x74\x67","\x2F\x70\x72\x6F\x64\x75\x63\x74\x3F\x6B\x65\x79\x77\x6F\x72\x64\x3D\x6B\x69\x64\x26\x73\x74\x61\x72\x74\x5F\x64\x61\x74\x65\x3D","\x26\x65\x6E\x64\x5F\x64\x61\x74\x65\x3D","\x26\x6C\x61\x73\x74\x5F\x69\x64\x3D","\x67\x65\x74","\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x55\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64","\x63\x6C\x65\x61\x72","\x2F","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x3D","\x6D\x61\x72\x6B\x65\x74\x73","\x26\x6D\x61\x72\x6B\x65\x74\x5B\x5D\x3D","\x65\x61\x63\x68","\x26","\x3D","\x63\x61\x74\x63\x68","\x53\x75\x63\x63\x65\x73\x73","\x64\x61\x74\x61\x2E\x78\x6C\x73","\x74\x68\x65\x6E","\x67\x65\x74\x45\x78\x63\x65\x6C\x46\x69\x6C\x65\x50\x72\x6F\x64\x75\x63\x74","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x75\x6E\x69\x78"];const loadMore=()=>{const _0x4859x2=productList[_0x351a[0]];setLastIndex(productList[_0x4859x2- 1][_0x351a[1]])};const [countSelected,setCountSelected]=useState(0);const rowSelection={onChange:(_0x4859x4,_0x4859x5)=>{console[_0x351a[5]](`${_0x351a[2]}${_0x4859x4}${_0x351a[3]}`,_0x351a[4],_0x4859x5);setCountSelected(_0x4859x5[_0x351a[0]])},onSelect:(_0x4859x6,_0x4859x7,_0x4859x5)=>{console[_0x351a[5]](_0x4859x6,_0x4859x7,_0x4859x5)},onSelectAll:(_0x4859x7,_0x4859x5,_0x4859x8)=>{console[_0x351a[5]](_0x4859x7,_0x4859x5,_0x4859x8);setCountSelected(_0x4859x5[_0x351a[0]])}};const {RangePicker}=DatePicker;const [valueDate,setValueDate]=useState([]);const convertToTimeStamp=(_0x4859xa)=>{var _0x4859xb=Date[_0x351a[6]](_0x4859xa);return _0x4859xb/ 1000};const onChange=(_0x4859xd)=>{let _0x4859xe=convertToTimeStamp(_0x4859xd[0]);let _0x4859xf=convertToTimeStamp(_0x4859xd[1]);setValueDate([_0x4859xe,_0x4859xf])};const getDateFilter=async ()=>{const _0x4859x11={headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x351a[7],Accept:_0x351a[7],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':_0x351a[8]}};try{const {data}= await axios[_0x351a[12]](`${_0x351a[3]}${API_URL}${_0x351a[9]}${valueDate[0]}${_0x351a[10]}${valueDate[1]}${_0x351a[11]}${100}${_0x351a[3]}`,_0x4859x11)}catch(error){if(error[_0x351a[14]][_0x351a[13]]== _0x351a[15]){localStorage[_0x351a[16]]();props[_0x351a[19]][_0x351a[18]](_0x351a[17])}}};const getExcelFile=async ()=>{const _0x4859x2=productList[_0x351a[0]];let _0x4859x13=`${_0x351a[20]}${productList[_0x4859x2- 1][_0x351a[1]]}${_0x351a[3]}`;if(filters&& filters[_0x351a[21]]&& filters[_0x351a[21]][_0x351a[0]]){_[_0x351a[23]](filters[_0x351a[21]],(_0x4859x14,_0x4859x15)=>{_0x4859x13+= `${_0x351a[22]}${_0x4859x14}${_0x351a[3]}`})};for(const _0x4859x16 in filters){if(filters[_0x4859x16]){_0x4859x13+= `${_0x351a[24]}${_0x4859x16}${_0x351a[25]}${filters[_0x4859x16]}${_0x351a[3]}`}};saleStatusApi[_0x351a[30]](_0x4859x13)[_0x351a[29]]((_0x4859x18)=>{console[_0x351a[5]](_0x351a[27]);fileDownload(_0x4859x18,_0x351a[28]);setLoading(false)})[_0x351a[26]]((_0x4859x17)=>{console[_0x351a[5]](_0x4859x17[_0x351a[14]]);setLoading(false)})};const onChangeSearch=(_0x4859x1a)=>{setParams({...params,key:_0x4859x1a[_0x351a[32]][_0x351a[31]]})};const onChangeStartDate=(_0x4859x1c,_0x4859xd)=>{setStartDate(moment(_0x4859xd)[_0x351a[33]]())};const onChangeEndDate=(_0x4859x1c,_0x4859xd)=>{setEndDate(moment(_0x4859xd)[_0x351a[33]]())}

  const columns = [
    {
      title: '상품명',
      dataIndex: 'name',
    },
    {
      title: '벤더명',
      dataIndex: 'bander_name',
    },
    {
      title: '카테고리',
      dataIndex: 'category_tag',
      // sorter: (a, b) => a.category_tag.length - b.category_tag.length,
    },
    {
      title: '마켓명',
      dataIndex: 'market_name',
      // sorter: (a, b) => a.market_name.length - b.market_name.length,
    },
    {
      // title: <Popover content={<SortSellerPrice />}>가격</Popover>,
      title: '가격',
      render: (record) => {
        return (
          <NumberFormat
            value={record.seller_price}
            displayType={'text'}
            thousandSeparator={true}
          />
        )
      },
      defaultSortOrder: false,
      sorter: (a, b) => a.seller_price - b.seller_price,
    },
    {
      // title: <Popover content={<SortReview />}>리뷰</Popover>,
      title: '리뷰',
      key: '리뷰',
      render: (record) => (
        <NumberFormat
          value={record.review}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      defaultSortOrder: false,
      sorter: (a, b) => a.review - b.review,
    },
    {
      // title: <Popover content={<SortSold />}>판매수</Popover>,
      title: '판매수',
      key: '판매수',
      render: (record) => (
        <NumberFormat
          value={record.sold}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      defaultSortOrder: false,
      sorter: (a, b) => a.sold - b.sold,
    },
  ]
  
  return (
    <div className="product-search">
      <Row className="card-border" style={{ marginBottom: '2rem' }}>
        <Col span={24} className="wraper-actions">
          <div>
            <Button
              className="main-btn-style border-radius-6"
              onClick={showModal}
              disabled={loading}
            >
              검색
            </Button>
          </div>
          <div className="input-product-search" style={{ display: 'flex' }}>
            <Button
              disabled={loading}
              className="btn-light-blue border-radius-6"
              onClick={getExcelFile}
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
            >
              EXCEL
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="res-small-device card-border">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={productList}
            pagination={false}
            loading={loading}
            rowKey={(record) => uuidv4()}
            scroll={{ x: 1300 }}
            onChange={handleChangeTable}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  let state = { product: record }

                  if (filters && filters.start && filters.end) {
                    state.data = { start: filters.start, end: filters.end }
                  }

                  props.history.push({
                    pathname: '/product-detail',
                    state,
                  })
                },
              }
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
          {productList.length ? (
            <Button
              onClick={loadMore}
              className="btn-light-blue border-radius-6"
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
              disabled={loading}
            >
              LOAD MORE
            </Button>
          ) : (
            ''
          )}
        </Col>
      </Row>

      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        className="style-btn"
        footer={false}
      >
        <Filter onOk={(values) => handleOk(values)} />
      </Modal>

      <Modal
        visible={visibleTwo}
        onOk={handleOkTwo}
        onCancel={handleCancelTwo}
        width={1000}
        className="style-btn"
        sorter={true}
        footer={[
          <Button key="back" onClick={handleOkTwo}>
            Cancel
          </Button>,
          <Button
            style={{
              backgroundColor: '#f4f2ff',
              border: 'none',
              color: '#6b5db0',
              fontWeight: 700,
            }}
            key="submit"
            type="primary"
            onClick={handleCancelTwo}
          >
            OK
          </Button>,
        ]}
      >
        <Chart />
      </Modal>
    </div>
  )
}

export default ProductSearch
