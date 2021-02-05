import React, { useReducer, createContext } from 'react'
export const action = {
  FETCH_MEMBER_SUCCESS: 'FETCH_MEMBER_SUCCESS',
  FETCH_MEMBER_REQUEST_SUCCESS: 'FETCH_MEMBER_REQUEST_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  DELETE: 'DELETE',
}
export const AdminMemberContext = createContext()

const {
  FETCH_MEMBER_SUCCESS,
  FETCH_MEMBER_REQUEST_SUCCESS,
  FETCH_ERROR,
  APPROVE,
  REJECT,
  DELETE,
} = action

const initialState = {
  error: '',
  member: [],
  member_request: [],
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_MEMBER_SUCCESS:
      return {
        ...state,
        member: payload,
      }
    case FETCH_MEMBER_REQUEST_SUCCESS:
      return {
        ...state,
        member_request: payload,
      }
    case DELETE:
      return {
        ...state,
        member: state.member.filter((mb) => mb.id !== payload),
      }
    case APPROVE:
      return {
        ...state,
        member: [...state.member, payload],
      }
    case REJECT:
      return {
        ...state,
      }
    case FETCH_ERROR:
      return {}
    default:
      return state
  }
}

const AdminMemberContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AdminMemberContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </AdminMemberContext.Provider>
  )
}

export default AdminMemberContextProvider
