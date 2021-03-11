import React, { useState, useEffect } from 'react'
import { Layout, Popover } from 'antd'
import { MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons'
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
  const renderUserInfor = () => {
    return (
      <div>
        <img src={Logout} />{' '}
        <span
          onClick={logout}
          style={{
            marginLeft: '13px',
            color: '#248D9E',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Logout
        </span>
      </div>
    )
  }

  var _0xde96=["","\x63\x6C\x65\x61\x72","\x2F","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x70\x72\x6F\x70\x73","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x6F\x62\x6A\x65\x63\x74","\x6C\x6F\x67","\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x74\x6F\x6B\x65\x6E","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2F\x75\x73\x65\x72\x2F\x70\x72\x6F\x66\x69\x6C\x65","\x67\x65\x74","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x6E\x61\x6D\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x67\x65\x74\x41\x64\x6D\x69\x6E\x49\x6E\x66\x6F","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68"];const {showSiderBar}=props;const [collapsed,setCollapsed]=useState(true);const [userName,setUserName]=useState(_0xde96[0]);const [adminName,setAdminName]=useState(_0xde96[0]);const logout=()=>{localStorage[_0xde96[1]]();props[_0xde96[6]][_0xde96[5]][_0xde96[4]][_0xde96[3]](_0xde96[2])};const toggle=()=>{console[_0xde96[8]](_0xde96[7]);setCollapsed(!collapsed)};const tokenUser=localStorage[_0xde96[10]](_0xde96[9]);const tokenAdmin=localStorage[_0xde96[10]](_0xde96[11]);useEffect(()=>{const _0xd81bx5=async ()=>{const _0xd81bx6={headers:{Accept:_0xde96[12],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xde96[12],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':`${_0xde96[0]}${localStorage[_0xde96[10]](_0xde96[9])}${_0xde96[0]}`}};try{const {data}= await axios[_0xde96[14]](`${_0xde96[0]}${API_URL}${_0xde96[13]}`,_0xd81bx6);if(data&& data[_0xde96[16]][_0xde96[15]]){setUserName(data[_0xde96[16]][_0xde96[15]][_0xde96[17]])}}catch(error){console[_0xde96[8]](error[_0xde96[18]])}};const _0xd81bx7=()=>{adminApi[_0xde96[21]]()[_0xde96[20]]((_0xd81bx9)=>{if(_0xd81bx9&& _0xd81bx9[_0xde96[16]]&& _0xd81bx9[_0xde96[16]][_0xde96[15]]){setAdminName(_0xd81bx9[_0xde96[16]][_0xde96[15]][_0xde96[17]])}})[_0xde96[19]]((_0xd81bx8)=>{console[_0xde96[8]](_0xd81bx8[_0xde96[18]])})};if(tokenUser){_0xd81bx5()};if(tokenAdmin){_0xd81bx7()}},[tokenUser,tokenAdmin]);const width=window[_0xde96[22]];const isShowIconAndCollapsed=width< 576?true:false

  return (
    <Layout className="admin-layout">
      {showSiderBar ? (
        <Sidebar collapsed={isShowIconAndCollapsed ? collapsed : false} />
      ) : (
        <></>
      )}
      <Layout style={{ background: '#fff' }}>
        <Header
          style={{ background: '#fff', padding: 0 }}
          className="main-header"
        >
          <MenuUnfoldOutlined
            style={
              isShowIconAndCollapsed
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
            className="trigger"
            onClick={() => toggle()}
          />
          <div style={{ display: 'flex' }}>
            <Popover content={renderUserInfor()}>
              <a style={{ color: '#42ABBC' }}>
                <span style={{ fontWeight: '500', fontSize: '13px' }}></span>
                <span
                  style={{
                    paddingLeft: '8px',
                    fontWeight: '400',
                    fontSize: '13px',
                  }}
                >
                  <strong>{userName ? userName : adminName}</strong> 님
                  안녕하세요
                </span>
                <span style={{ paddingLeft: '11px' }}>
                  <DownOutlined />
                </span>
              </a>
            </Popover>
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
