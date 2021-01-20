import React, { useState } from 'react'
import { Checkbox, Row, Col, Slider, Button, Input, Select } from 'antd'

import './Filter.scss'
import CategoryList from '../CategoryList/CategoryList';
const { Option } = Select;


const Filter = (props) => {

    const [price, setPrice] = useState([50000, 7500000])

    const [filter, setFilter] = useState(
        {
            category: '11번가',
            price: [50000, 7500000],
            reviews: [],
            searchs: []
        });


    function onChangeMarket(value) {
        setFilter({ ...filter, markets: value })
    }

    function onChangeSlider(value) {
        setFilter({ ...filter, price: value })
    }

    const handleChangeCategory = (value) => {
        console.log(value)
        setFilter({ ...filter, category: value })
    }

    const onSave = () => {
        props.onOk(filter)
    }

    const minReviews = (e) => {
        const review = filter.reviews;
        review[0] = e.target.value
        setFilter({...filter, reviews: review})
    }

    const maxReviews = (e) => {
        const review = filter.reviews;
        review[1] = e.target.value
        setFilter({...filter, reviews: review})
    }

    const minSearchs = (e) => {
        const search = filter.searchs;
        search[0] = e.target.value
        setFilter({...filter, searchs: search})
    }

    const maxSearchs = (e) => {
        const search = filter.searchs;
        search[1] = e.target.value
        setFilter({...filter, searchs: search})
    }
    return (
        <div className='modal'>
            <Row className='market'>
                <Col span={4}><h4>마켓</h4></Col>
                <Col span={20}>
                    <Checkbox.Group onChange={onChangeMarket}>
                        <Row>
                            <Col md={6}>
                                <Checkbox value="11번가">11번가</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="G마켓">G마켓</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="쿠팡">쿠팡</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="위메프">위메프</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="티몬">티몬</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="인터파크">인터파크</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="스마트스토어">스마트스토어</Checkbox>
                            </Col>
                            <Col md={6}>
                                <Checkbox value="전제 선택">전제 선택</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Col>
            </Row>

            <Row style={{ marginTop: '2rem' }}>
                <Col span={4}><h4>카테고리</h4></Col>
                <Col className="select-category-analysis">
                    <CategoryList category={filter.category} onChangeCategory={(value) => handleChangeCategory(value)} />
                </Col>
            </Row>

            <Row className='price' style={{ marginTop: '2rem' }}>
                <Col span={4}><h4>가격</h4></Col>
                <Col span={20} >
                    <Row>
                        <Col span={1}>
                            <div>₩ 0</div>
                        </Col>
                        <Col span={19}>
                            <Slider
                                min={0}
                                max={10000000}
                                range
                                defaultValue={[filter.price[0], filter.price[1]]}
                                onChange={onChangeSlider}
                                onAfterChange={onChangeSlider}
                            />
                        </Col>
                        <Col span={4}>
                            <div>₩ 10,000,000</div>
                        </Col>

                        <Col span={4}>
                            <div style={{ color: '#42ABBC' }}>₩ {filter.price[0]}</div>
                        </Col>
                        <Col span={16}>
                        </Col>
                        <Col span={4}>
                            <div style={{ color: '#42ABBC' }}>₩ {filter.price[1]}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='search-number-of-review' style={{ marginBottom: '1rem' }}>
                <Col span={4}><h4>리뷰수 검색</h4></Col>
                <Col span={20}>
                    <Row>
                        <Input.Group compact>
                            <Input onChange={minReviews} style={{ width: 150, textAlign: 'center' }} suffix='최소' />
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
                                onChange={maxReviews}
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
                            <Input onChange={minSearchs} style={{ width: 150, textAlign: 'center' }} suffix='최소' />
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
                                onChange={maxSearchs}
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

            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button onClick={onSave}>확인</Button>

                </Col>
            </Row>

            {/* <Row className='jam-factory-average'>
                <Col span={4}>
                    <h4>잼팩토리 평균</h4>
                </Col>
                <Col span={20}>
                    <Button className='style-btn'>잼팩토리 평균판매 건 보다 높은 상품 보기 </Button>
                    <Button className='style-btn'>잼팩토리 평균판매 건 보다 낮은 상품 보기 </Button>
                </Col>
            </Row> */}

            {/* <Row className='modal-btn' style={{ justifyContent: 'center' }}>
                <Col style={{ padding: '1rem'}} span={3}><Button  className='style-btn' >적용하기</Button></Col>
            </Row> */}
        </div>
    )
}

export default Filter
