import React, { useReducer, createContext } from 'react'
var _0xebba=["\x46\x45\x54\x43\x48\x5F\x53\x55\x43\x43\x45\x53\x53","\x55\x50\x44\x41\x54\x45\x5F\x4D\x41\x52\x4B\x45\x54","\x44\x45\x4C\x45\x54\x45\x5F\x4D\x41\x52\x4B\x45\x54","\x55\x50\x44\x41\x54\x45\x5F\x50\x44\x46","\x64\x61\x74\x61","\x69\x64","\x66\x69\x6C\x74\x65\x72","\x75\x72\x6C\x5F\x6D\x61\x72\x6B\x65\x74"];export const action={FETCH_SUCCESS:_0xebba[0],UPDATE_MARKET:_0xebba[1],DELETE_MARKET:_0xebba[2],UPDATE_PDF:_0xebba[3]};export const UserDetailContext=createContext();const {FETCH_SUCCESS,UPDATE_MARKET,DELETE_MARKET,UPDATE_PDF}=action;const initialState={data:{}};const reducer=(_0x55d9x5,action)=>{const {type,payload}=action;switch(type){case FETCH_SUCCESS:return {..._0x55d9x5,data:payload};case DELETE_MARKET:return {..._0x55d9x5,data:{..._0x55d9x5[_0xebba[4]],url_market:_0x55d9x5[_0xebba[4]][_0xebba[7]][_0xebba[6]]((_0x55d9x6)=>{return _0x55d9x6[_0xebba[5]]!== payload})}};default:return _0x55d9x5}}

const UserDetailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserDetailContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default UserDetailContextProvider
