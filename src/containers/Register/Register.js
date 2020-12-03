import React, { useState } from 'react';
import './Register.scss'
import { Row, Col, Input, Modal, Button, Form } from 'antd';
import axios from 'axios'

const FormItem = Form.Item;

const Register = (props) => {

    const [ verifiedPhone, setVerifiedPhone ] = useState(false);
    const [ signUp, setSignUp ] = useState(false);
    const [ findPassword, setFindPassword ] = useState(false)
    const [ email, setEmail ] = useState('')

    const onFinish = (values) => {
        console.log('Success:', values);
        setSignUp(true)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleOk = () => {
        setSignUp(false)
        props.history.push('/')
    }

    const onFindPassword = () => {
        props.history.push({
            pathname: '/',
            state: {findPassword: true}
        })
    }

    const verifyEmail = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        try {
            const res = await axios.get(`http://192.168.1.43/check?email=${email}`, config)
        } catch (error) {
            console.log(error.response.data)
        }
}    
    
    return (
        <>
            <Row gutter={24}>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <h1>GEM FACTORY</h1>
                    <h1>회원가입</h1>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                                    <div className="verified">
                                        <FormItem
                                            style={{ width: '100%' }}
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your 이메일!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="이메일"
                                                type="text"
                                                onChange={(e) => {setEmail(e.target.value)}}
                                            />
                                        </FormItem>
                                        <Button onClick={verifyEmail}>중복확인</Button>
                                    </div>
                                    <FormItem
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your 비밀번호 8자리!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="비밀번호 8자리"
                                            type="text"
                                        />
                                    </FormItem>
                                    <FormItem
                                        name="confirmPassword"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your 비밀번호 재확인',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="비밀번호 재확인"
                                            type="text"
                                        />
                                    </FormItem>
                                    <br />
                                    <FormItem
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your 이름',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="이름"
                                            type="text"
                                        />
                                    </FormItem>
                                    <div className="verified">
                                        <FormItem
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your 이메일',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="이메일"
                                                type="text"
                                            />
                                        </FormItem>
                                        <Button onClick={() => setVerifiedPhone(true)}>인증번호 전송</Button>
                                    </div>
                                    {
                                        verifiedPhone ?
                                            <FormItem
                                                name="verifiedPhone"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your 인증번호 입력',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder="인증번호 입력"
                                                    type="text"
                                                />
                                            </FormItem>
                                            : ''
                                    }

                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <FormItem
                                        name="url"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your 신청 마켓 url 입력',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="신청 마켓 url 입력"
                                            type="text"
                                        />
                                    </FormItem>
                                    <Button>사업자 등록증 pdf 첨부</Button>


                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={24} style={{ textAlign: 'center', marginTop: '24px' }}>
                                    <FormItem>
                                        <Button htmlType="submit" className="submit">회원가입 신청</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>

                    </Col>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24} style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Button onClick={onFindPassword} style={{ marginBottom: '20px' }}>비밀번호 찾기</Button>
                    <h4>오직 잼팩토리와 협약된 계정만 사용가능합니다</h4>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24} style={{ textAlign: 'center', marginTop: '30px' }}>
                    <small>상호 :주식회사 잼팩토리    대표 :이수진    사업자등록번호 :220-88-93741    통신판매업신고번호 :제2020-서울강남-01686호[사업자정보확인]    대표번호 :1899-5704    메일 :gemtoys@gemtoys.co.kr주소 :서울특별시 강남구 언주로 311 (로즈1타워) 3층    개인정보관리자 :심규민    copyright (c) gemtoys.co.kr all rights reserved.</small>
                </Col>
            </Row>
            <Modal
                title="회원가입 신청"
                visible={signUp}
                onOk={handleOk}
                okText="확인"
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <p>관리자 승인 후 사용가능합니다승인 완료시 가입하신 이메일로 안내 메일 보내드리겠습니다</p>
            </Modal>
        </>
    )
}

export default Register