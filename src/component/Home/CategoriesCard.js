import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Image from '../../img/teacher.jpg'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '0px auto',
    height: '100%',
    position: 'relative',
    borderRadius: '20px',
    '& img': {
      borderRadius: '20px',
    },
  },
  div: {
    position: 'absolute',
    bottom: '30px',
    left: '18px',
  },
  course: {
    backgroundColor: '#0d0d0d',
    padding: '6px',
    width: '70%',
    borderRadius: '10px 10px 0px 0px ',
    '& p': {
      color: '#cccccc',
    },
  },
  class: {
    backgroundColor: '#4D60E3',
    padding: '5px 10px',
    paddingTop: '16px',
    width: '100%',
    borderRadius: '10px',
    borderRadius: '0px 10px 12px 11px ',
    '& h5': {
      color: 'white',
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <img src={Image} alt='image' />
        <div className={classes.div}>
          <div className={classes.course}>
            <p>3 Full Courses</p>
          </div>
          <div className={classes.class}>
            <h5>Web Development</h5>
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage
