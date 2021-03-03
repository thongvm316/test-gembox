import React, { useState, useContext } from 'react'
import { Row, Col, Button, Space, List, Input } from 'antd'
import { useLocation } from 'react-router-dom'

import { AdminMemberContext } from '../../../lib/admin/AdminMemberContext'
import { action } from '../../../lib/admin/AdminMemberContext'

import { API_URL } from '../../../constants/appConstants'
import axios from 'axios'
import fileDownload from 'js-file-download'
import adminApi from '../../../api/AdminAPI'

import './MemberDetail.scss'

const MemberDetail = (props) => {
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const { memberDetail } = location.state
  const [newPassword, setNewPassword] =  useState('12345678')

  /* Get global sate */
  const context = useContext(AdminMemberContext)
  const { dispatch } = context

  // Config for call API
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${localStorage.getItem('token')}`,
    },
  }

  const deleteMember = async () => {
    setLoading(true)
    try {
      await axios.delete(`${API_URL}/members/${memberDetail.id}`, config)
      dispatch({ type: action.DELETE, payload: memberDetail.id })
      props.history.push('/admin-member')
    } catch (error) {
      console.log(error.response)
    }
    setLoading(false)
  }

  const dowloadPdfFile = async () => {
    setLoading(true)
    adminApi
      .dowloadPdfFile(memberDetail.id)
      .then((value) => {
        fileDownload(value, 'license.pdf')
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
        setLoading(false)
      })
  }

  const resetPassword = async () => {
    setLoading(true)
    const body = {
      user_id: memberDetail.id,
      new_password: newPassword
    }
    try {
      const { data } = await axios.put(
        `${API_URL}/admin/resetpassword`,
        body,
        config,
      )
      console.log(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  return (
    <div className="member-detail">
      <Row gutter={24}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Row className="set-width">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
            >
              <p>
                <strong>이름</strong>
              </p>
              <p>{memberDetail.name}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
            >
              <p>
                <strong>연락처</strong>
              </p>
              <p>{memberDetail.phone}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
            >
              <p>
                <strong>이메일</strong>
              </p>
              <p>{memberDetail.email}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
            >

              <p>
                <strong>패스워드</strong>
              </p>
              <div>
                <Input.Password value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              </div>

            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
              style={{ marginTop: '31px' }}
            >
              <p>신청 채널</p>
              <List
                size="small"
                bordered
                dataSource={memberDetail.markets}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
              style={{ marginTop: '31px' }}
            >
              <p>
                <strong>가입신청일</strong>
              </p>
              <p>{memberDetail.register_date}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
            >
              <p>
                <strong>가입승인일</strong>
              </p>
              <p>{memberDetail.approved_date}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
              style={{ marginTop: '31px' }}
            >
              <p>
                <strong>사업자 등록번호</strong>
              </p>
              <p className="border-solid">{memberDetail.company_number}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="style-positon"
            >
              <p style={{ width: '200px' }}>
                첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다
              </p>
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[24, 24]} justify="center">
            <Col span={24} style={{ textAlign: 'center' }}>
              <embed
                src={memberDetail.business_license}
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="600"
                width="400"
              ></embed>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button disabled={loading} onClick={dowloadPdfFile}>
                사업자 등록증 다운로드
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: '100px' }} justify="center">
        <Col span={12} style={{ textAlign: 'center' }}>
          <Space size="large">
            <Button disabled={loading} onClick={resetPassword} type="default">
              저장하기
              </Button>
            <Button disabled={loading} onClick={deleteMember}>
              계정 삭제하기
            </Button>
            {/* <Button onClick={() => props.history.push('/admin-member')}>목록으로 돌아가기</Button> */}
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default MemberDetail
