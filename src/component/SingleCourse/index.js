import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FirstGrid from './firstGrid'
import SecondGrid from './SecondGrid'
import { useParams } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '0px auto',
    maxHeight: '100%',
    maxWidth: '1200px',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      maxHeight: '100%',
    },
    '@media (max-width: 500px)': {
      maxWidth: '95%',
      maxHeight: '100%',
    },
  },
  grid: {
    margin: '50px 0px',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '0px 15px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr ',
      gap: '40px 0px',
    },
  },
}))
const HomePage = () => {
  const classes = useStyles()
  const courseid = useParams()
  console.log(courseid)
  return (
    <>
      <section className={classes.main}>
        <div className={classes.grid}>
          <FirstGrid />
          <SecondGrid />
        </div>
      </section>
    </>
  )
}
export default HomePage
