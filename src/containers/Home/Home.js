import React, { useState } from 'react';
import { DatePicker, Space, Button, Row, Col, Card, Divider } from 'antd';
import './home.scss'

const datas = [{
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
}]

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
          <Divider className='edit-margin'/>
        </>
    )
}

const RenderData = (props) => {
  const datas = props.datas
  const listitems = datas.map(product => (
    <ListItem key={product.id} value={product}/>
  ))
  return (
    <>
      {listitems}
    </>
  )
}

const Home = () => {
  return (
    <div className="home-page">
      <Row>
          <Col><h1 className='first'>잼팩토리 데이터 랩 <small>잼팩토리 랩은 검증된 데이터만을 송출합니다.</small></h1></Col>
      </Row>

      <Row className="aggregate-month">
        <Col xl={4}>
           <h1>집계 월</h1>
        </Col>
        <Col xl={20} className="date-picker">
            <Space direction="vertical">
                <DatePicker style={{ marginRight: '8px' }}/>
            </Space>
            <Button style={{ background: '#71c4d5', borderColor: '#71c4d5', fontWeight: 'bold' }} type="primary">적용하기</Button>
        </Col>
      </Row>

      <div className="site-card-wrapper">
        <Row gutter={32}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className='style-small-device'>
            <Row>
              <Col span={24}>
                  <Card title="TOP 20 매출 벤더">
                     <RenderData datas={datas}/>
                 </Card>
              </Col>
            </Row>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row>
              <Col span={24}>
                  <Card title="TOP 20 매출 벤더">
                     <RenderData  datas={datas}/>
                 </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="footer" style={{ marginTop: '50px' }}>
        <Row justify='center'>
            <p style={{ color: '#335b63' }}> <strong>잼토이즈 &nbsp; &nbsp;</strong>
              <strong>상호</strong>:주식회사 잼팩토리   <strong>대표</strong>:이수진    <strong>사업자등록번호</strong>:220-88-93741    <strong>통신판매업신고번호</strong>:제2020-서울강남-01686호[사업자정보확인]     <strong>대표번호</strong>:1899-5704    <strong>메일</strong>:gemtoys@gemtoys.co.kr  
            </p>
        </Row>
        <Row justify='center'>
             <p style={{ color: '#335b63' }}>
                <strong>주소 </strong>:서울특별시 강남구 언주로 311 (로즈1타워) 3층    <strong>개인정보관리자</strong>:심규민    copyright &copy; gemtoys.co.kr all rights reserved.
             </p>
        </Row>
      </div>
   </div>
  )
} 

export default Home

                              