import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Menu, Input } from 'antd';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import Sidebar from './Sidebar';

const Search = Input.Search;
const { Header, Content } = Layout;

const MainLayout = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const renderUserInfor = () => {
        return (
            <Menu selectedKeys={[]} onClick={() => onMenuClick()}>
                <Menu.Item key="user"><UserOutlined /> Thông tin tài khoản</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout"><UserOutlined /> Đăng xuất</Menu.Item>
            </Menu>
        )
    }

    const onMenuClick = () => {
        props.children.props.history.push('/')
        // if (key === 'logout') {
        //     const { history } = props;
        //     history.push('/');
        // }
        // if(key === 'user'){
        //     const { history } = props;
        //     history.push('/account/info');
        // }
    }

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout className="admin-layout">
            <Sidebar collapsed={collapsed} />
            <Layout style={{ background: '#fff' }}>
                <Header style={{ background: '#fff', padding: 0 }}>
                    {
                        collapsed ?
                        <MenuUnfoldOutlined className="trigger" onClick={() => toggle()} />
                        :
                        <MenuFoldOutlined className="trigger" onClick={() => toggle()}/>
                    }
                    <Dropdown overlay={renderUserInfor()}>
                        <div>
                            <Avatar style={{marginRight: '10px'}} icon={<UserOutlined />} size="small" />
                        </div>
                    </Dropdown>
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, height: 'auto', minHeight: 'initial' }}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}
export default MainLayout;