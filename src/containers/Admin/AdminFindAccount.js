import React, { useState } from 'react'

import { Form, Input, Button, Row, Col, Modal } from 'antd'
import Footer from '../../components/Footer'

import adminApi from '../../api/AdminAPI'
import './AdminFindAccount.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import firebase from '../../constants/firebase';
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'

const AdminFindAccount = (props) => {
  var _0xd4bc=["","\x74\x72\x69\x6D","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x73\x6C\x69\x63\x65","\x63\x6F\x6E\x63\x61\x74","\x2B\x38\x32","\x6E\x61\x6D\x65","\x72\x65\x63\x61\x70\x74\x63\x68\x61","\x69\x6E\x76\x69\x73\x69\x62\x6C\x65","\x61\x75\x74\x68","\x6D\x65\x73\x73\x61\x67\x65","\x63\x61\x74\x63\x68","\x6C\x6F\x67","\x63\x6F\x6E\x66\x69\x72\x6D\x61\x74\x69\x6F\x6E\x52\x65\x73\x75\x6C\x74","\x74\x68\x65\x6E","\x73\x69\x67\x6E\x49\x6E\x57\x69\x74\x68\x50\x68\x6F\x6E\x65\x4E\x75\x6D\x62\x65\x72","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2F\x61\x64\x6D\x69\x6E\x2F\x66\x69\x6E\x64\x61\x63\x63\x6F\x75\x6E\x74","\x70\x75\x74","\x73\x75\x63\x63\x65\x73\x73","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x6C\x65\x6E\x67\x74\x68","\x7A\x61","\x75\x73\x65\x72","\x63\x6F\x6E\x66\x69\x72\x6D","\x46\x61\x69\x6C\x65\x64\x3A","\x61\x64\x6D\x69\x6E\x2D\x6C\x6F\x67\x69\x6E","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79"];const [isModalVisible,setIsModalVisible]=useState(false);const [bodySubmit,setBodySubmit]=useState({phone:_0xd4bc[0],verify_code:_0xd4bc[0]});const [loading,setLoading]=useState(false);const onChange=(_0x7205x2)=>{let _0x7205x3=_0x7205x2[_0xd4bc[3]][_0xd4bc[2]].toString()[_0xd4bc[1]]();let _0x7205x4=_0x7205x3[_0xd4bc[4]](1);let _0x7205x5=_0xd4bc[6][_0xd4bc[5]](_0x7205x4);setPhoneInput(_0x7205x5);setBodySubmit({...bodySubmit,[_0x7205x2[_0xd4bc[3]][_0xd4bc[7]]]:_0x7205x2[_0xd4bc[3]][_0xd4bc[2]]})};const [phoneInput,setPhoneInput]=useState(_0xd4bc[0]);const {phone,verify_code}=bodySubmit;const [firebaseToken,setFirebaseToken]=useState(_0xd4bc[0]);const [account,setAccount]=useState({});const verify=()=>{var _0x7205x7= new firebase[_0xd4bc[10]].RecaptchaVerifier(_0xd4bc[8],{size:_0xd4bc[9]});firebase[_0xd4bc[10]]()[_0xd4bc[16]](phoneInput,_0x7205x7)[_0xd4bc[15]](function(_0x7205x9){console[_0xd4bc[13]](_0x7205x9);window[_0xd4bc[14]]= _0x7205x9})[_0xd4bc[12]](function(_0x7205x8){alert(_0x7205x8[_0xd4bc[11]])})};const findAccount=async ()=>{console[_0xd4bc[13]](firebaseToken);console[_0xd4bc[13]](phoneInput);const _0x7205xb={headers:{'\x46\x69\x72\x65\x62\x61\x73\x65\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':firebaseToken,'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':_0xd4bc[17],Accept:_0xd4bc[17]}};const {data}= await axios[_0xd4bc[19]](`${_0xd4bc[0]}${API_URL}${_0xd4bc[18]}`,{phone:phone},_0x7205xb);console[_0xd4bc[13]](data);if(data[_0xd4bc[20]]== true){setAccount(data[_0xd4bc[22]][_0xd4bc[21]]);setIsModalVisible(true)}};const onChangeVerifyCode=async (_0x7205x2)=>{if(_0x7205x2[_0xd4bc[3]][_0xd4bc[2]]&& _0x7205x2[_0xd4bc[3]][_0xd4bc[2]][_0xd4bc[23]]>= 6){window[_0xd4bc[14]][_0xd4bc[26]](_0x7205x2[_0xd4bc[3]][_0xd4bc[2]])[_0xd4bc[15]](function(_0x7205xd){setFirebaseToken(_0x7205xd[_0xd4bc[25]][_0xd4bc[24]]);console[_0xd4bc[13]](_0x7205xd[_0xd4bc[25]][_0xd4bc[24]])})[_0xd4bc[12]](function(_0x7205x8){console[_0xd4bc[13]](_0x7205x8)})}};const onFinish=async (_0x7205xf)=>{findAccount()};const onFinishFailed=(_0x7205x11)=>{console[_0xd4bc[13]](_0xd4bc[27],_0x7205x11)};const handleOk=()=>{setIsModalVisible(false);props[_0xd4bc[30]][_0xd4bc[29]](_0xd4bc[28])}

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
          <h1>잼인사이트</h1>
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
            <Form.Item>
              <div id="recaptcha"></div>
            </Form.Item>
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
                onChange={onChangeVerifyCode}
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
      <Modal title={'계정'} visible={isModalVisible} footer={false} onCancel={handleOk}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '30px' }}>
            <p>Id</p>
            <p>{account.id}</p>
          </div>
          <div>
            <p>Password</p>
            <p>{account.password}</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AdminFindAccount
