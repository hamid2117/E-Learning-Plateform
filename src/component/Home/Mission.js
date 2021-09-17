import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Teacher from '../../img/teacher.png'
import Student from '../../img/student.png'
import Video from '../../img/video.png'

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '140px',
    height: '400px',
    background: '#252831',
    '@media (max-width: 768px)': {
      height: '900px',
    },
  },
  main2: {
    width: '100%',
    margin: '0px auto',
    maxWidth: '1200px',
    display: 'grid',
    height: '100%',
    placeItems: 'center',
    gridTemplateColumns: '35% 65%',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      gridTemplateColumns: '1fr',
    },
  },
  heading: {
    display: 'grid',
    height: '100%',
    paddingTop: '100px',
    alignSelf: 'center',
    color: 'white',
    '& h1': {
      fontSize: '80px',
    },
    '& h5': {
      color: '#efe8fb',
      fontSize: '20px',
    },

    '& p': {
      color: '#a8a9ad',
      fontSize: '20px',
    },
  },
  btn: {
    padding: '17px',
    fontSize: '17px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '5px 15px',
    gap: '0px 15px',
    placeItems: 'center',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '20px 0px',
    },
  },
  card: {
    padding: '20px 40px',
    backgroundColor: '#1E212A',
    justifySelf: 'center',
    alignSelf: 'center',
    borderRadius: '15px',

    textAlign: 'center',
    '& h4': {
      color: 'white',
    },
    '& p': {
      color: '#d3d4d6',
    },
    '&:hover': {
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    },
    '@media (max-width: 768px)': {
      padding: '20px 100px',
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <section className={classes.main2}>
          <div className={classes.heading}>
            <p>Fun Facts</p>
            <h2>Zilom Mission is to Polish your skill</h2>
            <p>
              There are many variations of passages of lore ipsum available but
              the majority have suffered.
            </p>
          </div>
          <div className={classes.grid}>
            <div className={classes.card}>
              <img src={Teacher} style={{ marginLeft: '21px' }} alt='teacher' />
              <h4>6,800</h4>
              <p>Pro Teachers</p>
            </div>
            <div className={classes.card}>
              <img src={Video} style={{ marginLeft: '4px' }} alt='teacher' />
              <h4>9,800</h4>
              <p>Skills Courses</p>
            </div>
            <div className={classes.card}>
              <img src={Student} alt='teacher' style={{ marginLeft: '6px' }} />
              <h4>8,800</h4>
              <p>Students Enrolled </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
export default HomePage
