import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import CourseDashboard from '../Dashboard/Course/Corurselist'
import Hero from './Hero'
import Sidebar from '../Dashboard/Sidebar'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '0px auto',
    display: 'grid',
    gridTemplateColumns: '80px auto',
    '@media (max-width: 500px)': {},
  },
  main2: {
    width: '100%',
    maxWidth: '90%',
    margin: '0px auto',
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
      <section className={classes.main}>
        <Sidebar />
        <div className={classes.main2}>
          <CourseDashboard />
        </div>
      </section>
    </>
  )
}
export default CoursePage
