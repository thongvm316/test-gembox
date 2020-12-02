import React from 'react'
import { Row, Col, Button, Space } from 'antd'
import './Confirm.scss'

const Confirm = () => {
    return (
        <div className='confirm'>
                <Row style={{ marginBottom: '3rem' }} justify='center'>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>이선호</h3>
                        <p>010-0000-0000</p>
                        <p>brickmate@gmail,com</p>
                        <Button>계정 삭제하기</Button>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '3rem' }}  justify='center'>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>보유 채널</h3>
                        <Space>
                            <Button>11번가</Button>
                            <Button>인터파크</Button>
                        </Space>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '3rem' }}  justify='center'>
                    <Col style={{ textAlign: 'center' }}>
                        <Row>
                            <Space size='large'>
                                <Col><p>가입 신청일</p></Col>
                                <Col><p>2020.02.03</p></Col>
                            </Space>
                        </Row>
                        <Row>
                            <Space size='large'>
                                <Col><p>가입 신청일</p></Col>
                                <Col><p>2020.02.03</p></Col>
                            </Space>
                        </Row>
                    </Col>
                </Row>

                <Row justify='center'>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>사업자 등록 번호</h3>
                        <p>0864616546351</p>
                    </Col>
                </Row>
        </div>
    )
}

export default Confirm
