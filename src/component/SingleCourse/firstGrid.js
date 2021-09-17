import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Check from '../../img/check.png'
import ShareIcon from '@material-ui/icons/Share'
import Stars from '../Home/Explore/Stars'
import Teacherimg from '../../img/teacher.jpg'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarIcon from '@material-ui/icons/Star'
import CourseDetail from './CourseDetail'
const useStyles = makeStyles((theme) => ({
  main: {},
  heading: {
    display: 'grid',
    gridTemplateColumns: '60% 40%',
  },
  detail: {
    paddingLeft: '3px',
    // #757783
    marginTop: '50px',
    '& h5': {
      fontWeight: '400',
    },
  },
  pointchild: {
    display: 'grid',
    gridTemplateColumns: '5% 95%',
    marginBottom: '10px',
  },
  stars: {
    color: '#ffb900',
  },
  review: {
    width: '40%',
    display: 'grid',
    placeItems: 'center',
    padding: '20px',
    borderRadius: '14px',
    background: '#f1f1f3',
    '& h4': {
      fontSize: '50px',
      fontWeight: '300',
      color: 'blue',
    },
  },
  comments: {
    display: 'grid',
    border: '1.5px solid #f1f1f3',
    padding: '20px 10px',
    gridTemplateColumns: '17% 83%',
    width: '80%',
    marginTop: '20px',
  },
  profile: {
    justifySelf: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    borderRadius: '100%',
    height: '70px',
    width: '70px',
    textAlign: 'center',
  },
  img: {
    '& img': {
      '@media (max-width: 600px)': {
        height: '320px',
      },
      '@media (max-width: 400px)': {
        height: '270px',
      },
      '@media (max-width: 350px)': {
        height: '240px',
      },
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()
  const temStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {4.0 >= index + 1 ? (
          <StarIcon />
        ) : 4.0 >= number ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
    )
  })
  return (
    <>
      <section className={classes.main}>
        <div className={classes.firstdiv}>
          <div className={classes.heading}>
            <h3>The Complete Cyber Security Course</h3>
            <div style={{ justifySelf: 'end' }}>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
                startIcon={<ShareIcon />}
              >
                Share
              </Button>
            </div>
            <div>
              <Stars stars={4.5} reviews={3} />
            </div>
          </div>
          <div className={classes.img}>
            <img src={Teacherimg} alt='Teacher Image' />
          </div>
          <div className={classes.detail}>
            <h5>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              officiis saepe assumenda, tenetur inventore incidunt dolores
              possimus, officia perspiciatis ducimus quod, vitae consequatur
              omnis corporis excepturi iure pariatur voluptatibus? Beatae nemo
              consequatur explicabo accusamus nulla nostrum qui repellendus sed
              unde!
            </h5>
            <br />
            <h5 style={{ fontWeight: '700' }}> What will I learn?</h5>
            <div>
              <div className={classes.point}>
                <div className={classes.pointchild}>
                  <img src={Check} style={{ height: '25px' }} alt='thick' />
                  <p>It has survived not only five centuries . </p>
                </div>
                <div className={classes.pointchild}>
                  <img src={Check} style={{ height: '25px' }} alt='thick' />
                  <p>Lorem Ipsum is simply dummy text of the new design . </p>
                </div>
                <div className={classes.pointchild}>
                  <img src={Check} style={{ height: '25px' }} alt='thick' />
                  <p>Printing and type setting ipsum</p>
                </div>
                <div className={classes.pointchild}>
                  <img src={Check} style={{ height: '25px' }} alt='thick' />
                  <p>Take a look at our round up of the best shows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.CourseDetail}>
          <CourseDetail />
        </div>
        <div className={classes.divsecond}>
          <div>
            <h5>Student Feedback</h5>
            <div className={classes.review}>
              <h4>4.0</h4>
              <div className={classes.stars}>{temStar}</div>
              <h5>2 reviews</h5>
            </div>
          </div>
          <div className={classes.comments}>
            <div className={classes.profile}>
              <h2 style={{ marginTop: '18%' }}>af</h2>
            </div>
            <div>
              <h5>
                fajsdlfjsda{' '}
                <span style={{ color: 'blue', fontWeight: '400' }}>
                  1 month ago
                </span>{' '}
              </h5>
              <div className={classes.stars}>{temStar}</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage
