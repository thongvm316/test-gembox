import React, { useEffect, useState, useContext } from 'react'
import { Row, Col, Space, Input, Table, Radio } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { AdminMemberContext } from '../../../lib/admin/AdminMemberContext'
import { action } from '../../../lib/admin/AdminMemberContext'

import adminApi from '../../../api/AdminAPI'
import './AdminMemberRequest.scss'

const AdminMemberRequest = (props) => {
  var _0xa686=["\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x6E\x61\x6D\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x66\x69\x6C\x74\x65\x72"];const [loading,setLoading]=useState(false);const context=useContext(AdminMemberContext);const {state,dispatch}=context;const {member_request}=state;const [isFiltering,setFiltering]=useState(false);const [filtered,setFiltered]=useState(null);const filterResults=(_0xe0f0x3)=>{let _0xe0f0x4=member_request[_0xa686[3]]((_0xe0f0x5)=>{const _0xe0f0x6=_0xe0f0x5[_0xa686[1]][_0xa686[0]]();const _0xe0f0x7=_0xe0f0x3[_0xa686[0]]();return _0xe0f0x6[_0xa686[2]](_0xe0f0x7)!==  -1});setFiltered(_0xe0f0x4)}

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
          let color = '#2400FF'
          if (record.status === 0) {
            record.state = '가입 요청'
          } else if (record.status === 2) {
            record.state = '가입 거부'
            color = '#FF0000'
          }
          return <p style={{ color, fontWeight: 'bold' }}>{record.state}</p>
        }
        return <>{setState()}</>
      },
    },
  ]

  var _0xffdc=["\x6C\x65\x6E\x67\x74\x68","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x64\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x46\x45\x54\x43\x48\x5F\x4D\x45\x4D\x42\x45\x52\x5F\x52\x45\x51\x55\x45\x53\x54\x5F\x53\x55\x43\x43\x45\x53\x53","\x6D\x65\x6D\x62\x65\x72\x5F\x72\x65\x71\x75\x65\x73\x74","\x74\x68\x65\x6E","\x67\x65\x74\x4D\x65\x6D\x62\x65\x72"];const {history}=props;useEffect(async ()=>{if(member_request[_0xffdc[0]]=== 0){setLoading(true)};adminApi[_0xffdc[9]]()[_0xffdc[8]]((_0x2f54x2)=>{if(_0x2f54x2&& _0x2f54x2[_0xffdc[4]]&& _0x2f54x2[_0xffdc[4]][_0xffdc[5]]){dispatch({type:action[_0xffdc[6]],payload:_0x2f54x2[_0xffdc[4]][_0xffdc[5]][_0xffdc[7]]})};setLoading(false)})[_0xffdc[3]]((_0x2f54x1)=>{console[_0xffdc[2]](_0x2f54x1[_0xffdc[1]]);setLoading(false)})},[])

  return (
    <div className="admin-member-request">
      <Row gutter={[0, 16]} className="top" justify="space-between">
        <Col className="style-click-btn">
          <Radio.Group size="middle" defaultValue="b">
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
            onChange={(e) => {
              setFiltering(e.target.value.length > 0)
              filterResults(e.target.value)
            }}
            placeholder="Search by name"
            prefix={<SearchOutlined className="site-form-item-icon" />}
          />
        </Col>
      </Row>
      <Row className="render-data" style={{ marginTop: '2rem' }}>
        <Col span={24}>
          <Table
            scroll={{ x: 1300 }}
            loading={loading}
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={isFiltering ? filtered : member_request}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history.push({
                    pathname: '/member-request-detail',
                    state: { memberRequestDetail: record },
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

export default AdminMemberRequest
