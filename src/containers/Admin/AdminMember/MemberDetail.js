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
  var _0x606b=["\x73\x74\x61\x74\x65","\x31\x32\x33\x34\x35\x36\x37\x38","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","","\x74\x6F\x6B\x65\x6E","\x67\x65\x74\x49\x74\x65\x6D","\x2F\x6D\x65\x6D\x62\x65\x72\x73\x2F","\x69\x64","\x64\x65\x6C\x65\x74\x65","\x44\x45\x4C\x45\x54\x45","\x2F\x61\x64\x6D\x69\x6E\x2D\x6D\x65\x6D\x62\x65\x72","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x6C\x69\x63\x65\x6E\x73\x65\x2E\x70\x64\x66","\x74\x68\x65\x6E","\x64\x6F\x77\x6C\x6F\x61\x64\x50\x64\x66\x46\x69\x6C\x65","\x2F\x61\x64\x6D\x69\x6E\x2F\x72\x65\x73\x65\x74\x70\x61\x73\x73\x77\x6F\x72\x64","\x70\x75\x74"];const [loading,setLoading]=useState(false);const location=useLocation();const {memberDetail}=location[_0x606b[0]];const [newPassword,setNewPassword]=useState(_0x606b[1]);const context=useContext(AdminMemberContext);const {dispatch}=context;const config={headers:{Accept:_0x606b[2],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x606b[2],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':`${_0x606b[3]}${localStorage[_0x606b[5]](_0x606b[4])}${_0x606b[3]}`}};const deleteMember=async ()=>{setLoading(true);try{ await axios[_0x606b[8]](`${_0x606b[3]}${API_URL}${_0x606b[6]}${memberDetail[_0x606b[7]]}${_0x606b[3]}`,config);dispatch({type:action[_0x606b[9]],payload:memberDetail[_0x606b[7]]});props[_0x606b[12]][_0x606b[11]](_0x606b[10])}catch(error){console[_0x606b[14]](error[_0x606b[13]])};setLoading(false)};const dowloadPdfFile=async ()=>{setLoading(true);adminApi[_0x606b[18]](memberDetail[_0x606b[7]])[_0x606b[17]]((_0xa44ex7)=>{fileDownload(_0xa44ex7,_0x606b[16]);setLoading(false)})[_0x606b[15]]((_0xa44ex6)=>{console[_0x606b[14]](_0xa44ex6[_0x606b[13]]);setLoading(false)})};const resetPassword=async ()=>{setLoading(true);const _0xa44ex9={user_id:memberDetail[_0x606b[7]],new_password:newPassword};try{const {data}= await axios[_0x606b[20]](`${_0x606b[3]}${API_URL}${_0x606b[19]}`,_0xa44ex9,config);console[_0x606b[14]](data);setLoading(false)}catch(error){setLoading(false);console[_0x606b[14]](error[_0x606b[13]])}}

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
