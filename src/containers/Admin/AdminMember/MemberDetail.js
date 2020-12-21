import React from 'react'
import { Row, Col, Button, Space } from 'antd'
import './MemberDetail.scss'

const MemberDetail = (props) => {
    return (
        <div className="member-detail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Row style={{ width: '500px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>이름</strong></p>
                    <p>이선호</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>연락처</strong></p>
                    <p>010-0000-0000</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>이메일</strong></p>
                    <p>brickmate@gmail.com</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>패스워드</strong></p>
                    <p>werr2334</p>
                </Col>
            </Row>

            <Row style={{ width: '500px', marginTop: '31px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p>신청 채널</p>
                    <p className='border-solid'>
                        <a style={{ color: 'black' }} href="http://minishop.gmarket.co.kr">http://minishop.gmarket.co.kr</a>
                    </p>
                </Col>
            </Row>

            <Row style={{ width: '500px', marginTop: '31px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>가입신청일</strong></p>
                    <p>02020.02.03</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>가입승인일</strong></p>
                    <p>2020.02.04</p>
                </Col>
            </Row>

            <Row style={{ width: '500px', marginTop: '31px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>사업자 등록번호</strong></p>
                    <p className='border-solid'>0864616546351</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p style={{ width: '200px' }}>첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다</p>
                    <p className='border-solid'>사업자 등록증 다운로드</p>
                </Col>
            </Row>

            <Row style={{ marginTop: '100px' }}>
                <Col span={12}>
                    <Space size="large">
                        <Button >계정 삭제하기</Button>
                        <Button onClick={() => props.history.push('/admin-member')}>목록으로 돌아가기</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default MemberDetail
