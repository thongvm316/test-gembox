import React, { useState, useContext } from 'react'
import { Row, Col, Button, Space, List, Input, message } from 'antd'
import { useLocation } from 'react-router-dom'

import { AdminMemberContext } from '../../../lib/admin/AdminMemberContext'
import { action } from '../../../lib/admin/AdminMemberContext'

import axios from 'axios'
import { API_URL } from '../../../constants/appConstants'
import adminApi from '../../../api/AdminAPI'
import fileDownload from 'js-file-download'

import './AdminMemberRequestDetail.scss'

const AdminMemberRequestDetail = (props) => {
  var _0x2642=["","\x73\x74\x61\x74\x65","\x31\x32\x33\x34\x35\x36\x37\x38","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x74\x6F\x6B\x65\x6E","\x67\x65\x74\x49\x74\x65\x6D","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x65\x6E\x74\x65\x72\x20\x61\x20\x63\x6F\x6D\x70\x61\x6E\x79\x20\x72\x65\x67\x69\x73\x74\x72\x61\x74\x69\x6F\x6E\x20\x6E\x75\x6D\x62\x65\x72","\x77\x61\x72\x6E\x69\x6E\x67","\x61\x70\x70\x72\x6F\x76\x65","\x2F\x6D\x65\x6D\x62\x65\x72\x73\x2F","\x69\x64","\x70\x75\x74","\x41\x50\x50\x52\x4F\x56\x45","\x2F\x6D\x65\x6D\x62\x65\x72\x2D\x72\x65\x71\x75\x65\x73\x74","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x72\x65\x6A\x65\x63\x74","\x52\x45\x4A\x45\x43\x54","\x63\x61\x74\x63\x68","\x73\x75\x63\x63\x65\x73\x73","\x6C\x69\x63\x65\x6E\x73\x65\x2E\x70\x64\x66","\x74\x68\x65\x6E","\x64\x6F\x77\x6C\x6F\x61\x64\x50\x64\x66\x46\x69\x6C\x65","\x2F\x61\x64\x6D\x69\x6E\x2F\x72\x65\x73\x65\x74\x70\x61\x73\x73\x77\x6F\x72\x64","\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6F\x6D\x70\x61\x6E\x79\x4E\x75\x6D\x62\x65\x72"];const location=useLocation();const [loading,setLoading]=useState(false);const [numberOfRegister,setNumberOfRegister]=useState(_0x2642[0]);const [isNumberRegister,setIsNumberRegister]=useState(false);const {memberRequestDetail}=location[_0x2642[1]];const [newPassword,setNewPassword]=useState(_0x2642[2]);const config={headers:{Accept:_0x2642[3],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x2642[3],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':`${_0x2642[0]}${localStorage[_0x2642[5]](_0x2642[4])}${_0x2642[0]}`}};const context=useContext(AdminMemberContext);const {dispatch}=context;const approve=async ()=>{setLoading(true);if(!isNumberRegister){message[_0x2642[7]](_0x2642[6]);setLoading(false);return};const _0xea7fx5={action:_0x2642[8]};try{ await axios[_0x2642[11]](`${_0x2642[0]}${API_URL}${_0x2642[9]}${memberRequestDetail[_0x2642[10]]}${_0x2642[0]}`,_0xea7fx5,config);dispatch({type:action[_0x2642[12]],payload:memberRequestDetail});props[_0x2642[15]][_0x2642[14]](_0x2642[13])}catch(error){console[_0x2642[17]](error[_0x2642[16]])};setLoading(false)};const reject=async ()=>{setLoading(true);const _0xea7fx5={action:_0x2642[18]};try{ await axios[_0x2642[11]](`${_0x2642[0]}${API_URL}${_0x2642[9]}${memberRequestDetail[_0x2642[10]]}${_0x2642[0]}`,_0xea7fx5,config);dispatch({type:action[_0x2642[19]]});props[_0x2642[15]][_0x2642[14]](_0x2642[13])}catch(error){console[_0x2642[17]](error[_0x2642[16]])};setLoading(true)};const dowloadPdfFile=()=>{setLoading(true);adminApi[_0x2642[24]](memberRequestDetail[_0x2642[10]])[_0x2642[23]]((_0xea7fx9)=>{console[_0x2642[17]](_0x2642[21]);fileDownload(_0xea7fx9,_0x2642[22]);setLoading(false)})[_0x2642[20]]((_0xea7fx8)=>{console[_0x2642[17]](_0xea7fx8[_0x2642[16]]);setLoading(false)})};const resetPassword=async ()=>{const _0xea7fx5={user_id:memberRequestDetail[_0x2642[10]]};try{setLoading(true);const {data}= await axios[_0x2642[11]](`${_0x2642[0]}${API_URL}${_0x2642[25]}`,_0xea7fx5,config);setLoading(false)}catch(error){console[_0x2642[17]](error[_0x2642[16]]);setLoading(false)}};const addNumberRegisterCompany=()=>{setLoading(true);const _0xea7fx5={user_id:memberRequestDetail[_0x2642[10]],company_number:numberOfRegister};adminApi[_0x2642[26]](_0xea7fx5)[_0x2642[23]](()=>{console[_0x2642[17]](_0x2642[21]);setLoading(false);setIsNumberRegister(true)})[_0x2642[20]]((_0xea7fx8)=>{console[_0x2642[17]](_0xea7fx8[_0x2642[16]]);setLoading(false)})}

  return (
    <div className="admin-member-request-detail">
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
            <Col span={24} className="style-positon">
              <p>
                <strong>이름</strong>
              </p>
              <p>{memberRequestDetail.name}</p>
            </Col>
            <Col span={24} className="style-positon">
              <p>
                <strong>연락처</strong>
              </p>
              <p>{memberRequestDetail.phone}</p>
            </Col>
            <Col span={24} className="style-positon">
              <p>
                <strong>이메일</strong>
              </p>
              <p>{memberRequestDetail.email}</p>
            </Col>
            <Col span={24} className="style-positon">
              <p>
                <strong>패스워드</strong>
              </p>
              {/* <Button disabled={loading} onClick={resetPassword} type="default">
                Reset Password
              </Button> */}
              <div>
              <Input.Password disabled={true} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              </div>
            </Col>
            <Col
              span={24}
              className="style-positon"
              style={{ marginTop: '31px' }}
            >
              <p>신청 채널</p>
              <List
                size="small"
                bordered
                dataSource={memberRequestDetail.markets}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col
              span={24}
              className="style-positon"
              style={{ marginTop: '100px' }}
            >
              <p>
                <strong>사업자 등록번호</strong>
              </p>
              <p className="border-solid">
                {memberRequestDetail.company_number ? (
                  memberRequestDetail.company_number
                ) : (
                    <>
                      {' '}
                      <Input
                        style={{
                          backgroundColor: 'transparent',
                          marginBottom: '3px',
                        }}
                        onChange={(e) => {
                          setNumberOfRegister(e.target.value)
                        }}
                      />{' '}
                      <br />
                      <Button
                        disabled={loading}
                        onClick={addNumberRegisterCompany}
                        style={{ width: '100%' }}
                      >
                        확인
                    </Button>
                    </>
                  )}
              </p>
            </Col>
            <Col span={24} className="style-positon">
              <p>첨부된 이미지를 확인하여 사업자 등록번호를 입력바랍니다</p>
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[24, 24]} justify="center">
            <Col span={24} style={{ textAlign: 'center' }}>
              <embed
                src={memberRequestDetail.business_license}
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

      <Row style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Col span={24}>
          {memberRequestDetail.status === 2 ? (
            ''
          ) : (
              <Space size="large">
                <Button disabled={loading} onClick={reject}>
                  거부하기
              </Button>
                <Button disabled={loading} onClick={approve}>
                  승인 하기
              </Button>
              </Space>
            )}
        </Col>
      </Row>
    </div>
  )
}

export default AdminMemberRequestDetail
