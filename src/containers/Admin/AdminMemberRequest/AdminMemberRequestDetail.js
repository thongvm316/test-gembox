import React from 'react'
import { Row, Col, Button, Space, Image } from 'antd'
import './AdminMemberRequestDetail.scss'

const AdminMemberRequestDetail = (props) => {
    return (
        <div className="admin-member-request-detail">
            <Row gutter={24}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row>
                        <Col span={24} className="style-positon">
                            <p><strong>이름</strong></p>
                            <p>이선호</p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p><strong>연락처</strong></p>
                            <p>010-0000-0000</p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p><strong>이메일</strong></p>
                            <p>brickmate@gmail.com</p>
                        </Col>
                        <Col span={24} className="style-positon">        
                            <p><strong>패스워드</strong></p>
                            <p>werr2334</p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '31px' }}>
                        <Col span={24} className="style-positon">
                            <p>신청 채널</p>
                            <p className='border-solid'>
                                <a style={{ color: 'black' }} href="http://minishop.gmarket.co.kr">http://minishop.gmarket.co.kr</a>
                            </p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '31px' }}>
                        <Col span={24} className="style-positon">
                            <p><strong>가입신청일</strong></p>
                            <p>02020.02.03</p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '31px' }}>
                        <Col span={24} className="style-positon">
                            <p><strong>사업자 등록번호</strong></p>
                            <p className='border-solid'>0864616546351</p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p>첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다</p>
                            <p className='border-solid'>사업자 등록증 다운로드</p>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row gutter={[24, 24]} justify="center">
                        <Col span={18}>
                            <Image
                                src="https://via.placeholder.com/407x600"
                            />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={12} style={{ textAlign: 'center' }}>
                            <Button>사업자 등록증 다운로드</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Col span={24}>
                    <Space size="large">
                        <Button>거부하기</Button>
                        <Button>승인 하기</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default AdminMemberRequestDetail
