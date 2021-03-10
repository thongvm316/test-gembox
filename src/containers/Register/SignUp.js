import React, { useState, useRef } from 'react'
import firebase from '../../constants/firebase'
import {
  Row,
  Col,
  Input,
  Modal,
  Button,
  Form,
  message,
  Checkbox,
  Image,
  Spin,
} from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { API_URL } from '../../constants/appConstants'
import Footer from '../../components/Footer'
import axios from 'axios'
import './SignUp.scss'

const FormItem = Form.Item

const SignUp = (props) => {
  var _0x5c2a=["","\x69\x6E\x70\x75\x74\x2D\x30","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x69\x6E\x70\x75\x74\x2D","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x70\x75\x74\x73","\x63\x6F\x6E\x63\x61\x74","\x74\x72\x69\x6D","\x73\x6C\x69\x63\x65","\x2B\x38\x32","\x66\x6F\x63\x75\x73","\x63\x75\x72\x72\x65\x6E\x74","\uC7AC\uC804\uC1A1","\x72\x65\x63\x61\x70\x74\x63\x68\x61","\x69\x6E\x76\x69\x73\x69\x62\x6C\x65","\x61\x75\x74\x68","\x6D\x65\x73\x73\x61\x67\x65","\x63\x61\x74\x63\x68","\x63\x6F\x6E\x66\x69\x72\x6D\x61\x74\x69\x6F\x6E\x52\x65\x73\x75\x6C\x74","\x74\x68\x65\x6E","\x73\x69\x67\x6E\x49\x6E\x57\x69\x74\x68\x50\x68\x6F\x6E\x65\x4E\x75\x6D\x62\x65\x72","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F\x73\x69\x67\x6E\x75\x70","\x7A\x61","\x75\x73\x65\x72","\x6C\x6F\x67","\x63\x6F\x6E\x66\x69\x72\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2F\x63\x68\x65\x63\x6B\x3F\x65\x6D\x61\x69\x6C\x3D","\x65\x6D\x61\x69\x6C","\x67\x65\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x45\x6D\x61\x69\x6C\x20\x45\x78\x69\x73\x74\x65\x64","\x65\x72\x72\x6F\x72","\x62\x75\x73\x69\x6E\x65\x73\x73\x5F\x6C\x69\x63\x65\x6E\x73\x65","\x75\x72\x6C\x5F\x6D\x61\x72\x6B\x65\x74","\x6E\x61\x6D\x65","\x2F","\x73\x70\x6C\x69\x74","\x6E\x61\x6D\x65\x41\x6E\x64\x43\x6F\x6D\x70\x61\x6E\x79","\x63\x6F\x6D\x70\x61\x6E\x79","\x53\x75\x63\x63\x65\x73\x73\x3A","\x54\x68\x65\x20\x70\x61\x73\x73\x77\x6F\x72\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x65\x6E\x6F\x75\x67\x68\x20\x63\x68\x61\x72\x61\x63\x74\x65\x72\x73","\x70\x6F\x73\x74","\x73\x74\x61\x74\x75\x73","\x64\x61\x74\x61","\x56\x65\x72\x69\x66\x79\x20\x43\x6F\x64\x65\x20\x49\x6E\x76\x61\x6C\x69\x64","\x53\x4D\x53\x20\x63\x6F\x64\x65\x20\x69\x73\x20\x69\x6E\x76\x61\x6C\x69\x64\x20\x6F\x72\x20\x65\x78\x70\x69\x72\x65\x64\x21","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x72\x65\x61\x64\x41\x73\x44\x61\x74\x61\x55\x52\x4C","\x6F\x6E\x6C\x6F\x61\x64","\x72\x65\x73\x75\x6C\x74","\x6F\x6E\x65\x72\x72\x6F\x72","\x66\x69\x6C\x65\x73","\x2C"];const [verifiedPhone,setVerifiedPhone]=useState(false);const [signUp,setSignUp]=useState(false);const [basePdf,setBasePdf]=useState(_0x5c2a[0]);const [resendSms,setResemdSms]=useState(_0x5c2a[0]);const [loading,setLoading]=useState(false);const [validatePassword,setValidatePassword]=useState(_0x5c2a[0]);const [confirmPassword,setConfirmPassword]=useState(_0x5c2a[0]);const [showNameOfFileUpload,setShowNameOfFileUpload]=useState(_0x5c2a[0]);const [bodyphone,setBodyPhone]=useState({email:_0x5c2a[0],password:_0x5c2a[0],nameAndCompany:_0x5c2a[0],phone:_0x5c2a[0]});const [url,seturl]=useState([]);const [inputs,setInputs]=useState({inputs:[_0x5c2a[1]]});const onChangeUrl=(_0x25b0x2,_0x25b0x3)=>{const _0x25b0x4=JSON[_0x5c2a[3]](JSON[_0x5c2a[2]](url));_0x25b0x4[_0x25b0x3]= _0x25b0x2[_0x5c2a[5]][_0x5c2a[4]];seturl(_0x25b0x4)};const appendInput=()=>{var _0x25b0x6=`${_0x5c2a[6]}${inputs[_0x5c2a[8]][_0x5c2a[7]]}${_0x5c2a[0]}`;setInputs((_0x25b0x7)=>{return ({inputs:_0x25b0x7[_0x5c2a[8]][_0x5c2a[9]]([_0x25b0x6])})})};const [phoneInput,setPhoneInput]=useState(_0x5c2a[0]);const [firebaseToken,setFirebaseToken]=useState(_0x5c2a[0]);const onChange=(_0x25b0x2)=>{let _0x25b0x9=_0x25b0x2[_0x5c2a[5]][_0x5c2a[4]];let _0x25b0xa=_0x25b0x9.toString()[_0x5c2a[10]]();let _0x25b0xb=_0x25b0xa[_0x5c2a[11]](1);let _0x25b0xc=_0x5c2a[12][_0x5c2a[9]](_0x25b0xb);setPhoneInput(_0x25b0xc)};const {nameAndCompany,email,password,phone}=bodyphone;const inputRef=useRef();const focus=()=>{inputRef[_0x5c2a[14]][_0x5c2a[13]]()};const verifySmsCode=()=>{setVerifiedPhone(true);setResemdSms(_0x5c2a[15]);var _0x25b0x10= new firebase[_0x5c2a[18]].RecaptchaVerifier(_0x5c2a[16],{size:_0x5c2a[17]});var _0x25b0x11=phoneInput;firebase[_0x5c2a[18]]()[_0x5c2a[23]](_0x25b0x11,_0x25b0x10)[_0x5c2a[22]](function(_0x25b0x13){window[_0x5c2a[21]]= _0x25b0x13})[_0x5c2a[20]](function(_0x25b0x12){alert(_0x25b0x12[_0x5c2a[19]])})};const [otp,setOtp]=useState(_0x5c2a[0]);const codeVerifyOtp=()=>{var _0x25b0x15=otp;window[_0x5c2a[21]][_0x5c2a[29]](_0x25b0x15)[_0x5c2a[22]](function(_0x25b0x16){setFirebaseToken(_0x25b0x16[_0x5c2a[27]][_0x5c2a[26]]);console[_0x5c2a[28]](_0x25b0x16[_0x5c2a[27]])})[_0x5c2a[20]](function(_0x25b0x12){alert(_0x25b0x12[_0x5c2a[19]]);window[_0x5c2a[24]]= _0x5c2a[25]})};const [emailVerify,setEmailVerify]=useState({email:_0x5c2a[0]});const handleInputBlur=async ()=>{const _0x25b0x18={headers:{Accept:_0x5c2a[30],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x5c2a[30]}};try{const {data}= await axios[_0x5c2a[33]](`${_0x5c2a[0]}${API_URL}${_0x5c2a[31]}${emailVerify[_0x5c2a[32]]}${_0x5c2a[0]}`,_0x25b0x18);console[_0x5c2a[28]](data)}catch(error){console[_0x5c2a[28]](error[_0x5c2a[34]]);message[_0x5c2a[36]](_0x5c2a[35])}};const onFinish=async (_0x25b0x1a)=>{setLoading(true);_0x25b0x1a[_0x5c2a[37]]= basePdf;_0x25b0x1a[_0x5c2a[38]]= url;_0x25b0x1a[_0x5c2a[39]]= _0x25b0x1a[_0x5c2a[42]][_0x5c2a[41]](_0x5c2a[40])[0][_0x5c2a[10]]();_0x25b0x1a[_0x5c2a[43]]= _0x25b0x1a[_0x5c2a[42]][_0x5c2a[41]](_0x5c2a[40])[1][_0x5c2a[10]]();console[_0x5c2a[28]](_0x5c2a[44],_0x25b0x1a);const _0x25b0x18={headers:{Accept:_0x5c2a[30],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x5c2a[30],'\x46\x69\x72\x65\x62\x61\x73\x65\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':firebaseToken}};if(validatePassword[_0x5c2a[7]]< 6){message[_0x5c2a[36]](_0x5c2a[45]);return};const {confirmPassword,email,business_license,password,phone,url_market,verify_code,name,company}=_0x25b0x1a;const _0x25b0x1b={confirmPassword,email,business_license,password,phone,url_market,verify_code,name,company};try{const {data}= await axios[_0x5c2a[46]](`${_0x5c2a[0]}${API_URL}${_0x5c2a[25]}`,_0x25b0x1b,_0x25b0x18);setSignUp(true);setLoading(false)}catch(error){setLoading(false);console[_0x5c2a[28]](error[_0x5c2a[34]]);if(error[_0x5c2a[34]][_0x5c2a[47]]=== 400&& error[_0x5c2a[34]][_0x5c2a[48]][_0x5c2a[48]][_0x5c2a[19]]=== _0x5c2a[49]){message[_0x5c2a[36]](_0x5c2a[50])}}};const handleOk=()=>{setSignUp(false);props[_0x5c2a[52]][_0x5c2a[51]](_0x5c2a[40])};const onFindPassword=()=>{props[_0x5c2a[52]][_0x5c2a[51]]({pathname:_0x5c2a[40],state:{findPassword:true}})};const convertBase64=(_0x25b0x1f)=>{return  new Promise((_0x25b0x20,_0x25b0x21)=>{const _0x25b0x22= new FileReader();_0x25b0x22[_0x5c2a[53]](_0x25b0x1f);_0x25b0x22[_0x5c2a[54]]= ()=>{_0x25b0x20(_0x25b0x22[_0x5c2a[55]])};_0x25b0x22[_0x5c2a[56]]= (_0x25b0x12)=>{_0x25b0x21(_0x25b0x12)}})};const uploadPdfFile=async (_0x25b0x2)=>{const _0x25b0x1f=_0x25b0x2[_0x5c2a[5]][_0x5c2a[57]][0];const _0x25b0x24= await convertBase64(_0x25b0x1f);const _0x25b0x25=_0x25b0x24[_0x5c2a[41]](_0x5c2a[58])[_0x5c2a[11]](1)[0];setBasePdf(_0x25b0x25)}

  return (
    <div className="signup">
      <Row gutter={24}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <h1 className="logo">잼인사이트</h1>
        </Col>
      </Row>

      <Row gutter={24} justify="center">
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={24}
          xl={24}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Col
            className="background-color"
            xs={24}
            sm={24}
            md={16}
            lg={9}
            xl={6}
          >
            <div>
              <h1>회원가입</h1>
            </div>
            <Form onFinish={onFinish}>
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
                  placeholder="이메일*"
                  type="text"
                  onChange={(e) => {
                    setEmailVerify({ email: e.target.value })
                  }}
                  name="email"
                  value={email}
                  onBlur={handleInputBlur}
                />
              </FormItem>
              <FormItem
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your 비밀번호 8자리!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (value.length >= 8) {
                        return Promise.resolve()
                      } else {
                        return Promise.reject(
                          'Password must contain at least 8 characters',
                        )
                      }
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="비밀번호 8자리*"
                  type="text"
                  onChange={(e) => {
                    setValidatePassword(e.target.value)
                  }}
                />
              </FormItem>
              <FormItem
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please input your 비밀번호 재확인',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }

                      return Promise.reject(
                        'The two passwords that you entered do not match!',
                      )
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="비밀번호 재확인*"
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    onChange(e)
                  }}
                />
              </FormItem>
              <br />
              <FormItem
                name="nameAndCompany"
                rules={[
                  {
                    required: true,
                    message: 'Please input your 이름 / 업체명*',
                  },
                ]}
              >
                <Input
                  placeholder="이름 / 업체명*"
                  type="text"
                  name="nameAndCompany"
                  // value={name}
                  onChange={onChange}
                />
              </FormItem>
              <FormItem
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your 핸드폰 번호 입력',
                  },
                ]}
                style={{ display: 'flex' }}
              >
                <Input
                  placeholder="핸드폰 번호 입력*"
                  suffix={
                    <Button
                      onClick={verifySmsCode}
                      className="send-sms"
                      type="text"
                    >
                      {/* {resendSms ? resendSms : '인증번호 전송'} */}
                      인증번호 전송
                    </Button>
                  }
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
              </FormItem>
              {verifiedPhone ? (
                <FormItem
                  name="verify_code"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your 인증번호 입력',
                    },
                  ]}
                >
                  <Input
                    onBlur={codeVerifyOtp}
                    placeholder="인증번호 입력"
                    type="text"
                    ref={inputRef}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </FormItem>
              ) : (
                ''
              )}
              <FormItem>
                <div id="recaptcha"></div>
              </FormItem>
              <br />
              {inputs.inputs.map((input, index) => (
                <Input
                  key={index}
                  placeholder="신청 마켓 url 입력*"
                  type="text"
                  style={{ marginBottom: '2px' }}
                  onChange={(e) => {
                    onChangeUrl(e, index)
                  }}
                  suffix={
                    <Button
                      style={{ borderColor: '#A6B0CF' }}
                      onClick={appendInput}
                    >
                      +
                    </Button>
                  }
                />
              ))}
              <br />
              <br />
              <FormItem
                name="file"
                rules={[
                  {
                    required: true,
                    message: 'Please attach your PDF file',
                  },
                ]}
                style={{ border: '1px dashed #A6B0CF', padding: '1rem' }}
              >
                <Row gutter={24} justify="center">
                  <Col span={18} style={{ textAlign: 'center' }}>
                    {showNameOfFileUpload ? (
                      <p>{showNameOfFileUpload}</p>
                    ) : (
                      <>
                        <Image src="/img/Upload.png" />
                        <p
                          style={{
                            fontWeight: '400',
                            fontSize: '10px',
                            color: '#14141A',
                            marginTop: '16px',
                            marginBottom: '0',
                          }}
                        >
                          사업자 등록증 pdf 또는 이미지 첨부
                        </p>
                        <p
                          style={{
                            fontWeight: '400',
                            fontSize: '10px',
                            color: '#14141A',
                          }}
                        >
                          or
                        </p>
                      </>
                    )}
                    <label className="custom-file-upload">
                      <Input
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        name="selectedFile"
                        onChange={(e) => {
                          uploadPdfFile(e)
                          if (e.target.files && e.target.files[0].name) {
                            setShowNameOfFileUpload(e.target.files[0].name)
                          }
                        }}
                      />
                      Browse
                    </label>
                  </Col>
                </Row>
              </FormItem>
              <br />
              <br />
              <br />
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject('Should accept agreement'),
                  },
                ]}
              >
                <Checkbox>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>
                    (필수)
                  </span>{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    개인정보 수집 및 이용
                  </span>
                </Checkbox>
              </Form.Item>
              <div className="agreement">
                <p>
                  <span style={{ color: '#A6B0CF' }}>■</span> 수집하는 개인정보
                  항목회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은
                  개인정보를 수집하고 있습니다.ο 수집항목 : 이름, 업체명 ,
                  비밀번호, 휴대폰 번호 , 이메일 , 사업자등록증, 법정대리인정보
                  , 서비스 이용기록 , 접속 로그 , 접속 IP 정보ο 개인정보
                  수집방법 : 홈페이지(회원가입) , 서면양식
                </p>
                <p>
                  <span style={{ color: '#A6B0CF' }}>■</span> 개인정보의 수집 및
                  이용목적 회사는 수집한 개인정보를 다음의 목적을 위해
                  활용합니다. ο 서비스 제공에 관한 계약 이행 및 서비스 제공에
                  따른 요금정산 콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는
                  청구지 등 발송ο 회원 관리회원제 서비스 이용에 따른 본인확인 ,
                  개인 식별, 고지사항 전달 ο 마케팅 및 광고에 활용접속 빈도 파악
                  또는 회원의 서비스 이용에 대한 통계
                </p>
                <p>
                  <span style={{ color: '#A6B0CF' }}>■</span> 개인정보의 보유 및
                  이용기간 회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외
                  없이 해당 정보를 지체 없이 파기합니다.
                </p>
              </div>
              <Row gutter={24} justify="center">
                <Col
                  span={24}
                  style={{ textAlign: 'center', marginTop: '24px' }}
                >
                  <FormItem>
                    <Button
                      style={{
                        width: '10rem',
                        backgroundColor: '#3F537D',
                        color: '#fff',
                        marginTop: '50px',
                      }}
                      disabled={loading}
                      size="large"
                      shape="round"
                      htmlType="submit"
                      className="submit"
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
                        회원가입 신청
                      </span>
                    </Button>
                  </FormItem>
                </Col>
              </Row>
            </Form>
            <Row gutter={24}>
              <Col span={24} style={{ marginTop: '23px' }}>
                <Button
                  type="text"
                  onClick={onFindPassword}
                  className="btn-forgot-password"
                  style={{ padding: '0' }}
                >
                  비밀번호 찾기
                </Button>
                <h4
                  style={{
                    fontWeight: '500',
                    fontSize: '12px',
                    color: '#333333',
                  }}
                >
                  오직 잼팩토리와 협약된 계정만 사용가능합니다
                </h4>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>

      <Footer />
      <Modal
        visible={signUp}
        onOk={handleOk}
        okText="확인"
        onCancel={() => setSignUp(false)}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div className="modal-signup">
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
                회원가입 신청
              </h1>
            </Col>
            <Col span={15}>
              <Image width={250} src="/img/signup-modal.png" />
            </Col>
            <Col span={15}>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#74788D',
                  textAlign: 'center',
                  marginTop: '40px',
                }}
              >
                관리자 승인 후 사용가능합니다승인 완료시 등록하신 이메일로 안내
                메일 보내드리겠습니다
              </p>
            </Col>
            <Col span={24}>
              <Button
                onClick={() => {
                  setSignUp(false)
                  props.history.push('/')
                }}
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

export default SignUp
