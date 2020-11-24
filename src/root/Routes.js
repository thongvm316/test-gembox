import React from 'react';
import { Switch } from "react-router-dom";

import AppRoute from './AppRoute';
import LoginLayout from '../components/LoginLayout'
import Home from '../containers/Home/Home';
import Login from '../containers/Login';
import ProductSearch from '../containers/ProductSearch/ProductSearch'
import VendorSearch from '../containers/VendorSearch/VendorSearch'

import Chart from '../containers/ProductSearch/Chart'

const Routes = () => {
    return (
        <Switch>
            <AppRoute exact path="/" component={Login} layout={LoginLayout} />
            <AppRoute exact path="/home" component={Home} />
            <AppRoute exact path="/page1" component={ProductSearch} />
            <AppRoute exact path="/page2" component={VendorSearch} />
            <AppRoute exact path="/demo-chart" component={Chart} />
        </Switch>
    )
}
export default Routes;