import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'
import Teacher from '../../img/teacher.png'
import Student from '../../img/student.png'
import Video from '../../img/video.png'
import MailIcon from '@material-ui/icons/MailOutline'
import SendIcon from '@material-ui/icons/Send'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '400px',
    background: '#4D5FE3',
    '@media (max-width: 500px)': {},
  },
  main2: {
    width: '100%',
    margin: '0px auto',
    maxWidth: '1200px',
    display: 'grid',
    height: '100%',
    placeItems: 'center',
    gridTemplateColumns: '1fr 1fr',
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr',
    },
  },
  input: {
    color: 'white',
  },
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <section className={classes.main2}>
          <div style={{ maxWidth: '90%', color: 'white' }}>
            <h2>Subscribe to Our Newsletter to Get Daily Content!</h2>
          </div>
          <div>
            <div
              style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '90% 10%',
              }}
            >
              <TextField
                variant='standard'
                fullWidth
                placeholder='Enter your email'
                style={{ color: 'white' }}
                inputProps={{
                  className: classes.input,
                }}
              />
              <SendIcon style={{ color: 'white' }} />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '10% 90%',
                marginTop: '20px',
                color: 'white',
              }}
            >
              <MailIcon />
              <h5>Sign up now for weekly news and updates</h5>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
export default HomePage
