import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const LoginedRoute = ({ children, ...rest }) => {
  const { userdata } = useAuthContext()
  return (
    <Route
      {...rest}
      render={() => {
        return !userdata.email ? children : <Redirect to='/' />
      }}
    ></Route>
  )
}

export default LoginedRoute
