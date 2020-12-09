import React, { useState } from 'react';
import './Register.scss'
import { Row, Col, Input, Modal, Button, Form, message } from 'antd';
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'

const FormItem = Form.Item;

const Register = (props) => {

    const [verifiedPhone, setVerifiedPhone] = useState(false);  // For show or hidden input to type code sms
    const [signUp, setSignUp] = useState(false); // For Moal
    const [email, setEmail] = useState('') // For verify email
    const [basePdf, setBasePdf] = useState(""); // For convert pdf-file
    const [validatePassword, setValidatePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onFinish = async (values) => {
        values.file = basePdf;
        console.log(basePdf)
        console.log('Success:', values);

        if (validatePassword.length < 6) {
            message.error('The password is not enough characters');
            return;
        }

        if (validatePassword !== confirmPassword) {
            message.error('Passwords do not match');
            return;
        }

        const { confirmPassword, email, file, password, phone, url, username, verifiedPhone } = values

        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }

        const body = {
            "email": "ldminh@brickmate.vn",
            "verify_code": "aHwe12nD",
            "url_market": "aHwe12nD",
            "business_liciense": "aHwe12nD",
        }

        try {
            const { data } = await axios.post(`${API_URL}/signup`, body, config)
            setSignUp(true)
        } catch (error) {
            console.log(error.response)
        }
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
            state: { findPassword: true }
        })
    }

    const verifySmsCode = async () => {
        setVerifiedPhone(true)

        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }

        const body = {
            email: "thongvm@brickmate.vn",
            password: "123456789",
            name: "Minh Le",
            phone: "+84931318752"
        }

        try {
            const { data } = await axios.post(`${API_URL}/verify`, body, config)
            console.log(data)
        } catch (error) {
            console.log(error.response)
        }
    }

    const verifyEmail = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        try {
            const { data } = await axios.get(`${API_URL}/check?email=${email}`, config)
            // console.log(data)
            message.success('This email is available');
        } catch (error) {
            // console.log(error.response.data)
            message.error('This email already exists');
        }
    }

    // For PDF file 
    const uploadPdfFile = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBasePdf(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

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
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="이메일"
                                                type="text"
                                                onChange={(e) => { setEmail(e.target.value) }}
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
                                            onChange={e => { setValidatePassword(e.target.value); }}
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
                                            onChange={e => { setConfirmPassword(e.target.value) }}
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
                                                type="tel"
                                                onChange={e => {
                                                    if (!Number(e.target.value)) {
                                                        message.error('Your phone must be a number');
                                                    }
                                                }}
                                            />
                                        </FormItem>
                                        <Button onClick={verifySmsCode}>인증번호 전송</Button>
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
                                                    type="tel"
                                                    onChange={e => {
                                                        if (!Number(e.target.value)) {
                                                            message.error('Your phone must be a number');
                                                        }
                                                    }}
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
                                    <FormItem
                                        name="file"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please attach your PDF file',
                                            },
                                        ]}
                                    >
                                        <Input type='file' addonBefore="사업자 등록증 pdf 첨부" accept=".pdf" onChange={(e) => { uploadPdfFile(e) }} />
                                    </FormItem>
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