import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Space, Input, Table } from 'antd'
import { API_URL } from '../../../constants/appConstants'
import axios from 'axios'
import { SearchOutlined } from '@ant-design/icons'


const AdminMemberRequest = (props) => {
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
        {
            title: '상태',
            dataIndex: 'state',
        }
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
                'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc0FkbWluIjoxLCJzdWIiOjEsImV4cCI6MTYwODcwNDQwNX0.ax0SxJpUZNhg3poQkMlcodYDMjcUD3qXny2IY2f-UWY'
            }
        }
        try {
            const { data } = await axios.get(`${API_URL}/usermanages`, config);
            const { data: { result } } = data
            const { member_request } = result
            setData(member_request)
        } catch (error) {
            console.log(error.response)
        }
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
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={data}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: event => {
                                    history.push({
                                        pathname: '/member-request-detail',
                                        state: { memberRequestDetail: record }
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

export default AdminMemberRequest
