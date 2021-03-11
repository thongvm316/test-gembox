import React, { useState } from 'react'
import {
  Checkbox,
  Row,
  Col,
  Slider,
  Button,
  Input,
  Select,
  Modal,
  DatePicker,
} from 'antd'
import { LineOutlined } from '@ant-design/icons'

import './Filter.scss'
import CategoryList from '../CategoryList/CategoryList'
import moment from 'moment'
import NumberFormat from 'react-number-format'

const { RangePicker } = DatePicker
const { Option } = Select

const Filter = (props) => {
  var _0xf0c1=["\x30","\uC804\uCCB4\uBCF4\uAE30","\x6F\x6E\x4F\x6B","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x75\x6E\x69\x78","\x64\x61\x79\x73\x49\x6E\x4D\x6F\x6E\x74\x68","\x59\x59\x59\x59\x2D\x4D\x4D","\x6C\x65\x6E\x67\x74\x68","\x44\x44","\x66\x6F\x72\x6D\x61\x74","","\uC2DC\uC791\uC77C\uC740\x20\uC6D4\uC758\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uAC00\x20\uB420\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC744\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uB85C\x20\uC120\uD0DD\x20\uD560\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC740\x20\uC885\uB8CC\uC77C\uACFC\x20\uAC19\uC744\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC5D0\uB7EC","\x65\x72\x72\x6F\x72"];const [hackValue,setHackValue]=useState();const [value,setValue]=useState();const [dates,setDates]=useState([]);const [price,setPrice]=useState([50000,7500000]);const [startDate,setStartDate]=useState();const [endDate,setEndDate]=useState();const [filter,setFilter]=useState({searchBy:_0xf0c1[0],category:_0xf0c1[1]});function onChangeMarket(_0x7dbdx2){setFilter({...filter,markets:_0x7dbdx2})}function onChangeSlider(_0x7dbdx2){setFilter({...filter,minPrice:_0x7dbdx2[0],maxPrice:_0x7dbdx2[1]})}const handleChangeCategory=(_0x7dbdx2)=>{setFilter({...filter,category:_0x7dbdx2})};const onSave=()=>{props[_0xf0c1[2]](filter)};const minReviews=(_0x7dbdx7)=>{setFilter({...filter,minReview:_0x7dbdx7[_0xf0c1[4]][_0xf0c1[3]]})};const maxReviews=(_0x7dbdx7)=>{setFilter({...filter,maxReview:_0x7dbdx7[_0xf0c1[4]][_0xf0c1[3]]})};const setMinSale=(_0x7dbdx7)=>{setFilter({...filter,minSale:_0x7dbdx7[_0xf0c1[4]][_0xf0c1[3]]})};const setMaxSale=(_0x7dbdx7)=>{setFilter({...filter,maxSale:_0x7dbdx7[_0xf0c1[4]][_0xf0c1[3]]})};const onChangeSearch=(_0x7dbdx7)=>{setFilter({...filter,key:_0x7dbdx7[_0xf0c1[4]][_0xf0c1[3]]})};const onChangeStartDate=(_0x7dbdxd,_0x7dbdxe)=>{setFilter({...filter,start:moment(_0x7dbdxe)[_0xf0c1[5]]()})};const onChangeEndDate=(_0x7dbdxd,_0x7dbdxe)=>{setFilter({...filter,end:moment(_0x7dbdxe)[_0xf0c1[5]]()})};const handleChangeSearchBy=(_0x7dbdx2)=>{setFilter({...filter,searchBy:_0x7dbdx2})};const onOpenChange=(_0x7dbdx12)=>{if(_0x7dbdx12){setHackValue([]);setDates([])}else {setHackValue(undefined)}};const disabledDate=(_0x7dbdx14)=>{const _0x7dbdx15=parseInt(moment(_0x7dbdx14,_0xf0c1[7])[_0xf0c1[6]]());if(!dates|| dates[_0xf0c1[8]]=== 0){const _0x7dbdxd=(_0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== 1)|| (_0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== 15)|| (_0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== _0x7dbdx15);return !_0x7dbdxd}else {if(dates[0]){return !((moment(dates[0])[_0xf0c1[10]](_0xf0c1[7])== moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[7])&& _0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== 1)|| (moment(dates[0])[_0xf0c1[10]](_0xf0c1[7])== moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[7])&& _0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== 15)|| (moment(dates[0])[_0xf0c1[10]](_0xf0c1[7])== moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[7])&& _0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== _0x7dbdx15))};if(dates[1]){return !((moment(dates[1])[_0xf0c1[10]](_0xf0c1[7])== moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[7])&& _0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== 1)|| (moment(dates[1])[_0xf0c1[10]](_0xf0c1[7])== moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[7])&& _0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== 15)|| (moment(dates[1])[_0xf0c1[10]](_0xf0c1[7])== moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[7])&& _0x7dbdx14&& moment(_0x7dbdx14)[_0xf0c1[10]](_0xf0c1[9])== _0x7dbdx15))}}};const onChangeRangePicker=(_0x7dbdx17)=>{setValue(_0x7dbdx17);if(_0x7dbdx17&& _0x7dbdx17[0]&& _0x7dbdx17[1]){const _0x7dbdx18=parseInt(moment(_0x7dbdx17[0])[_0xf0c1[10]](_0xf0c1[9]));const _0x7dbdx19=parseInt(moment(_0x7dbdx17[1])[_0xf0c1[10]](_0xf0c1[9]));if(_0x7dbdx18== _0x7dbdx19){setValue(_0xf0c1[11])};setFilter({...filter,start:moment(_0x7dbdx17[0])[_0xf0c1[5]](),end:moment(_0x7dbdx17[1])[_0xf0c1[5]]()})}else {setFilter({...filter,start:_0xf0c1[11],end:_0xf0c1[11]})}};const onCalendarChange=(_0x7dbdx17)=>{if(_0x7dbdx17&& _0x7dbdx17[0]){const _0x7dbdx15=parseInt(moment(_0x7dbdx17[0],_0xf0c1[7])[_0xf0c1[6]]());const _0x7dbdx1b=parseInt(moment(_0x7dbdx17[0])[_0xf0c1[10]](_0xf0c1[9]));if(_0x7dbdx15== _0x7dbdx1b){modal(_0xf0c1[12]);return}};if(_0x7dbdx17&& _0x7dbdx17[1]){const _0x7dbdx1b=parseInt(moment(_0x7dbdx17[1])[_0xf0c1[10]](_0xf0c1[9]));if(1== _0x7dbdx1b){modal(_0xf0c1[13]);return}};if(_0x7dbdx17&& _0x7dbdx17[0]&& _0x7dbdx17[1]){const _0x7dbdx18=parseInt(moment(_0x7dbdx17[0])[_0xf0c1[10]](_0xf0c1[9]));const _0x7dbdx19=parseInt(moment(_0x7dbdx17[1])[_0xf0c1[10]](_0xf0c1[9]));if(_0x7dbdx18== _0x7dbdx19){modal(_0xf0c1[14]);return}};setDates(_0x7dbdx17)};const modal=(_0x7dbdx1d)=>{Modal[_0xf0c1[16]]({title:_0xf0c1[15],content:_0x7dbdx1d})}

  return (
    <div className="modal">
      <Row style={{ marginBottom: '2rem' }}>
        <Col span={4}>
          <h4>시작일, 종료일</h4>
        </Col>
        <Col span={16}>
          <RangePicker
            value={hackValue || value}
            // disabledDate={disabledDate}
            // onCalendarChange={val => onCalendarChange(val)}
            onChange={(val) => onChangeRangePicker(val)}
            onOpenChange={onOpenChange}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '2rem' }}>
        <Col span={4}>
          <h4>검색</h4>
        </Col>
        <Col span={15}>
          <Input style={{ marginRight: '5px' }} onChange={onChangeSearch} />
        </Col>
        <Col span={5}>
          <Select
            onChange={handleChangeSearchBy}
            defaultValue="0"
            className="select-after"
          >
            <Option value="0">카테고리</Option>
            <Option value="1">밴더명</Option>
            <Option value="2">제품명</Option>
          </Select>
        </Col>
      </Row>

      {/* <Row style={{ marginBottom: '2rem' }}>
                <Col span={4}><h4>Search By</h4></Col>
                <Col span={20}>
                    <Select onChange={handleChangeSearchBy} defaultValue="0" className="select-after">
                        <Option value="0">밴더명</Option>
                        <Option value="1">제품명</Option>
                    </Select>
                </Col>
            </Row> */}

      <Row>
        <Col span={4}>
          <h4>마켓</h4>
        </Col>
        <Col span={20}>
          <Checkbox.Group onChange={onChangeMarket}>
            <Row>
              <Col span={6}>
                <Checkbox value="11번가">11번가</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="G마켓">G마켓</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="쿠팡">쿠팡</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="위메프">위메프</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="티몬">티몬</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="인터파크">인터파크</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="스마트스토어">스마트스토어</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="전제 선택">전제 선택</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Col>
      </Row>

      <Row style={{ marginTop: '2rem' }}>
        <Col span={4}>
          <h4>카테고리</h4>
        </Col>
        <Col className="select-category-analysis">
          <CategoryList
            category={filter.category}
            onChangeCategory={(value) => handleChangeCategory(value)}
          />
          {/* <p style={{ padding: '.5rem 1.5rem', backgroundColor: '#F8F8FB' }}>
            전체보기
          </p> */}
        </Col>
      </Row>

      <Row className="price" style={{ marginTop: '2rem' }}>
        <Col span={4}>
          <h4>가격</h4>
        </Col>
        <Col span={20}>
          <Row>
            <Col span={1}>
              <div>₩ 0</div>
            </Col>
            <Col span={19}>
              <Slider
                step={10000000}
                min={0}
                max={100000000}
                range
                defaultValue={[filter.minPrice, filter.maxPrice]}
                onChange={onChangeSlider}
                onAfterChange={onChangeSlider}
              />
            </Col>
            <Col span={4}>
              <div>₩ 100,000,000</div>
            </Col>

            <Col span={4}>
              <div style={{ color: '#42ABBC' }}>
                <NumberFormat
                  value={filter.minPrice}
                  displayType={'text'}
                  prefix={'₩'}
                  thousandSeparator={true}
                />
              </div>
            </Col>
            <Col span={16}></Col>
            <Col span={4}>
              <div style={{ color: '#42ABBC' }}>
                <NumberFormat
                  value={filter.maxPrice}
                  displayType={'text'}
                  prefix={'₩'}
                  thousandSeparator={true}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="search-number-of-review" style={{ marginBottom: '1rem' }}>
        <Col span={4}>
          <h4>리뷰수 검색</h4>
        </Col>
        <Col span={20}>
          <Row>
            <Input.Group compact>
              <Input
                onChange={minReviews}
                style={{ width: 150, textAlign: 'center' }}
                suffix="최소"
              />
              <Input
                className="site-input-split"
                style={{
                  width: 30,
                  borderLeft: 0,
                  borderRight: 0,
                  pointerEvents: 'none',
                  backgroundColor: '#f4f2ff !important',
                  border: 'none',
                  margin: '0 1rem',
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
                suffix="최소"
              />
            </Input.Group>
          </Row>
        </Col>
      </Row>

      <Row className="sale-search" style={{ marginBottom: '1rem' }}>
        <Col span={4}>
          <h4>판매수 검색</h4>
        </Col>
        <Col span={20}>
          <Row>
            <Input.Group compact>
              <Input
                onChange={setMinSale}
                style={{ width: 150, textAlign: 'center' }}
                suffix="최소"
              />
              <Input
                className="site-input-split"
                style={{
                  width: 30,
                  borderLeft: 0,
                  borderRight: 0,
                  pointerEvents: 'none',
                  backgroundColor: '#f4f2ff !important',
                  border: 'none',
                  margin: '0 1rem',
                }}
                placeholder="~"
                disabled
              />
              <Input
                onChange={setMaxSale}
                className="site-input-right"
                style={{
                  width: 150,
                  textAlign: 'center',
                }}
                suffix="최소"
              />
            </Input.Group>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
          <span className="btn-save" onClick={onSave}>
            확인
          </span>
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
