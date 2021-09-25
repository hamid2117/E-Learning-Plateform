import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Divider, Grid } from '@material-ui/core'
import { Save } from '@material-ui/icons'
import { useGlobalContext } from '../../../context/courseContext'
import Formm from './Formm'
import { useParams, Redirect } from 'react-router-dom'
import ArrayForm from './ArrayForm'
import CourseData from './CoureData'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '1270px',
    margin: '20px auto',
    '@media (max-width: 800px)': {
      gridTemplateColumns: '100%',
    },
  },
  head: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  main2: {
    display: 'grid',
    gridTemplateColumns: '40% 60% ',
  },
  fieldgrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px 100px',
  },
  gridItem: {
    display: 'grid',
    gridTemplateColumns: '30% 10% 15% 15% 6% 15%',
    gap: '20px 30px',
    marginBottom: '20px',
  },
  totalAll: {
    display: 'grid',
    justifyItems: 'end',
    gridTemplateColumns: '1fr 1fr',
  },
  bordertotal: {
    border: '1px solid grey',
    padding: '70px',
  },
  childtotal: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
}))

const Hero = () => {
  const classes = useStyles()
  const [redirect, setRedirect] = useState(false)
  const { handleDataId, handleUpdateSubmit, Success, setSuccess } =
    useGlobalContext()
  const { id } = useParams()

  useEffect(() => {
    handleDataId(id)
  }, [id])

  useEffect(() => {
    if (Success) {
      // enqueueSnackbar('This invoice is Updated .', { variant: 'success' })
      setRedirect(true)
      setSuccess(false)
    }
  }, [Success])

  if (redirect) {
    return <Redirect to='/allinvoices' />
  }

  return (
    <>
      <section className={classes.main}>
        <div className={classes.head}>
          <h3>Course</h3>
          <div style={{ justifySelf: 'end' }}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => handleUpdateSubmit(id)}
              startIcon={<Save />}
            >
              Update Course
            </Button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={classes.items}>
          <Formm />
        </div>
        <br />
        <br />
        <br />
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <ArrayForm />
          </Grid>
          <Grid item xs={12}>
            <CourseData />
          </Grid>
        </Grid>
        <br />
      </section>
    </>
  )
}

export default Hero
