import React from 'react'
import { Row, Col, Button, Space, Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './AdminMember.scss'

const AdminMember = (props) => {
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
            dataIndex: 'contact',
        },
    ];

    const data = [];
    for (let i = 0; i < 4; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            email: 32,
            password: `123456789`,
            contact: '010-0000-0000',
        });
    }


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    // Props
    const { history } = props;

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
                        dataSource={data}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: event => {
                                    history.push({
                                        pathname: '/member-detail',
                                        state: { product: record }
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
