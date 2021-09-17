import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducer/auth_reducer'
import { AUTH_USER, LOGOUT, UPDATE_USER } from '../actions'

import { toast } from 'react-toastify'

const getLocalStorage = () => {
  const userData = localStorage.getItem('userdata')
  if (userData) {
    return JSON.parse(userData)
  } else {
    return []
  }
}
const initialState = {
  userdata: getLocalStorage(),
}

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loginData = (data) => {
    dispatch({ type: AUTH_USER, payload: data })
  }
  const updateData = (data) => {
    dispatch({ type: UPDATE_USER, payload: data })
  }

  const logout = () => {
    localStorage.removeItem('userdata')
    dispatch({ type: LOGOUT })
    toast.error('Logout.', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  useEffect(() => {
    localStorage.setItem('userdata', JSON.stringify(state.userdata))
  }, [state.userdata])

  return (
    <AuthContext.Provider value={{ ...state, loginData, logout, updateData }}>
      {children}
    </AuthContext.Provider>
  )
}
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext)
}
