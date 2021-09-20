import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useAdminUiContext } from '../../../context/DashboardContext'
import { useAuthContext } from '../../../context/AuthContext'
import NewCourse from './NewCourse'
import Userlist from './List'

const useStyles = makeStyles((theme) => ({
  main: {},
  main2: {
    height: '80vh',
    display: 'grid',
    gridTemplateColumns: '100%',
  },
  heading: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'start',
    '& h2': {
      color: '#5f83ef',
    },
  },
  btn: {
    fontSize: '10px',
    backgroundColor: '#5f83ef',
    '&:hover': {
      backgroundColor: '#5f83ef',
    },
  },
  btndiv: {
    justifySelf: 'end',
    alignSelf: 'center',
  },
}))

const App = () => {
  const classes = useStyles()
  const { userdata } = useAuthContext()
  const { adminCloseCourse, adminOpenCourse, adminCourse } = useAdminUiContext()
  return (
    <section className={classes.main2}>
      <main className={classes.main}>
        <div className={classes.heading}>
          <h2>Course Panel</h2>
          <div className={classes.btndiv}>
            <Button
              startIcon={<AddIcon />}
              onClick={adminOpenCourse}
              className={classes.btn}
            >
              Add new Course
            </Button>
          </div>
          <NewCourse
            userdata={userdata}
            adminCloseCourse={adminCloseCourse}
            adminCourse={adminCourse}
          />
        </div>
        <Userlist userdata={userdata} adminCloseCourse={adminCloseCourse} />
      </main>
    </section>
  )
}
export default App
