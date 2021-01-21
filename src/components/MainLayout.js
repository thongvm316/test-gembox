import React, { useState } from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Logout from '../images/logout.png'
import MyProfile from '../images/profile.png'
import Setting from '../images/Setting.png'
import './MainLayout.scss'

import Sidebar from './Sidebar'
const { Header, Content } = Layout

const MainLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true)

  const renderUserInfor = () => {
    return (
      <Menu selectedKeys={[]}>
        {localStorage.getItem('token-user') ? (
          ''
        ) : (
          <>
            <Menu.Item key="user">
              <img src={MyProfile} />{' '}
              <span
                onClick={gotoAdminSetting}
                style={{
                  marginLeft: '13px',
                  color: '#248D9E',
                  fontWeight: 'bold',
                }}
              >
                My Profile
              </span>
            </Menu.Item>
            <Menu.Divider />
          </>
        )}
        <Menu.Item key="logout">
          <img src={Logout} />{' '}
          <span
            onClick={logout}
            style={{ marginLeft: '13px', color: '#248D9E', fontWeight: 'bold' }}
          >
            Logout
          </span>
        </Menu.Item>
      </Menu>
    )
  }

  const logout = () => {
    localStorage.clear()
    props.children.props.history.push('/')
  }

  const gotoAdminSetting = () => {
    props.children.props.history.push('/admin-setting')
  }

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const goDetail = () => {
    props.children.props.history.push({
      pathname: '/user-detail',
    })
  }

  return (
    <Layout className="admin-layout">
      <Sidebar collapsed={collapsed} />
      <Layout style={{ background: '#fff' }}>
        <Header
          style={{ background: '#fff', padding: 0 }}
          className="main-header"
        >
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={() => toggle()} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={() => toggle()} />
          )}
          <div style={{ display: 'flex' }}>
            <Dropdown overlay={renderUserInfor()}>
              <a style={{ color: '#42ABBC' }}>
                <span style={{ fontWeight: '500', fontSize: '13px' }}></span>
                <span
                  style={{
                    paddingLeft: '8px',
                    fontWeight: '400',
                    fontSize: '13px',
                  }}
                >
                  님 안녕하세요
                </span>
                <span style={{ paddingLeft: '11px' }}>
                  <DownOutlined />
                </span>
              </a>
            </Dropdown>
            <div style={{ marginLeft: '10px' }}>
              <Link to="/user-detail">
                <img style={{ marginBottom: '9px' }} src={Setting} />
              </Link>
            </div>
          </div>
        </Header>
        <Content className="main-layout-content">{props.children}</Content>
      </Layout>
    </Layout>
  )
}
export default MainLayout
