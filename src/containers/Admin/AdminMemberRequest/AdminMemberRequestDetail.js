import React from 'react'
import { Row, Col, Button, Space, Image } from 'antd'
import './AdminMemberRequestDetail.scss'

const data = {
    "success": true,
    "data": {
        "code": "20000",
        "message": "Success",
        "result": {
            "member": [{
                "id": 16,
                "email": "ldminh1@gmail.com",
                "phone": "+84969351874",
                "name": "Minh Le",
                "register_date": "2020-12-18",
                "approved_date": "2020-12-18",
                "markets": ["http://google.com"],
                "company_registration_num": null,
                "business_license": "https://df11gazfkzugr.cloudfront.net/16/9308837603f3a6a9a6686543f8d47e37.pdf?Expires=1608866672&Signature=aeuEmeci~xcLX7F6wbuEQZ~IJrVl3h4JD9XI1cBshs-DhBUYNqlrIvLG81a-zjDJh3J7Ncjet4moXxGMjg~WDkrh4b1v82Ge0NU5YhxRrMGfPFi24kc3Qfbm57mIkGs0luOssiFcJ0uyGR6C8KxmAH61Q6Go2rmdcQjvZwGU7-bug7-qQW7gMa5gAaUUyeIADV~YomvtT8eA6apPOZFA8hI3Yo1ly-5n-F-X9bv2o~hFckHCsC2hHGYCbx-WQgQ2xRG~-eshIqq5Cs7SSTPG6Io~c78dKNpXl0gTuMw-noMzo-nlxIMocqWlZBnAFLjMCDW3URzVgemG0t2Y0PgMog__&Key-Pair-Id=APKAJXU52GAWWUFZNCCQ"
            }],
            "member_request": [
                {
                    "id": 16,
                    "email": "ldminh1@gmail.com",
                    "phone": "+84969351874",
                    "name": "Minh Le",
                    "status": 0,
                    "register_date": "2020-12-18",
                    "markets": ["http://google.com"],
                    "business_license": "https://df11gazfkzugr.cloudfront.net/16/9308837603f3a6a9a6686543f8d47e37.pdf?Expires=1608866672&Signature=aeuEmeci~xcLX7F6wbuEQZ~IJrVl3h4JD9XI1cBshs-DhBUYNqlrIvLG81a-zjDJh3J7Ncjet4moXxGMjg~WDkrh4b1v82Ge0NU5YhxRrMGfPFi24kc3Qfbm57mIkGs0luOssiFcJ0uyGR6C8KxmAH61Q6Go2rmdcQjvZwGU7-bug7-qQW7gMa5gAaUUyeIADV~YomvtT8eA6apPOZFA8hI3Yo1ly-5n-F-X9bv2o~hFckHCsC2hHGYCbx-WQgQ2xRG~-eshIqq5Cs7SSTPG6Io~c78dKNpXl0gTuMw-noMzo-nlxIMocqWlZBnAFLjMCDW3URzVgemG0t2Y0PgMog__&Key-Pair-Id=APKAJXU52GAWWUFZNCCQ"
                }
            ]
        }
    }
}

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
