import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Divider, Button } from '@material-ui/core'
import Logo from '../../img/logo.png'
import Phone from '../../img/phone-call.png'
import Emailimg from '../../img/message.png'
import { social } from '../../DummyData'
import { useLocation, Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

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
  logout: {
    gridColumn: '2/span 5',
    display: 'grid',
    justifyContent: 'end',
    alignItems: 'center',
  },
}))

const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const { userdata, logout } = useAuthContext()

  return (
    <>
      <header className={classes.main}>
        <div className={classes.logodiv}>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        {!location.pathname.match('/account') && !userdata.isAdmin && (
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
                <h6>Call argent</h6>
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
                <h6>Mail argent</h6>
                <p>hamid@email.com</p>
              </div>
            </div>
          </>
        )}
        {userdata.isAdmin && (
          <>
            <div className={classes.logout}>
              <Button
                variant='outlined'
                onClick={() => logout()}
                style={{ color: 'red' }}
              >
                Logout
              </Button>
            </div>
          </>
        )}
      </header>
    </>
  )
}
export default Header
