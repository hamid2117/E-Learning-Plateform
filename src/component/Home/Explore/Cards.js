import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper, Divider } from '@material-ui/core'
import Teacher from '../../../img/teacher.jpg'
import Profile from '../../../img/profile.jpeg'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Stars from './Stars'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '480px',
    margin: '0px auto',
    marginTop: '60px',
    display: 'grid',
    gridTemplateRows: '180px 30px',
    borderRadius: '20px 20px 10px 10px',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    '@media (max-width: 768px)': {
      height: '520px',
      gridTemplateRows: '195px 30px',
      width: '80%',
    },
    '@media (max-width: 500px)': {
      height: '520px',
      gridTemplateRows: '230px 30px',
      width: '80%',
    },
  },
  img: {
    width: '270px',
    borderRadius: '20px 20px 0px 0px',
    '@media (max-width: 768px)': {
      width: '276px',
    },
    '@media (max-width: 500px)': {
      width: '323px',
    },
    '@media (max-width: 380px)': {
      width: '285px',
    },
  },
  profile: {
    borderRadius: '50%',
    width: '50px',
    marginLeft: '27px',
    border: '1px solid white',
  },
  divider: {
    width: '80%',
    margin: '10px auto',
  },
  last: {
    display: 'grid',
    gridTemplateColumns: '15% 45% 15% 25%',
  },
}))
const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <Paper elevation={3} className={classes.main}>
        <div>
          <img src={Teacher} className={classes.img} alt='image' />
        </div>
        <div style={{ padding: '0px 20px' }}>
          <img src={Profile} alt='profile' className={classes.profile} />
          <div
            style={{
              padding: '0px 5px',
              display: 'grid',
              gridTemplateColumns: '80% 17% 3%',
            }}
          >
            <p>Mr. Bochelly</p>
            <PersonOutlineIcon />
            <p>4</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h5 style={{ maxWidth: '80%' }}>
              Responsive Web Design with HTML5 & CSS3{' '}
            </h5>
          </div>
          <Stars stars={4.5} reviews={3} />
          <div>
            <h4 style={{ fontSize: '18px' }}>3.99$</h4>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.last}>
            <MenuBookIcon style={{ color: '#3B56E7' }} />
            <p>14 lessons</p>
            <FlagOutlinedIcon style={{ color: '#3B56E7' }} />
            <p>Expert</p>
          </div>
        </div>
      </Paper>
    </>
  )
}
export default HomePage
