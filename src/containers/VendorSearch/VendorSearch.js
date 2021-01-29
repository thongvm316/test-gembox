import React, { useState, useEffect } from 'react'
import { Button, DatePicker, Space, Input, Row, Col, Table, Select } from 'antd'
import { LineOutlined } from '@ant-design/icons'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import './VendorSearch.scss'
import moment from 'moment'
import fileDownload from 'js-file-download'
import NumberFormat from 'react-number-format'

const { Option } = Select

const VendorSearch = (props) => {
  const [vendors, setVendors] = useState([])
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [key, setKey] = useState()
  const [loading, setLoading] = useState(false)

  const [filter, setFilter] = useState()
  const [lastIndex, setLastIndex] = useState(0)

  // Table
  const [countSelected, setCountSelected] = useState(0)

  useEffect(() => {
    getVendor()
  }, [lastIndex])

  const columns = [
    {
      title: '벤더명',
      dataIndex: 'bander_name',
    },
    {
      title: '총 판매 상품 수',
      render: record => <NumberFormat value={record.product_count} displayType={'text'} thousandSeparator={true}/>

    },
    {
      title: '총 판매 매출',
      render: record => <NumberFormat value={record.revenue} displayType={'text'} thousandSeparator={true}/>

    },
    {
      title: '리뷰',
      render: record => <NumberFormat value={record.total_review} displayType={'text'} thousandSeparator={true}/>

    },
    {
      title: '판매수',
      render: record => <NumberFormat value={record.sale_count} displayType={'text'} thousandSeparator={true}/>

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
  const [checkStrictly, setCheckStrictly] = useState(false)

  // DatePicker
  const { RangePicker } = DatePicker

  const onChangeStartDate = (date, dateString) => {
    // setStartDate(moment(dateString).unix())
    setFilter({ ...filter, start: moment(dateString).unix() })
  }

  const onChangeEndDate = (date, dateString) => {
    // setEndDate(moment(dateString).unix())
    setFilter({ ...filter, end: moment(dateString).unix() })
  }

  function onOk(value) {
    console.log('onOk: ', value)
  }

  const onChangeSearch = (e) => {
    setFilter({ ...filter, key: e.target.value })
  }

  const getVendor = async () => {
    setLoading(true);
    let params = ''
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
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
        `${API_URL}/bander/search?lastIndex=${lastIndex}${params}`,
        config,
      )
      if (res.status == 200) {
        if (lastIndex > 0) {
          setVendors(vendors.concat(res.data.data.result))
        } else {
          setVendors(res.data.data.result)
        }
      }
    } catch (error) {
      if (error.response.statusText == "Unauthorized") {
        localStorage.clear()

        props.history.push('/')
      }
    }
    setLoading(false);

  }

  const loadMore = async () => {
    setLastIndex(lastIndex + 100)
  }

  const getExcelFile = async () => {
    let params = ''
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }

    const lengthData = vendors.length
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),

      },
    }
    try {
      const { data } = await axios.get(
        `${API_URL}/product/export?lastIndex=${lengthData}${params}`,
        config,
      )
      fileDownload(data, 'data.xls')
    } catch (error) {
      if (error.response.statusText == "Unauthorized") {
        localStorage.clear()

        props.history.push('/')
      }
    }
  }

  return (
    <div className="vendor-search">
      <Row className="card-border" style={{ marginBottom: '5rem' }}>
        <Col span={24} className="wraper-actions">
          <div>
            <Button
              className="main-btn-style border-radius-6"
              onClick={getVendor}
            >
              필터
            </Button>
          </div>
          <div className="filter-date">
            <Space>
              <DatePicker onChange={onChangeStartDate} />
              <LineOutlined
                style={{ width: '40px', height: '8px', color: '#6A7187' }}
              />
              <DatePicker onChange={onChangeEndDate} />

              {/* <Button className="btn-light-blue  border-radius-6" style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button> */}
            </Space>
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              className="border-radius-6"
              onChange={onChangeSearch}
              style={{ marginRight: '5px' }}
              placeholder="Search"
            />
            {/* <Select defaultValue="카테고리" className="select-after">
              <Option value="카테고리">카테고리</Option>
              <Option value="밴더명">밴더명</Option>
              <Option value="제품명">제품명</Option>
            </Select> */}
            <Button
              disabled={loading}
              onClick={getExcelFile}
              className="btn-light-blue border-radius-6"
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

      <Row className="card-border">
        <Col span={24}>
          <Table
            rowKey={(record, index) => index}
            loading={loading}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={vendors}
            scroll={{ x: 1300 }}
            pagination={false}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
          {vendors.length ? (
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
    </div>
  )
}

export default VendorSearch
