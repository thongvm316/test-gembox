import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/appConstants'
import { UserDetailContext } from '../../lib/userdetail/UserDetailContext'
import { action } from '../../lib/userdetail/UserDetailContext'

import {
  Row,
  Col,
  Button,
  Input,
  Modal,
  Card,
  Divider,
  Image,
  message,
  Spin,
  Popover,
} from 'antd'
import { CloseSquareFilled, EditOutlined } from '@ant-design/icons'
import './UserDetail.scss'

const UserDetail = (props) => {
  var _0xdd78=["\x6C\x6F\x67","","\x69\x6E\x70\x75\x74\x2D\x30","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x69\x6E\x70\x75\x74\x2D","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x70\x75\x74\x73","\x63\x6F\x6E\x63\x61\x74","\x72\x65\x61\x64\x41\x73\x44\x61\x74\x61\x55\x52\x4C","\x6F\x6E\x6C\x6F\x61\x64","\x72\x65\x73\x75\x6C\x74","\x6F\x6E\x65\x72\x72\x6F\x72","\x66\x69\x6C\x65\x73","\x73\x6C\x69\x63\x65","\x2C","\x73\x70\x6C\x69\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x2F\x75\x73\x65\x72\x2F\x70\x72\x6F\x66\x69\x6C\x65","\x67\x65\x74","\x64\x61\x74\x61","\x46\x45\x54\x43\x48\x5F\x53\x55\x43\x43\x45\x53\x53","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6E\x61\x6D\x65","\x63\x61\x74\x63\x68","\x55\x50\x44\x41\x54\x45\x5F\x50\x44\x46","\uC131\uACF5","\x73\x75\x63\x63\x65\x73\x73","\x74\x68\x65\x6E","\x70\x75\x74","\uC0C8\x20\uBE44\uBC00\uBC88\uD638\uC640\x20\uD655\uC778\x20\uC0C8\x20\uBE44\uBC00\uBC88\uD638\uAC00\x20\uC77C\uCE58\uD558\uC9C0\x20\uC54A\uC2B5\uB2C8\uB2E4\x2E","\x65\x72\x72\x6F\x72","\uD604\uC7AC\x20\uC554\uD638\uAC00\x20\uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4","\uC554\uD638\uB97C\x20\uC131\uACF5\uC801\uC73C\uB85C\x20\uBCC0\uACBD","\x2F\x75\x73\x65\x72\x2F\x63\x68\x61\x6E\x67\x65\x70\x61\x73\x73\x77\x6F\x72\x64","\x44\x45\x4C\x45\x54\x45\x5F\x4D\x41\x52\x4B\x45\x54","\x2F\x75\x73\x65\x72\x2F\x6D\x61\x72\x6B\x65\x74\x2F","\x64\x65\x6C\x65\x74\x65"];const context=useContext(UserDetailContext);const {state,dispatch}=context;const {data}=state;console[_0xdd78[0]](data);const [showNameOfFileUpload,setShowNameOfFileUpload]=useState(_0xdd78[1]);const [isModalVisible,setIsModalVisible]=useState(false);const onChangePassword=()=>{setIsModalVisible(true)};const handleCancel=()=>{setIsModalVisible(false)};const [isModalVisibleTwo,setIsModalVisibleTwo]=useState(false);const showModalTwo=()=>{setIsModalVisibleTwo(true)};const handleOkTwo=()=>{setIsModalVisibleTwo(false)};const handleCancelTwo=()=>{setIsModalVisibleTwo(false)};const [url,seturl]=useState([]);const [inputs,setInputs]=useState({inputs:[_0xdd78[2]]});const onChangeUrl=(_0xb4b1x8,_0xb4b1x9)=>{const _0xb4b1xa=JSON[_0xdd78[4]](JSON[_0xdd78[3]](url));_0xb4b1xa[_0xb4b1x9]= _0xb4b1x8[_0xdd78[6]][_0xdd78[5]];seturl(_0xb4b1xa)};const appendInput=()=>{var _0xb4b1xc=`${_0xdd78[7]}${inputs[_0xdd78[9]][_0xdd78[8]]}${_0xdd78[1]}`;setInputs((_0xb4b1xd)=>{return ({inputs:_0xb4b1xd[_0xdd78[9]][_0xdd78[10]]([_0xb4b1xc])})})};const [basePdf,setBasePdf]=useState(_0xdd78[1]);const convertBase64=(_0xb4b1xf)=>{return  new Promise((_0xb4b1x10,_0xb4b1x11)=>{const _0xb4b1x12= new FileReader();_0xb4b1x12[_0xdd78[11]](_0xb4b1xf);_0xb4b1x12[_0xdd78[12]]= ()=>{_0xb4b1x10(_0xb4b1x12[_0xdd78[13]])};_0xb4b1x12[_0xdd78[14]]= (_0xb4b1x13)=>{_0xb4b1x11(_0xb4b1x13)}})};const uploadPdfFile=async (_0xb4b1x8)=>{const _0xb4b1xf=_0xb4b1x8[_0xdd78[6]][_0xdd78[15]][0];const _0xb4b1x15= await convertBase64(_0xb4b1xf);const _0xb4b1x16=_0xb4b1x15[_0xdd78[18]](_0xdd78[17])[_0xdd78[16]](1)[0];setBasePdf(_0xb4b1x16)};const [dataUrlMarket,setDataUrlMarket]=useState([]);const [loading,setLoading]=useState(false);const [disableBtn,setDisableBtn]=useState(false);const config={headers:{Accept:_0xdd78[19],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xdd78[19],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':`${_0xdd78[1]}${localStorage[_0xdd78[21]](_0xdd78[20])}${_0xdd78[1]}`}};useEffect(async ()=>{try{setLoading(true);const {data}= await axios[_0xdd78[23]](`${_0xdd78[1]}${API_URL}${_0xdd78[22]}`,config);if(data&& data[_0xdd78[24]][_0xdd78[13]]){dispatch({type:action[_0xdd78[25]],payload:data[_0xdd78[24]][_0xdd78[13]]})};setLoading(false)}catch(error){setLoading(false);console[_0xdd78[0]](error[_0xdd78[26]])}},[]);const [password,setPassword]=useState({current_password:_0xdd78[1],new_password:_0xdd78[1],confirm_new_password:_0xdd78[1]});const {current_password,new_password,confirm_new_password}=password;const bodyPassword={current_password,new_password};const onChange=(_0xb4b1x8)=>{setPassword({...password,[_0xb4b1x8[_0xdd78[6]][_0xdd78[27]]]:_0xb4b1x8[_0xdd78[6]][_0xdd78[5]]})};const bodyOfProfile={url_market:url,business_license:basePdf};const changeUserProfile=async ()=>{const {url_market,business_license}=bodyOfProfile;setDisableBtn(true);const _0xb4b1x1c= await axios[_0xdd78[33]](`${_0xdd78[1]}${API_URL}${_0xdd78[22]}`,bodyOfProfile,config)[_0xdd78[32]]((_0xb4b1x1d)=>{dispatch({type:action[_0xdd78[29]],payload:business_license});Modal[_0xdd78[31]]({content:_0xdd78[30]})})[_0xdd78[28]]((_0xb4b1x13)=>{return console[_0xdd78[0]](_0xb4b1x13[_0xdd78[26]])});setDisableBtn(false)};const changePassword=async ()=>{setDisableBtn(true);if(new_password!== confirm_new_password){Modal[_0xdd78[35]]({content:_0xdd78[34]});setDisableBtn(false);return};const _0xb4b1x1c= await axios[_0xdd78[33]](`${_0xdd78[1]}${API_URL}${_0xdd78[38]}`,bodyPassword,config)[_0xdd78[32]]((_0xb4b1x1d)=>{setPassword({current_password:_0xdd78[1],new_password:_0xdd78[1],confirm_new_password:_0xdd78[1]});setDisableBtn(false);Modal[_0xdd78[31]]({content:_0xdd78[37]})})[_0xdd78[28]]((_0xb4b1x13)=>{console[_0xdd78[0]](_0xb4b1x13[_0xdd78[26]]);setDisableBtn(false);Modal[_0xdd78[35]]({content:_0xdd78[36]})})};const deleteMarket=(_0xb4b1x20)=>{axios[_0xdd78[41]](`${_0xdd78[1]}${API_URL}${_0xdd78[40]}${_0xb4b1x20}${_0xdd78[1]}`,config)[_0xdd78[32]]((_0xb4b1x1d)=>{dispatch({type:action[_0xdd78[39]],payload:_0xb4b1x20})})[_0xdd78[28]]((_0xb4b1x13)=>{console[_0xdd78[0]](_0xb4b1x13[_0xdd78[26]])})}

  return (
    <>
      {loading ? (
        <div className="position-spiner">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="card-border user-detail">
            <Row>
              <Col span={24}>
                <div className="user-info">
                  <div className="user-item">
                    <div>이름</div>
                    <div>{data.name}</div>
                  </div>
                  <Divider />
                </div>

                <div className="user-info">
                  <div className="user-item">
                    <div>회사명</div>
                    <div>{data.company}</div>
                  </div>
                  <Divider />
                </div>

                <div className="user-info">
                  <div className="user-item">
                    <div>이메일</div>
                    <div>{data.email}</div>
                  </div>
                  <Divider />
                </div>

                <div className="user-info">
                  <div style={{ marginBottom: 10 }}>등록 마켓</div>
                  <div>
                    <Card style={{ marginBottom: '5px' }}>
                      {data.url_market &&
                        data.url_market.map((market, i) => (
                          <React.Fragment key={i}>
                            <a
                              style={{ color: 'rgba(0, 0, 0, 0.85)' }}
                              href={market.url}
                            >
                              {market.url}
                            </a>{' '}
                            <Button
                              onClick={() => deleteMarket(market.id)}
                              className="btn-del"
                              style={{
                                backgroundColor: 'transparent',
                                color: 'red',
                                cursor: 'pointer',
                              }}
                              type="text"
                            >
                              X
                            </Button>
                            <br />
                          </React.Fragment>
                        ))}
                    </Card>
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
                  </div>
                </div>

                <div className="user-info" style={{ marginTop: 20 }}>
                  <div style={{ marginBottom: 10 }}>Password</div>
                  <div>
                    <Input
                      size="large"
                      defaultValue="******"
                      suffix={
                        <EditOutlined onClick={() => onChangePassword()} />
                      }
                    />
                  </div>
                </div>

                <Row
                  gutter={24}
                  style={{
                    border: '1px dashed #cccccc',
                    padding: '1rem',
                    margin: '5px 40px 0 40px',
                  }}
                  justify="center"
                >
                  <Col xs={24} sm={6} md={6} lg={6} xl={6}>
                    <Popover
                      content={
                        <p
                          style={{
                            cursor: 'pointer',
                          }}
                          onClick={showModalTwo}
                        >
                          View full pdf file
                        </p>
                      }
                    >
                      <embed
                        src={
                          data.business_license
                            ? data.business_license
                            : 'https://via.placeholder.com/400'
                        }
                        type="application/pdf"
                        frameBorder="0"
                        scrolling="auto"
                        height="150"
                        style={{ width: '100%' }}
                      ></embed>
                    </Popover>
                  </Col>
                  <Col
                    xs={24}
                    sm={18}
                    md={18}
                    lg={18}
                    xl={18}
                    style={{ textAlign: 'center' }}
                  >
                    {showNameOfFileUpload ? (
                      <p style={{ marginTop: '2rem' }}>
                        {showNameOfFileUpload}
                      </p>
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
                        onChange={async (e) => {
                          await uploadPdfFile(e)
                          if (e.target.files && e.target.files[0].name) {
                            setShowNameOfFileUpload(e.target.files[0].name)
                          }
                        }}
                      />
                      Browse
                    </label>
                  </Col>
                </Row>

                <div className="user-info" style={{ marginTop: 20 }}>
                  <div className="actions">
                    <Button
                      disabled={disableBtn}
                      onClick={changeUserProfile}
                      size="large"
                      type=""
                      className="btn-save"
                    >
                      변경사항 저장하기
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>

            <Modal
              title="Change Password"
              visible={isModalVisible}
              footer={false}
              onCancel={handleCancel}
            >
              <div style={{ padding: '0 80px' }}>
                <div style={{ marginBottom: 20 }}>
                  <Input.Password
                    name="current_password"
                    value={current_password}
                    onChange={onChange}
                    size="large"
                    placeholder="너의 비밀번호"
                  />
                </div>

                <div>
                  <Input.Password
                    name="new_password"
                    value={new_password}
                    onChange={onChange}
                    size="large"
                    placeholder="새 비밀번호 입력"
                  />
                  <Input.Password
                    name="confirm_new_password"
                    value={confirm_new_password}
                    onChange={onChange}
                    size="large"
                    placeholder="새 비밀번호 확인"
                  />
                </div>

                <div className="actions-change-password">
                  <Button
                    size="large"
                    onClick={handleCancel}
                    className="btn-save"
                  >
                    취소
                  </Button>
                  <Button
                    size="large"
                    onClick={changePassword}
                    className="btn-save"
                  >
                    확인
                  </Button>
                </div>
              </div>
            </Modal>

            <Modal
              visible={isModalVisibleTwo}
              onOk={handleOkTwo}
              onCancel={handleCancelTwo}
              cancelButtonProps={{ style: { display: 'none' } }}
              width={1000}
            >
              <embed
                src={
                  data.business_license
                    ? data.business_license
                    : 'https://via.placeholder.com/400'
                }
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="800"
                style={{ width: '100%' }}
              ></embed>
            </Modal>
          </div>
        </>
      )}
    </>
  )
}

export default UserDetail
