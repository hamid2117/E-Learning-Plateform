import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Button, Divider } from '@material-ui/core'
import Logo from '../../img/logo.png'
import { FooterData, links, Courses, Featured } from './FooterData'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { social } from '../../DummyData'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  main: {
    width: '100%',
    height: '700px',
    background: '#1B1E27',
    '@media (max-width: 768px)': {
      height: '1800px',
    },
  },
  main2: {
    display: 'grid',
    height: '110px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0px auto',
    paddingTop: '40px',
    placeItems: 'center',
    gridTemplateColumns: '20% 65% 15%',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      height: '240px',
      gridTemplateColumns: '1fr',
      placeItems: 'start',
      gap: '20px 0px',
    },

    color: 'white',
  },
  main2btn: {
    color: '#1B1E27',
    padding: '18px 18px',
    fontWeight: '500',
    borderRadius: '20px',
  },
  main3: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0px auto',
    display: 'grid',
    gridTemplateColumns: '30% 20% 25% 25%',
    gap: '10px 10px',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      gridTemplateColumns: '1fr',
    },
  },
  firstDivider: {
    backgroundColor: '#aeb2c2',
    margin: '35px auto',
    marginBottom: '50px',
    maxWidth: '1100px',
  },
  contactchild: {
    display: 'grid',
    gridTemplateColumns: '13% 87%',
    alignItems: 'center',
    '& img': {
      height: '30px',
    },
    '& div': {
      justifySelf: 'start',
      '& p': {
        color: 'white',
      },
      '& h5': {
        marginBottom: '5px',
        color: '#aeb2c2',
        fontWeight: '300',
      },
    },
  },
  featuredchild: {
    display: 'grid',
    gridTemplateColumns: '35% 65%',
    alignItems: 'center',
    marginBottom: '35px',
    '& img': {
      height: '70px',
      borderRadius: '10px',
    },
    '& div': {
      justifySelf: 'start',
      '& p': {
        color: '#aeb2c2',
      },
      '& h5': {
        marginBottom: '5px',
        fontSize: '13px',
        fontWeight: '300',
        color: 'white',
      },
    },
  },
  heading: {
    '& h4': {
      color: 'white',
      marginBottom: '45px',
    },
  },
  contact: {
    width: '80%',
  },
  lastDivider: {
    backgroundColor: '#aeb2c2',
    margin: '35px auto',
    marginTop: '55px',
  },
  main4: {
    display: 'grid',
    width: '100%',
    maxWidth: '1200px',
    margin: '0px auto',
    justifyContent: 'start',
    alignItems: 'center',
    gridTemplateColumns: '1fr 1fr',

    color: 'white',
    '& h5': {
      color: '#aeb2c2',
    },
    '@media (max-width: 768px)': {
      maxWidth: '95%',
    },
  },
  social: {
    justifySelf: 'end',
  },
  btn: {
    color: 'white',
    '@media (max-width: 768px)': {
      margin: '-2px',
    },
  },
  copyright: {
    '@media (max-width: 768px)': {
      marginTop: '15px',
    },
  },
})
const Footer = () => {
  const { userdata } = useAuthContext()

  const classes = useStyles()
  const location = useLocation()
  if (location.pathname.match('/account')) {
    return null
  }
  if (userdata.isAdmin === true) {
    return null
  }
  return (
    <>
      <section className={classes.main}>
        <section className={classes.main2}>
          <div style={{ justifySelf: 'start' }}>
            <img src={Logo} style={{ height: '38px' }} alt='logo' />
          </div>
          <div style={{ justifySelf: 'start' }}>
            <h5 style={{ fontSize: '18px', color: '#d1d2d4' }}>
              Start learning from our experts and enhance your skills
            </h5>
          </div>
          <div>
            <Button variant='contained' className={classes.main2btn}>
              Read more
            </Button>
          </div>
        </section>
        <Divider className={classes.firstDivider} />
        <section className={classes.main3}>
          <div className={classes.contact}>
            <div className={classes.heading}>
              <h4>Contact</h4>
            </div>
            {FooterData.map((data) => {
              const { Icon, heading, id, main } = data
              return (
                <div key={id}>
                  <div className={classes.contactchild}>
                    <img src={Icon} alt='image' />
                    <div>
                      <h5>{heading}</h5>
                      <p>{main}</p>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: '20px 0px', backgroundColor: '#aeb2c2' }}
                  />
                </div>
              )
            })}
          </div>
          <div className={classes.links}>
            <div className={classes.heading}>
              <h4>Links</h4>
            </div>
            {links.map((data) => {
              const { heading, id, link } = data
              return (
                <div key={id}>
                  <Link to={link}>
                    <h5
                      style={{
                        fontWeight: '300',
                        color: '#aeb2c2',
                        marginBottom: '35px',
                      }}
                    >
                      {heading}
                    </h5>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={classes.courses}>
            <div className={classes.heading}>
              <h4>Courses</h4>
            </div>
            {Courses.map((data) => {
              const { heading, id, link } = data
              return (
                <div key={id}>
                  <Link to={link}>
                    <h5
                      style={{
                        color: '#aeb2c2',
                        fontWeight: '300',
                        marginBottom: '35px',
                      }}
                    >
                      {heading}
                    </h5>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={classes.featured}>
            <div className={classes.heading}>
              <h4>Featured Posts</h4>
            </div>
            {Featured.map((data) => {
              const { heading, id, image, time, link } = data
              return (
                <div key={id}>
                  <Link to={link} className={classes.featuredchild}>
                    <img src={image} alt='Image' />
                    <div className={classes.heading}>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '15% 85%',
                          placeItems: 'center',
                          marginBottom: '12px',
                        }}
                      >
                        <AccessTimeIcon
                          style={{
                            color: 'orange',
                          }}
                        />
                        <p
                          style={{
                            justifySelf: 'start',
                          }}
                        >
                          {time}
                        </p>
                      </div>
                      <h5>{heading}</h5>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
        <Divider className={classes.lastDivider} />
        <section className={classes.main4}>
          <h5 className={classes.copyright}>
            © Develop by Hamid 2021
          </h5>
          <div className={classes.social}>
            {social.map((data) => {
              const { id, Icon, link } = data
              return (
                <IconButton className={classes.btn} key={id}>
                  <Icon />
                </IconButton>
              )
            })}
          </div>
        </section>
      </section>
    </>
  )
}
export default Footer
