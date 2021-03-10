import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Modal,
  Divider,
  Image,
  notification,
  Spin,
} from 'antd'
import { EyeOutlined, LoadingOutlined } from '@ant-design/icons'

import { useLocation } from 'react-router-dom'
import { API_URL } from '../constants/appConstants'
import axios from 'axios'

import Footer from '../components/Footer'
import './Login.scss'

const FormItem = Form.Item
const openNotification = (placement) => {
  notification.error({
    description: 'Incorrect username or password.',
    placement,
  })
}

const Login = (props) => {
  var _0x81ea=["\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x2F\x68\x6F\x6D\x65","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x73\x74\x61\x74\x65","\x66\x69\x6E\x64\x50\x61\x73\x73\x77\x6F\x72\x64","\x6C\x6F\x67","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","","\x2F\x6C\x6F\x67\x69\x6E\x73","\x70\x6F\x73\x74","\x63\x6C\x65\x61\x72","\x74\x6F\x6B\x65\x6E","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x73\x65\x74\x49\x74\x65\x6D","\x74\x6F\x70\x52\x69\x67\x68\x74","\x46\x61\x69\x6C\x65\x64\x3A","\x2F\x73\x69\x67\x6E\x75\x70"];if(localStorage[_0x81ea[1]](_0x81ea[0])){props[_0x81ea[4]][_0x81ea[3]](_0x81ea[2])};const {history}=props;const location=useLocation();const [findPassword,setFindPassword]=useState(false);const [loading,setLoading]=useState(false);const handleOkModalFindPassword=()=>{setFindPassword(true)};useEffect(()=>{if(location[_0x81ea[5]]&& location[_0x81ea[5]][_0x81ea[6]]){console[_0x81ea[7]](location);setFindPassword(true)}},[location]);const onFinish=async (_0x115cx4)=>{setLoading(true);const {email,password}=_0x115cx4;const _0x115cx5={email,password};const _0x115cx6={headers:{Accept:_0x81ea[8],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x81ea[8]}};try{const {data}= await axios[_0x81ea[11]](`${_0x81ea[9]}${API_URL}${_0x81ea[10]}`,_0x115cx5,_0x115cx6);localStorage[_0x81ea[12]]();localStorage[_0x81ea[16]](_0x81ea[0],data[_0x81ea[15]][_0x81ea[14]][_0x81ea[13]]);setLoading(false);history[_0x81ea[3]](_0x81ea[2])}catch(error){openNotification(_0x81ea[17]);setLoading(false)}};const onFinishFailed=(_0x115cx8)=>{console[_0x81ea[7]](_0x81ea[18],_0x115cx8)};const onRegister=()=>{history[_0x81ea[3]](_0x81ea[19])}

  return (
    <div className="login-page" style={{ height: '100vh' }}>
      <Row gutter={24}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <h1 style={{ paddingTop: '3rem' }} className="logo">
            GEM FACTORY
          </h1>
        </Col>
      </Row>

      <Row gutter={24} justify="center">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Col xs={24} sm={16} md={16} lg={14} xl={6}>
            <div className="background-color">
              <Row gutter={24} justify="start">
                <Col span={16}>
                  <h1 className="login-title">로그인</h1>
                  <p className="adv">
                    최상의 상품판매 전략을 위한 빅데이터 서비스
                  </p>
                </Col>
              </Row>
              <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <FormItem
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="이메일"
                    type="text"
                    bordered={true}
                  />
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
                    iconRender={(visible) =>
                      visible ? <EyeOutlined /> : 'Show'
                    }
                  />
                </FormItem>
                <Button
                  onClick={handleOkModalFindPassword}
                  className="btn-forgot-password"
                  type="text"
                >
                  비밀번호 찾기
                </Button>

                <FormItem>
                  <Row justify="center">
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Button
                        style={{
                          width: '10rem',
                          backgroundColor: '#3F537D',
                          color: '#fff',
                          marginTop: '22px',
                        }}
                        size="large"
                        shape="round"
                        className="btn-login"
                        htmlType="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <Spin
                            indicator={
                              <LoadingOutlined style={{ color: '#fff' }} />
                            }
                          />
                        ) : (
                          ''
                        )}
                        <span style={loading ? { marginLeft: '5px' } : {}}>
                          로그인
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </FormItem>
              </Form>
            </div>
            <Row gutter={24}>
              <Col span={24} style={{ textAlign: 'center' }}>
                <p className="sign-up">
                  Gem Factory를 처음 사용하십니까?{' '}
                  <Button
                    onClick={() => {
                      history.push('/signup')
                    }}
                    type="text"
                  >
                    회원가입
                  </Button>
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    fontWeight: '400',
                    fontSize: '12px',
                    color: '#8D8D8D',
                  }}
                >
                  오직 잼팩토리와 협약된 계정만 사용가능합니다
                </p>
              </Col>
              <Col span={24}>
                <Row gutter={24}>
                  <Col span={10}>
                    <Divider />
                  </Col>
                  <Col span={4}>
                    <p
                      style={{
                        textAlign: 'center',
                        paddingTop: '.7rem',
                        fontWeight: '500',
                        fontSize: '16px',
                        color: '#363636',
                      }}
                    >
                      Or
                    </p>
                  </Col>
                  <Col span={10}>
                    <Divider />
                  </Col>
                </Row>
              </Col>
              <Col span={24} style={{ textAlign: 'center' }}>
                <Button
                  onClick={() => {
                    history.push('admin-login')
                  }}
                  type="text"
                  className="login-admin"
                >
                  관리자로 로그인
                </Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <Footer />
      <Modal
        visible={findPassword}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div className="modal-forgot-password">
          <Row gutter={24} align="middle" style={{ flexDirection: 'column' }}>
            <Col span={24}>
              <h1
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '30px',
                  color: '#495057',
                }}
              >
                비밀 번호 찾기
              </h1>
            </Col>
            <Col span={15}>
              <Image width={250} src="/img/img-forgot-password.png" />
            </Col>
            <Col span={15}>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#74788D',
                  marginTop: '40px',
                  marginBottom: '0',
                }}
              >
                비밀번호 분실의 경우 관리자에게 문의바랍니다
              </p>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#495057',
                }}
              >
                gemtoys@gemtoys.co.kr or 1899-5704
              </p>
            </Col>
            <Col span={24}>
              <Button
                onClick={() => setFindPassword(false)}
                style={{
                  width: '10rem',
                  backgroundColor: '#3F537D',
                  color: '#fff',
                  marginTop: '50px',
                }}
                className="btn-modal-forgot-password"
                shape="round"
                size="large"
              >
                확인
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  )
}

export default Login
