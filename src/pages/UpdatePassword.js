import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Course from './../component/Course'
import UpdatePassword from './../component/UpdateProfile'
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
        <title>Zilom | UpdatePassword</title>
      </Helmet>
      <Hero />
      <UpdatePassword />
    </>
  )
}
export default CoursePage
