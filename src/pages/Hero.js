import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation, Link } from 'react-router-dom'
import { useUiContext } from '../context/Uicontext'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '350px',
    background:
      "linear-gradient(90deg, rgba(55,100,235,0.46621422006302526) 12%, rgba(75,116,237,0.5026287858893557) 32%, rgba(95,131,239,0.36817500437675066) 53%, rgba(115,147,241,0.5278388699229692) 68%, rgba(135,162,243,0.5418444721638656) 80%, rgba(175,193,247,0.5642534357492996) 94%), url('.//render.jpg') center/cover no-repeat fixed",
    '@media (max-width: 500px)': {
      height: '400px',
    },
  },
  grid: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0px auto',
    height: '100%',
    display: 'grid',
    placeItems: 'end',
    '@media (max-width: 500px)': {
      maxWidth: '95%',
    },
  },
  link: {
    fontWeight: '600',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  heading: {
    background: 'white',
    padding: '17px 21px',
    borderRadius: '10px 10px 0px 0px',

    fontWeight: '600',
    fontSize: '21px',
  },
  first: {
    justifySelf: 'start',
    color: 'white',
  },
}))
const Course = () => {
  const classes = useStyles()
  const location = useLocation()
  const { closeSubmenu } = useUiContext()
  return (
    <>
      <section className={classes.main} onMouseOver={closeSubmenu}>
        <div className={classes.grid}>
          <div className={classes.first}>
            <h3>{location.pathname}</h3>
          </div>
          <div className={classes.heading}>
            <Link to='/' className={classes.link}>
              Home
            </Link>
            {'    '} {location.pathname}
          </div>
        </div>
      </section>
    </>
  )
}
export default Course
