import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Tcourselist from './../Teacher/Course/Corurselist'
import Hero from './Hero'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '90%',
    margin: '0px auto',
    marginTop: '30px',
    height: '700px',
    '@media (max-width: 500px)': {
      maxWidth: '95%',
    },
  },
}))

const CoursePage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Teacher</title>
      </Helmet>
      <Hero />
      <section className={classes.main}>
        <Tcourselist />
      </section>
    </>
  )
}
export default CoursePage
