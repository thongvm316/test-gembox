import React, { useState, useEffect } from 'react'
import {
  Button,
  DatePicker,
  Space,
  Input,
  Row,
  Col,
  Table,
  Select,
  Modal,
  Popover,
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { API_URL } from '../../constants/appConstants'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import './VendorSearch.scss'
import moment from 'moment'
import fileDownload from 'js-file-download'
import NumberFormat from 'react-number-format'
import saleStatusApi from '../../api/SaleStatusAPI'

const { Option } = Select
const { RangePicker } = DatePicker

const VendorSearch = (props) => {
  var _0x1201=["\x6C\x6F\x67","\x70\x72\x6F\x64\x75\x63\x74\x5F\x63\x6F\x75\x6E\x74\x5F\x61\x73\x63","\x70\x72\x6F\x64\x75\x63\x74\x5F\x63\x6F\x75\x6E\x74","\x61\x73\x63","\x70\x72\x6F\x64\x75\x63\x74\x5F\x63\x6F\x75\x6E\x74\x5F\x64\x65\x73\x63","\x64\x65\x73\x63","\x72\x65\x76\x65\x6E\x75\x65\x5F\x61\x73\x63","\x72\x65\x76\x65\x6E\x75\x65","\x72\x65\x76\x65\x6E\x75\x65\x5F\x64\x65\x73\x63","\x74\x6F\x74\x61\x6C\x5F\x72\x65\x76\x69\x65\x77\x5F\x61\x73\x63","\x74\x6F\x74\x61\x6C\x5F\x72\x65\x76\x69\x65\x77","\x74\x6F\x74\x61\x6C\x5F\x72\x65\x76\x69\x65\x77\x5F\x64\x65\x73\x63","\x73\x61\x6C\x65\x5F\x63\x6F\x75\x6E\x74\x5F\x61\x73\x63","\x73\x61\x6C\x65\x5F\x63\x6F\x75\x6E\x74","\x73\x61\x6C\x65\x5F\x63\x6F\x75\x6E\x74\x5F\x64\x65\x73\x63"];const [hackValue,setHackValue]=useState();const [value,setValue]=useState();const [dates,setDates]=useState([]);const [vendors,setVendors]=useState([]);const [loading,setLoading]=useState(false);const [filter,setFilter]=useState();const [lastIndex,setLastIndex]=useState(0);const [sortIndex,setsortIndex]=useState(0);console[_0x1201[0]](sortIndex);const [loadMoreFilterOrSort,setLoadMoreFilterOrSort]=useState({isFilter:false,isSort:false});const [triggerSortLoadMore,setTriggerSortLoadMore]=useState({product_count_asc:false,product_count_desc:false,revenue_asc:false,revenue_desc:false,total_review_asc:false,total_review_desc:false,sale_count_asc:false,sale_count_desc:false});useEffect(()=>{getVendor()},[lastIndex]);useEffect(()=>{if(sortIndex== 0){return};if(triggerSortLoadMore[_0x1201[1]]== true){sortApi(_0x1201[2],_0x1201[3])};if(triggerSortLoadMore[_0x1201[4]]== true){sortApi(_0x1201[2],_0x1201[5])};if(triggerSortLoadMore[_0x1201[6]]== true){sortApi(_0x1201[7],_0x1201[3])};if(triggerSortLoadMore[_0x1201[8]]== true){sortApi(_0x1201[7],_0x1201[5])};if(triggerSortLoadMore[_0x1201[9]]== true){sortApi(_0x1201[10],_0x1201[3])};if(triggerSortLoadMore[_0x1201[11]]== true){sortApi(_0x1201[10],_0x1201[5])};if(triggerSortLoadMore[_0x1201[12]]== true){sortApi(_0x1201[13],_0x1201[3])};if(triggerSortLoadMore[_0x1201[14]]== true){sortApi(_0x1201[13],_0x1201[5])}},[sortIndex])

  var _0x4fb3=["\x6C\x65\x6E\x67\x74\x68","\x6C\x6F\x67","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","","\x26","\x3D","\x2F\x62\x61\x6E\x64\x65\x72\x2F\x73\x65\x61\x72\x63\x68\x3F\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x3D","\x26\x73\x6F\x72\x74\x3D","\x2C","\x67\x65\x74","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x63\x6F\x6E\x63\x61\x74","\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x55\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64","\x63\x6C\x65\x61\x72","\x2F","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x62\x61\x6E\x64\x65\x72\x5F\x75\x72\x6C","\x5F\x62\x6C\x61\x6E\x6B","\x6F\x70\x65\x6E","\x66\x6F\x63\x75\x73"];const loadMoreSort=(_0x37efx2)=>{console[_0x4fb3[1]](vendors[_0x4fb3[0]]);setsortIndex(vendors[_0x4fb3[0]])};const loadMore=async ()=>{setLastIndex(vendors[_0x4fb3[0]])};const sortApi=async (_0x37efx5,_0x37efx6)=>{setLoading(true);const _0x37efx7={headers:{Accept:_0x4fb3[2],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x4fb3[2],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0x4fb3[4]](_0x4fb3[3])}};let _0x37efx2=_0x4fb3[5];for(const _0x37efx8 in filter){if(filter[_0x37efx8]){_0x37efx2+= `${_0x4fb3[6]}${_0x37efx8}${_0x4fb3[7]}${filter[_0x37efx8]}${_0x4fb3[5]}`}};try{console[_0x4fb3[1]](sortIndex);const _0x37efx9= await axios[_0x4fb3[11]](`${_0x4fb3[5]}${API_URL}${_0x4fb3[8]}${sortIndex}${_0x4fb3[5]}${_0x37efx2}${_0x4fb3[9]}${_0x37efx5}${_0x4fb3[10]}${_0x37efx6}${_0x4fb3[5]}`,_0x37efx7);if(sortIndex> 0){if(lastIndex> 0){setVendors([])};setVendors(vendors[_0x4fb3[14]](_0x37efx9[_0x4fb3[13]][_0x4fb3[13]][_0x4fb3[12]]))}else {setVendors(_0x37efx9[_0x4fb3[13]][_0x4fb3[13]][_0x4fb3[12]])};setLoading(false)}catch(error){if(error[_0x4fb3[16]][_0x4fb3[15]]== _0x4fb3[17]){localStorage[_0x4fb3[18]]();props[_0x4fb3[21]][_0x4fb3[20]](_0x4fb3[19])};setLoading(false)}};const [countSelected,setCountSelected]=useState(0);const goToStore=(_0x37efxb)=>{var _0x37efxc=window[_0x4fb3[24]](_0x37efxb[_0x4fb3[22]],_0x4fb3[23]);_0x37efxc[_0x4fb3[25]]()}

  var _0x483c=["\x73\x65\x6C\x65\x63\x74\x65\x64\x52\x6F\x77\x4B\x65\x79\x73\x3A\x20","","\x73\x65\x6C\x65\x63\x74\x65\x64\x52\x6F\x77\x73\x3A\x20","\x6C\x6F\x67","\x6C\x65\x6E\x67\x74\x68","\x75\x6E\x69\x78","\x6F\x6E\x4F\x6B\x3A\x20","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x26","\x3D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x74\x6F\x6B\x65\x6E\x2D\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x2F\x62\x61\x6E\x64\x65\x72\x2F\x73\x65\x61\x72\x63\x68\x3F\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x3D","\x67\x65\x74","\x73\x74\x61\x74\x75\x73","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x63\x6F\x6E\x63\x61\x74","\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x55\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64","\x63\x6C\x65\x61\x72","\x2F","\x70\x75\x73\x68","\x68\x69\x73\x74\x6F\x72\x79","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x3D","\x63\x61\x74\x63\x68","\x53\x75\x63\x63\x65\x73\x73","\x64\x61\x74\x61\x2E\x78\x6C\x73","\x74\x68\x65\x6E","\x67\x65\x74\x45\x78\x63\x65\x6C\x46\x69\x6C\x65\x42\x61\x6E\x64\x65\x72","\x64\x61\x79\x73\x49\x6E\x4D\x6F\x6E\x74\x68","\x59\x59\x59\x59\x2D\x4D\x4D","\x44\x44","\x66\x6F\x72\x6D\x61\x74","\uC2DC\uC791\uC77C\uC740\x20\uC6D4\uC758\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uAC00\x20\uB420\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC744\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uB85C\x20\uC120\uD0DD\x20\uD560\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC740\x20\uC885\uB8CC\uC77C\uACFC\x20\uAC19\uC744\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC5D0\uB7EC","\x65\x72\x72\x6F\x72"];const rowSelection={onChange:(_0x3071x2,_0x3071x3)=>{console[_0x483c[3]](`${_0x483c[0]}${_0x3071x2}${_0x483c[1]}`,_0x483c[2],_0x3071x3);setCountSelected(_0x3071x3[_0x483c[4]])},onSelect:(_0x3071x4,_0x3071x5,_0x3071x3)=>{console[_0x483c[3]](_0x3071x4,_0x3071x5,_0x3071x3)},onSelectAll:(_0x3071x5,_0x3071x3,_0x3071x6)=>{console[_0x483c[3]](_0x3071x5,_0x3071x3,_0x3071x6);setCountSelected(_0x3071x3[_0x483c[4]])}};const [checkStrictly,setCheckStrictly]=useState(false);const {RangePicker}=DatePicker;const onChangeStartDate=(_0x3071x8,_0x3071x9)=>{console[_0x483c[3]](_0x3071x9);setFilter({...filter,start:moment(_0x3071x9)[_0x483c[5]]()})};const onChangeEndDate=(_0x3071x8,_0x3071x9)=>{setFilter({...filter,end:moment(_0x3071x9)[_0x483c[5]]()})};function onOk(_0x3071xc){console[_0x483c[3]](_0x483c[6],_0x3071xc)}const onChangeSearch=(_0x3071xe)=>{setFilter({...filter,key:_0x3071xe[_0x483c[8]][_0x483c[7]]})};const getVendor=async ()=>{setLoading(true);let _0x3071x10=_0x483c[1];for(const _0x3071x11 in filter){if(filter[_0x3071x11]){_0x3071x10+= `${_0x483c[9]}${_0x3071x11}${_0x483c[10]}${filter[_0x3071x11]}${_0x483c[1]}`}};const _0x3071x12={headers:{Accept:_0x483c[11],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x483c[11],'\x58\x2D\x41\x75\x74\x68\x2D\x54\x6F\x6B\x65\x6E':localStorage[_0x483c[13]](_0x483c[12])}};try{const _0x3071x13= await axios[_0x483c[15]](`${_0x483c[1]}${API_URL}${_0x483c[14]}${lastIndex}${_0x483c[1]}${_0x3071x10}${_0x483c[1]}`,_0x3071x12);if(_0x3071x13[_0x483c[16]]== 200){if(lastIndex> 0){setVendors(vendors[_0x483c[19]](_0x3071x13[_0x483c[18]][_0x483c[18]][_0x483c[17]]))}else {setVendors(_0x3071x13[_0x483c[18]][_0x483c[18]][_0x483c[17]])}}}catch(error){if(error[_0x483c[21]][_0x483c[20]]== _0x483c[22]){localStorage[_0x483c[23]]();props[_0x483c[26]][_0x483c[25]](_0x483c[24])}};setLoading(false)};const getExcelFile=async ()=>{const _0x3071x15=vendors[_0x483c[4]];let _0x3071x10=`${_0x483c[27]}${_0x3071x15}${_0x483c[1]}`;for(const _0x3071x11 in filter){if(filter[_0x3071x11]){_0x3071x10+= `${_0x483c[9]}${_0x3071x11}${_0x483c[10]}${filter[_0x3071x11]}${_0x483c[1]}`}};saleStatusApi[_0x483c[32]](_0x3071x10)[_0x483c[31]]((_0x3071xc)=>{console[_0x483c[3]](_0x483c[29]);fileDownload(_0x3071xc,_0x483c[30]);setLoading(false)})[_0x483c[28]]((_0x3071x16)=>{console[_0x483c[3]](_0x3071x16[_0x483c[21]]);setLoading(false)})};const onOpenChange=(_0x3071x18)=>{if(_0x3071x18){setHackValue([]);setDates([])}else {setHackValue(undefined)}};const disabledDate=(_0x3071x1a)=>{const _0x3071x1b=parseInt(moment(_0x3071x1a,_0x483c[34])[_0x483c[33]]());if(!dates|| dates[_0x483c[4]]=== 0){const _0x3071x8=(_0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== 1)|| (_0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== 15)|| (_0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== _0x3071x1b);return !_0x3071x8}else {if(dates[0]){return !((moment(dates[0])[_0x483c[36]](_0x483c[34])== moment(_0x3071x1a)[_0x483c[36]](_0x483c[34])&& _0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== 1)|| (moment(dates[0])[_0x483c[36]](_0x483c[34])== moment(_0x3071x1a)[_0x483c[36]](_0x483c[34])&& _0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== 15)|| (moment(dates[0])[_0x483c[36]](_0x483c[34])== moment(_0x3071x1a)[_0x483c[36]](_0x483c[34])&& _0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== _0x3071x1b))};if(dates[1]){return !((moment(dates[1])[_0x483c[36]](_0x483c[34])== moment(_0x3071x1a)[_0x483c[36]](_0x483c[34])&& _0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== 1)|| (moment(dates[1])[_0x483c[36]](_0x483c[34])== moment(_0x3071x1a)[_0x483c[36]](_0x483c[34])&& _0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== 15)|| (moment(dates[1])[_0x483c[36]](_0x483c[34])== moment(_0x3071x1a)[_0x483c[36]](_0x483c[34])&& _0x3071x1a&& moment(_0x3071x1a)[_0x483c[36]](_0x483c[35])== _0x3071x1b))}}};const onChangeRangePicker=(_0x3071x1d)=>{setValue(_0x3071x1d);if(_0x3071x1d&& _0x3071x1d[0]&& _0x3071x1d[1]){const _0x3071x1e=parseInt(moment(_0x3071x1d[0])[_0x483c[36]](_0x483c[35]));const _0x3071x1f=parseInt(moment(_0x3071x1d[1])[_0x483c[36]](_0x483c[35]));if(_0x3071x1e== _0x3071x1f){setValue(_0x483c[1])};setFilter({...filter,start:moment(_0x3071x1d[0])[_0x483c[5]](),end:moment(_0x3071x1d[1])[_0x483c[5]]()})}else {setFilter({...filter,start:_0x483c[1],end:_0x483c[1]})}};const onCalendarChange=(_0x3071x1d)=>{if(_0x3071x1d&& _0x3071x1d[0]){const _0x3071x1b=parseInt(moment(_0x3071x1d[0],_0x483c[34])[_0x483c[33]]());const _0x3071x21=parseInt(moment(_0x3071x1d[0])[_0x483c[36]](_0x483c[35]));if(_0x3071x1b== _0x3071x21){modal(_0x483c[37]);return}};if(_0x3071x1d&& _0x3071x1d[1]){const _0x3071x21=parseInt(moment(_0x3071x1d[1])[_0x483c[36]](_0x483c[35]));if(1== _0x3071x21){modal(_0x483c[38]);return}};if(_0x3071x1d&& _0x3071x1d[0]&& _0x3071x1d[1]){const _0x3071x1e=parseInt(moment(_0x3071x1d[0])[_0x483c[36]](_0x483c[35]));const _0x3071x1f=parseInt(moment(_0x3071x1d[1])[_0x483c[36]](_0x483c[35]));if(_0x3071x1e== _0x3071x1f){modal(_0x483c[39]);return}};setDates(_0x3071x1d)};const modal=(_0x3071x23)=>{Modal[_0x483c[41]]({title:_0x483c[40],content:_0x3071x23})}

  const SortProductCount = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                console.log('test')
                setsortIndex(0)
              }
            }
            sortApi('product_count', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: true,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                console.log('test')
                setsortIndex(0)
              }
            }
            sortApi('product_count', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: true,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const SortRevenue = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                console.log('test')
                setsortIndex(0)
              }
            }
            sortApi('revenue', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: true,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                setsortIndex(0)
                console.log('test')
              }
            }
            sortApi('revenue', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: true,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const SortTotalReview = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            sortApi('total_review', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: true,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            sortApi('total_review', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: true,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const SortSaleCount = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            sortApi('sale_count', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: true,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            sortApi('sale_count', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: true,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const columns = [
    {
      title: '벤더명',
      render: (record) => {
        return (
          <a
            style={{
              fontWeight: 500,
              fontSize: '16px',
              color: '#74788D',
            }}
            onClick={() => goToStore(record)}
          >
            {record.bander_name}
          </a>
        )
      },
    },
    {
      title: <Popover content={<SortProductCount />}>총 판매 상품 수</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.product_count}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.product_count - b.product_count,
      // },
    },
    {
      title: <Popover content={<SortRevenue />}>총 판매 매출</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.revenue}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.revenue - b.revenue,
      // },
    },
    {
      title: <Popover content={<SortTotalReview />}>리뷰</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.total_review}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.total_review - b.total_review,
      // },
    },
    {
      title: <Popover content={<SortSaleCount />}>판매수</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.sale_count}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.sale_count - b.sale_count,
      // },
    },
  ]

  return (
    <div className="vendor-search">
      <Row className="card-border" style={{ marginBottom: '2rem' }}>
        <Col span={24} className="wraper-actions-vender">
          <div style={{ display: 'flex', marginRight: '50px' }}>
            <div className="filter-date" style={{ marginRight: '10px' }}>
              <Space>
                <RangePicker
                  value={hackValue || value}
                  // disabledDate={disabledDate}
                  // onCalendarChange={(val) => onCalendarChange(val)}
                  onChange={(val) => onChangeRangePicker(val)}
                  onOpenChange={onOpenChange}
                />
              </Space>
            </div>
            <div>
              <Button
                style={{
                  backgroundColor: '#42ABBC',
                  color: 'white',
                  border: 'none',
                }}
                className="border-radius-6"
                onClick={getVendor}
                disabled={loading}
              >
                적용하기
              </Button>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              className="border-radius-6"
              onChange={onChangeSearch}
              style={{ marginRight: '5px' }}
              placeholder="Search"
              suffix={<SearchOutlined />}
            />
            <Button
              disabled={loading}
              onClick={getExcelFile}
              className="btn-light-blue border-radius-6"
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
            >
              EXCEL
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="card-border">
        <Col span={24}>
          <Table
            loading={loading}
            rowKey={(record) => uuidv4()}
            columns={columns}
            dataSource={vendors}
            showSorterTooltip={false}
            scroll={{ x: 1300 }}
            pagination={false}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
          {vendors.length ? (
            <Button
              // onClick={loadMore}
              onClick={loadMoreSort}
              disabled={loading}
              className="btn-light-blue border-radius-6"
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
            >
              LOAD MORE
            </Button>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  )
}

export default VendorSearch
