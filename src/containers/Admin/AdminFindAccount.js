import React, { useState } from 'react'

import { Form, Input, Button, Row, Col } from 'antd'
import Footer from '../../components/Footer'

import adminApi from '../../api/AdminAPI'
import './AdminFindAccount.scss'

const AdminFindAccount = () => {
  const [bodySubmit, setBodySubmit] = useState({
    phone: '',
    verify_code: '',
  })
  const [loading, setLoading] = useState(false)
  const onChange = (e) => {
    setBodySubmit({ ...bodySubmit, [e.target.name]: e.target.value })
  }
  const { phone, verify_code } = bodySubmit

  const verify = () => {
    setLoading(true)
    adminApi
      .verifyPhoneNumber({ phone })
      .then((value) => {
        console.log('success')
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
        setLoading(false)
      })
  }

  const findAccount = () => {
    setLoading(true)
    adminApi
      .findAccount(bodySubmit)
      .then((value) => {
        console.log('success')
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
        setLoading(false)
      })
  }

  const onFinish = async (values) => {
    findAccount()
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div
      className="admin-find-account"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        paddingTop: '17rem',
      }}
    >
      <Row justify="center" gutter={24} style={{ textAlign: 'center' }}>
        <Col span={24}>
          <h1>GEM BOX</h1>
        </Col>
        <Col
          xs={20}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <div className="verified" style={{ display: 'flex' }}>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your 핸드폰 번호 입력',
                  },
                ]}
              >
                <Input
                  onChange={onChange}
                  name="phone"
                  placeholder="핸드폰 번호 입력"
                  type="text"
                />
              </Form.Item>
              <Button disabled={loading} onClick={verify}>
                인증번호 전송
              </Button>
            </div>

            <Form.Item
              name="verify_code"
              rules={[
                {
                  required: true,
                  message: 'Please input your 인증번호 입력',
                },
              ]}
            >
              <Input
                onChange={onChange}
                name="verify_code"
                placeholder="인증번호 입력"
                type="text"
              />
            </Form.Item>

            <Form.Item style={{ marginTop: '3rem' }}>
              <Button
                style={{ width: '7rem' }}
                className="btn-login"
                htmlType="submit"
                disabled={loading}
              >
                확인
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default AdminFindAccount
