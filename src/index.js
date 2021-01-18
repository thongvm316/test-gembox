import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Root from './root/Root';
import 'antd/dist/antd.css';
import setAuthToken from './utils/setAuthToken'

if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'))
} else if (localStorage.getItem('token-user')) {
    setAuthToken(localStorage.getItem('token-user'))
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
