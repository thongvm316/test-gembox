import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Space, Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { API_URL } from '../../../constants/appConstants'
import axios from 'axios'
import setAuthToken from '../../../utils/setAuthToken'
import './AdminMember.scss'

// if (localStorage.token) {
//     setAuthToken(localStorage.token);
// } // set x-auth-herder for request header from user

const AdminMember = (props) => {
    const [data, setData] = useState('')

    // For Table
    const columns = [
        {
            title: '이름',
            dataIndex: 'name',
        },
        {
            title: '이메일',
            dataIndex: 'email',
        },
        {
            title: '비밀번호',
            dataIndex: 'password',
        },
        {
            title: '연락처',
            dataIndex: 'phone',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    // Props
    const { history } = props;

    // Get Data
    useEffect(async () => {
        const config = {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.get(`${API_URL}/usermanages`, config);
        console.log(data)
        const { data: { result } } = data
        const { member } = result
        setData(member)
    }, [])

    return (
        <div className='admin-member'>
            <Row gutter={[0, 16]} className='top' justify='space-between'>
                <Col>
                    <Space size='middle'>
                        <Button onClick={() => { history.push('/admin-member') }}>가입회원만 보기</Button>
                        <Button onClick={() => { history.push('/member-request') }}>가입요청 보기</Button>
                    </Space>
                </Col>
                <Col className='style-input'>
                    <Input
                        placeholder="Search by name"
                        prefix={<SearchOutlined className="site-form-item-icon" />}
                    />
                </Col>
            </Row>
            <Row className='render-data' style={{ marginTop: '2rem' }}>
                <Col span={24}>
                    <Table
                        rowSelection={{
                            ...rowSelection,
                        }}
                        scroll={{ x: 1300 }}
                        rowKey={record => record.id}
                        columns={columns}
                        dataSource={data}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: event => {
                                    history.push({
                                        pathname: '/member-detail',
                                        state: { memberDetail: record }
                                    })
                                }
                            }
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default AdminMember
