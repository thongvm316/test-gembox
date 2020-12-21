import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Modal, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";
import { API_URL } from '../constants/appConstants'
import axios from 'axios'
import './Login.scss'

import { EyeOutlined } from '@ant-design/icons';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FormItem = Form.Item;

const Login = (props) => {
    const { history } = props;
    const location = useLocation();
    const [findPassword, setFindPassword] = useState(false); // Modal forget password
    const [loginFailed, setLoginFailed] = useState(false); // Modal login failed

    const showModalLoginFailed = () => {
        setLoginFailed(true);
    };
    const handleOkModalLoginFailed = () => {
        setLoginFailed(false);
    };
    const handleOkModalFindPassword = () => {
        setFindPassword(false)
    }

    useEffect(() => {
        if (location.state && location.state.findPassword) {
            console.log(location)
            setFindPassword(true)
        }
    }, [location]) // Use When user click 비밀번호 찾기 in Singup

    const onFinish = async (values) => {
        console.log('Success:', values);
        const { username, password } = values
        const body = {
            username,
            password
        }

        showModalLoginFailed(); // Process logic when call API

        // const config = {
        //     headers: {
        //         "Accept": "application/json",
        //         'Content-Type': 'application/json'
        //     }
        // }
        // const { data } = await axios.post(`${API_URL}/logins`, body, config);
        // if (data.data.code === '20000' && data.data.message === 'Success') {
        //     console.log(data)
        //     localStorage.setItem('token', data.data.result.token);
        //     history.push('/home');
        // } else {
        //     console.log(`Handle Err`)
        // }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onRegister = () => {
        history.push('/signup');
    }

    return (
        <div className="login-page">
            <Row gutter={24}>
                <Col span={24}>
                    <h1 className="logo">GEM FACTORY</h1>
                </Col>

                <Col xs={20} sm={24} md={24} lg={24} xl={24}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <h1 className="login-title">로그인</h1>
                            <p className="adv">최상의 상품판매 전략을 위한 빅데이터 서비스</p>
                        </Col>
                    </Row>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <FormItem
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="이메일"
                                type="text"
                                bordered={true}
                            />
                        </FormItem>

                        <FormItem
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                size="large"
                                type="password"
                                placeholder="비밀번호 8자리"
                                iconRender={(visible) => (visible ? <EyeOutlined /> : "Show")}
                            />
                        </FormItem>
                        <Button className="btn-text-type" type="text">비밀번호 찾기</Button>

                        <FormItem>
                            <Button className="btn-login" htmlType="submit">로그인</Button>
                        </FormItem>
                    </Form>
                    <Row gutter={24}>
                        <Col span={24}>
                            <p>Gem Factory를 처음 사용하십니까? <strong>회원가입</strong></p>
                            <p>오직 잼팩토리와 협약된 계정만 사용가능합니다</p>
                        </Col>
                        <Divider />
                        <Col span={12}>관리자로 로그인</Col>
                    </Row>
                </Col>
            </Row>

            {/* <Row justify='center' className="footer" style={{ marginTop: '50px' }}>
                <Col span={20}>
                    <p style={{ color: '#335b63' }}> <strong>잼토이즈 &nbsp; &nbsp;</strong>
                        <strong>상호</strong>:주식회사 잼팩토리   <strong>대표</strong>:이수진    <strong>사업자등록번호</strong>:220-88-93741    <strong>통신판매업신고번호</strong>:제2020-서울강남-01686호[사업자정보확인]     <strong>대표번호</strong>:1899-5704    <strong>메일</strong>:gemtoys@gemtoys.co.kr
                        </p>
                </Col>
                <Col span={20}>
                    <p style={{ color: '#335b63' }}>
                        <strong>주소 </strong>:서울특별시 강남구 언주로 311 (로즈1타워) 3층    <strong>개인정보관리자</strong>:심규민    copyright &copy; gemtoys.co.kr all rights reserved.
                        </p>
                </Col>
            </Row> */}

            <Modal
                title="비밀 번호 찾기"
                visible={findPassword}
                onOk={handleOkModalFindPassword}
                onCancel={() => setFindPassword(false)}
                okText="확인"
                okButtonProps={{ type: "default" }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div style={{ textAlign: 'center' }}>
                    <p>비밀번호 분실의 경우 관리자에게 문의바랍니다</p>
                    <p>gemtoys@gemtoys.co.kr</p>
                    <p>1899-5704</p>
                </div>
            </Modal>

            <Modal
                okButtonProps={{ type: "default" }}
                cancelButtonProps={{ style: { display: 'none' } }}
                visible={loginFailed}
                onOk={handleOkModalLoginFailed}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>계정정보가 올바르지 않습니다</h1>
                    <p>비밀번호 분실의 경우 관리자에게 문의바랍니다</p>
                    <p>1899-5704</p>
                </div>
            </Modal>
        </div>
    )
}

export default Login
