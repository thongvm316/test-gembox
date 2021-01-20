import React, { useState } from 'react'
import { Row, Col, Button, Input, DatePicker, Modal, Table, Card, Divider } from 'antd';
import './UserDetail.scss'
import { PlusOutlined, EditOutlined, LeftOutlined } from '@ant-design/icons';
import CloudUpload from '../../images/cloud-computing.png'
import { color } from 'highcharts';

const UserDetail = (props) => {
    /* Modal */
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onChangePassword = () => {
        setIsModalVisible(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    /* Add more URL */
    const [url, seturl] = useState([]);
    const [inputs, setInputs] = useState({ inputs: ["input-0"] }); // For Add more input

    const onChangeUrl = (e, indexOfInput) => {
        const urlTemp = JSON.parse(JSON.stringify(url));
        urlTemp[indexOfInput] = e.target.value;
        seturl(urlTemp);
    };

    const appendInput = () => {
        var newInput = `input-${inputs.inputs.length}`;
        setInputs((prevState) => ({ inputs: prevState.inputs.concat([newInput]) }));
    };

    return (
        <>
            <Button
                style={{
                    marginBottom: '6px',
                    borderRadius: '6px',
                    border: 'none',
                    color: '#333'
                }}
                onClick={() => props.history.push('/home')}
            >
                <LeftOutlined />  목록으로 돌아가기
            </Button>
            <div className="card-border user-detail">
                <Row>
                    <Col span={24}>
                        <div className="user-info">
                            <div className="user-item">
                                <div>이름</div>
                                <div>이수진</div>
                            </div>
                            <Divider />

                        </div>
                        <div className="user-info">
                            <div className="user-item">
                                <div>회사명</div>
                                <div>잼팩토리</div>
                            </div>
                            <Divider />
                        </div>
                        <div className="user-info">
                            <div className="user-item">
                                <div>이메일</div>
                                <div>erik@brickmate.com</div>
                            </div>
                            <Divider />
                        </div>
                        <div className="user-info">
                            <div style={{ marginBottom: 10 }}>
                                등록 마켓
                        </div>
                            <div>
                                <Card style={{ marginBottom: '5px' }}>
                                    http://minishop.gmarket.co.kr/hasbro <br />
                                </Card>
                                {/* <Card>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            신청 마켓 url 입력*
                                    </div>
                                        <div>
                                            <Button
                                                type="primary"
                                                icon={<PlusOutlined />}
                                            />
                                        </div>
                                    </div>
                                </Card> */}
                                {inputs.inputs.map((input, index) => (
                                    <Input
                                        key={index}
                                        placeholder="신청 마켓 url 입력*"
                                        type="text"
                                        style={{ marginBottom: "2px" }}
                                        onChange={(e) => {
                                            onChangeUrl(e, index);
                                        }}
                                        suffix={
                                            <Button
                                                style={{ borderColor: "#A6B0CF" }}
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
                            <div style={{ marginBottom: 10 }}>
                                Password
                            </div>
                            <div>
                                <Input size="large" suffix={<EditOutlined onClick={() => onChangePassword()} />} />
                            </div>
                        </div>

                        <div className="user-info" style={{ marginTop: 20 }}>
                            <div style={{ marginBottom: 10 }}>
                                사업자등록증
                        </div>
                            <div className="upload">
                                <div className="upload-content">
                                    <div className="image">
                                        <img src={CloudUpload} />
                                    </div>
                                    <div className="text" style={{ margin: '10px 0' }}>사업자 등록증 pdf 또는 이미지 첨부</div>
                                    <Button type="primary">Browse</Button>
                                </div>
                            </div>
                        </div>
                        <div className="user-info" style={{ marginTop: 20 }}>
                            <div className="actions">
                                <Button size="large" type="primary" className="btn-save">로그인</Button>
                            </div>
                        </div>

                    </Col>
                </Row>

                <Modal title="Change Password" visible={isModalVisible} footer={false} onCancel={handleCancel}>
                    <div style={{ padding: '0 80px' }}>
                        <div style={{ marginBottom: 20 }}>
                            <Input.Password size="large" placeholder="Your Password" />
                        </div>
                        <div>
                            <Input.Password size="large" placeholder="Type Your New Password" />
                            <Input.Password size="large" placeholder="Confirm Your New Password" />
                        </div>
                        <div className="actions-change-password">
                            <Button size="large" className="btn-save">취소</Button>
                            <Button size="large" className="btn-save">나가기</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default UserDetail
