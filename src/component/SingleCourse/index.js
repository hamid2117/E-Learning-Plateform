import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FirstGrid from './firstGrid'
import SecondGrid from './SecondGrid'
import { useParams } from 'react-router-dom'
import { SingleCourseData } from '../../data'
import { Apis } from '../../Api'
import axios from 'axios'
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
  loading: {
    gridColumn: '1/span 3',
    display: 'grid',
    placeItems: 'center',
    height: '80vh',
  },
}))
const HomePage = () => {
  const [dataa, setDataa] = useState(SingleCourseData)
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const courseid = useParams()
  useEffect(async () => {
    setLoading(true)
    const { data } = await axios.get(`${Apis}course/${courseid.id}`)
    setDataa(data)
    setLoading(false)
  }, [Apis])
  return (
    <>
      <section className={classes.main}>
        <div className={classes.grid}>
          {loading ? (
            <div className={classes.loading}>
              <div className='lds-hourglass'></div>
            </div>
          ) : (
            <>
              <FirstGrid {...dataa} />
              <SecondGrid {...dataa} />
            </>
          )}
        </div>
      </section>
    </>
  )
}
export default HomePage
