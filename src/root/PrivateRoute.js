import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import MainLayout from '../components/MainLayout'

const PrivateRoute = (props) => {
  const { dataToken, showSiderBar } = props
  const {
    component: Component, // component = Dashboard comp
    ...rest
  } = props

  return (
    <Route
      {...rest} // path, exact
      render={(props) => {
        if (dataToken === 'token') {
          return localStorage.getItem('token') !== null ? (
            <MainLayout showSiderBar={showSiderBar}>
              <Component {...props} />
            </MainLayout>
          ) : (
            <Redirect to="/admin-login" />
          )
        } else if (dataToken === 'token-user') {
          return localStorage.getItem('token-user') !== null ? (
            <MainLayout showSiderBar={showSiderBar}>
              <Component {...props} />
            </MainLayout>
          ) : (
            <Redirect to="/" />
          )
        }
      }}
    />
  )
}

export default PrivateRoute
