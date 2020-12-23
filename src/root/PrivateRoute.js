import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainLayout from '../components/MainLayout'

const PrivateRoute = (props) => {
    const {
        component: Component, // component = Dashboard comp
        ...rest
    } = props
    return (
        <Route
            {...rest} // path, exact
            render={props =>
                (localStorage.getItem('token') !== null)
                    ? (<MainLayout><Component {...props} /></MainLayout>)
                    : (<Redirect to="/admin-login" />)
            }
        />
    );
}

export default PrivateRoute;
