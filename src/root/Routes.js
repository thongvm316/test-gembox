import React from 'react'
import { Switch } from 'react-router-dom'

import SignUp from '../containers/Register/SignUp'
import Login from '../containers/Login'

import LoginLayout from '../components/LoginLayout'
import RegisterLayout from '../components/RegisterLayout'

import Home from '../containers/Home/Home'
import CategoryAnalysis from '../containers/Home/CategoryAnalysis'
import AnalysisMarket from '../containers/Home/AnalysisMarket'

import ProductSearch from '../containers/ProductSearch/ProductSearch'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import VendorSearch from '../containers/VendorSearch/VendorSearch'
import SaleStatus from '../containers/SaleStatus/SaleStatus'

import AdminMember from '../containers/Admin/AdminMember/AdminMember'
import MemberDetail from '../containers/Admin/AdminMember/MemberDetail'
import AdminLogin from '../containers/Admin/AdminLogin'
import AdminFindAccount from '../containers/Admin/AdminFindAccount'
import AdminMemberRequest from '../containers/Admin/AdminMemberRequest/AdminMemberRequest'
import AdminMemberRequestDetail from '../containers/Admin/AdminMemberRequest/AdminMemberRequestDetail'
import UserDetail from '../containers/UserDetail/UserDetail'
import AdminSetting from '../containers/Admin/AdminSetting'

import PrivateRoute from './PrivateRoute'
import AppRoute from './AppRoute'

const Routes = () => {
  return (
    <Switch>
      {/* Admin */}
      <AppRoute
        exact
        path="/admin-login"
        component={AdminLogin}
        layout={LoginLayout}
      />
      <AppRoute
        exact
        path="/admin-find-account"
        component={AdminFindAccount}
        layout={LoginLayout}
      />
      <PrivateRoute
        exact
        path="/admin-member"
        dataToken={'token'}
        component={AdminMember}
      />
      <PrivateRoute
        exact
        path="/member-detail"
        dataToken={'token'}
        component={MemberDetail}
      />
      <PrivateRoute
        exact
        path="/member-request"
        dataToken={'token'}
        component={AdminMemberRequest}
      />
      <PrivateRoute
        exact
        path="/member-request-detail"
        dataToken={'token'}
        component={AdminMemberRequestDetail}
      />
      <PrivateRoute
        exact
        path="/admin-setting"
        dataToken={'token'}
        component={AdminSetting}
      />

      {/* Signup - Login */}
      <AppRoute exact path="/" component={Login} layout={LoginLayout} />
      <AppRoute
        exact
        path="/signup"
        component={SignUp}
        layout={RegisterLayout}
      />

      {/* Home Page */}
      <PrivateRoute
        exact
        path="/home"
        dataToken={'token-user'}
        component={Home}
      />
      <PrivateRoute
        exact
        path="/category-analysis"
        dataToken={'token-user'}
        component={CategoryAnalysis}
      />
      <PrivateRoute
        exact
        path="/analysis-market"
        dataToken={'token-user'}
        component={AnalysisMarket}
      />

      <PrivateRoute
        dataToken={'token-user'}
        exact
        path="/product-search"
        component={ProductSearch}
      />
      <PrivateRoute
        dataToken={'token-user'}
        exact
        path="/vendor-search"
        component={VendorSearch}
      />
      <PrivateRoute
        dataToken={'token-user'}
        exact
        path="/product-detail"
        component={ProductDetail}
      />

      <PrivateRoute
        dataToken={'token-user'}
        exact
        path="/sale-status"
        component={SaleStatus}
      />
      <PrivateRoute
        dataToken={'token-user'}
        exact
        path="/user-detail"
        component={UserDetail}
      />
    </Switch>
  )
}
export default Routes
