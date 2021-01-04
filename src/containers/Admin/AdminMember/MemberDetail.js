import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Space } from 'antd'
import { useLocation } from "react-router-dom";
import { API_URL } from '../../../constants/appConstants'
import axios from 'axios'
import fileDownload from 'js-file-download';
import './MemberDetail.scss'

const MemberDetail = (props) => {
    const location = useLocation();
    const { memberDetail } = location.state;

    const deleteMember = async () => {
        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }
        try {
            await axios.delete(`${API_URL}/users/${memberDetail.id}`, config)
            // await axios.delete(`${API_URL}/usermanages/7`, config) // Demo
            console.log('Delete User')
            props.history.push('/admin-member')
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
            const { data } = await axios.get(`${API_URL}/admin/exportlicense?user_id=${memberDetail.id}`, config)
            fileDownload(data, 'license.pdf')
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div className="member-detail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Row style={{ width: '500px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>이름</strong></p>
                    <p>{memberDetail.name}</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>연락처</strong></p>
                    <p>{memberDetail.phone}</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>이메일</strong></p>
                    <p>{memberDetail.email}</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>패스워드</strong></p>
                    <p>werr2334 <strong>Will Delete</strong></p>
                </Col>
            </Row>

            <Row style={{ width: '500px', marginTop: '31px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p>신청 채널</p>
                    <p className='border-solid'>
                        <a style={{ color: 'black' }} href={memberDetail.markets}>{memberDetail.markets}</a>
                    </p>
                </Col>
            </Row>

            <Row style={{ width: '500px', marginTop: '31px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>가입신청일</strong></p>
                    <p>{memberDetail.register_date}</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>가입승인일</strong></p>
                    <p>{memberDetail.approved_date}</p>
                </Col>
            </Row>

            <Row style={{ width: '500px', marginTop: '31px' }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p><strong>사업자 등록번호</strong></p>
                    <p className='border-solid'><strong>miss data</strong></p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="style-positon">
                    <p style={{ width: '200px' }}>첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다</p>
                    <Button onClick={dowloadPdfFile}>사업자 등록증 다운로드</Button>
                </Col>
            </Row>

            <Row style={{ marginTop: '100px' }}>
                <Col span={12}>
                    <Space size="large">
                        <Button onClick={deleteMember}>계정 삭제하기</Button>
                        <Button onClick={() => props.history.push('/admin-member')}>목록으로 돌아가기</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default MemberDetail
