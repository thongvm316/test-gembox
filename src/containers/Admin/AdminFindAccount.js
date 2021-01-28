import React from 'react'

import { Form, Input, Button, Row, Col } from 'antd'
import Footer from '../../components/Footer'

import adminApi from '../../api/AdminAPI'
import './AdminFindAccount.scss'

const AdminFindAccount = () => {
  const onFinish = async (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const verify = () => {}

  const findAccount = () => {
    // adminApi.findAccount()
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
                <Input placeholder="핸드폰 번호 입력" type="text" />
              </Form.Item>
              <Button>인증번호 전송</Button>
            </div>

            <Form.Item
              name="verifiedPhone"
              rules={[
                {
                  required: true,
                  message: 'Please input your 인증번호 입력',
                },
              ]}
            >
              <Input placeholder="인증번호 입력" type="text" />
            </Form.Item>

            <Form.Item style={{ marginTop: '3rem' }}>
              <Button
                style={{ width: '7rem' }}
                className="btn-login"
                htmlType="submit"
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
