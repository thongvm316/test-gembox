import React from 'react'
import GroupButton from './GroupButton/GroupButton'
import { DatePicker, Button, Row, Col } from 'antd';
import './CategoryAnalysis.scss'

const CategoryAnalysis = (props) => {
    // Date Picker
    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const { RangePicker } = DatePicker;

    return (
        <div className="category-analysis">
            <GroupButton redirect={props.history.push} clickable="b" />

            <Row className="aggregate-month card-border">
                <h1 style={{ marginRight: '41px', paddingTop: '5px' }}>집계 월</h1>
                <Col xl={20} className="date-picker">
                    <RangePicker bordered={false} />
                    <Button style={{ background: '#71c4d5', borderColor: '#71c4d5', fontWeight: 'bold' }} type="primary">적용하기</Button>
                </Col>
            </Row>

        </div>
    )
}

export default CategoryAnalysis
