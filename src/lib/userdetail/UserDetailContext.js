import React, { useReducer, createContext } from 'react'
export const action = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  UPDATE_MARKET: 'UPDATE_MARKET',
  DELETE_MARKET: 'DELETE_MARKET',
  UPDATE_PDF: 'UPDATE_PDF',
}

export const UserDetailContext = createContext()

const { FETCH_SUCCESS, UPDATE_MARKET, DELETE_MARKET, UPDATE_PDF } = action

const initialState = {
  data: {},
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: payload,
      }
    // case UPDATE_MARKET:
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       url_market: [payload, ...state.data.url_market],
    //     },
    //   }
    case DELETE_MARKET:
      return {
        ...state,
        data: {
          ...state.data,
          url_market: state.data.url_market.filter(
            (market) => market.id !== payload,
          ),
        },
      }
    // case UPDATE_PDF:
    //   console.log(payload)
    //   return {
    //     ...state,
    //     data: { ...state.data, business_license: payload },
    //   }
    default:
      return state
  }
}

const UserDetailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserDetailContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default UserDetailContextProvider
