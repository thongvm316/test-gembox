import React, { useState, useEffect } from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Logout from '../images/logout.png'
import Setting from '../images/Setting.png'
import './MainLayout.scss'

import axios from 'axios'
import { API_URL } from '../constants/appConstants'
import adminApi from '../api/AdminAPI'

import Sidebar from './Sidebar'
const { Header, Content } = Layout

const MainLayout = (props) => {
  const { showSiderBar } = props
  const [collapsed, setCollapsed] = useState(true)
  const [userName, setUserName] = useState('')
  const [adminName, setAdminName] = useState('')

  const renderUserInfor = () => {
    return (
      <Menu selectedKeys={[]}>
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

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  /* Get User - Admin Info */
  const tokenUser = localStorage.getItem('token-user')
  const tokenAdmin = localStorage.getItem('token')
  useEffect(() => {
    const getUserInfo = async () => {
      console.log('user')
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Auth-Token': `${localStorage.getItem('token-user')}`,
        },
      }
      try {
        const { data } = await axios.get(`${API_URL}/user/profile`, config)
        if (data && data.data.result) {
          setUserName(data.data.result.name)
        }
      } catch (error) {
        console.log(error.response)
      }
    }

    const getAdminInfo = () => {
      adminApi
        .getAdminInfo()
        .then((value) => {
          if (value && value.data && value.data.result) {
            setAdminName(value.data.result.name)
          }
        })
        .catch((error) => {
          console.log(error.response)
        })
    }

    if (tokenUser) {
      getUserInfo()
    }

    if (tokenAdmin) {
      getAdminInfo()
    }
  }, [tokenUser, tokenAdmin])

  return (
    <Layout className="admin-layout">
      {showSiderBar ? <Sidebar collapsed={collapsed} /> : <></>}
      <Layout style={{ background: '#fff' }}>
        <Header
          style={{ background: '#fff', padding: 0 }}
          className="main-header"
        >
          {/* {collapsed ? (
            <MenuUnfoldOutlined
              style={showSiderBar ? {} : { visibility: 'hidden' }}
              className="trigger"
              onClick={() => toggle()}
            />
          ) : (
            <MenuFoldOutlined
              style={showSiderBar ? {} : { visibility: 'hidden' }}
              className="trigger"
              onClick={() => toggle()}
            />
          )} */}
          <MenuUnfoldOutlined
            style={{ visibility: 'hidden' }}
            className="trigger"
            onClick={() => toggle()}
          />
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
                  <strong>{userName ? userName : adminName}</strong> 님 안녕하세요
                </span>
                <span style={{ paddingLeft: '11px' }}>
                  <DownOutlined />
                </span>
              </a>
            </Dropdown>
            <div style={{ marginLeft: '10px' }}>
              {localStorage.getItem('token') ? (
                <Link to="/admin-setting">
                  <img style={{ marginBottom: '9px' }} src={Setting} />
                </Link>
              ) : (
                <Link to="/user-detail">
                  <img style={{ marginBottom: '9px' }} src={Setting} />
                </Link>
              )}
            </div>
          </div>
        </Header>
        <Content className="main-layout-content">{props.children}</Content>
      </Layout>
    </Layout>
  )
}
export default MainLayout
