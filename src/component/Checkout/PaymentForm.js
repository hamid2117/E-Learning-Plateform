import React, { useState, useEffect } from 'react'
import {
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core'
import { useFormik } from 'formik'
import { useCartContext } from './../../context/cart_context'
import Stripe from '../Order/Stripe'
import { Apis } from '../../Api'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '1170px',
    margin: '50px auto',
    marginBottom: '200px',
    '@media (max-width: 780px)': {
      width: '90%',
    },
  },
  gridd: {
    display: 'grid',
    gridTemplateColumns: '60%  40%',
    '@media (max-width: 780px)': {
      gridTemplateColumns: '100%',
    },
  },
  divider: {
    margin: '30px auto',
    marginBottom: '15px',
    width: '95%',
  },
  dividerr: {
    margin: '5px auto',
    width: '80%',
  },
  secondSection: {
    border: '1px solid #bcccdc',
    width: '80%',
    margin: '0px auto',
    '@media (max-width: 780px)': {
      margin: '30px auto',
      marginTop: '70px',
    },
  },
}))

export default function PaymentForm({
  handleNext,
  activeStep,
  handleBack,
  config,
}) {
  const { payMethod, paymentMethod, done } = useCartContext()
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const onSubmit = async (value) => {
    const { paymentMethod } = value
    payMethod(paymentMethod)
  }
  const getData = async () => {
    const response = await axios
      .get(`${Apis}order/${done}`, config)

      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            setError(true)
          }
        }
      })
    if (response && response.data) {
      setData(response.data)
    }
  }

  const { total_items, total_amount } = data

  const issPaid = data && data.isPaid

  useEffect(() => {
    getData()
  }, [done])
  const formik = useFormik({
    initialValues: { paymentMethod: paymentMethod || 'card' },
    onSubmit,
  })

  const handleBoth = (e) => {
    formik.handleSubmit()
    e.preventDefault()
    handleNext()
  }
  const classes = useStyles()

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Payment methods
      </Typography>
      <div className={classes.secondSection}>
        <Typography
          variant='h4'
          style={{
            fontSize: '28px',
            textAlign: 'center',
            margin: '10px 0px',
          }}
        >
          Order Summary
        </Typography>
        <Divider className={classes.dividerr} />
        <ListItem style={{ width: '80%', marginLeft: '15px' }}>
          <ListItemText primary={'SubTotal : '} />
          <Typography variant='body2'>
            {total_amount && total_amount}
          </Typography>
        </ListItem>
        <Divider className={classes.dividerr} />
        <ListItem style={{ width: '80%', marginLeft: '15px' }}>
          <ListItemText primary={'Items : '} />
          <Typography variant='body2'>{total_items && total_items}</Typography>
        </ListItem>
        <Divider className={classes.dividerr} />
        <ListItem style={{ width: '80%', marginLeft: '15px' }}>
          <ListItemText primary={'Tax fee : '} />
          <Typography variant='body2'>5</Typography>
        </ListItem>
        <Divider className={classes.dividerr} />
        <ListItem
          style={{
            width: '80%',
            marginLeft: '15px',
            marginBottom: '25px',
          }}
        >
          <ListItemText primary={'Order Total : '} />
          <Typography variant='body2'>{5 + total_amount}</Typography>
        </ListItem>
        {!issPaid && (
          <ListItem
            style={{
              width: '80%',
              marginLeft: '15px',
              marginBottom: '25px',
            }}
          >
            <Stripe config={config} total_amount={total_amount} idd={done} />
          </ListItem>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep !== 0 && (
          <Button
            onClick={handleBack}
            style={{ marginTop: '20px', marginRight: '17px' }}
          >
            Back
          </Button>
        )}
        <Button
          variant='contained'
          color='primary'
          onClick={handleBoth}
          style={{ marginTop: '20px' }}
          type='submit'
        >
          Next
        </Button>
      </div>
    </>
  )
}
