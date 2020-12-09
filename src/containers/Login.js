import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";
import { API_URL } from '../constants/appConstants'
import axios from 'axios'


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
    const [ findPassword, setFindPassword ] = useState(false);

    useEffect(() => {
        if (location.state && location.state.findPassword){
            console.log(location)
            setFindPassword(true)
        }
    }, [location])

const onFinish = async (values) => {
    console.log('Success:', values);
    const { username, password } = values
    const body = {
        username,
        password
    }
    
    const config = {
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        }
    }
    const {data} = await axios.post(`${API_URL}/logins`, body, config);
    if (data.data.code === '20000' && data.data.message === 'Success') {
        console.log(data)
        localStorage.setItem('token', data.data.result.token);
        history.push('/home');
    } else {
        console.log(`Handle Err`)
    }
};

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onRegister = () => {
        history.push('/register');
    }

    const handleOk = () =>{
        setFindPassword(false)
    }

    return (
        <>
            <Row gutter={24} style={{ textAlign: 'center' }}>
                <Col span={24}>
                    <h1>GEM FACTORY</h1>
                </Col>
                <Col span={24} style={{ marginBottom: '20px' }}>
                    <h1>최상의 상품판매 전략을 위한 빅데이터 서비스</h1>
                </Col>
                <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <FormItem
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined />}
                                placeholder="이메일"
                                type="text"
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
                                prefix={<UserOutlined />}
                                type="password"
                                placeholder="비밀번호 8자리"
                            />
                        </FormItem>

                        <FormItem>
                            <Button className="btn-login" htmlType="submit">로그인</Button>
                        </FormItem>

                        <Row gutter={24}>
                            <Col span={12}>
                                <Button className="btn-login" onClick={() => setFindPassword(true)}>비밀번호 찾기</Button>
                            </Col>        
                            <Col span={12}>
                                <Button className="btn-login" onClick={onRegister}>회원가입</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            <Modal
                title="비밀 번호 찾기"
                visible={findPassword}
                onOk={handleOk}
                onCancel={() => setFindPassword(false)}
                okText="확인"
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div style={{ textAlign: 'center' }}>
                    <p>비밀번호 분실의 경우 관리자에게 문의바랍니다</p>
                    <p>GEMFACTORY@gmail.com</p>
                    <p>070-0000-0000</p>
                </div>

            </Modal>
        </>
    )
}

export default Login