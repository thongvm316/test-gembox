import React, { useReducer, createContext } from 'react'
var _0xd33b=["\x46\x45\x54\x43\x48\x5F\x4D\x45\x4D\x42\x45\x52\x5F\x53\x55\x43\x43\x45\x53\x53","\x46\x45\x54\x43\x48\x5F\x4D\x45\x4D\x42\x45\x52\x5F\x52\x45\x51\x55\x45\x53\x54\x5F\x53\x55\x43\x43\x45\x53\x53","\x46\x45\x54\x43\x48\x5F\x45\x52\x52\x4F\x52","\x41\x50\x50\x52\x4F\x56\x45","\x52\x45\x4A\x45\x43\x54","\x44\x45\x4C\x45\x54\x45","","\x69\x64","\x66\x69\x6C\x74\x65\x72","\x6D\x65\x6D\x62\x65\x72"];export const action={FETCH_MEMBER_SUCCESS:_0xd33b[0],FETCH_MEMBER_REQUEST_SUCCESS:_0xd33b[1],FETCH_ERROR:_0xd33b[2],APPROVE:_0xd33b[3],REJECT:_0xd33b[4],DELETE:_0xd33b[5]};export const AdminMemberContext=createContext();const {FETCH_MEMBER_SUCCESS,FETCH_MEMBER_REQUEST_SUCCESS,FETCH_ERROR,APPROVE,REJECT,DELETE}=action;const initialState={error:_0xd33b[6],member:[],member_request:[]};const reducer=(_0x5130x5,action)=>{const {type,payload}=action;switch(type){case FETCH_MEMBER_SUCCESS:return {..._0x5130x5,member:payload};case FETCH_MEMBER_REQUEST_SUCCESS:return {..._0x5130x5,member_request:payload};case DELETE:return {..._0x5130x5,member:_0x5130x5[_0xd33b[9]][_0xd33b[8]]((_0x5130x6)=>{return _0x5130x6[_0xd33b[7]]!== payload})};case APPROVE:return {..._0x5130x5,member:[..._0x5130x5[_0xd33b[9]],payload]};case REJECT:return {..._0x5130x5};case FETCH_ERROR:return {};default:return _0x5130x5}}

const AdminMemberContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AdminMemberContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </AdminMemberContext.Provider>
  )
}

export default AdminMemberContextProvider
