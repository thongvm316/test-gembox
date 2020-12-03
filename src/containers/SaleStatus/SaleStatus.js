import React, { useState } from 'react'
import { Row, Col, Button, Input, DatePicker, Space, Table, Card } from 'antd';
import './SaleStatus.scss'

const { RangePicker } = DatePicker;

const SaleStatus = () => {

    // Table
    const [ countSelected, setCountSelected ] = useState(0)
  
    const columns = [
    {
        title: '상품명',
        dataIndex: '마켓명',
    },
    {
        title: '카테고리',
        dataIndex: '벤더명',
    },
    {
        title: '마켓명',
        dataIndex: '카테고리',
    },
    {
        title: '가격',
        dataIndex: '상품명',
    },
    {
        title: '리뷰',
        dataIndex: '가격',
    },
    {
        title: '판매수',
        dataIndex: '리뷰',
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
        <div className="sale-status">
            <Row className='title' span={24}><strong>이수진</strong>님 안녕하세요</Row>
            
            <Row className='card-style' gutter={[24,24]} style={{ width: '85vw', margin: '0 auto 70px auto' }}>
                <Col xs={24} sm={24} md={12}  xl={6} className='col-one'>
                    <Card style={{ width: '100%', height: 150 }}>
                        <Row>
                             <Col className='one-in-col-one'>
                                <p>총 리뷰</p>
                             </Col>
                             <Col className='two-in-col-one'> 
                                <p>56위</p>
                             </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} xl={6} className='col-two'>
                    <Card style={{ width: '100%', height: 150 }}>
                        <Row>
                             <Col className='one-in-col-two'>
                                <p>총 리뷰</p>
                             </Col>
                             <Col className='two-in-col-two'> 
                                <p>56위</p>
                                <p>5,050,505,050 건</p>
                             </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} xl={6} className='col-three'>
                    <Card style={{ width: '100%', height: 150 }}>
                        <Row>
                             <Col className='one-in-col-three'>
                                <p>총 리뷰</p>
                             </Col>
                             <Col className='two-in-col-three'> 
                                <p>56위</p>
                             </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} xl={6} className='col-four'>
                    <Card style={{ width: '100%', height: 150 }}>
                        <Row>
                             <Col className='one-in-col-four'>
                                <p>총 리뷰</p>
                             </Col>
                             <Col className='two-in-col-four'> 
                                <p>56위</p>
                                <p>5,050,505,050 건</p>
                             </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row className='bar-style'>
                <Col sm={24} md={4} lg={4} xl={4}><h1>판매 채널</h1></Col>
                <Col sm={24} md={20} lg={20} xl={20}>
                    <Row className="info-search" style={{ justifyContent: 'flex-end', marginBottom: '16px' }}>
                        <Col className="date-picker">
                            <Space direction="" size={12}>
                                <RangePicker onChange={onChange} onOk={onOk} />
                            </Space>
                            <Button style={{ marginLeft: '8px', backgroundColor: '#71c4d5', border: 'none' }} type="primary">적용하기</Button>
                        </Col>
                        <Col>
                            <Input style={{ width: '392px', marginLeft: '60px' }} placeholder="Search" />
                            <Button style={{ marginLeft: '18px', backgroundColor: '#71c4d5', border: 'none', width: 81 }} type="primary">EXCEL</Button>
                        </Col>
                    </Row>       
                </Col>
            </Row>

            <Row className='row-3'>
                <Col><p><span>12</span>11번가</p></Col>
                <Col><p><span>12</span>G마켓</p></Col>
                <Col><p><span>12</span>쿠팡</p></Col>
                <Col><p><span>12</span>인터파크</p></Col>
                <Col><p><span>12</span>옥션</p></Col>
                <Col><p><span>12</span>스마트스토어</p></Col>
                <Col><p><span>12</span>티몬</p></Col>
                <Col><p><span>12</span>위메프</p></Col>
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

export default SaleStatus
