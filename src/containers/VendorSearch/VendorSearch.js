import React, { useState } from 'react'
import { Button, DatePicker, Space, Input, Row, Col, Table, Modal } from 'antd';
import './VendorSearch.scss'

const VendorSearch = () => {

  // Table
    const [ countSelected, setCountSelected ] = useState(0)
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

    // DatePicker
    const { RangePicker } = DatePicker;
    function onChange(date, dateString) {
      // console.log('Formatted Selected Time: ', dateString);
      // console.log(date)
    }
    
    function onOk(value) {
      console.log('onOk: ', value);
    }

    return (
        <div className="vendor-search">
            <Row className="info-search" style={{ justifyContent: 'flex-end' }}>
                <Col className="date-picker">
                    <Space direction="" size={12}>
                        <RangePicker onChange={onChange} onOk={onOk} />
                    </Space>
                    <Button style={{ marginLeft: '8px', backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
                </Col>
                <Col className='search'>
                    <Input style={{ width: '392px', marginLeft: '60px' }} placeholder="Search" />
                    <Button style={{ marginLeft: '18px', backgroundColor: '#71c4d5', border: 'none' }} type="primary">EXCEL</Button>
                </Col>
            </Row>            

            <Row>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 1300 }}
                        rowSelection={{ ...rowSelection, checkStrictly }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default VendorSearch
