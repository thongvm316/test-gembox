import React from 'react'
import { Row, Col, Divider, Input, Button, Modal } from 'antd';
import { EditFilled } from '@ant-design/icons';
import './AdminSetting.scss';

const AdminSetting = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="admin-setting">
            <Row gutter={24} className="setting-detail">
                <Col span={24} className="style-positon">
                    <p>이름</p>
                    <p>Admin Name</p>
                </Col>
                <Divider />
                <Col span={24} className="style-positon">
                    <p>회사명</p>
                    <p>잼팩토리</p>
                </Col>
                <Divider />
                <Col span={24} className="style-positon">
                    <p>이메일</p>
                    <p>admin@brickmate.com</p>
                </Col>
                <Divider />
                <Col span={24}>
                    <p>Password</p>
                    <Input.Password
                        iconRender={visible => (<EditFilled />)}
                    />
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: '250px' }}>
                <Col xs={8} sm={8} md={3} lg={3} xl={3} style={{ textAlign: 'center' }}>
                    <Button onClick={showModal} type="primary" block shape="round" style={{ textAlign: 'center' }}>로그인</Button>
                </Col>
            </Row>

            <Modal
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
                            <Button shape="round" type="default">확인</Button>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    )
}

export default AdminSetting
