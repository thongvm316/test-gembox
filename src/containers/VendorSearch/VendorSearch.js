import React from 'react'
import { Button, DatePicker, Space, Input, Row, Col } from 'antd';
import TableList from './TableList'
import { HeadingBar } from '../ProductSearch/ProductSearch'
import './VendorSearch.scss'

const VendorSearch = () => {
    const { RangePicker } = DatePicker;
    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div className="product-search">
            <HeadingBar/>
            <Row>
                <TableList/>
            </Row>
        </div>
    )
}

export default VendorSearch
