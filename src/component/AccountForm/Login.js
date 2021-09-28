import React from 'react'
import { motion } from 'framer-motion'
import SignUp from './SignUp'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import Common from './Common'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ForgetPassword from './ForgetPasswod'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    marginTop: '20px',
    height: '110vh',
    display: 'grid',
    '@media (max-width: 800px)': {
      height: '128vh',
      marginTop: '150px',
    },
    placeItems: 'center',
  },
  BoxContainer: {
    Width: '400px',
    minHeight: '525px',
    display: 'flex',
    margin: '10px',
    flexDirection: 'column',
    borderRadius: '19px',
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  TopContainer: {
    width: '100%',
    height: '250px',
    display: 'flex',
    '@media (max-width: 800px)': {
      height: '196px',
    },
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0 1.8em',
    paddingBottom: '5em',
  },
  backdrop: {
    width: '115%',
    height: '538px',
    zIndex: '7',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
    top: '-290px',
    left: '-70px',
    background: 'rgb(83,132,53)',
    background:
      'linear-gradient(90deg, rgba(55,100,235,1) 12%, rgba(75,116,237,1) 32%, rgba(95,131,239,1) 53%, rgba(115,147,241,1) 68%, rgba(135,162,243,1) 80%, rgba(175,193,247,1) 94%)',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  headerText: {
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.24',
    color: 'white',
    zIndex: '8',
    margin: '0',
  },
  smallText: {
    color: 'white',
    fontWeight: '500',
    fontSize: '11px',
    zIndex: '8',
    margin: '0',
    marginTop: '7px',
  },
  innerContainer: {
    width: '100%',
    height: '430px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0.7rem',
    zIndex: '0',
    '@media (max-width: 870px)': {
      height: '555px',
    },
  },
}))
const changebackdrop = {
  expand: {
    width: '200%',
    height: '1180px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  close: {
    width: '115%',
    height: '538px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
}
const reschangebackdrop = {
  expand: {
    width: '300%',
    height: '1180px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  close: {
    width: '115%',
    height: '538px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
}

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
}
const Login = () => {
  const [isExpand, setIsExpand] = React.useState(false)
  const [active, setActive] = React.useState('ups')
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:786px)')

  const changeExpand = () => {
    setIsExpand(true)
    setTimeout(() => {
      setIsExpand(false)
    }, 2000)
    setTimeout(() => {
      setActive('up')
    }, 830)
  }
  const changeExpands = () => {
    setIsExpand(true)
    setTimeout(() => {
      setIsExpand(false)
    }, 2000)
    setTimeout(() => {
      setActive('ups')
    }, 830)
  }
  const changeExpandForget = () => {
    setIsExpand(true)
    setTimeout(() => {
      setIsExpand(false)
    }, 2000)
    setTimeout(() => {
      setActive('upss')
    }, 830)
  }
  return (
    <div className={classes.main}>
      <Paper elevation={3} className={classes.BoxContainer}>
        <div className={classes.TopContainer}>
          <motion.div
            variants={matches ? reschangebackdrop : changebackdrop}
            initial={false}
            animate={isExpand ? 'expand' : 'close'}
            className={classes.backdrop}
            transition={expandingTransition}
          />
          {active === 'up' ? (
            <div className={classes.headerContainer}>
              <h2 className={classes.headerText}>Create</h2>
              <h2 className={classes.headerText}>Account</h2>
              <h5 className={classes.smallText}>Please sign-up to continue!</h5>
            </div>
          ) : active === 'ups' ? (
            <div className={classes.headerContainer}>
              <h2 className={classes.headerText}>Welcome</h2>
              <h2 className={classes.headerText}>Back</h2>
              <h5 className={classes.smallText}>Please sign-in to continue!</h5>
            </div>
          ) : (
            <div className={classes.headerContainer}>
              <h2 className={classes.headerText}>Password</h2>
              <h2 className={classes.headerText}>Recoverey</h2>
              <h5 className={classes.smallText}>Please Provide email!</h5>
            </div>
          )}
        </div>
        <div className={classes.innerContainer}>
          {active === 'up' ? (
            <SignUp changeExpands={changeExpands} />
          ) : active === 'ups' ? (
            <Common
              changeExpand={changeExpand}
              changeExpandForget={changeExpandForget}
            />
          ) : (
            <ForgetPassword changeExpands={changeExpands} />
          )}
        </div>
      </Paper>
    </div>
  )
}

export default Login
