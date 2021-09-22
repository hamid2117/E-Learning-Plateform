import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FirstGrid from './firstGrid'
import SecondGrid from './SecondGrid'
import { Button, IconButton, Divider } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import TimeIcon from '@material-ui/icons/QueryBuilder'
import FolderIcon from '@material-ui/icons/FolderOpen'
import FlagIcon from '@material-ui/icons/EmojiFlags'
import UserIcon from '@material-ui/icons/PermIdentity'
import LanguageIcon from '@material-ui/icons/GTranslate'
import StarIcon from '@material-ui/icons/Stars'
import Check from '../../img/check.png'
import { useCartContext } from '../../context/cart_context'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '90%',
    margin: '0px auto',
  },
  heading: {
    backgroundColor: '#f1f1f3',
    padding: '45px 40px',
    borderRadius: '10px 10px 0px 0px',
    display: 'grid',
    placeItems: 'center',
  },
  btn: {
    padding: '10px 45px',
    width: '100%',
  },
  pointchild: {
    display: 'grid',
    gridTemplateColumns: '10% 90%',
    marginBottom: '10px',
  },
  secondDiv: {
    marginTop: '25px',
    padding: '0px 5px',
    '& h5': {
      fontSize: '21px',
    },
  },
  fistdiv: {
    border: '1.5px solid #f1f1f3',
    borderRadius: '11px',
  },
  childthirddiv: {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    alignItems: 'center',
  },
  divider: {
    gridColumn: '1/span 2',
    width: '80%',
    margin: '3px auto',
    marginBottom: '7px',
  },
  thirddiv: {
    border: '1.5px solid #f1f1f3',
    borderRadius: '10px',
    padding: '25px 4px',
    margin: '20px 0px',
  },
  fourthduv: {
    border: '1.5px solid #f1f1f3',
    borderRadius: '10px',
    padding: '25px 4px',
    margin: '20px 0px',
  },
  fivediv: {
    border: '1.5px solid #f1f1f3',
    borderRadius: '10px',
    padding: '25px 4px',
    margin: '20px 0px',
  },
  require: {
    fontSize: '23px',
    fontWeight: '500',
    marginBottom: '30px',
  },
}))
const HomePage = ({
  price,
  lessons,
  level,
  duration,
  language,
  maxStudent,
  _id,
  requirement,
  target,
  material,
  image,
  heading,
}) => {
  const classes = useStyles()
  const { addToCart } = useCartContext()

  return (
    <>
      <section className={classes.main}>
        <div className={classes.fistdiv}>
          <div className={classes.heading}>
            <h4>${price}.00</h4>
            <Button
              variant='contained'
              color='primary'
              onClick={() =>
                addToCart(_id, price, heading, duration, lessons, image)
              }
              className={classes.btn}
            >
              Add to Card
            </Button>
          </div>
          <div className={classes.secondDiv}>
            <div style={{ marginBottom: '40px' }}>
              <h5>material includes</h5>
            </div>
            <div>
              <div className={classes.point}>
                {material.map((data, index) => {
                  const { heading } = data
                  return (
                    <div className={classes.pointchild} key={index}>
                      <img src={Check} style={{ height: '25px' }} alt='thick' />
                      <p>{heading}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.thirddiv}>
          <div className={classes.childthirddiv}>
            <div>
              <IconButton>
                <TimeIcon />
              </IconButton>
            </div>
            <p>
              <span> Durations: </span> {duration}h
            </p>
            <Divider className={classes.divider} />
          </div>
          <div className={classes.childthirddiv}>
            <div>
              <IconButton>
                <FolderIcon />
              </IconButton>
            </div>
            <p>
              <span> Lectures: </span> {lessons}
            </p>
            <Divider className={classes.divider} />
          </div>
          <div className={classes.childthirddiv}>
            <div>
              <IconButton>
                <UserIcon />
              </IconButton>
            </div>
            <p>
              <span> Students: </span> Max {maxStudent}
            </p>
            <Divider className={classes.divider} />
          </div>
          <div className={classes.childthirddiv}>
            <div>
              <IconButton>
                <FlagIcon />
              </IconButton>
            </div>
            <p>
              <span> level: </span> {level}
            </p>
            <Divider className={classes.divider} />
          </div>
          <div className={classes.childthirddiv}>
            <div>
              <IconButton>
                <LanguageIcon />
              </IconButton>
            </div>
            <p>
              <span> Language: </span> {language}
            </p>
            <Divider className={classes.divider} />
          </div>
          <div className={classes.childthirddiv}>
            <div>
              <IconButton>
                <StarIcon />
              </IconButton>
            </div>
            <p>
              <span> Certificate: </span> yes
            </p>
            <Divider className={classes.divider} />
          </div>
        </div>
        <br />
        <div className={classes.fourthduv}>
          <div className={classes.require}>Requirement</div>
          <div className={classes.point}>
            {requirement.map((data, index) => {
              const { point } = data
              return (
                <div key={index} className={classes.pointchild}>
                  <img src={Check} style={{ height: '25px' }} alt='thick' />
                  <p>{point}</p>
                </div>
              )
            })}
          </div>
        </div>
        <br />
        <div className={classes.fivediv}>
          <div className={classes.require}>Target Audience</div>
          <div className={classes.point}>
            {target.map((data, index) => {
              const { point } = data
              return (
                <div key={index} className={classes.pointchild}>
                  <img src={Check} style={{ height: '25px' }} alt='thick' />
                  <p>{point}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage
