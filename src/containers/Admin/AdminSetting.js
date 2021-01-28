import React, { useState, useEffect } from 'react'

import { Row, Col, Divider, Input, Button, Modal, Spin, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import adminApi from '../../api/AdminAPI'
import './AdminSetting.scss'

const AdminSetting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [userInfo, setUserInfo] = useState('')
  const [loading, setLoading] = useState(false)

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
    // if (new_password !== confirm_new_password) {
    //   message.error('The two passwords that you entered do not match!')
    //   return
    // }
    setIsModalVisible(false)
  }

  /* Get data */
  useEffect(() => {
    setLoading(true)
    adminApi
      .getAdminInfo()
      .then((value) => {
        console.log(value)
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
              <Input suffix={<EditOutlined onClick={showModal} />} />
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
                onClick={showModal}
                type="primary"
                block
                shape="round"
                style={{ textAlign: 'center' }}
              >
                로그인
              </Button>
            </Col>
          </Row>

          {/* <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={() => setIsModalVisible(false)}
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { display: 'none' } }}
          >
            <div className="modal-admin-setting">
              <Row gutter={24} justify="center">
                <Col span={20} style={{ textAlign: 'center' }}>
                  <h1>암호를 재설정</h1>
                  <p>Would you like to reset this user’s password?</p>
                </Col>
                <Col span={12} style={{ textAlign: 'center' }}>
                  <Button shape="round" type="default">
                    확인
                  </Button>
                </Col>
              </Row>
            </div>
          </Modal> */}
          <Modal
            title="Change Password"
            visible={isModalVisible}
            footer={false}
          >
            <div style={{ padding: '0 80px' }}>
              <div style={{ marginBottom: 20 }}>
                <Input.Password
                  name="current_password"
                  onChange={onChange}
                  size="large"
                  placeholder="Your Password"
                />
              </div>

              <div>
                <Input.Password
                  name="new_password"
                  onChange={onChange}
                  size="large"
                  placeholder="Type Your New Password"
                />
                <Input.Password
                  name="confirm_new_password"
                  onChange={onChange}
                  size="large"
                  placeholder="Confirm Your New Password"
                />
              </div>

              <div className="actions-change-password">
                <Button
                  size="large"
                  //   onClick={handleCancel}
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
