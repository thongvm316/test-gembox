import React, { Component } from 'react';
import Routes from './Routes';

import 'moment/locale/ru';

import {
    BrowserRouter as Router,
} from "react-router-dom";
export default class Root extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        )
    }
}