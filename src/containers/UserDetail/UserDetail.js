import React, { useState } from 'react'
import { Row, Col, Button, Input, DatePicker, Modal, Table, Card, Divider } from 'antd';
import './UserDetail.scss'
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import CloudUpload from '../../images/cloud-computing.png'

const { RangePicker } = DatePicker;

const UserDetail = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onChangePassword = () => {
        setIsModalVisible(true);

    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="card-border">
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
                            <Card style={{ borderBottom: 0 }}>
                                http://minishop.gmarket.co.kr/hasbro
                            </Card>
                            <Card>
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
                            </Card>
                        </div>
                    </div>

                    <div className="user-info" style={{ marginTop: 20 }}>
                        <div style={{ marginBottom: 10 }}>
                            등록 마켓
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
    )
}

export default UserDetail
