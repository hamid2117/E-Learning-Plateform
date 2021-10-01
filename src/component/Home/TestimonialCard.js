import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/SupervisedUserCircle'
import StarIcon from '@material-ui/icons/Star'
import Comma from '../../img/commaa.png'
import CloseComma from '../../img/CloseComma.png'
const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
  },

  heading: {
    fontSize: '40px',
  },
  title: {
    display: 'grid',
    textAlign: 'center',
    margin: '50px 0px',
    marginBottom: '10px',
  },
  divider: {
    width: '12%',
    margin: '0px auto',
    backgroundColor: '#4556cc',
    height: '3px',
    marginTop: '-17px',
  },
  Cards: {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
    margin: '20px 0px',
  },
  review: {
    transition: 'all .3s ease-in-out',
    transform: 'scale(0.9)',
    opacity: '0.9',
    textAlign: 'center',
  },
  testi: {
    padding: '75px 50px 75px',
    overflow: 'hidden',
    background: 'white',
    border: '1px solid #f1f1f1',
    borderRadius: '10px',
    transition: 'all 400ms linear',
    boxShadow:
      'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    '&:hover': {
      transition: 'all 400ms linear',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
  },
  firstcomma: {
    position: 'absolute',
    bottom: '25px',
    right: '30px',
    opacity: '0.4',
    tansition: 'all 400ms linear',
  },
  secondcomma: {
    position: 'absolute',
    top: '25px',
    left: '30px',
    opacity: '0.4',
    tansition: 'all 400ms linear',
  },
  star: {
    color: '#8290eb',
  },
  person: {
    position: ' absolute',
    left: '50%',
    top: '-30px',
    width: '90px',
    height: '90px',
    marginLeft: '-42px',
    boxShadow: '0 9px 26px rgba(58 , 87 , 135 , 0.1)',
    borderRadius: '100%',
  },
  personIcon: {
    fontSize: '70px',
    width: '90px',
    height: '90px',
    borderRadius: '100%',
    color: '#080a17',
  },
  active: {
    background: 'white',
    boxShadow: '0 9px 26px rgba(58 , 87 , 135 , 0.1)',
  },
}))
const Features = ({ name, work, review }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.Cards}>
        <div className={classes.review}>
          <div className={classes.person}>
            <PersonIcon
              className={classes.personIcon}
              style={{ fontSize: '70px' }}
            />
          </div>
          <div className={classes.firstcomma}>
            <img src={Comma} style={{ height: '30px' }} alt="''" />
          </div>
          <div className={classes.testi}>
            <div style={{ marginBottom: '10px' }}>
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
              <StarIcon className={classes.star} />
            </div>
            <p
              style={{
                maxWidth: '81%',
                margin: '0px auto',
                fontStyle: 'italic',
                lineHeight: '28px',
                color: '#5f70e6',
              }}
            >
              {review}
            </p>
            <a href='/#' className={classes.links}></a>
            <h4 style={{ color: '#4556cc', fontSize: '30px' }}>{name}</h4>
            <h5 style={{ color: '#3e4db6', fontSize: '15px' }}>{work}</h5>
          </div>

          <div className={classes.secondcomma}>
            <img src={CloseComma} style={{ height: '40px' }} alt="''" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Features
