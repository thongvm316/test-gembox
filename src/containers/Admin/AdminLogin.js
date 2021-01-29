import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Row, Col, message, Alert } from 'antd'
import { useLocation } from 'react-router-dom'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import Footer from '../../components/Footer'
import './AdminLogin.scss'

const FormItem = Form.Item

const AdminLogin = (props) => {
  const { history } = props
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const [findPassword, setFindPassword] = useState(false)

  useEffect(() => {
    if (location.state && location.state.findPassword) {
      console.log(location)
      setFindPassword(true)
    }
  }, [location])

  const onFinish = async (values) => {
    setLoading(true)
    const { email, password } = values
    const body = {
      email,
      password,
    }

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.post(`${API_URL}/admin/logins`, body, config)
      console.log(data)
      localStorage.clear()
      localStorage.setItem('token', data.data.result.token)
      setLoading(false)
      history.push('/admin-member')
    } catch (error) {
      console.log(error.response)
      message.error({
        content: (
          <Alert description="Incorrect username or password." type="error" />
        ),
        style: {
          marginTop: '10vh',
        },
      })
      setLoading(false)
    }
  }

  const handleOk = () => {
    setFindPassword(false)
  }

  const onRegister = () => {
    history.push('/register')
  }

  return (
    <div
      className="admin-login"
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
          <Form onFinish={onFinish}>
            <FormItem
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input size="large" placeholder="이메일" type="text" />
            </FormItem>

            <FormItem
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                size="large"
                type="password"
                placeholder="비밀번호 8자리"
              />
            </FormItem>

            <FormItem>
              <Button
                disabled={loading}
                className="btn-login"
                htmlType="submit"
              >
                로그인
              </Button>
            </FormItem>
          </Form>
        </Col>
        <Col span={3} style={{ marginTop: '36px' }}>
          <Button
            className="btn-login"
            onClick={() => history.push('/admin-find-account')}
          >
            계정찾기
          </Button>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default AdminLogin
