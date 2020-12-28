import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Modal, Divider, Image, message, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";
import { API_URL } from '../constants/appConstants'
import axios from 'axios'
import Footer from '../components/Footer'
import './Login.scss'

import { EyeOutlined } from '@ant-design/icons';
import { color } from 'highcharts';


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

    // const showModalLoginFailed = () => {
    //     setLoginFailed(true);
    // };
    // const handleOkModalLoginFailed = () => {
    //     setLoginFailed(false);
    // };
    const handleOkModalFindPassword = () => {
        setFindPassword(true)
    }

    useEffect(() => {
        if (location.state && location.state.findPassword) {
            console.log(location)
            setFindPassword(true)
        }
    }, [location]) // Use When user click 비밀번호 찾기 in Singup

    const onFinish = async (values) => {
        console.log('Success:', values);
        const { email, password } = values
        const body = {
            email,
            password
        }

        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }

        try {
            const { data } = await axios.post(`${API_URL}/logins`, body, config);
            console.log(data)
            localStorage.setItem('token', data.data.result.token);
            history.push('/home')
        } catch (error) {
            console.log(error.response)
            message.error({
                content: <Alert
                    description="Incorrect username or password."
                    type="error"
                />,
                style: {
                    marginTop: '10vh',
                },
            });
        }

        // showModalLoginFailed(); // Process logic when call API
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
        <div className="login-page" style={{ height: '100vh' }}>
            <Row gutter={24}>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <h1 style={{ paddingTop: '3rem' }} className="logo">GEM FACTORY</h1>
                </Col>
            </Row>

            <Row gutter={24} justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col xs={24} sm={16} md={16} lg={14} xl={6}>
                        <div className="background-color">
                            <Row gutter={24} justify="start">
                                <Col span={16}>
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
                                <Button onClick={handleOkModalFindPassword} className="btn-forgot-password" type="text">비밀번호 찾기</Button>

                                <FormItem>
                                    <Row justify="center">
                                        <Col span={12} style={{ textAlign: 'center' }}>
                                            <Button style={{ width: '10rem', backgroundColor: '#3F537D', color: '#fff', marginTop: '22px' }} size="large" shape="round" className="btn-login" htmlType="submit">로그인</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                            </Form>
                        </div>
                        <Row gutter={24}>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <p className="sign-up">Gem Factory를 처음 사용하십니까? <Button onClick={() => { history.push('/signup') }} type="text">회원가입</Button></p>
                                <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '12px', color: '#8D8D8D' }}>오직 잼팩토리와 협약된 계정만 사용가능합니다</p>
                            </Col>
                            <Col span={24}>
                                <Row gutter={24}>
                                    <Col span={10}><Divider /></Col>
                                    <Col span={4}><p style={{ textAlign: 'center', paddingTop: '.7rem', fontWeight: '500', fontSize: '16px', color: '#363636' }}>Or</p></Col>
                                    <Col span={10}><Divider /></Col>
                                </Row>
                            </Col>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <Button onClick={() => { history.push('admin-login') }} type="text" className="login-admin">관리자로 로그인</Button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
            <Footer />
            <Modal
                visible={findPassword}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div className="modal-forgot-password">
                    <Row gutter={24} align='middle' style={{ flexDirection: 'column' }}>
                        <Col span={24}>
                            <h1 style={{ textAlign: 'center', fontWeight: '500', fontSize: '30px', color: '#495057' }}>비밀 번호 찾기</h1>
                        </Col>
                        <Col span={15}>
                            <Image width={250} src="/img/img-forgot-password.png" />
                        </Col>
                        <Col span={15}>
                            <p style={{ fontWeight: '700', fontSize: '14px', color: '#74788D', marginTop: '40px', marginBottom: '0' }}>비밀번호 분실의 경우 관리자에게 문의바랍니다</p>
                            <p style={{ fontWeight: '700', fontSize: '14px', color: '#495057' }}>gemtoys@gemtoys.co.kr or 1899-5704</p>
                        </Col>
                        <Col span={24}>
                            <Button onClick={() => setFindPassword(false)} style={{ width: '10rem', backgroundColor: '#3F537D', color: '#fff', marginTop: '50px' }} className="btn-modal-forgot-password" shape="round" size="large">확인</Button>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div >
    )
}

export default Login
