import React, { useState, useEffect } from 'react';

import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';


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

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push('/home');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

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
                    placeholder="Nhập Số điện thoại hoặc Email"
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
                    placeholder="Mật khẩu"
                />
            </FormItem>

            <FormItem>
                <Button className="btn-login" type="primary" htmlType="submit">Submit</Button>
            </FormItem>
        </Form>


    )
}

export default Login