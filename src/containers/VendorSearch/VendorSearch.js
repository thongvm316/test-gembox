import React, { useState } from 'react'
import { Button, DatePicker, Space, Input, Row, Col, Table, Select } from 'antd';
import { LineOutlined } from '@ant-design/icons';
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import './VendorSearch.scss';
import moment from 'moment'

const { Option } = Select

const VendorSearch = () => {

  const [vendors, setVendors] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [key, setKey] = useState();


  // Table
  const [countSelected, setCountSelected] = useState(0)
  const columns = [
    {
      title: '마켓명',
      dataIndex: 'bander_name',
    },
    {
      title: '벤더명',
      dataIndex: '벤더명',
    },
    {
      title: '카테고리',
      dataIndex: '카테고리',
    },
    {
      title: '상품명',
      dataIndex: '상품명',
    },
    {
      title: '가격',
      dataIndex: '가격',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setCountSelected(selectedRows.length)

    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
      setCountSelected(selectedRows.length)
    },
  };
  const [checkStrictly, setCheckStrictly] = useState(false);

  // DatePicker
  const { RangePicker } = DatePicker;

  const onChangeStartDate = (date, dateString) => {
    setStartDate(moment(dateString).unix())

  }

  const onChangeEndDate = (date, dateString) => {
    setEndDate(moment(dateString).unix())

  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  const onChangeSearch = (e) => {
    setKey(e.target.value)
  }

  const getVendor = async () => {
    const config = {
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user')
      }
    }
    try {
      const res = await axios.get(`${API_URL}/bander/search?start=${startDate}&end=${endDate}&key=${key}`, config)
      if (res.status == 200){
        console.log(res.data.data.result)
        setVendors(res.data.data.result)
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="vendor-search">
      <Row className="card-border" style={{ marginBottom: '5rem' }}>
        <Col span={24} className="wraper-actions">
          <div>
            <Button className="main-btn-style border-radius-6" onClick={getVendor}>필터</Button>
          </div>
          <div className="filter-date">
            <Space>
              <DatePicker onChange={onChangeStartDate} />
              <LineOutlined style={{ width: '40px', height: '8px', color: '#6A7187' }} />
              <DatePicker onChange={onChangeEndDate} />

              <Button className="btn-light-blue  border-radius-6" style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
            </Space>
          </div>
          <div className="input-product-search" style={{ display: 'flex' }}>
            <Input onChange={onChangeSearch} style={{ marginRight: '5px' }} placeholder="Search" />
            <Select defaultValue="카테고리" className="select-after">
              <Option value="카테고리">카테고리</Option>
              <Option value="밴더명">밴더명</Option>
              <Option value="제품명">제품명</Option>
            </Select>
            <Button className="btn-light-blue border-radius-6" style={{ backgroundColor: '#71c4d5', border: 'none', marginLeft: '10px' }} type="primary">EXCEL</Button>
          </div>
        </Col>
      </Row>

      <Row className="card-border">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={vendors}
            scroll={{ x: 1300 }}
            rowSelection={{ ...rowSelection, checkStrictly }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default VendorSearch
