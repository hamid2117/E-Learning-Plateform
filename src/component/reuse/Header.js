import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Divider } from '@material-ui/core'
import Logo from '../../img/logo.png'
import Phone from '../../img/phone-call.png'
import Emailimg from '../../img/message.png'
import { social } from '../../DummyData'
import { useLocation, Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '100px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0px auto',
    display: 'grid',
    gridTemplateColumns: '40% 20%  20% 1% 19%',
    '@media (max-width: 500px)': {},
  },
  logodiv: {
    justifySelf: 'start',
    alignSelf: 'center',
    '& img': {
      width: '120px',
    },
  },
  socials: {
    margin: 'auto 0px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    '& div': {
      justifySelf: 'center',
      alignSelf: 'center',
    },
  },
  btn: {},
}))
const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  return (
    <>
      <header className={classes.main}>
        <div className={classes.logodiv}>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        {!location.pathname.match('/account') && (
          <>
            <div className={classes.socials}>
              {social.map((data) => {
                const { id, Icon, link } = data
                return (
                  <IconButton className={classes.btn} key={id}>
                    <Icon />
                  </IconButton>
                )
              })}
            </div>
            <div className={classes.grid}>
              <div>
                <img style={{ width: '40px' }} src={Phone} alt='phone' />
              </div>
              <div>
                <h6>Call agent</h6>
                <p>666 888 222</p>
              </div>
            </div>
            <Divider
              orientation='vertical'
              style={{ height: '60%', margin: 'auto 0px' }}
            />
            <div className={classes.grid}>
              <div>
                <img style={{ width: '40px' }} src={Emailimg} alt='phone' />
              </div>
              <div>
                <h6>Call agent</h6>
                <p>666 888 222</p>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  )
}
export default Header