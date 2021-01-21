import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/appConstants'

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
  Alert,
} from 'antd'
import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import Spiner from '../../images/spiner.gif'
import './UserDetail.scss'

const UserDetail = (props) => {
  /* Modal */
  const [isModalVisible, setIsModalVisible] = useState(false)
  const onChangePassword = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  /* Add more URL */
  const [url, seturl] = useState([])
  const [inputs, setInputs] = useState({ inputs: ['input-0'] })

  const onChangeUrl = (e, indexOfInput) => {
    const urlTemp = JSON.parse(JSON.stringify(url))
    urlTemp[indexOfInput] = e.target.value
    seturl(urlTemp)
  }

  const appendInput = () => {
    var newInput = `input-${inputs.inputs.length}`
    setInputs((prevState) => ({ inputs: prevState.inputs.concat([newInput]) }))
  }

  /* For PDF file */
  const [basePdf, setBasePdf] = useState('') // For convert pdf-file
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const uploadPdfFile = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    const data = base64.split(',').slice(1)[0]
    setBasePdf(data)
  }

  /* Get data */
  const [data, setData] = useState('')
  const [dataUrlMarket, setDataUrlMarket] = useState([])
  const [loading, setLoading] = useState(false)
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': `${localStorage.getItem('token-user')}`,
    },
  }

  useEffect(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${API_URL}/user/profile`, config)
      setData(data.data.result)
      setDataUrlMarket(data.data.result.url_market)
      setLoading(false)
    } catch (error) {
      console.log(error.response)
    }
  }, [])

  /* Change Password and Profile */
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

  const handleExitBtn = () => {
    if (new_password !== confirm_new_password) {
      message.error('The two passwords that you entered do not match!')
      return
    }
    setIsModalVisible(false)
  }

  const bodyOfProfile = {
    url_market: url,
    business_license: basePdf,
  }

  const changeUserProfileAndPassword = async () => {
    await Promise.all([
      axios
        .put(`${API_URL}/user/changepassword`, bodyPassword, config)
        .then((value) => {
          console.log(value)
        })
        .catch((error) => console.log(error.response)),

      axios
        .put(`${API_URL}/user/profile`, bodyOfProfile, config)
        .then((value) => {
          console.log(value)
        })
        .catch((error) => console.log(error.response)),
    ])
    message.success(<Alert message="Success" type="success" />)
  }

  return (
    <>
      {loading ? (
        <div className="position-spiner">
          <Image src={Spiner} width={100} />
        </div>
      ) : (
        <>
          <Button
            style={{
              marginBottom: '6px',
              borderRadius: '6px',
              border: 'none',
              color: '#333',
            }}
            // onClick={() => props.history.push('/home')}
          >
            <LeftOutlined /> 목록으로 돌아가기
          </Button>
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
                      {dataUrlMarket.map((market, i) => (
                        <React.Fragment key={i}>
                          <a
                            style={{ color: 'rgba(0, 0, 0, 0.85)' }}
                            href={market}
                          >
                            {market}
                          </a>
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
                      defaultValue=""
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
                      // width="400"
                      style={{ width: '100%' }}
                    ></embed>
                  </Col>
                  <Col
                    xs={24}
                    sm={18}
                    md={18}
                    lg={18}
                    xl={18}
                    style={{ textAlign: 'center' }}
                  >
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
                    <label className="custom-file-upload">
                      <Input
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          uploadPdfFile(e)
                        }}
                      />
                      Browse
                    </label>
                  </Col>
                </Row>

                <div className="user-info" style={{ marginTop: 20 }}>
                  <div className="actions">
                    <Button
                      onClick={changeUserProfileAndPassword}
                      size="large"
                      type=""
                      className="btn-save"
                    >
                      로그인
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
                    onClick={handleCancel}
                    className="btn-save"
                  >
                    취소
                  </Button>
                  <Button
                    size="large"
                    onClick={handleExitBtn}
                    className="btn-save"
                  >
                    나가기
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </>
      )}
    </>
  )
}

export default UserDetail
