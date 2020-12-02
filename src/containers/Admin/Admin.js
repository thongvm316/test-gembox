import React from 'react'
import { Row, Col, Button, Space, Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './Admin.scss'

const Admin = () => {
    const columns = [
        {
          title: '이름',
          dataIndex: 'name',
        },
        {
          title: '이메일',
          dataIndex: 'age',
        },
        {
          title: '비밀번호',
          dataIndex: 'address',
        },
        {
        title: '연락처',
        dataIndex: 'name',
        },
        {
        title: '상태',
        dataIndex: 'age',
        },
        {
        title: ' 선택 메일 보내기',
        dataIndex: 'address',
        },
    ];

    const data = [];
    for (let i = 0; i < 4; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    return (
        <div className='admin'>
            <Row gutter={[0, 16]} className='top' justify='space-between'>
                <Col>
                    <Space size='middle'>
                        <Button>가입회원만 보기</Button>
                        <Button>가입요청 보기</Button>
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
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Admin
