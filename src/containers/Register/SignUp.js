import React, { useState } from 'react';
import './SignUp.scss'
import { Row, Col, Input, Modal, Button, Form, message } from 'antd';
import { API_URL } from '../../constants/appConstants'
import axios from 'axios'

const FormItem = Form.Item;

const SignUp = (props) => {

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
        <div className="signup">
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
                        </Form>
                    </Col>
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
        </div>
    )
}

export default SignUp