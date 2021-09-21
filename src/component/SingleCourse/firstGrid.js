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
const HomePage = ({
  review,
  heading,
  star,
  image,
  description,
  learn,
  courseData,
}) => {
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
            <h3>{heading}</h3>
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
              <Stars stars={star} reviews={review} />
            </div>
          </div>
          <div className={classes.img}>
            <img src={image} alt='Teacher Image' />
          </div>
          <div className={classes.detail}>
            <h5>{description}</h5>
            <br />
            <h5 style={{ fontWeight: '700' }}> What will I learn?</h5>
            <div>
              <div className={classes.point}>
                {learn.map((data, index) => {
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
          </div>
        </div>
        <br />
        <div className={classes.CourseDetail}>
          <CourseDetail courseData={courseData} />
        </div>
        <div className={classes.divsecond}>
          <div>
            <h5>Student Feedback</h5>
            <div className={classes.review}>
              <h4>{star}</h4>
              <div className={classes.stars}>{temStar}</div>
              <h5>{review} reviews</h5>
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
