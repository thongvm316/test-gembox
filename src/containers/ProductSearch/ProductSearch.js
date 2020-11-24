import React from 'react'
import { Button, DatePicker, Row, Col, Input, Space } from 'antd';
import TableList from './TableList'
import './ProductSearch.scss'

export const HeadingBar = (props) => {
    const { RangePicker } = DatePicker;

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <>
             <Row className="info-search">
                <Col>
                    <Button style={{ marginRight: '15px' }} type="primary">필터</Button>
                    <Button type="primary">선택된 항목 그래프 비교</Button>
                </Col>
                <Col style={{ marginLeft: '100px' }}  className="date-picker">
                    <Space direction="" size={12}>
                        <RangePicker />
                    </Space>
                    <Button style={{ marginLeft: '8px' }} type="primary">필터</Button>
                </Col>
                <Col>
                    <Input style={{ width: '392px', marginLeft: '60px' }} placeholder="Search" />
                    <Button style={{ marginLeft: '18px' }} type="primary">EXCEL</Button>
                </Col>
            </Row>
        </>
    )
}

const ProductSearch = () => {

    return (
        <div className="product-search">
            <HeadingBar/>
            <Row className='res-small-device'>
                <TableList/>
            </Row>
        </div>
    )
}

export default ProductSearch
