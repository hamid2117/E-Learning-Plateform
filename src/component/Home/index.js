import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import Hero from './Hero'
import HeroCard from './HeroCard'
import About from './About'
import Explore from './Explore'
import Registeration from './Registeration'
import Mission from './Mission'
import Testimonial from './Testimonial'
import Newseltter from './Newseltter'
import Category from './Categories'
import Blog from './Blog'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))
const Home = () => {
  const classes = useStyles()

  return (
    <>
      <div>
        <Hero />
        <HeroCard />
        <About />
        <Explore />
        <Registeration />
        <Category />
        <Testimonial />
        <Mission />
        <Blog />
        <Newseltter />
      </div>
    </>
  )
}
export default Home
