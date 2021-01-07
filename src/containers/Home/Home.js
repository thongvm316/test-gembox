import React, { useState } from 'react';
import { DatePicker, Space, Button, Row, Col, Card, Divider, Radio } from 'antd';
import Footer from '../../components/Footer'
import './home.scss'
import moment from 'moment';

// Handle Data
const data = [{
  "id": 1,
  "title": "11번가",
  "name": "Polar bear",
  "price": 30
}, {
  "id": 2,
  "title": "11번가",
  "name": "Killer whale",
  "price": 84
}, {
  "id": 3,
  "title": "11번가",
  "name": "Chuckwalla",
  "price": 71
},
{
  "id": 4,
  "title": "11번가",
  "name": "Polar bear",
  "price": 35
}, {
  "id": 5,
  "title": "11번가",
  "name": "Killer whale",
  "price": 84
}, {
  "id": 6,
  "title": "11번가",
  "name": "Chuckwalla",
  "price": 71
},
{
  "id": 7,
  "title": "11번가",
  "name": "Polar bear",
  "price": 30
}, {
  "id": 8,
  "title": "11번가",
  "name": "Killer whale",
  "price": 84
}, {
  "id": 9,
  "title": "11번가",
  "name": "Chuckwalla",
  "price": 71
},
{
  "id": 10,
  "title": "11번가",
  "name": "Polar bear",
  "price": 35
},
{
  "id": 11,
  "title": "11번가",
  "name": "Polar bear",
  "price": 30
}, {
  "id": 12,
  "title": "11번가",
  "name": "Killer whale",
  "price": 84
}, {
  "id": 13,
  "title": "11번가",
  "name": "Chuckwalla",
  "price": 71
},
{
  "id": 14,
  "title": "11번가",
  "name": "Polar bear",
  "price": 35
}, {
  "id": 15,
  "title": "11번가",
  "name": "Killer whale",
  "price": 84
}, {
  "id": 16,
  "title": "11번가",
  "name": "Chuckwalla",
  "price": 71
},
{
  "id": 17,
  "title": "11번가",
  "name": "Polar bear",
  "price": 30
}, {
  "id": 18,
  "title": "11번가",
  "name": "Killer whale",
  "price": 84
}, {
  "id": 19,
  "title": "11번가",
  "name": "Chuckwalla",
  "price": 71
},
{
  "id": 20,
  "title": "11번가",
  "name": "Polar bear",
  "price": 35
}]
const data1 = data.slice(0, 10);
const data2 = data.slice(10, 20)

const ListItem = (props) => {
  const value = props.value
  return (
    <>
      <ul className="ul-list">
        <li><strong>{value.id}</strong></li>
        <li>
          <ul className='list-in'>
            <li><small>{value.title}</small></li>
            <li><strong>{value.name}</strong></li>
          </ul>
        </li>
        <li><strong>₩{value.price}</strong></li>
      </ul>
      <Divider className='edit-margin' />
    </>
  )
}
const RenderData = (props) => {
  const data = props.data
  const listitems = data.map(product => (
    <ListItem key={product.id} value={product} />
  ))
  return (
    <>
      {listitems}
    </>
  )
}

// Date Picker
function onChange(date, dateString) {
  console.log(date, dateString);
}

const Home = () => {
  return (
    <div className="home-page">
      <Row gutter={24} style={{ marginLeft: '24px' }}>
        <Col span={24} className="style-click-btn">
          <Radio.Group size="middle" defaultValue="a">
            <Radio.Button value="a" shape="round" size="middle">전체 요약분석</Radio.Button>
            <Radio.Button style={{ marginLeft: '10px', marginRight: '10px' }} value="b" shape="round" size="middle">카테고리 별 분석</Radio.Button>
            <Radio.Button value="c" shape="round" size="middle">마켓별 분석</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <Row className="aggregate-month" >
        <Col xl={2}>
          <h1>집계 월</h1>
        </Col>
        <Col xl={20} className="date-picker">
          <Space direction="vertical">
            <DatePicker style={{ marginRight: '8px' }} onChange={onChange} picker="month" />
          </Space>
          <Button style={{ background: '#71c4d5', borderColor: '#71c4d5', fontWeight: 'bold' }} type="primary">적용하기</Button>
        </Col>
      </Row>

      <Row className="site-card-wrapper" gutter={32}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className='style-small-device'>
          <Card title="TOP 20 매출 벤더">
            <Row gutter={32}>
              <Col span={12}>
                <RenderData data={data1} />
              </Col>
              <Col span={12}>
                <RenderData data={data2} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12} className='style-small-device'>
          <Card title="TOP 20 판매 상품">
            <Row gutter={32}>
              <Col span={12}>
                <RenderData data={data1} />
              </Col>
              <Col span={12}>
                <RenderData data={data2} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default Home

