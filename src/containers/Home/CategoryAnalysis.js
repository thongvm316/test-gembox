import React, { useState, useEffect } from 'react'
import homeApi from '../../api/HomeAPI'
import NumberFormat from 'react-number-format'

import GroupButton from './GroupButton/GroupButton'
import Footer from '../../components/Footer'
import { DatePicker, Button, Row, Col, Card, Spin, Popover, Modal } from 'antd'
import { MinusOutlined, LoadingOutlined } from '@ant-design/icons'
import moment from 'moment'

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

import Market1 from '../../images/market1.png'
import Market2 from '../../images/market2.png'
import Market3 from '../../images/market3.png'
import Market4 from '../../images/market4.png'
import Market5 from '../../images/market5.png'
import Market6 from '../../images/market6.png'
import Market7 from '../../images/market7.png'
import Market8 from '../../images/market8.png'

import './CategoryAnalysis.scss'
import CategoryList from '../CategoryList/CategoryList'

const CategoryAnalysis = (props) => {
  var _0x54b4=["\uC804\uCCB4\uBCF4\uAE30","\x69\x64","\x6D\x61\x70","\x74\x6F\x70\x63\x6F\x75\x70\x61\x6E\x67","\x74\x6F\x70\x61\x75\x63\x74\x69\x6F\x6E","\x74\x6F\x70\x73\x6D\x61\x72\x74\x73\x74\x6F\x72\x65","\x74\x6F\x70\x77\x65\x6D\x61\x6B\x65","\x74\x6F\x70\x74\x6D\x6F\x6E","\x74\x6F\x70\x69\x6E\x74\x65\x72\x70\x61\x72\x6B","\x74\x6F\x70\x31\x31\x73\x74\x72","\x74\x6F\x70\x67\x6D\x61\x72\x6B\x65\x74"];const [loading,setLoading]=useState(false);const [totalSale,setTotalSale]=useState([]);const [spinning,setSpinning]=useState(false);const [topProduct,setTopProduct]=useState({topcoupang:[],topauction:[],topsmartstore:[],topwemake:[],toptmon:[],topinterpark:[],top11str:[],topgmarket:[]});const [category,setCategory]=useState(_0x54b4[0]);let id=[1,1,1,1,1,1,1,1];const topcoupang=topProduct[_0x54b4[3]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[0]++;return _0x37c9x3});const topauction=topProduct[_0x54b4[4]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[1]++;return _0x37c9x3});const topsmartstore=topProduct[_0x54b4[5]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[2]++;return _0x37c9x3});const topwemake=topProduct[_0x54b4[6]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[3]++;return _0x37c9x3});const toptmon=topProduct[_0x54b4[7]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[4]++;return _0x37c9x3});const topinterpark=topProduct[_0x54b4[8]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[5]++;return _0x37c9x3});const top11str=topProduct[_0x54b4[9]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[6]++;return _0x37c9x3});const topgmarket=topProduct[_0x54b4[10]][_0x54b4[2]]((_0x37c9x3)=>{_0x37c9x3[_0x54b4[1]]= id[7]++;return _0x37c9x3})

  /* Chart */
  var _0xa81c=["\x32\x30\x32\x30\uB144\x20\uC804\uCCB4\x20\uC810\uC720\uC728\x20\uBD84\uC11D","\x6D\x61\x70","\x6B\x65\x79\x73","\x61\x73\x73\x69\x67\x6E","\x6E\x61\x6D\x65","\x79","\x70\x69\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x23\x66\x66\x63\x32\x36\x66","\x23\x64\x31\x38\x35\x64\x38","\x23\x38\x37\x38\x34\x64\x37","\x23\x66\x65\x37\x63\x36\x39","\x23\x63\x61\x65\x65\x66\x62","\x23\x39\x62\x64\x62\x61\x66","\x23\x66\x66\x66\x31\x62\x36","\x23\x66\x65\x62\x65\x62\x33","\x3C\x73\x6D\x61\x6C\x6C\x3E\x7B\x70\x6F\x69\x6E\x74\x2E\x6B\x65\x79\x7D\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E\x3C\x74\x61\x62\x6C\x65\x3E","\x3C\x74\x72\x3E\x3C\x74\x64\x3C\x2F\x74\x64\x3E","\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x72\x69\x67\x68\x74\x22\x3E\x3C\x62\x3E\u20A9\x7B\x70\x6F\x69\x6E\x74\x2E\x79\x7D\x3C\x2F\x62\x3E\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E","\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\uC804\uCCB4\uBCF4\uAE30","\x32\x30\x32\x30\uB144\x20","\x20\uCD1D\x20\uC810\uC720\uC728\x20\uBD84\uC11D","\x6C\x65\x66\x74","\x23\x34\x39\x35\x30\x35\x37","\x42\x72\x61\x6E\x64\x73"];const [titleChart,setTitleChart]=useState(_0xa81c[0]);const renameKeys=(_0x3d80x2,_0x3d80x3)=>{const _0x3d80x4=Object[_0xa81c[2]](_0x3d80x2)[_0xa81c[1]]((_0x3d80x5)=>{const _0x3d80x6=_0x3d80x3[_0x3d80x5]|| _0x3d80x5;return {[_0x3d80x6]:_0x3d80x2[_0x3d80x5]}});return Object[_0xa81c[3]]({},..._0x3d80x4)};const dataChartRename=totalSale[_0xa81c[1]]((_0x3d80x8)=>{const _0x3d80x3={market_name:_0xa81c[4],total:_0xa81c[5]};const _0x3d80x9=renameKeys(_0x3d80x8,_0x3d80x3);const _0x3d80xa=parseInt(_0x3d80x9[_0xa81c[5]]);return {..._0x3d80x9,y:_0x3d80xa}});const options={chart:{height:600,type:_0xa81c[6],renderTo:_0xa81c[7]},plotOptions:{pie:{allowPointSelect:true,colors:[_0xa81c[8],_0xa81c[9],_0xa81c[10],_0xa81c[11],_0xa81c[12],_0xa81c[13],_0xa81c[14],_0xa81c[15]]}},tooltip:{shared:true,useHTML:true,headerFormat:_0xa81c[16],pointFormat:_0xa81c[17]+ _0xa81c[18],footerFormat:_0xa81c[19]},credits:{enabled:false},title:{text:category=== _0xa81c[20]?_0xa81c[0]:`${_0xa81c[21]}${category}${_0xa81c[22]}`,align:_0xa81c[23],style:{color:_0xa81c[24]}},series:[{name:_0xa81c[25],dataLabels:{enabled:false},showInLegend:true,data:dataChartRename}]}



  /* DatePicker */
  var _0xd64e=["\x70\x61\x72\x73\x65","\x64\x61\x79\x73\x49\x6E\x4D\x6F\x6E\x74\x68","\x59\x59\x59\x59\x2D\x4D\x4D","\x6C\x65\x6E\x67\x74\x68","\x44\x44","\x66\x6F\x72\x6D\x61\x74","\x59\x59\x59\x59\x2D\x4D\x4D\x2D\x44\x44","","\uC2DC\uC791\uC77C\uC740\x20\uC6D4\uC758\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uAC00\x20\uB420\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC744\x20\uB9C8\uC9C0\uB9C9\x20\uC77C\uC790\uB85C\x20\uC120\uD0DD\x20\uD560\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC2DC\uC791\uC77C\uC740\x20\uC885\uB8CC\uC77C\uACFC\x20\uAC19\uC744\x20\uC218\x20\uC5C6\uC2B5\uB2C8\uB2E4","\uC5D0\uB7EC","\x65\x72\x72\x6F\x72","\x31\x31\uBC88\uAC00","\x47\uB9C8\uCF13","\uCFE0\uD321","\uC778\uD130\uD30C\uD06C","\uC625\uC158","\uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4","\uD2F0\uBAAC","\uC704\uBA54\uD504","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x64\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x74\x68\x65\x6E","\x67\x65\x74\x54\x6F\x74\x61\x6C\x53\x65\x6C\x6C","\x67\x65\x74\x54\x6F\x70\x43\x6F\x75\x70\x61\x6E\x67","\x67\x65\x74\x54\x6F\x70\x61\x75\x63\x74\x69\x6F\x6E","\x67\x65\x74\x54\x6F\x70\x53\x6D\x61\x72\x74\x73\x74\x6F\x72\x65","\x67\x65\x74\x54\x6F\x70\x57\x65\x6D\x61\x6B\x65","\x67\x65\x74\x54\x6F\x70\x54\x6D\x6F\x6E","\x67\x65\x74\x54\x6F\x70\x49\x6E\x74\x65\x72\x70\x61\x72\x6B","\x67\x65\x74\x54\x6F\x70\x31\x31\x73\x74\x72","\x67\x65\x74\x54\x6F\x70\x47\x6D\x61\x72\x6B\x65\x74","\x61\x6C\x6C","\uC804\uCCB4\uBCF4\uAE30","\x6D\x6F\x6E\x74\x68","\x73\x74\x61\x72\x74\x4F\x66","\x63\x6C\x6F\x6E\x65","\x65\x6E\x64\x4F\x66"];const [datePicker,setDatePicker]=useState([]);const [hackValue,setHackValue]=useState();const [value,setValue]=useState();const [dates,setDates]=useState([]);const toTimestamp=(_0x3946x2)=>{var _0x3946x3=Date[_0xd64e[0]](_0x3946x2);return _0x3946x3/ 1000};const onOpenChange=(_0x3946x5)=>{if(_0x3946x5){setHackValue([]);setDates([])}else {setHackValue(undefined)}};const disabledDate=(_0x3946x7)=>{const _0x3946x8=parseInt(moment(_0x3946x7,_0xd64e[2])[_0xd64e[1]]());if(!dates|| dates[_0xd64e[3]]=== 0){const _0x3946x9=(_0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== 1)|| (_0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== 15)|| (_0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== _0x3946x8);return !_0x3946x9}else {if(dates[0]){return !((moment(dates[0])[_0xd64e[5]](_0xd64e[2])== moment(_0x3946x7)[_0xd64e[5]](_0xd64e[2])&& _0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== 1)|| (moment(dates[0])[_0xd64e[5]](_0xd64e[2])== moment(_0x3946x7)[_0xd64e[5]](_0xd64e[2])&& _0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== 15)|| (moment(dates[0])[_0xd64e[5]](_0xd64e[2])== moment(_0x3946x7)[_0xd64e[5]](_0xd64e[2])&& _0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== _0x3946x8))};if(dates[1]){return !((moment(dates[1])[_0xd64e[5]](_0xd64e[2])== moment(_0x3946x7)[_0xd64e[5]](_0xd64e[2])&& _0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== 1)|| (moment(dates[1])[_0xd64e[5]](_0xd64e[2])== moment(_0x3946x7)[_0xd64e[5]](_0xd64e[2])&& _0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== 15)|| (moment(dates[1])[_0xd64e[5]](_0xd64e[2])== moment(_0x3946x7)[_0xd64e[5]](_0xd64e[2])&& _0x3946x7&& moment(_0x3946x7)[_0xd64e[5]](_0xd64e[4])== _0x3946x8))}}};const onChangeRangePicker=(_0x3946xb)=>{setValue(_0x3946xb);if(_0x3946xb&& _0x3946xb[0]&& _0x3946xb[1]){const _0x3946xc=moment(_0x3946xb[0])[_0xd64e[5]](_0xd64e[6]);const _0x3946xd=moment(_0x3946xb[1])[_0xd64e[5]](_0xd64e[6]);if(_0x3946xc== _0x3946xd){setValue(_0xd64e[7])};let _0x3946xe=[toTimestamp(_0x3946xc),toTimestamp(_0x3946xd)];setDatePicker(_0x3946xe)}};const onCalendarChange=(_0x3946xb)=>{if(_0x3946xb&& _0x3946xb[0]){const _0x3946x8=parseInt(moment(_0x3946xb[0],_0xd64e[2])[_0xd64e[1]]());const _0x3946x10=parseInt(moment(_0x3946xb[0])[_0xd64e[5]](_0xd64e[4]));if(_0x3946x8== _0x3946x10){modal(_0xd64e[8]);return}};if(_0x3946xb&& _0x3946xb[1]){const _0x3946x10=parseInt(moment(_0x3946xb[1])[_0xd64e[5]](_0xd64e[4]));if(1== _0x3946x10){modal(_0xd64e[9]);return}};if(_0x3946xb&& _0x3946xb[0]&& _0x3946xb[1]){const _0x3946x11=parseInt(moment(_0x3946xb[0])[_0xd64e[5]](_0xd64e[4]));const _0x3946x12=parseInt(moment(_0x3946xb[1])[_0xd64e[5]](_0xd64e[4]));if(_0x3946x11== _0x3946x12){modal(_0xd64e[10]);return}};setDates(_0x3946xb)};const modal=(_0x3946x14)=>{Modal[_0xd64e[12]]({title:_0xd64e[11],content:_0x3946x14})};const markets=[{market:_0xd64e[13],img:Market1},{market:_0xd64e[14],img:Market2},{market:_0xd64e[15],img:Market3},{market:_0xd64e[16],img:Market4},{market:_0xd64e[17],img:Market5},{market:_0xd64e[18],img:Market6},{market:_0xd64e[19],img:Market7},{market:_0xd64e[20],img:Market8}];const callApiHome=async (_0x3946x17)=>{setSpinning(true); await Promise[_0xd64e[36]]([homeApi[_0xd64e[27]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTotalSale(_0x3946x19[_0xd64e[24]][_0xd64e[25]]);setSpinning(false)}})[_0xd64e[23]]((_0x3946x18)=>{setSpinning(true);console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[28]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,topcoupang:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[29]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,topauction:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[30]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,topsmartstore:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[31]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,topwemake:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[32]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,toptmon:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[33]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,topinterpark:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[34]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,top11str:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])}),homeApi[_0xd64e[35]](_0x3946x17)[_0xd64e[26]]((_0x3946x19)=>{console[_0xd64e[22]](_0x3946x19);if(_0x3946x19&& _0x3946x19[_0xd64e[24]]&& _0x3946x19[_0xd64e[24]][_0xd64e[25]]){setTopProduct((_0x3946x1a)=>{return ({..._0x3946x1a,topgmarket:_0x3946x19[_0xd64e[24]][_0xd64e[25]]})})}})[_0xd64e[23]]((_0x3946x18)=>{return console[_0xd64e[22]](_0x3946x18[_0xd64e[21]])})])};const getData=async ()=>{setLoading(true);if(category=== _0xd64e[37]){var _0x3946x17={start:datePicker[0]?datePicker[0]:allDateOfCurrentMonth[0],end:datePicker[1]?datePicker[1]:allDateOfCurrentMonth[1]}}else {var _0x3946x17={start:datePicker[0]?datePicker[0]:allDateOfCurrentMonth[0],end:datePicker[1]?datePicker[1]:allDateOfCurrentMonth[1],key:category}}; await callApiHome(_0x3946x17);setLoading(false)};const onChangeCategory=(_0x3946x19)=>{setCategory(_0x3946x19)};const startOfMonth=moment()[_0xd64e[40]]()[_0xd64e[39]](_0xd64e[38])[_0xd64e[5]](_0xd64e[6]);const endOfMonth=moment()[_0xd64e[40]]()[_0xd64e[41]](_0xd64e[38])[_0xd64e[5]](_0xd64e[6]);let allDateOfCurrentMonth=[toTimestamp(startOfMonth),toTimestamp(endOfMonth)]

  const RenderData = (props) => {
    const data = props.data
    return (
      <>
        {data.map((product, i) => (
          <React.Fragment key={i}>
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                fontWeight: '400',
                fontSize: '16px',
                color: '#495057',
              }}
            >
              <li style={{ flexBasis: '10%', fontWeight: 'bold' }}>
                {product.id}
              </li>

              <Popover content={product.name}>
                <li className="style-text-home" style={{ flexBasis: '60%' }}>
                  <a
                    style={{
                      fontWeight: '400',
                      fontSize: '16px',
                      color: '#495057',
                    }}
                    href={product.url}
                    target="_blank"
                  >
                    {product.name}
                  </a>
                </li>
              </Popover>

              <li style={{ flexBasis: '30%', textAlign: 'end' }}>
                <NumberFormat
                  value={product.seller_price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₩'}
                />
              </li>
            </ul>
          </React.Fragment>
        ))}
      </>
    )
  }
  const titileCard = (props) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#495057' }}>
        {category} TOP10
      </h3>
      <h3 style={{ fontWeight: '700', fontSize: '24px', color: '#495057' }}>
        {props}
      </h3>
    </div>
  )

  // useEffect(async () => {
  //   let allDateOfCurrentMonth = [
  //     toTimestamp(startOfMonth),
  //     toTimestamp(endOfMonth),
  //   ]

  //   const params = {
  //     start: allDateOfCurrentMonth[0],
  //     end: allDateOfCurrentMonth[1],
  //     key: '국내기저귀',
  //   }
  //   console.log(params)
  //   await callApiHome(params)
  // }, [])

  return (
    <div className="category-analysis">
      <GroupButton redirect={props.history.push} clickable="b" />

      <Row
        gutter={16}
        className="aggregate-month card-border"
        justify="space-between"
        align="middle"
      >
        <Col xs={17} sm={21} md={21} lg={21} xl={22} className="date-picker">
          <Row gutter={[4, 4]}>
            <Col xs={24} sm={3} md={3} lg={2} xl={1}>
              <h1
                style={{
                  paddingTop: '3px',
                  color: '#495057',
                  fontWeight: '700px',
                  fontSize: '16px',
                }}
              >
                집계 월
              </h1>
            </Col>
            <Col xs={24} sm={10} md={10} lg={8} xl={4}>
              <DatePicker.RangePicker
                defaultValue={[moment(startOfMonth), moment(endOfMonth)]}
                separator={<MinusOutlined />}
                value={hackValue || value}
                // disabledDate={disabledDate}
                // onCalendarChange={(val) => onCalendarChange(val)}
                onChange={(val) => onChangeRangePicker(val)}
                onOpenChange={onOpenChange}
              />
            </Col>
            <Col xs={24} sm={2} md={2} lg={2} xl={2}>
              <Button
                style={{
                  background: '#42abbc',
                  borderColor: '#42abbc',
                  fontWeight: 'bold',
                }}
                disabled={loading}
                type="primary"
                onClick={getData}
              >
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined style={{ color: '#fff' }} />}
                  />
                ) : (
                  ''
                )}
                <span style={loading ? { marginLeft: '5px' } : {}}>
                  적용하기
                </span>
              </Button>
            </Col>
          </Row>
        </Col>

        <Col
          xs={7}
          sm={3}
          md={3}
          lg={3}
          xl={2}
          style={{ textAlign: 'center' }}
          className="category-analysis"
        >
          <CategoryList
            category={category}
            onChangeCategory={(value) => onChangeCategory(value)}
          />
        </Col>
      </Row>

      <Row
        gutter={24}
        className="chart card-border"
        style={{
          marginTop: '24px',
          marginBottom: '24px',
        }}
        justify="center"
      >
        <Col style={{ textAlign: 'center' }} span={24}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            {...props}
          />
        </Col>

        <Col span={24} style={{ marginTop: '150px' }}>
          <h1
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#495057',
            }}
          >
            총 매출액
          </h1>
          <Row>
            {markets.map((market, i) => (
              <Col
                key={i}
                xs={12}
                sm={12}
                md={6}
                lg={3}
                xl={3}
                style={{ textAlign: 'center' }}
                className="total-sale"
              >
                <div className="style-border">
                  <img src={market.img} />
                  <span className="style-market">{market.market}</span>
                </div>
                <p
                  style={{
                    paddingTop: '1rem',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#495057',
                  }}
                >
                  {totalSale.map((total, i) => {
                    if (total.market_name === market.market) {
                      return (
                        <NumberFormat
                          key={i}
                          value={total.total}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'₩'}
                        />
                      )
                    }
                  })}
                </p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('11번가')} bordered={false}>
                <RenderData data={top11str} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('G마켓')} bordered={false}>
                <RenderData data={topgmarket} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('쿠팡')} bordered={false}>
                <RenderData data={topcoupang} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('인터파크')} bordered={false}>
                <RenderData data={topinterpark} />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: '1rem' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('옥션')} bordered={false}>
                <RenderData data={topauction} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('스마트스토어')} bordered={false}>
                <RenderData data={topsmartstore} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('티몬')} bordered={false}>
                <RenderData data={toptmon} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card title={titileCard('위메프')} bordered={false}>
                <RenderData data={topwemake} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default CategoryAnalysis
