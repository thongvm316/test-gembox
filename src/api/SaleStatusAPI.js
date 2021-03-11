import axiosClient from './axiosClient'

const saleStatusApi = {
  getDataSearch: (params) => {
    var _0x6b3c=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x73\x65\x61\x72\x63\x68","\x67\x65\x74"];const url=_0x6b3c[0];return axiosClient[_0x6b3c[1]](url,{params})
  },

  getProductCount: (params) => {
    var _0x4405=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x70\x72\x6F\x64\x75\x63\x74\x63\x6F\x75\x6E\x74","\x67\x65\x74"];const url=_0x4405[0];return axiosClient[_0x4405[1]](url,{params})
  },

  getReviewInfo: (params) => {
    var _0xeb23=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x72\x65\x76\x69\x65\x77\x69\x6E\x66\x6F","\x67\x65\x74"];const url=_0xeb23[0];return axiosClient[_0xeb23[1]](url,{params})
  },

  getSaleInfo: (params) => {
    var _0x9cef=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x73\x61\x6C\x65\x69\x6E\x66\x6F","\x67\x65\x74"];const url=_0x9cef[0];return axiosClient[_0x9cef[1]](url,{params})
  },

  getRevenueInfo: (params) => {
    var _0xdf09=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x72\x65\x76\x65\x6E\x75\x65\x69\x6E\x66\x6F","\x67\x65\x74"];const url=_0xdf09[0];return axiosClient[_0xdf09[1]](url,{params})
  },

  getListMarket: (params) => {
    var _0x507a=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x6C\x69\x73\x74\x6D\x61\x72\x6B\x65\x74","\x67\x65\x74"];const url=_0x507a[0];return axiosClient[_0x507a[1]](url,{params})
  },

  getExcelFile: (params) => {
    var _0x2c73=["\x2F\x6D\x79\x70\x72\x6F\x64\x75\x63\x74\x2F\x65\x78\x70\x6F\x72\x74\x3F\x6B\x65\x79\x3D","\x26\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x3D","\x26\x73\x74\x61\x72\x74\x3D","\x26\x65\x6E\x64\x3D","","\x62\x6C\x6F\x62","\x67\x65\x74"];const {key,start,end,lastIndex}=params;const url=`${_0x2c73[0]}${key}${_0x2c73[1]}${lastIndex}${_0x2c73[2]}${start}${_0x2c73[3]}${end}${_0x2c73[4]}`;return axiosClient[_0x2c73[6]](url,{responseType:_0x2c73[5]})
  },

  getExcelFileProduct: (params) => {
    var _0x4264=["\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x65\x78\x70\x6F\x72\x74\x3F","","\x62\x6C\x6F\x62","\x67\x65\x74"];const url=`${_0x4264[0]}${params}${_0x4264[1]}`;return axiosClient[_0x4264[3]](url,{responseType:_0x4264[2]})
  },

  getExcelFileBander: (params) => {
    var _0xecf3=["\x2F\x62\x61\x6E\x64\x65\x72\x2F\x65\x78\x70\x6F\x72\x74\x3F","","\x62\x6C\x6F\x62","\x67\x65\x74"];const url=`${_0xecf3[0]}${params}${_0xecf3[1]}`;return axiosClient[_0xecf3[3]](url,{responseType:_0xecf3[2]})
  },
}

export default saleStatusApi
