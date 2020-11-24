import React, { useState } from 'react';
import { DatePicker, Space, Button, Row, Col, Card, Divider } from 'antd';
import './home.scss'

const RenderData = (props) => {
    const arrs1 = [{
        "name": "Polar bear",
        "price": 30
      }, {
        "name": "Killer whale",
        "price": 84
      }, {
        "name": "Chuckwalla",
        "price": 71
      },
      {
        "name": "Polar bear",
        "price": 30
      }, {
        "name": "Killer whale",
        "price": 84
      }, {
        "name": "Chuckwalla",
        "price": 71
      },
      {
        "name": "Polar bear",
        "price": 30
      }, {
        "name": "Killer whale",
        "price": 84
      }, {
        "name": "Chuckwalla",
        "price": 71
      },
      {
        "name": "Polar bear",
        "price": 30
      }, {
        "name": "Killer whale",
        "price": 84
      }, {
        "name": "Chuckwalla",
        "price": 71
      },
      {
        "name": "Polar bear",
        "price": 30
      }, {
        "name": "Killer whale",
        "price": 84
      }, {
        "name": "Chuckwalla",
        "price": 71
      },
      {
        "name": "Polar bear",
        "price": 30
      }
     ]
    const [data, setData] = useState(arrs1);
    return (
        <>
            { data.map((product, i) => {
                    return (
                        <ul key={i} className="ul-list">
                            <li>{i}.{product.name}</li>
                            <li>₩{product.price}</li>
                        </ul>
                    )
                }) 
            }
        </>
    )
}

const Home = (props) => {
  return (
    <div className="home-page">
      <h1 className='first'>잼팩토리 데이터 랩 <small>잼팩토리 랩은 검증된 데이터만을 송출합니다.</small></h1>
      <div className="aggregate-month">
          <h1>집계 월</h1>
          <div className="date-picker">
              <Space direction="vertical">
                  <DatePicker style={{ marginRight: '8px' }}/>
              </Space>
              <Button style={{ background: '#71c4d5', borderColor: '#71c4d5', fontWeight: 'bold' }} type="primary">적용하기</Button>
          </div>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={32}>
          <Col xs={24} sm={24} md={8} lg={12} xl={12}>
            <Card title="TOP 20 매출 벤더" bordered={false}>
            <RenderData/>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={12} xl={12}>
            <Card title="TOP 20 판매 상품" bordered={false}>
            <RenderData/>
            </Card>
          </Col>
        </Row>
      </div>
      <footer>
        <div className="top">
          <h1>잼토이즈</h1>
          <p><span>상호:</span>주식회사 잼팩토리</p>
          <p><span>대표:</span>이수진</p>
          <p><span>사업자등록번호:</span>220-88-93741</p>
          <p><span>통신판매업신고번호:</span>제2020-서울강남-01686호[사업자정보확인]</p>
          <p><span>대표번호:</span>1899-5704</p>
          <p><span>메일:</span>gemtoys@gemtoys.co.kr </p>
        </div>
        <div className="bottom">
          <p><span>주소:</span>서울특별시 강남구 언주로 311 (로즈1타워) 3층</p>
          <p><span>개인정보관리자:</span>심규민</p>
          <p>copyright &copy; gemtoys.co.kr all rights reserved.</p>
        </div>
      </footer>
   </div>
  )
} 

export default Home

                              