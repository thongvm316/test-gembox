import React from 'react'
import { Checkbox, Row, Col, Slider, Button, Input, Select, Option } from 'antd'
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
                        <Col md={5}>
                            <Checkbox onChange={onChange}>11번가</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>G마켓</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>쿠팡</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>위메프</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>티몬</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>인터파크</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>스마트스토어</Checkbox>
                        </Col>
                        <Col md={5}>
                            <Checkbox>잼토이즈</Checkbox>
                        </Col>
                        <Col md={4}>
                            <Checkbox>전제 선택</Checkbox>
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
                        <Input.Group compact>
                            <Input style={{ width: 150, textAlign: 'center' }} suffix='최소' />
                            <Input
                                className="site-input-split"
                                style={{
                                width: 30,
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none',
                                backgroundColor: '#f4f2ff !important',
                                border: 'none',
                                margin: '0 1rem'
                                }}
                                placeholder="~"
                                disabled
                            />
                            <Input
                                className="site-input-right"
                                style={{
                                width: 150,
                                textAlign: 'center',
                                }}
                                suffix='최소'
                                
                            />
                        </Input.Group>
                    </Row>
                </Col>
            </Row>

            <Row className='sale-search' style={{ marginBottom: '1rem' }}>
                <Col span={4}><h4>판매수 검색</h4></Col>
                <Col span={20}>
                    <Row>
                        <Input.Group compact>
                            <Input style={{ width: 150, textAlign: 'center' }} suffix='최소'/>
                            <Input
                                className="site-input-split"
                                style={{
                                    width: 30,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    pointerEvents: 'none',
                                    backgroundColor: '#f4f2ff !important',
                                    border: 'none',
                                    margin: '0 1rem'
                                }}
                                placeholder="~"
                                disabled
                            />
                            <Input
                                className="site-input-right"
                                style={{
                                width: 150,
                                textAlign: 'center',
                                }}
                                suffix='최소'
                            />
                        </Input.Group>
                    </Row>
                </Col>
            </Row>

            <Row className='jam-factory-average'>
                <Col span={4}>
                    <h4>잼팩토리 평균</h4>
                </Col>
                <Col span={20}>
                    <Button className='style-btn'>잼팩토리 평균판매 건 보다 높은 상품 보기 </Button> {/* May be other component, check after have sb */}
                    <Button className='style-btn'>잼팩토리 평균판매 건 보다 낮은 상품 보기 </Button> {/* May be other component, check after have sb */}
                </Col>
            </Row>

            <Row className='modal-btn' style={{ justifyContent: 'center' }}>
                <Col style={{ padding: '1rem'}} span={3}><Button  className='style-btn' >적용하기</Button></Col>
            </Row>
        </div>
    )
}

export default Filter
