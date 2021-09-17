import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import { Login } from './../component/AccountForm'
import Hero from './Hero'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

const AccountPage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Account</title>
      </Helmet>
      <Login />
    </>
  )
}
export default AccountPage
