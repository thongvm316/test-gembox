import React from 'react'
import { Checkbox, Row, Col, Slider, Button, Input } from 'antd'
import './Filter.scss'

const Filter = () => {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    function onChangeSlider(value) {
        console.log('onChange: ', value);
      }
      
    function onAfterChange(value) {
    console.log('onAfterChange: ', value);
    }
    return (
        <div className='modal'>
            <Row className='market'>
                <Col span={4}><h4>마켓</h4></Col>
                <Col span={20}>
                    <Row>
                        <Col span={5}>
                            <Checkbox onChange={onChange}>A</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>B</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>C</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>D</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>E</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>B</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>C</Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox>D</Checkbox>
                        </Col>
                        <Col span={4}>
                            <Checkbox>E</Checkbox>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='price' style={{ marginTop: '2rem' }}>
                <Col span={4}><h4>가격</h4></Col>
                <Col span={20} >
                    <Row>
                        <Col span={1}><h5>₩ 0</h5></Col>
                        <Col span={19}>
                            <Slider
                                range
                                defaultValue={[20, 50]}
                                onChange={onChangeSlider}
                                onAfterChange={onAfterChange}
                            />     
                        </Col>
                        <Col span={4}>₩ 10,000,000</Col>
                    </Row>           
                </Col>
            </Row>

            <Row className='search-number-of-review' style={{ marginBottom: '1rem' }}>
                <Col span={4}><h4>리뷰수 검색</h4></Col>
                <Col span={20}>
                    <Row>
                        <Col span={7}>
                            <Input  suffix='최소' defaultValue='5000'/>
                        </Col>
                        <Col span={1}><p style={{ margin: '5px 0 0 10px' }}>~</p></Col>
                        <Col span={7}>
                            <Input suffix='최대' defaultValue='5000'/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='sale-search' style={{ marginBottom: '1rem' }}>
                <Col span={4}><h4>판매수 검색</h4></Col>
                <Col span={20}>
                    <Row>
                        <Col span={7}>
                            <Input  suffix='최소' defaultValue='5000'/>
                        </Col>
                        <Col span={1}><p style={{ margin: '5px 0 0 10px' }}>~</p></Col>
                        <Col span={7}>
                            <Input suffix='최대' defaultValue='5000'/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='jam-factory-average'>
                <Col span={4}>
                    <h4>잼팩토리 평균</h4>
                </Col>
                <Col span={20}>
                    <Button className='style-btn'>잼팩토리 평균판매 건 보다 높은 상품 보기 </Button>
                    <Button className='style-btn'>잼팩토리 평균판매 건 보다 낮은 상품 보기 </Button>
                </Col>
            </Row>
            {/* <Button>적용하기</Button> */}
            <Row className='modal-btn' style={{ justifyContent: 'center' }}>
                <Col style={{ padding: '1rem'}} span={3}><Button  className='style-btn' >적용하기</Button></Col>
            </Row>
        </div>
    )
}

export default Filter
