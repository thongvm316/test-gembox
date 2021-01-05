import React from 'react';
import { Switch } from "react-router-dom";

import AppRoute from './AppRoute';
import LoginLayout from '../components/LoginLayout'
import RegisterLayout from '../components/RegisterLayout'
import Home from '../containers/Home/Home';
import Login from '../containers/Login';
import ProductSearch from '../containers/ProductSearch/ProductSearch'
import VendorSearch from '../containers/VendorSearch/VendorSearch'
import SignUp from '../containers/Register/SignUp'
import VideoSearch from '../containers/VideoSearch/VideoSearch'
import SaleStatus from '../containers/SaleStatus/SaleStatus'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import AdminMember from '../containers/Admin/AdminMember/AdminMember'
import MemberDetail from '../containers/Admin/AdminMember/MemberDetail'
import AdminLogin from '../containers/Admin/AdminLogin'
import AdminFindAccount from '../containers/Admin/AdminFindAccount'
import AdminMemberRequest from '../containers/Admin/AdminMemberRequest/AdminMemberRequest'
import AdminMemberRequestDetail from '../containers/Admin/AdminMemberRequest/AdminMemberRequestDetail'
import UserDetail from '../containers/UserDetail/UserDetail';

// PrivateRoute
import PrivateRoute from './PrivateRoute'

// Utils
import setAuthToken from '../utils/setAuthToken'
if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const Routes = () => {
    return (
        <Switch>
            {/* Admin */}
            <AppRoute exact path="/admin-login" component={AdminLogin} layout={LoginLayout} />
            <AppRoute exact path="/admin-find-account" component={AdminFindAccount} layout={LoginLayout} />
            <PrivateRoute exact path="/admin-member" component={AdminMember} />
            <PrivateRoute exact path="/member-detail" component={MemberDetail} />
            <PrivateRoute exact path="/member-request" component={AdminMemberRequest} />
            <PrivateRoute exact path="/member-request-detail" component={AdminMemberRequestDetail} />

            <AppRoute exact path="/" component={Login} layout={LoginLayout} />
            <AppRoute exact path="/home" component={Home} />
            <AppRoute exact path="/signup" component={SignUp} layout={RegisterLayout} />

            <AppRoute exact path="/product-search" component={ProductSearch} />
            <AppRoute exact path="/vendor-search" component={VendorSearch} />
            <AppRoute exact path="/video-search" component={VideoSearch} />
            <AppRoute exact path="/sale-status" component={SaleStatus} />
            <AppRoute exact path="/product-detail" component={ProductDetail} />
            <AppRoute exact path="/user-detail" component={UserDetail} />
        </Switch>
    )
}
export default Routes;