import React from 'react'
import { Row, Col, Button } from 'antd'
import './ShowInfoRegister.scss'

const ShowInfoRegister = () => {
    return (
        <div className='show-info-register'>
            
            <Row gutter={[16,16]}>
                <Col style={{ textAlign:'center' }} xl={24} sm={12} md={12} lg={12} xl={12}>
                    <h3 style={{ marginBottom: '70px' }}>가입 신청 확인</h3>
                    <div style={{ marginBottom: '70px' }}>
                        <h3>이선호</h3>
                        <p>010-0000-0000</p>
                        <p>brickmate@gmail,com</p>
                    </div>
                    <div className='style-p' style={{ marginBottom: '70px' }}>
                        <h3>신청 채널</h3>
                        <p style={{ marginBottom: 0 }}>abc.com</p>
                        <p>abc.com</p>
                    </div>
                    <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'center' }}>
                        <p style={{ marginRight: '2rem' }}>가입 신청일</p>
                        <p>2020.02.03</p>
                    </div>
                    <div>
                        <h3>첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다</h3>
                        <Button>입력</Button>
                    </div>
                </Col>

                <Col style={{ textAlign: 'center' }} xs={24} sm={12} md={12} lg={12} xl={12}>
                    <div style={{ marginBottom: '1rem' }} className="license-image"></div>
                    <Button>사업자 등록증 다운로드</Button>
                </Col>
            </Row>

            <Row>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <Button>승인 하기</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ShowInfoRegister
