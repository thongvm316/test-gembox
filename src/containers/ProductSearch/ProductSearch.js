import React, { useState } from 'react'
import { Button, DatePicker, Row, Col, Input, Space, Table, Modal } from 'antd';
import Filter from './Filter'
import Chart from './Chart'
import './ProductSearch.scss'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'

const ProductSearch = (props) => {
  // Of Modal Filter
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  };
  const handleOk = e => {
    setVisible(false)
  };
  const handleCancel = e => {
    setVisible(false)
  };

  // Of Modal Chart
  const [visibleTwo, setVisibleTwo] = useState(false)
  const showModalTwo = () => {
    setVisibleTwo(true)
  };
  const handleOkTwo = e => {
    setVisibleTwo(false)
  };
  const handleCancelTwo = e => {
    setVisibleTwo(false)
  };

  // Of Table
  const [countSelected, setCountSelected] = useState(0)
  const columns = [
    {
      title: '마켓명',
      dataIndex: '마켓명',
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
    {
      title: '리뷰',
      dataIndex: '리뷰',
    },
    {
      title: '판매수',
      dataIndex: '판매수',
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      마켓명: `Edward King ${i}`,
      벤더명: 32,
      카테고리: `London, Park Lane no. ${i}`,
      상품명: '유아완구(category)',
      가격: '￦55,500',
      리뷰: 140.244,
      판매수: '1,000,000,000,000'
    });
  }

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

  // RanggePicker
  const { RangePicker } = DatePicker;
  const [valueDate, setValueDate] = useState([]);
  const convertToTimeStamp = (strDate) => {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }
  const onChange = (dateString) => {
    // console.log('Formatted Selected Time: ', dateString);
    let startDay = convertToTimeStamp(dateString[0])
    let endDay = convertToTimeStamp(dateString[1])
    setValueDate([startDay, endDay]);
  }

  const getDateFilter = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjIwMTcwMTAxMDAwMCJ9.eyJzaWQiOiIxMjM0NTY3ODkwMTIzNDU2Nzg5MCIsImNvZGUiOiJhYmNkZXJmZ2hpIiwic2Vzc2lvbiI6IklHUURQeTYrSWZPR003OUZqT3dDIn0.wPM7MqaXIlbJxZ8Mb4Qgd2vhiB1KIBpKmGtVbF7eZtg'
      }
    }

    try {
      const { data } = await axios.get(`${API_URL}/product?keyword=kid&start_date=${valueDate[0]}&end_date=${valueDate[1]}&last_id=${100}`, config)
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="product-search">
      <Row className="info-search" style={{ marginBottom: '5rem' }} justify='space-between' align='middle'>
        <Col className='style-col-1'>
          <Button onClick={showModal}>필터</Button>
          <Button onClick={showModalTwo}>선택된 항목 그래프 비교</Button>
        </Col>
        <Col className="date-picker">
          <Space direction="" size={12}>
            <RangePicker onChange={onChange} />
          </Space>
          <Button onClick={getDateFilter} style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
        </Col>
        <Col className='style-col-3'>
          <Input style={{ width: '392px' }} placeholder="Search" />
          <Button style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">EXCEL</Button>
        </Col>
      </Row>

      <Row className='res-small-device'>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1300 }}
            rowSelection={{ ...rowSelection, checkStrictly }}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  props.history.push({
                    pathname: '/product-detail',
                    state: { product: record }
                  })
                }
              }

            }}
          />
        </Col>
      </Row>

      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        className='style-btn'
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
                  </Button>,
          <Button style={{ backgroundColor: '#f4f2ff', border: 'none', color: '#6b5db0', fontWeight: 700 }} key="submit" type="primary" onClick={handleOk}>
            OK
                  </Button>
        ]}
      >
        <Filter />
      </Modal>

      <Modal
        visible={visibleTwo}
        onOk={handleOkTwo}
        onCancel={handleCancelTwo}
        width={1000}
        className='style-btn'
        footer={[
          <Button key="back" onClick={handleOkTwo}>
            Cancel
                </Button>,
          <Button style={{ backgroundColor: '#f4f2ff', border: 'none', color: '#6b5db0', fontWeight: 700 }} key="submit" type="primary" onClick={handleCancelTwo}>
            OK
                </Button>
        ]}
      >
        <Chart />
      </Modal>
    </div>
  )
}

export default ProductSearch
