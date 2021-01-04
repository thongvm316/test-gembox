import React from 'react'
import { Row, Col, Button, Space, Image } from 'antd'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { API_URL } from '../../../constants/appConstants'
import fileDownload from 'js-file-download';
import './AdminMemberRequestDetail.scss'

const AdminMemberRequestDetail = (props) => {
    const location = useLocation();
    const { memberRequestDetail } = location.state;
    console.log(memberRequestDetail)

    const approve = async () => {
        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }
        const body = {
            action: "approve"
        }
        try {
            await axios.put(`${API_URL}/users/${memberRequestDetail.id}`, body, config)
            console.log('Approve')
            props.history.push('/member-request')
        } catch (error) {
            console.log(error.response)
        }
    }

    const reject = async () => {
        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }
        const body = {
            action: "reject"
        }

        try {
            await axios.put(`${API_URL}/users/${memberRequestDetail.id}`, body, config)
            console.log('Reject')
            props.history.push('/member-request')
        } catch (error) {
            console.log(error.response)
        }
    }

    const dowloadPdfFile = async () => {
        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }
        try {
            const { data } = await axios.get(`${API_URL}/admin/exportlicense?user_id=${memberRequestDetail.id}`, config)
            fileDownload(data, 'license.pdf')
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div className="admin-member-request-detail">
            <Row gutter={24}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row>
                        <Col span={24} className="style-positon">
                            <p><strong>이름</strong></p>
                            <p>{memberRequestDetail.name}</p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p><strong>연락처</strong></p>
                            <p>{memberRequestDetail.phone}</p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p><strong>이메일</strong></p>
                            <p>{memberRequestDetail.email}</p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p><strong>패스워드</strong></p>
                            <p>werr2334 <strong>Will Del in Fea</strong></p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '31px' }}>
                        <Col span={24} className="style-positon">
                            <p>신청 채널</p>
                            <p className='border-solid'>
                                <a style={{ color: 'black' }} href={memberRequestDetail.markets}>{memberRequestDetail.markets}</a>
                            </p>
                        </Col>
                    </Row>

                    {/* <Row style={{ marginTop: '31px' }}>
                        <Col span={24} className="style-positon">
                            <p><strong>가입신청일</strong></p>
                            <p>{memberRequestDetail.register_date}</p>
                        </Col>
                    </Row> */}

                    <Row style={{ marginTop: '31px' }}>
                        <Col span={24} className="style-positon">
                            <p><strong>사업자 등록번호</strong></p>
                            <p className='border-solid'>{memberRequestDetail.company_number} <strong>null</strong></p>
                        </Col>
                        <Col span={24} className="style-positon">
                            <p>첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다</p>
                            {/* <p className='border-solid'>사업자 등록증 다운로드</p> */}
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row gutter={[24, 24]} justify="center">
                        <Col span={18}>
                            {/* <Image
                                src={memberRequestDetail.business_license}
                                width={500}
                                height={500}
                            /> */}
                            <embed
                                src={memberRequestDetail.business_license}
                                type="application/pdf"
                                frameBorder="0"
                                scrolling="auto"
                                height="600"
                                width="400"
                            ></embed>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={12} style={{ textAlign: 'center' }}>
                            <Button onClick={dowloadPdfFile}>사업자 등록증 다운로드</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Col span={24}>
                    <Space size="large">
                        <Button onClick={reject}>거부하기</Button>
                        <Button onClick={approve}>승인 하기</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default AdminMemberRequestDetail
