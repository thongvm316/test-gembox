import React, { useEffect, useState } from 'react'
import { Row, Col, Space, Input, Table, Radio } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import adminApi from '../../../api/AdminAPI'
import './AdminMember.scss'

const AdminMember = (props) => {
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
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      )
    },
  }

  // Props
  const { history } = props

  // Get Data
  useEffect(async () => {
    adminApi
      .getMember()
      .then((value) => {
        if (value && value.data && value.data.result) {
          setData(value.data.result.member)
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [])

  return (
    <div className="admin-member">
      <Row gutter={[0, 16]} className="top" justify="space-between">
        <Col className="style-click-btn">
          <Radio.Group size="middle" defaultValue="a">
            <Space>
              <Radio.Button
                onClick={() => {
                  history.push('/admin-member')
                }}
                value="a"
              >
                가입회원만 보기
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  history.push('/member-request')
                }}
                value="b"
              >
                가입요청 보기
              </Radio.Button>
            </Space>
          </Radio.Group>
        </Col>
        <Col className="style-input">
          <Input
            placeholder="Search by name"
            prefix={<SearchOutlined className="site-form-item-icon" />}
          />
        </Col>
      </Row>
      <Row className="render-data" style={{ marginTop: '2rem' }}>
        <Col span={24}>
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            scroll={{ x: 1300 }}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={data}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history.push({
                    pathname: '/member-detail',
                    state: { memberDetail: record },
                  })
                },
              }
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AdminMember
