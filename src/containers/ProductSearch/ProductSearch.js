import React, { useState } from 'react'
import { Button, DatePicker, Row, Col, Input, Space, Table, Modal, Select } from 'antd';
import Filter from './Filter'
import Chart from './Chart'
import './ProductSearch.scss'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import fileDownload from 'js-file-download';
const { Option } = Select;

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

  const renderName = (record) => {
    return (
      <div style={{display: 'flex'}}>
        <Button style={{marginRight: '5px'}} className="btn-light-orange">판매 사이트 가기</Button>
        <div>{record.마켓명}</div>
      </div>
    )
  }

  // Of Table
  const [countSelected, setCountSelected] = useState(0)
  const columns = [
    {
      title: '상품명',
      render: renderName
    },
    {
      title: '벤더명',
      dataIndex: '벤더명',
    },
    {
      title: '카테고리',
      dataIndex: '카테고리',
      sorter: (a, b) => a.카테고리.length - b.카테고리.length,
    },
    {
      title: '마켓명',
      dataIndex: '마켓명',
      sorter: (a, b) => a.마켓명.length - b.마켓명.length,

    },
    {
      title: '가격',
      dataIndex: '가격',
      sorter: (a, b) => a.가격.length - b.가격.length,

    },
    {
      title: '리뷰',
      dataIndex: '리뷰',
      sorter: (a, b) => a.리뷰.length - b.리뷰.length,

    },
    {
      title: '판매수',
      dataIndex: '판매수',
      sorter: (a, b) => a.판매수.length - b.판매수.length,

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
      // console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getExcelFile = async () => {
    const config = {
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      }
    }
    try {
      const { data } = await axios.get(`${API_URL}/product/export?first=1&last=100`, {
        responseType: 'blob',
      }, config)
      fileDownload(data, 'data.xls');
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const selectAfter = (
    <Select defaultValue="카테고리" className="select-after">
      <Option value="카테고리">카테고리</Option>
      <Option value="밴더명">밴더명</Option>
      <Option value="제품명">제품명</Option>
    </Select>
  );


  return (
    <div className="product-search">
      <Row className="card-border" style={{ marginBottom: '5rem' }}>
        <Col span={24} className="wraper-actions">
          <div>
            <Button className="main-btn-style" onClick={showModal}>필터</Button>
            {/* <Button onClick={showModalTwo}>선택된 항목 그래프 비교</Button> */}
          </div>
          <div>
            <RangePicker onChange={onChange} style={{ marginRight: '5px' }} />
            <Button className="btn-light-blue" onClick={getDateFilter} style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
          </div>
          <div style={{ display: 'flex' }}>
            <Input style={{ marginRight: '5px' }} addonAfter={selectAfter} defaultValue="카테고리" />
            <Button className="btn-light-blue" onClick={getExcelFile} style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">EXCEL</Button>
          </div>
        </Col>
      </Row>

      <Row className='res-small-device card-border'>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1300 }}
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
