import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from './CategoriesCard'
import PrevIcon from '@material-ui/icons/ChevronLeft'
import NextIcon from '@material-ui/icons/ChevronRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import { Link } from 'react-router-dom'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([Navigation])

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '0px auto',
    maxWidth: '1200px',
    height: '750px',
    marginTop: '50px',
    paddingTop: '100px',
    position: 'relative',
    // display: 'grid',
    // placeItems: 'center',
    // gridTemplateColumns: '35% 65%',
    '@media (max-width: 768px)': {
      height: '900px',
    },
    '@media (max-width: 500px)': {
      height: '700px',
    },
  },
  heading: {
    textAlign: 'center',
    margin: '80px',
    '& p': {
      color: 'blue',
    },
    '& h3': {
      fontSize: '50px',
    },
    '@media (max-width: 500px)': {
      '& h3': {
        fontSize: '40px',
      },
    },
    '@media (max-width: 380px)': {
      margin: '115px',
      '& h3': {
        fontSize: '25px',
      },
    },
  },
  btnn: {
    display: 'grid',
    placeItems: 'center',
  },
  btn: {
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
    padding: '15px 13px',
    lineHeight: '20px',
    marginTop: '60px',
    backgroundColor: '#f2f2f2',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
  },
  nextbtn: {
    position: 'absolute',
    top: '60%',
    right: '-4%',
    width: '80px',
    height: '50px',
    lineHeight: '50px',
    marginTop: '-15px',
    zIndex: '100',
    cursor: 'pointer',
    backgroundColor: '#4d60e3',
    boxShadow: '0 9px 26px rgba(58,87,135,0.45)',
    transition: 'all 200ms linear',
    outline: 'none',
    borderRadius: '60px 0 0 60px',
    paddingTop: '5px',
    paddingLeft: '25px',

    '&:hover': {
      right: '-3%',
      width: '85px',
      backgroundColor: '#5f70e6',
    },
    '@media (max-width: 768px)': {
      top: '60%',
      right: '0%',
    },
    '@media (max-width: 500px)': {
      top: '80%',
    },
  },
  prevbtn: {
    position: 'absolute',
    top: '60%',
    left: '-4%',
    width: '80px',
    height: '50px',
    lineHeight: '50px',
    marginTop: '-15px',
    zIndex: '100',
    cursor: 'pointer',
    backgroundColor: '#4d60e3',
    boxShadow: '0 9px 26px rgba(58,87,135,0.45)',
    transition: 'all 200ms linear',
    outline: 'none',
    borderRadius: '0 60px 60px 0',
    paddingTop: '5px',
    paddingLeft: '25px',
    '&:hover': {
      left: '-3%',
      width: '85px',
      backgroundColor: '#5f70e6',
    },
    '@media (max-width: 768px)': {
      top: '60%',
      left: '0%',
    },
    '@media (max-width: 500px)': {
      top: '80%',
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <>
      <section className={classes.main}>
        <div className={classes.heading}>
          <p>Checkout New List</p>
          <h3>Top Categories</h3>
        </div>
        <div
        // style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}
        >
          <div className={classes.nextbtn} ref={navigationNextRef}>
            <NextIcon style={{ color: 'white' }} />
          </div>
          <div ref={navigationPrevRef} className={classes.prevbtn}>
            <PrevIcon style={{ color: 'white' }} />
          </div>
          <Swiper
            spaceBetween={20}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            loop={true}
            mousewheel={false}
            preloadImages={false}
            centeredSlides={true}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[1, 2, 3, 4].map((data, index) => {
              return (
                <>
                  <SwiperSlide key={index} virtualIndex={index}>
                    <Card />
                  </SwiperSlide>
                </>
              )
            })}
          </Swiper>
        </div>
        <div className={classes.btnn}>
          <Button
            component={Link}
            to='/course'
            variant='contained'
            className={classes.btn}
          >
            View all Courses
          </Button>
        </div>
      </section>
    </>
  )
}
export default HomePage
