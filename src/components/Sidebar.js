import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from "react-router-dom";

import {
    HomeOutlined,
    BarsOutlined,
    SettingOutlined,
    UsergroupAddOutlined
  } from '@ant-design/icons';

const Sidebar = (props) => {
    const { collapsed } = props;

    return (
        <Layout.Sider className="sidebar-left-menu" collapsedWidth="0" trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item className="app-menu-item" key="/home">
                    {/* <Icon type="search" /> */}
                    <NavLink to="">GEM FACTORY</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page1"> 
                    {/* <Icon type="search" /> */}
                    <NavLink to="/home"><HomeOutlined/> 홈</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page2">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/page1"><BarsOutlined /> 상품검색</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page3">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/page2"><UsergroupAddOutlined /> 벤더 검색</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page4">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/page2"><SettingOutlined /> 킥킥 동영상 검색</NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}
export default Sidebar;