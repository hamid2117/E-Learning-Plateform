import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Teacher from '../../img/men.png'
import { useUiContext } from '../../context/Uicontext'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '600px',
    background:
      "linear-gradient(90deg, rgba(55,100,235,0.46621422006302526) 12%, rgba(75,116,237,0.5026287858893557) 32%, rgba(95,131,239,0.36817500437675066) 53%, rgba(115,147,241,0.5278388699229692) 68%, rgba(135,162,243,0.5418444721638656) 80%, rgba(175,193,247,0.5642534357492996) 94%), url('.//hero.jpg') center/cover no-repeat fixed",
    '@media (max-width: 500px)': {
      height: '700px',
    },
  },
  main2: {
    width: '100%',
    margin: '0px auto',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
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
    '@media (max-width: 786px)': {
      '& h1': {
        fontSize: '60px',
      },
      '& h5': {
        color: '#efe8fb',
        fontSize: '15px',
      },
    },
  },
  btn: {
    padding: '17px',
    fontSize: '17px',
  },
  img: {
    width: '330px',
    '@media (max-width: 768px)': {
      width: '180px',
    },
    '@media (max-width: 380px)': {
      width: '130px',
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()
  const { closeSubmenu } = useUiContext()

  return (
    <>
      <section className={classes.main} onMouseOver={closeSubmenu}>
        <section className={classes.main2}>
          <div className={classes.heading}>
            <div>
              <h1>
                WE CAN <br /> TEACH YOU
              </h1>
              <h5>
                Get access to 6800+ courses from <br /> 680 professional
                teachers
              </h5>
            </div>
            <div>
              <Button
                variant='contained'
                color='primary'
                className={classes.btn}
              >
                Discover mores
              </Button>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'end',
              justifySelf: 'end',
              marginRight: '50px',
            }}
          >
            <img
              className={classes.img}
              style={{}}
              src={Teacher}
              alt='Teacher'
            />
          </div>
        </section>
      </section>
    </>
  )
}
export default HomePage
