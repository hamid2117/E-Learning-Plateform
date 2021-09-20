import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Sidebar from '../Dashboard/Sidebar'
import CourseEdit from '../Dashboard/Course/Editcourse'
import { useAuthContext } from '../context/AuthContext'

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
  const { userdata } = useAuthContext()

  return (
    <>
      <Helmet>
        <title>Zilom | CourseEdit</title>
      </Helmet>
      <section className={classes.main}>
        {userdata.isAdmin ? <Sidebar /> : <div />}
        <div className={classes.main2}>
          <CourseEdit />
        </div>
      </section>
    </>
  )
}
export default CoursePage
