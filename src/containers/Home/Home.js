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
      <h1>잼팩토리 데이터 랩 <small>잼팩토리 랩은 검증된 데이터만을 송출합니다.</small></h1>
      <div className="aggregate-month">
          <h1>집계 월</h1>
          <div className="date-picker">
              <Space direction="vertical">
                  <DatePicker style={{ marginRight: '8px' }}/>
              </Space>
              <Button className='res-small-device' type="primary">적용하기</Button>
          </div>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={32}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="top10 매출 벤더" bordered={false}>
            <RenderData/>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="top10 판매 수 벤더" bordered={false}>
            <RenderData/>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title="실시간 Top10 급상승 판매 상품" bordered={false}>
            <RenderData/>
            </Card>
          </Col>
        </Row>
      </div>
   </div>
  )
} 

export default Home