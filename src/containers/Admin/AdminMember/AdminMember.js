import React, { useEffect, useState, useContext } from 'react'
import { Row, Col, Space, Input, Table, Radio } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { AdminMemberContext } from '../../../lib/admin/AdminMemberContext'
import { action } from '../../../lib/admin/AdminMemberContext'

import adminApi from '../../../api/AdminAPI'
import './AdminMember.scss'

const AdminMember = (props) => {
  var _0x85be=["\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x6E\x61\x6D\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x66\x69\x6C\x74\x65\x72","\uC774\uB984","\uC774\uBA54\uC77C","\x65\x6D\x61\x69\x6C","\uC5F0\uB77D\uCC98","\x70\x68\x6F\x6E\x65","\x6C\x65\x6E\x67\x74\x68","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x64\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x46\x45\x54\x43\x48\x5F\x4D\x45\x4D\x42\x45\x52\x5F\x53\x55\x43\x43\x45\x53\x53","\x6D\x65\x6D\x62\x65\x72","\x74\x68\x65\x6E","\x67\x65\x74\x4D\x65\x6D\x62\x65\x72"];const [loading,setLoading]=useState(false);const context=useContext(AdminMemberContext);const {state,dispatch}=context;const {member}=state;const [isFiltering,setFiltering]=useState(false);const [filtered,setFiltered]=useState(null);const filterResults=(_0xc9a4x3)=>{let _0xc9a4x4=member[_0x85be[3]]((_0xc9a4x5)=>{const _0xc9a4x6=_0xc9a4x5[_0x85be[1]][_0x85be[0]]();const _0xc9a4x7=_0xc9a4x3[_0x85be[0]]();return _0xc9a4x6[_0x85be[2]](_0xc9a4x7)!==  -1});setFiltered(_0xc9a4x4)};const columns=[{title:_0x85be[4],dataIndex:_0x85be[1]},{title:_0x85be[5],dataIndex:_0x85be[6]},{title:_0x85be[7],dataIndex:_0x85be[8]}];const {history}=props;useEffect(()=>{if(member[_0x85be[9]]=== 0){setLoading(true)};adminApi[_0x85be[18]]()[_0x85be[17]]((_0xc9a4xa)=>{if(_0xc9a4xa&& _0xc9a4xa[_0x85be[13]]&& _0xc9a4xa[_0x85be[13]][_0x85be[14]]){dispatch({type:action[_0x85be[15]],payload:_0xc9a4xa[_0x85be[13]][_0x85be[14]][_0x85be[16]]})};setLoading(false)})[_0x85be[12]]((_0xc9a4x9)=>{console[_0x85be[11]](_0xc9a4x9[_0x85be[10]]);setLoading(false)})},[])

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
            loading={loading}
            scroll={{ x: 1300 }}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={isFiltering ? filtered : member}
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
