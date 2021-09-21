import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HeroCard from './../Contact/HeroCard'
import Detail from './Detail'
import Mission from '../Home/Mission'
import Testimonial from '../Home/Testimonial'
import Blog from '../Home/Blog'
import Newseltter from '../Home/Newseltter'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    '@media (max-width: 768px)': {},
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <HeroCard />
        <Detail />
        <Testimonial />
        <Mission />
        <Blog />
        <Newseltter />
      </section>
    </>
  )
}
export default App
