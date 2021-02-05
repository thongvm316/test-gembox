import React, { useState, useEffect } from 'react'

import { Row, Col, Divider, Input, Button, Modal, Spin, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import adminApi from '../../api/AdminAPI'
import './AdminSetting.scss'

const AdminSetting = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [userInfo, setUserInfo] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingBtn, setLoadingBtn] = useState(false)

  /* Change Password */
  const [password, setPassword] = useState({
    current_password: '',
    new_password: '',
    confirm_new_password: '',
  })
  const { current_password, new_password, confirm_new_password } = password
  const bodyPassword = {
    current_password,
    new_password,
  }

  const onChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value })
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleExitBtn = () => {
    setIsModalVisible(false)
  }

  const onCancel = () => {
    setIsModalVisible(false)
  }

  const changePassword = () => {
    if (new_password !== confirm_new_password) {
      message.error('새 비밀번호와 확인 새 비밀번호가 일치하지 않습니다.')
      return
    }
    setLoadingBtn(true)
    adminApi
      .adminChangePassword(bodyPassword)
      .then((value) => {
        handleExitBtn()
        setPassword({
          current_password: '',
          new_password: '',
          confirm_new_password: '',
        })
        Modal.success({
          content: '성공',
        })
        setLoadingBtn(false)
      })
      .catch((error) => {
        setLoadingBtn(false)
        handleExitBtn()
        console.log(error.response)
      })
  }

  /* Get data */
  useEffect(() => {
    setLoading(true)
    adminApi
      .getAdminInfo()
      .then((value) => {
        if (value && value.data && value.data.result) {
          setUserInfo(value.data.result)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
        setLoading(false)
      })
  }, [])

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
