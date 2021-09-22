import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Divider } from '@material-ui/core'
import { Save } from '@material-ui/icons'
import { useGlobalContext } from '../../../context/courseContext'
import Formm from './Formm'
import { useParams, Redirect } from 'react-router-dom'

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
  const {
    total_items,
    total_amount,
    invoiceNumber,
    refNumber,
    handleInvoiceDate,
    handleDueDate,
    handleNumberChange,
    note,
    handleNoteChange,
    handleDataId,
    handleUpdateSubmit,
    Success,
    setSuccess,
  } = useGlobalContext()
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
        <div className={classes.main2}>
          <div>
            <h2>Custumer</h2>
          </div>
          <div className={classes.fieldgrid}>
            <TextField
              id='outlined-basic'
              label='Invoice Number'
              variant='outlined'
              name='invoiceNumber'
              required
              type='number'
              value={invoiceNumber}
              onChange={handleNumberChange}
            />
            <TextField
              id='outlined-basic'
              label='Ref Number'
              name='refNumber'
              variant='outlined'
              type='number'
              value={refNumber}
              onChange={handleNumberChange}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={classes.items}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3>Items </h3>
          </div>
          <Formm />
        </div>
        <br />
        <br />
        <br />
        <div className={classes.totalAll}>
          <TextField
            style={{ justifySelf: 'start', width: '80%' }}
            id='outlined-basic'
            label='Note'
            variant='outlined'
            value={note}
            onChange={handleNoteChange}
            multiline
            rows={7}
            rowsMax={12}
            type='text'
          />
          <div className={classes.bordertotal}>
            <div className={classes.childtotal}>
              <span>Sub Items </span>
              <h5>{total_items}</h5>
            </div>
            <Divider style={{ margin: '20px 0px' }} />
            <div className={classes.childtotal}>
              <span>Total Amount </span>
              <h5>Rs {total_amount}</h5>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  )
}

export default Hero
