import axiosAdmin from './axiosAdmin'

var _0x984a=["\x2F\x61\x64\x6D\x69\x6E\x2F\x65\x78\x70\x6F\x72\x74\x6C\x69\x63\x65\x6E\x73\x65\x3F\x75\x73\x65\x72\x5F\x69\x64\x3D","","\x62\x6C\x6F\x62","\x67\x65\x74","\x2F\x6D\x65\x6D\x62\x65\x72\x73","\x2F\x61\x64\x6D\x69\x6E\x2F\x69\x6E\x66\x6F","\x2F\x61\x64\x6D\x69\x6E\x2F\x63\x68\x61\x6E\x67\x65\x70\x61\x73\x73\x77\x6F\x72\x64","\x70\x75\x74","\x2F\x61\x64\x6D\x69\x6E\x2F\x76\x65\x72\x69\x66\x79","\x70\x6F\x73\x74","\x2F\x61\x64\x6D\x69\x6E\x2F\x66\x69\x6E\x64\x61\x63\x63\x6F\x75\x6E\x74","\x2F\x61\x64\x6D\x69\x6E\x2F\x72\x65\x67\x69\x73\x74\x65\x72\x63\x6F\x6D\x70\x61\x6E\x79\x6E\x75\x6D\x62\x65\x72"];const adminApi={dowloadPdfFile:(_0xeacfx2)=>{const _0xeacfx3=`${_0x984a[0]}${_0xeacfx2}${_0x984a[1]}`;return axiosAdmin[_0x984a[3]](_0xeacfx3,{responseType:_0x984a[2]})},getMember:()=>{const _0xeacfx3=`${_0x984a[4]}`;return axiosAdmin[_0x984a[3]](_0xeacfx3)},getAdminInfo:()=>{const _0xeacfx3=`${_0x984a[5]}`;return axiosAdmin[_0x984a[3]](_0xeacfx3)},adminChangePassword:(_0xeacfx4)=>{const _0xeacfx3=`${_0x984a[6]}`;return axiosAdmin[_0x984a[7]](_0xeacfx3,_0xeacfx4)},verifyPhoneNumber:(_0xeacfx4)=>{const _0xeacfx3=_0x984a[8];return axiosAdmin[_0x984a[9]](_0xeacfx3,_0xeacfx4)},findAccount:(_0xeacfx4)=>{const _0xeacfx3=`${_0x984a[10]}`;return axiosAdmin[_0x984a[7]](_0xeacfx3,_0xeacfx4)},registerCompanyNumber:(_0xeacfx4)=>{const _0xeacfx3=`${_0x984a[11]}`;return axiosAdmin[_0x984a[7]](_0xeacfx3,_0xeacfx4)}}

export default adminApi
