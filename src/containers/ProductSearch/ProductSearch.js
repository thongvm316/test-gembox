import React, { useState } from 'react'
import { Button, DatePicker, Row, Col, Input, Space, Table, Modal  } from 'antd';
import Filter from './Filter'
import Chart from './Chart'
import './ProductSearch.scss'

const ProductSearch = (props) => {
  const [ countSelected, setCountSelected ] = useState(0)

  const renderTitle = (record) =>{
    return <a onClick={showModal}>{record} </a>
  }

  const [visible, setVisible] = useState(false)

    const showModal = () => {
       setVisible(true)
      };
    
    const handleOk = e => {
        setVisible(false)
      };
    
    const  handleCancel = e => {
        setVisible(false)
  };

    const columns = [
      {
        title: '마켓명',
        dataIndex: '마켓명',
        render: renderTitle,
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

    const onSearch = (e) => {
        console.log(e)
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

    const { RangePicker } = DatePicker;

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div className="product-search">
             <Row className="info-search">
                <Col>
                    <Button onClick={showModal} style={{ marginRight: '15px', backgroundColor: '#71c4d5', border: 'none' }} type="primary">필터</Button>
                    <Button style={{ backgroundColor: '#71c4d5', border: 'none' }} type="primary">선택된 항목 그래프 비교</Button>
                </Col>
                <Col style={{ marginLeft: '100px' }}  className="date-picker">
                    <Space direction="" size={12}>
                        <RangePicker />
                    </Space>
                    <Button style={{ marginLeft: '8px', backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
                </Col>
                <Col>
                    <Input style={{ width: '392px', marginLeft: '60px' }} placeholder="Search" />
                    <Button style={{ marginLeft: '18px', backgroundColor: '#71c4d5', border: 'none' }} type="primary">EXCEL</Button>
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
                          return{
                            onClick: event => {
                              props.history.push({
                                pathname: '/product-detail',
                                state: {product: record}
                              })
                            }
                          }
            
                        }}
                    />
                </Col>
                <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={handleOk}  
                    onCancel={handleCancel}
                    width={800}
                    >
                    {/* <Chart/> */}
                    <Filter/>
                </Modal>
            </Row>
        </div>
    )
}

export default ProductSearch
