import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Space, Input, Table, Radio } from 'antd'
import { API_URL } from '../../../constants/appConstants'
import axios from 'axios'
import { SearchOutlined } from '@ant-design/icons';
import './AdminMemberRequest.scss';


const AdminMemberRequest = (props) => {
    const [data, setData] = useState(null)

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
            title: '연락처',
            dataIndex: 'phone',
        },
        {
            title: '상태',
            dataIndex: 'state',
            render: (text, record) => {
                const setState = () => {
                    // console.log(record);
                    let color = '#2400FF';
                    if (record.status === 0) {
                        record.state = '가입 요청'
                    } else if (record.status === 2) {
                        record.state = '가입 거부'
                        color = '#FF0000'
                    }
                    return (
                        <p style={{ color, fontWeight: 'bold' }}>{record.state}</p>
                    )
                }
                return (
                    <>
                        {
                            setState()
                        }
                    </>
                )
            }
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
            }
        }
        try {
            const res = await axios.get(`${API_URL}/users`, config)
            setData(res.data.data.result.member_request)
        } catch (error) {
            console.log(error.response)
        }
    }, [])

    return (
        <div className='admin-member-request'>
            <Row gutter={[0, 16]} className='top' justify='space-between'>
                <Col className="style-click-btn">
                    {/* <Space size='middle'>
                        <Button onClick={() => { history.push('/admin-member') }}>가입회원만 보기</Button>
                        <Button onClick={() => { history.push('/member-request') }}>가입요청 보기</Button>
                    </Space> */}
                    <Radio.Group size="middle" defaultValue="b">
                        <Space>
                            <Radio.Button onClick={() => { history.push('/admin-member') }} value='a' >가입회원만 보기</Radio.Button>
                            <Radio.Button onClick={() => { history.push('/member-request') }} value='b'>가입요청 보기</Radio.Button>
                        </Space>
                    </Radio.Group>
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
