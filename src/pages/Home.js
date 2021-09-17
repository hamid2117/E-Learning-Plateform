import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Home from './../component/Home'

const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Welcome</title>
      </Helmet>
      <Home />
    </>
  )
}
export default HomePage
