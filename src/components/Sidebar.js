import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    const { collapsed } = props;

    return (
        <Layout.Sider style={{ background: '#414955', height: '100vh' }} className="sidebar-left-menu" collapsedWidth="0" trigger={null} collapsible collapsed={collapsed}>
            <Menu theme='dark' style={{ background: '#414955' }} mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item className="app-menu-item" key="/home">
                    {/* <Icon type="search" /> */}
                    <h1 to="" style={{ fontWeight: 'bold', color: 'white'}}>GEM FACTORY</h1>
                </Menu.Item>
                <Menu.Item style={{ marginTop: '50px' }} className="app-menu-item" key="/page1"> 
                    {/* <Icon type="search" /> */}
                    <NavLink to="/home">홈</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page2">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/product-search">상품 검색</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page3">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/vendor-search">밴더 검색</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page4">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/video-search">킥킥 동영상 검색</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page5">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/sale-status">나의 판매현황</NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}
export default Sidebar;