import React, { useState, useEffect } from 'react'
import { Button, DatePicker, Row, Col, Table, Modal, Select } from 'antd'
import Filter from './Filter'
import Chart from './Chart'
import './ProductSearch.scss'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { LineOutlined } from '@ant-design/icons'
import * as _ from 'lodash'
import moment from 'moment';
import NumberFormat from 'react-number-format'
import saleStatusApi from '../../api/SaleStatusAPI'

const { Option } = Select

const ProductSearch = (props) => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [lastIndex, setLastIndex] = useState(0)

  const [filters, setFilters] = useState()

  const [params, setParams] = useState()

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    getProducts()
  }, [filters, lastIndex])

  const showModal = () => {
    setVisible(true)
  }
  const handleOk = (values) => {
    setLastIndex(0)
    setFilters(values)
    setVisible(false)
  }

  const getProducts = async () => {
    setLoading(true)
    let params = ''

    if (filters && filters.markets && filters.markets.length) {
      _.each(filters.markets, (market, index) => {
        params += `&market[]=${market}`
      })
    }

    for (const key in filters) {
      if (filters[key]) {
        params += `&${key}=${filters[key]}`
      }
    }
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }
    try {
      const res = await axios.get(
        `${API_URL}/product/search?
        lastIndex=${lastIndex}
        ${params}`,
        config,
      )

      if (res.status == 200) {
        if (lastIndex > 0) {
          setProductList(productList.concat(res.data.data.result))
        } else {
          setProductList(res.data.data.result)
        }
      }
      setLoading(false)
    } catch (error) {
      if (error.response.statusText == "Unauthorized") {
        localStorage.clear()

        props.history.push('/')
      }

      setLoading(false)
    }
  }
  const handleCancel = (e) => {
    setVisible(false)
  }

  // Of Modal Chart
  const [visibleTwo, setVisibleTwo] = useState(false)
  const showModalTwo = () => {
    setVisibleTwo(true)
  }
  const handleOkTwo = (e) => {
    setVisibleTwo(false)
  }
  const handleCancelTwo = (e) => {
    setVisibleTwo(false)
  }

  const goToWeb = (e, record) => {
    e.stopPropagation()
    var win = window.open(record.url, '_blank')
    win.focus()
  }

  const renderName = (record) => {
    return (
      <div style={{ display: 'flex' }}>
        <Button
          onClick={(e) => goToWeb(e, record)}
          style={{ marginRight: '5px' }}
          className="btn-light-orange"
        >
          판매 사이트 가기
        </Button>
        <div>{record.name}</div>
      </div>
    )
  }

  // Of Table
  const [countSelected, setCountSelected] = useState(0)
  const columns = [
    {
      title: '상품명',
      render: renderName,
    },
    {
      title: '벤더명',
      dataIndex: 'bander_name',
    },
    {
      title: '카테고리',
      dataIndex: 'category_tag',
    },
    {
      title: '마켓명',
      dataIndex: 'market_name',
    },
    {
      title: '가격',
      render: record => <NumberFormat value={record.seller_price} displayType={'text'} thousandSeparator={true} />
    },
    {
      title: '리뷰',
      render: record => <NumberFormat value={record.review} displayType={'text'} thousandSeparator={true} />

    },
    {
      title: '판매수',
      render: record => <NumberFormat value={record.sold} displayType={'text'} thousandSeparator={true} />

    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      )
      setCountSelected(selectedRows.length)
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows)
      setCountSelected(selectedRows.length)
    },
  }

  // RanggePicker
  const { RangePicker } = DatePicker
  const [valueDate, setValueDate] = useState([])
  const convertToTimeStamp = (strDate) => {
    var datum = Date.parse(strDate)
    return datum / 1000
  }
  const onChange = (dateString) => {
    // console.log('Formatted Selected Time: ', dateString);
    let startDay = convertToTimeStamp(dateString[0])
    let endDay = convertToTimeStamp(dateString[1])
    setValueDate([startDay, endDay])
  }

  const getDateFilter = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Auth-Token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjIwMTcwMTAxMDAwMCJ9.eyJzaWQiOiIxMjM0NTY3ODkwMTIzNDU2Nzg5MCIsImNvZGUiOiJhYmNkZXJmZ2hpIiwic2Vzc2lvbiI6IklHUURQeTYrSWZPR003OUZqT3dDIn0.wPM7MqaXIlbJxZ8Mb4Qgd2vhiB1KIBpKmGtVbF7eZtg',
      },
    }

    try {
      const { data } = await axios.get(
        `${API_URL}/product?keyword=kid&start_date=${valueDate[0]}&end_date=${valueDate[1]
        }&last_id=${100}`,
        config,
      )
      // console.log(data)
    } catch (error) {
      if (error.response.statusText == "Unauthorized") {
        localStorage.clear()

        props.history.push('/')
      }
    }
  }

  const getExcelFile = async () => {
    const lengthData = productList.length;

    let params = `lastIndex=${productList[lengthData - 1].id}`

    if (filters && filters.markets && filters.markets.length) {
      _.each(filters.markets, (market, index) => {
        params += `&market[]=${market}`
      })
    }

    for (const key in filters) {
      if (filters[key]) {
        params += `&${key}=${filters[key]}`
      }
    }


    saleStatusApi
    .getExcelFileProduct(params)
    .then((value) => {
      console.log('Success')
      fileDownload(value, 'data.xls')
      setLoading(false)
    })
    .catch((err) => {
      console.log(err.response)
      setLoading(false)
    })

    // const config = {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-Auth-Token': localStorage.getItem('token-user'),

    //   },
    // }
    // console.log(config)


    // try {
    //   const { data } = await axios.get(
    //     `${API_URL}/product/export?lastIndex=${productList[lengthData - 1].id}${params}`,
    //     config,
    //   )
    //   fileDownload(data, 'data.xls')
    // } catch (error) {
    //   if (error.response.statusText == "Unauthorized") {
    //     localStorage.clear()

    //     props.history.push('/')
    //   }
    // }
  }

  const selectAfter = (
    <Select defaultValue="카테고리" className="select-after">
      <Option value="카테고리">카테고리</Option>
      <Option value="밴더명">밴더명</Option>
      <Option value="제품명">제품명</Option>
    </Select>
  )

  const onChangeSearch = (e) => {
    setParams({ ...params, key: e.target.value })
  }

  const onChangeStartDate = (date, dateString) => {
    setStartDate(moment(dateString).unix())
  }

  const onChangeEndDate = (date, dateString) => {
    setEndDate(moment(dateString).unix())
  }

  const loadMore = async () => {
    const lengthData = productList.length;
    setLastIndex(productList[lengthData - 1].id)
  }

  return (
    <div className="product-search">
      <Row className="card-border" style={{ marginBottom: '5rem' }}>
        <Col span={24} className="wraper-actions">
          <div>
            <Button
              className="main-btn-style border-radius-6"
              onClick={showModal}
            >
              필터
            </Button>
          </div>
          {/* <div className="filter-date">
            <Space>
              <DatePicker onChange={onChangeStartDate} />
              <LineOutlined style={{ width: '40px', height: '8px', color: '#6A7187' }} />
              <DatePicker onChange={onChangeEndDate} />

              <Button className="btn-light-blue  border-radius-6" onClick={onSearch} style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
            </Space>
          </div> */}
          <div className="input-product-search" style={{ display: 'flex' }}>
            {/* <Input style={{ marginRight: '5px' }} placeholder="Search" onChange={onChangeSearch} />
            <Select defaultValue="0" className="select-after">
              <Option value="0">밴더명</Option>
              <Option value="1">제품명</Option>
            </Select> */}
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
            loading={loading}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={productList}
            scroll={{ x: 1300 }}
            pagination={false}
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
