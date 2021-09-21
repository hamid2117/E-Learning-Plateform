import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HeroCard from './HeroCard'
import Detail from './Detail'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '1170px',
    margin: '20px auto',
    '@media (max-width: 768px)': {
      maxWidth: '90%',
    },
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <HeroCard />
        <Detail />
      </section>
    </>
  )
}
export default App
