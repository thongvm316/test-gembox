import React  from 'react';

const LoginLayout = (props) => {
    return (
        <div className="login-layout-container">
            {props.children}
        </div>
    )
}
export default LoginLayout;