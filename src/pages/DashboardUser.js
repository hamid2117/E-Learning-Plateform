import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import UserDashboard from '../Dashboard/Userlist'
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
        <title>Zilom | Dashboard</title>
      </Helmet>
      <Hero />
      <UserDashboard />
    </>
  )
}
export default CoursePage
