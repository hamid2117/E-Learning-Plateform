import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper } from '@material-ui/core'
import { heroCard } from '../../DummyData'
import About from '../../img/about.jpg'
import Check from '../../img/check.png'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '600px',
    margin: '0px auto',
    marginTop: '60px',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      height: '1000px',
      maxWidth: '95%',
    },
  },
  heading: {
    '& p': {
      color: '#8149dc',
      marginBottom: '20px',
    },
    '& h2': {
      fontWeight: '500',
      marginBottom: '40px',
    },
    '& h6': {
      fontWeight: '400',
      marginBottom: '40px',
    },
  },
  pointchild: {
    display: 'grid',
    gridTemplateColumns: '7% 93%',
    marginBottom: '10px',
  },
  btn: {
    fontSize: '14px',
    padding: '17px',
    marginTop: '10px',
  },
  image: {
    width: '540px',
    borderRadius: '26px',
    '@media (max-width: 768px)': {
      width: '650px',
    },
    '@media (max-width: 500px)': {
      width: '400px',
    },
    '@media (max-width: 380px)': {
      width: '310px',
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <div className={classes.child1}>
          <img src={About} alt='about' className={classes.image} />
        </div>
        <div className={classes.child2}>
          <div className={classes.heading}>
            <p>About Zilom Company</p>
            <h2>Welcome to the Online Learning Center</h2>
            <h6>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have <br /> suffered alteration in some form,
              simply free text by injected humour.
            </h6>
          </div>
          <div className={classes.point}>
            <div className={classes.pointchild}>
              <img src={Check} style={{ height: '25px' }} alt='thick' />
              <p>Get unlimited access to 66000+ of our top courses</p>
            </div>
            <div className={classes.pointchild}>
              <img src={Check} style={{ height: '25px' }} alt='thick' />
              <p>Explore a variety of fresh educational topics</p>
            </div>
            <div className={classes.pointchild}>
              <img src={Check} style={{ height: '25px' }} alt='thick' />
              <p>Find the best qualitfied teacher for you</p>
            </div>
            <div className={classes.pointchild}>
              <img src={Check} style={{ height: '25px' }} alt='thick' />
              <p> Transform access to education</p>
            </div>
          </div>
          <div>
            <Button variant='contained' color='primary' className={classes.btn}>
              View all Courses
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage
