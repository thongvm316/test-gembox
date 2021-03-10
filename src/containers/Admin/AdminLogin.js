import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Row, Col, notification } from 'antd'
import { useLocation } from 'react-router-dom'
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'
import Footer from '../../components/Footer'
import './AdminLogin.scss'

const FormItem = Form.Item

const openNotification = (placement) => {
  notification.error({
    description: 'Incorrect username or password.',
    placement,
  })
}

const AdminLogin = (props) => {
  var _0xec40=["\x73\x74\x61\x74\x65","\x66\x69\x6E\x64\x50\x61\x73\x73\x77\x6F\x72\x64","\x6C\x6F\x67","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","","\x2F\x61\x64\x6D\x69\x6E\x2F\x6C\x6F\x67\x69\x6E\x73","\x70\x6F\x73\x74","\x63\x6C\x65\x61\x72","\x74\x6F\x6B\x65\x6E","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x73\x65\x74\x49\x74\x65\x6D","\x2F\x61\x64\x6D\x69\x6E\x2D\x6D\x65\x6D\x62\x65\x72","\x70\x75\x73\x68","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x74\x6F\x70\x52\x69\x67\x68\x74","\x2F\x72\x65\x67\x69\x73\x74\x65\x72"];const {history}=props;const [loading,setLoading]=useState(false);const location=useLocation();const [findPassword,setFindPassword]=useState(false);useEffect(()=>{if(location[_0xec40[0]]&& location[_0xec40[0]][_0xec40[1]]){console[_0xec40[2]](location);setFindPassword(true)}},[location]);const onFinish=async (_0x6f12x3)=>{setLoading(true);const {email,password}=_0x6f12x3;const _0x6f12x4={email,password};const _0x6f12x5={headers:{Accept:_0xec40[3],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xec40[3]}};try{const {data}= await axios[_0xec40[6]](`${_0xec40[4]}${API_URL}${_0xec40[5]}`,_0x6f12x4,_0x6f12x5);console[_0xec40[2]](data);localStorage[_0xec40[7]]();localStorage[_0xec40[11]](_0xec40[8],data[_0xec40[10]][_0xec40[9]][_0xec40[8]]);setLoading(false);history[_0xec40[13]](_0xec40[12])}catch(error){console[_0xec40[2]](error[_0xec40[14]]);openNotification(_0xec40[15]);setLoading(false)}};const handleOk=()=>{setFindPassword(false)};const onRegister=()=>{history[_0xec40[13]](_0xec40[16])}

  return (
    <div
      className="admin-login"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        paddingTop: '15rem',
      }}
    >
      <Row justify="center" gutter={24} style={{ textAlign: 'center' }}>
        <Col span={24}>
          <h1>잼인사이트</h1>
        </Col>
        <Col xs={20} sm={7} md={10} lg={7} xl={5}>
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
      </Row>

      <Row justify="center">
        <Col xs={6} sm={5} md={5} lg={5} xl={2}>
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
