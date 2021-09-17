import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper } from '@material-ui/core'
import { heroCard } from '../../DummyData'
import Video from '../../img/video.png'
import Registerationform from '../../component/reuse/Registrationform'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    background:
      "linear-gradient(90deg, rgba(55,100,235,0.46621422006302526) 12%, rgba(75,116,237,0.5026287858893557) 32%, rgba(95,131,239,0.36817500437675066) 53%, rgba(115,147,241,0.5278388699229692) 68%, rgba(135,162,243,0.5418444721638656) 80%, rgba(175,193,247,0.5642534357492996) 94%), url('.//hero.jpg') center/cover no-repeat fixed",
    height: '500px',
  },
  main2: {
    width: '100%',
    height: '450px',
    margin: '0px auto',
    marginTop: '-350px',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '60% 40%',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      gridTemplateColumns: '1fr',
      height: '950px',
    },
    '@media (max-width: 500px)': {
      maxWidth: '95%',
      gridTemplateColumns: '1fr',
      height: '800px',
    },
  },
  form: {
    backgroundColor: 'white',
    height: '500px',
    borderRadius: '40px',
    padding: '20px 0px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    '@media (max-width: 768px)': {
      height: '600px',
      marginTop: '50px',
    },
  },
  heading: {
    maxWidth: '90%',
    color: 'white',
    '& h5': {
      marginBottom: '25px',
    },
    '& h2': {
      fontWeight: '500',
      fontSize: '40px',
      marginBottom: '35px',
    },
    '& p': {
      color: '#f2f9ed',
    },
  },
  grid: {
    marginTop: '140px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    display: 'grid',
    padding: '10px',
    placeItems: 'center',
    gridTemplateColumns: '20% 80%',
  },
  gridheading: {
    '& h3': {
      fontWeight: '500',
      fontSize: '40px',
      color: 'black',
    },
    '& p': {
      color: 'black',
    },
  },
}))
const Registeration = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:500px)')

  return (
    <>
      <section className={classes.main}></section>
      <section className={classes.main2}>
        <div className={classes.heading}>
          <h5>Get Free Registration</h5>
          <h2>
            Register your Account Get free Access to 66,000 Online Courses
          </h2>
          <p>
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form.
          </p>
          {!matches && (
            <div className={classes.grid}>
              <img src={Video} alt='video' />
              <div className={classes.gridheading}>
                <h3>Transform Access To Education</h3>
                <p>
                  Discover creative projects limited editions of 100 from
                  artists, designers, and more.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className={classes.form}>
          <Registerationform />
        </div>
      </section>
    </>
  )
}
export default Registeration
