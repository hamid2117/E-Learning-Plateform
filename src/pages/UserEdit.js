import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Sidebar from '../Dashboard/Sidebar'
import UserEdit from '../Dashboard/EditUser'
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
        <title>Zilom | UserEdit</title>
      </Helmet>
      <section className={classes.main}>
        <Sidebar />
        <div className={classes.main2}>
          <UserEdit />
        </div>
      </section>
    </>
  )
}
export default CoursePage
