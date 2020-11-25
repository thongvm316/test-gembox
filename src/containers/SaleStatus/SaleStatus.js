import React, { useState } from 'react'
import { Row, Col, Button, Input, DatePicker, Space, Table, Card } from 'antd';
import './SaleStatus.scss'

const { RangePicker } = DatePicker;

const SaleStatus = () => {
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
  
      const { RangePicker } = DatePicker;
  
      function onChange(date, dateString) {
          console.log(date, dateString);
      }
    return (
        <div className="sale-status">
            <Row className='title' span={24}><strong>이수진</strong>님 안녕하세요</Row>
            <Row className='card-style' gutter={24} style={{ width: '70vw', margin: '0 auto 70px auto' }}>
                <Col xl={6}>
                    <Card style={{ width: 240, height: 150 }}>
                        <Row className='card-one'>
                            <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>종합 판매순위</p>
                                <p>56위</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card style={{ width: 240, height: 150 }}>
                        <Row>
                           <Col>총 리뷰</Col>
                           <Col>
                                <p>56위</p>
                                <p>5,050,505,050 건</p>
                           </Col>
                       </Row>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card style={{ width: 240, height: 150 }}>
                        <Row>
                            <Col>
                                <p>종합 판매순위</p>
                                <p>56위</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card style={{ width: 240, height: 150 }}>
                       <Row>
                           <Col>총 리뷰</Col>
                           <Col>
                                <p>66위</p>
                                <p>₩ 110,000,000,000</p>
                           </Col>
                       </Row>
                    </Card>
                </Col>
            </Row>
            <Row className='bar-style'>
                <Col><h1>판매 채널</h1></Col>
                <Col>
                    <Row className="info-search" style={{ justifyContent: 'flex-end', marginBottom: '16px' }}>
                    <Col className="date-picker">
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
