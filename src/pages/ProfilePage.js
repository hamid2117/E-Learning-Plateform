import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Profile from '../component/Profile'
import Hero from './Hero'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

const CoursePage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Profile</title>
      </Helmet>
      <Hero />
      <Profile />
    </>
  )
}
export default CoursePage
