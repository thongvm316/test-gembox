import React from 'react';
import { Switch } from "react-router-dom";

import AppRoute from './AppRoute';
import LoginLayout from '../components/LoginLayout'
import RegisterLayout from '../components/RegisterLayout'
import Home from '../containers/Home/Home';
import Login from '../containers/Login';
import ProductSearch from '../containers/ProductSearch/ProductSearch'
import VendorSearch from '../containers/VendorSearch/VendorSearch'
import Register from '../containers/Register/Register'
import VideoSearch from '../containers/VideoSearch/VideoSearch'
import SaleStatus from '../containers/SaleStatus/SaleStatus'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import Admin from '../containers/Admin/Admin'
import ShowInfoRegister from '../containers/Admin/ShowInfoRegister'
import Confirm from '../containers/Admin/Confirm'
import setAuthToken from '../utils/setAuthToken'

// if (localStorage.token) {
//     console.log(localStorage.token)
//     setAuthToken(localStorage.token);
// } 

const Routes = () => {
    return (
        <Switch>
            {/* Admin */}
            <AppRoute exact path="/admin" component={Admin} />
            <AppRoute exact path="/show-info-register" component={ShowInfoRegister} />
            <AppRoute exact path="/confirm" component={Confirm} />

            <AppRoute exact path="/" component={Login} layout={LoginLayout} />
            <AppRoute exact path="/home" component={Home} />
            <AppRoute exact path="/register" component={Register} layout={RegisterLayout} />

            <AppRoute exact path="/product-search" component={ProductSearch} />
            <AppRoute exact path="/vendor-search" component={VendorSearch} />
            <AppRoute exact path="/video-search" component={VideoSearch} />
            <AppRoute exact path="/sale-status" component={SaleStatus} />
            <AppRoute exact path="/product-detail" component={ProductDetail} />
        </Switch>
    )
}
export default Routes;