import React, { useState, useEffect } from 'react'

import { Row, Col, Divider, Input, Button, Modal, Spin, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import adminApi from '../../api/AdminAPI'
import './AdminSetting.scss'

const AdminSetting = (props) => {
  var _0x43c2=["","\x6E\x61\x6D\x65","\x74\x61\x72\x67\x65\x74","\x76\x61\x6C\x75\x65","\uC0C8\x20\uBE44\uBC00\uBC88\uD638\uC640\x20\uD655\uC778\x20\uC0C8\x20\uBE44\uBC00\uBC88\uD638\uAC00\x20\uC77C\uCE58\uD558\uC9C0\x20\uC54A\uC2B5\uB2C8\uB2E4\x2E","\x65\x72\x72\x6F\x72","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\uC131\uACF5","\x73\x75\x63\x63\x65\x73\x73","\x74\x68\x65\x6E","\x61\x64\x6D\x69\x6E\x43\x68\x61\x6E\x67\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x64\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x67\x65\x74\x41\x64\x6D\x69\x6E\x49\x6E\x66\x6F"];const [isModalVisible,setIsModalVisible]=useState(false);const [userInfo,setUserInfo]=useState(_0x43c2[0]);const [loading,setLoading]=useState(false);const [loadingBtn,setLoadingBtn]=useState(false);const [password,setPassword]=useState({current_password:_0x43c2[0],new_password:_0x43c2[0],confirm_new_password:_0x43c2[0]});const {current_password,new_password,confirm_new_password}=password;const bodyPassword={current_password,new_password};const onChange=(_0x4eadx3)=>{setPassword({...password,[_0x4eadx3[_0x43c2[2]][_0x43c2[1]]]:_0x4eadx3[_0x43c2[2]][_0x43c2[3]]})};const showModal=()=>{setIsModalVisible(true)};const handleExitBtn=()=>{setIsModalVisible(false)};const onCancel=()=>{setIsModalVisible(false)};const changePassword=()=>{if(new_password!== confirm_new_password){message[_0x43c2[5]](_0x43c2[4]);return};setLoadingBtn(true);adminApi[_0x43c2[12]](bodyPassword)[_0x43c2[11]]((_0x4eadx9)=>{handleExitBtn();setPassword({current_password:_0x43c2[0],new_password:_0x43c2[0],confirm_new_password:_0x43c2[0]});Modal[_0x43c2[10]]({content:_0x43c2[9]});setLoadingBtn(false)})[_0x43c2[8]]((_0x4eadx8)=>{setLoadingBtn(false);handleExitBtn();console[_0x43c2[7]](_0x4eadx8[_0x43c2[6]])})};useEffect(()=>{setLoading(true);adminApi[_0x43c2[15]]()[_0x43c2[11]]((_0x4eadx9)=>{if(_0x4eadx9&& _0x4eadx9[_0x43c2[13]]&& _0x4eadx9[_0x43c2[13]][_0x43c2[14]]){setUserInfo(_0x4eadx9[_0x43c2[13]][_0x43c2[14]])};setLoading(false)})[_0x43c2[8]]((_0x4eadx8)=>{console[_0x43c2[7]](_0x4eadx8[_0x43c2[6]]);setLoading(false)})},[])

  return (
    <div className="admin-setting">
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={24} className="setting-detail">
            <Col span={24} className="style-positon">
              <p>이름</p>
              <p>{userInfo.name}</p>
            </Col>
            <Divider />

            <Col span={24} className="style-positon">
              <p>이메일</p>
              <p>{userInfo.email}</p>
            </Col>
            <Divider />

            <Col span={24}>
              <p>Password</p>
              <Input
                placeholder="******"
                suffix={<EditOutlined onClick={showModal} />}
              />
            </Col>
          </Row>

          <Row justify="center" style={{ marginTop: '250px' }}>
            <Col
              xs={8}
              sm={8}
              md={3}
              lg={3}
              xl={3}
              style={{ textAlign: 'center' }}
            >
              <Button
                disabled={loadingBtn}
                onClick={changePassword}
                type="primary"
                block
                shape="round"
                style={{ textAlign: 'center' }}
              >
                변경사항 저장하기
              </Button>
            </Col>
          </Row>

          <Modal
            title="Change Password"
            visible={isModalVisible}
            footer={false}
            onCancel={onCancel}
          >
            <div style={{ padding: '0 80px' }}>
              <div style={{ marginBottom: 20 }}>
                <Input.Password
                  name="current_password"
                  onChange={onChange}
                  size="large"
                  placeholder="너의 비밀번호"
                />
              </div>

              <div>
                <Input.Password
                  name="new_password"
                  onChange={onChange}
                  size="large"
                  placeholder="새 비밀번호 입력"
                />
                <Input.Password
                  name="confirm_new_password"
                  onChange={onChange}
                  size="large"
                  placeholder="새 비밀번호 확인"
                />
              </div>

              <div className="actions-change-password">
                <Button
                  size="large"
                  onClick={handleExitBtn}
                  className="btn-save"
                >
                  확인
                </Button>
                <Button
                  size="large"
                  onClick={handleExitBtn}
                  className="btn-save"
                >
                  취소
                </Button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  )
}

export default AdminSetting
