import React, { useState } from 'react';
import './SignUp.scss'
import { Row, Col, Input, Modal, Button, Form, message, Checkbox } from 'antd';
import { API_URL } from '../../constants/appConstants'
import Footer from '../../components/Footer'
import axios from 'axios'

const FormItem = Form.Item;

// Component for Add more Input Url
const AddMoreInput = () => {
    return (
        <div className="verified">
            <FormItem
                name="url"
                rules={[
                    {
                        required: true,
                        message: 'Please input your 신청 마켓 url 입력*',
                    },
                ]}
            >
                <Input
                    placeholder="신청 마켓 url 입력*"
                    type="text"
                />
            </FormItem>
            <Button>+</Button>
        </div>
    )
}


const SignUp = (props) => {

    const [verifiedPhone, setVerifiedPhone] = useState(false);  // For show or hidden input to type code sms
    const [signUp, setSignUp] = useState(false); // For Moal
    const [email, setEmail] = useState('') // For verify email
    const [basePdf, setBasePdf] = useState(""); // For convert pdf-file
    const [inputs, addMoreInput] = useState([1]) // For Add more input
    const [resendSms, setResemdSms] = useState('')
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

        // if (validatePassword !== confirmPassword) {
        //     message.error('Passwords do not match');
        //     return;
        // }

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

        setSignUp(true)


        // try {
        //     const { data } = await axios.post(`${API_URL}/signup`, body, config)
        //     setSignUp(true)
        // } catch (error) {
        //     console.log(error.response)
        // }
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
        setResemdSms('재전송')
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

        // try {
        //     const { data } = await axios.post(`${API_URL}/verify`, body, config)
        //     console.log(data)
        // } catch (error) {
        //     console.log(error.response)
        // }
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
                    <h1 className="logo">GEM FACTORY</h1>
                </Col>
            </Row>

            <Row gutter={24} justify="center">
                <Col xs={24} sm={24} md={18} lg={24} xl={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col className="background-color" xs={24} sm={24} md={16} lg={8} xl={5}>
                        <div>
                            <h1>회원가입</h1>
                        </div>
                        <Form
                            onFinish={onFinish}
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
                                    placeholder="이메일*"
                                    type="text"
                                />
                            </FormItem>
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
                                    placeholder="비밀번호 8자리*"
                                    type="text"
                                    onChange={e => { setValidatePassword(e.target.value); }}
                                />
                            </FormItem>
                            <FormItem
                                name="confirmPassword"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your 비밀번호 재확인',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input
                                    placeholder="비밀번호 재확인*"
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
                                        message: 'Please input your 이름 / 업체명*',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="이름 / 업체명*"
                                    type="text"
                                />
                            </FormItem>
                            <FormItem
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your 핸드폰 번호 입력',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="핸드폰 번호 입력*"
                                    suffix={<Button onClick={verifySmsCode} className="send-sms" type="text">{resendSms ? resendSms : '인증번호 전송'}</Button>}
                                    type="tel"
                                    onChange={e => {
                                        if (!Number(e.target.value)) {
                                            message.error('Your phone must be a number');
                                        }
                                    }}
                                />
                            </FormItem>
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
                            <br />
                            <FormItem
                                name="url"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your 신청 마켓 url 입력*',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="신청 마켓 url 입력*"
                                    type="text"
                                    suffix={<Button>+</Button>}
                                />
                            </FormItem>
                            {/* {
                                inputs.map((input) => {
                                    return (
                                        <AddMoreInput key={input} />
                                    )
                                })
                            } */}
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
                            <br />
                            <br />
                            <br />
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                    },
                                ]}
                            >
                                <Checkbox>
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>(필수)</span> <span style={{ fontWeight: 'bold' }}>개인정보 수집 및 이용</span>
                                </Checkbox>
                            </Form.Item>
                            <div className="agreement">
                                <p><span style={{ color: '#A6B0CF' }}>■</span> 수집하는 개인정보 항목회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.ο 수집항목 : 이름, 업체명 , 비밀번호, 휴대폰 번호 , 이메일 , 사업자등록증, 법정대리인정보 , 서비스 이용기록 , 접속 로그 , 접속 IP 정보ο 개인정보 수집방법 : 홈페이지(회원가입) , 서면양식</p>
                                <p><span style={{ color: '#A6B0CF' }}>■</span> 개인정보의 수집 및 이용목적
                                회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                                ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송ο 회원 관리회원제 서비스 이용에 따른 본인확인 , 개인 식별, 고지사항 전달
                                ο 마케팅 및 광고에 활용접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>
                                <p><span style={{ color: '#A6B0CF' }}>■</span> 개인정보의 보유 및 이용기간
                                회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.</p>
                            </div>
                            <Row gutter={24} justify="center">
                                <Col span={24} style={{ textAlign: 'center', marginTop: '24px' }}>
                                    <FormItem>
                                        <Button shape="round" htmlType="submit" className="submit">회원가입 신청</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                        <Row gutter={24}>
                            <Col span={24} style={{ marginTop: '23px' }}>
                                <Button type="text" onClick={onFindPassword} className='btn-forgot-password' style={{ padding: '0' }}>비밀번호 찾기</Button>
                                <h4 style={{ fontWeight: '500', fontSize: '12px', color: '#333333' }}>오직 잼팩토리와 협약된 계정만 사용가능합니다</h4>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>

            <Footer />
            <Modal
                visible={signUp}
                onOk={handleOk}
                okText="확인"
                okButtonProps={{ type: "default" }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <Row gutter={24} justify="center">
                    <Col span={12} style={{ textAlign: 'center' }}>
                        <h1>회원가입 신청</h1>
                        <br />
                        <p>관리자 승인 후 사용가능합니다승인 완료시 가입하신 이메일로 안내 메일 보내드리겠습니다</p>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default SignUp