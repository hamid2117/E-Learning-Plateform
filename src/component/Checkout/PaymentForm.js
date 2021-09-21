import React from 'react'
import {
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core'
import { useFormik } from 'formik'
import { useCartContext } from './../../context/cart_context'

export default function PaymentForm({ handleNext, activeStep, handleBack }) {
  const { payMethod, paymentMethod } = useCartContext()
  const onSubmit = async (value) => {
    const { paymentMethod } = value
    payMethod(paymentMethod)
  }

  const formik = useFormik({
    initialValues: { paymentMethod: paymentMethod || 'cash' },
    onSubmit,
  })

  const handleBoth = (e) => {
    formik.handleSubmit()
    e.preventDefault()
    handleNext()
  }

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Payment methods
      </Typography>
      <form action='submit'>
        <FormControl
          component='fieldset'
          style={{ paddingLeft: '6px', margin: '21px 0px' }}
        >
          <FormLabel component='legend'>Method</FormLabel>
          <RadioGroup
            aria-label='payment'
            name='paymentMethod'
            value={formik.values.paymentMethod}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value='card'
              control={<Radio />}
              label='DebitCard or Paypal'
            />
            <FormControlLabel
              value='cash'
              control={<Radio />}
              label='Cash on Delivery'
            />
          </RadioGroup>
        </FormControl>

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
      </form>
    </>
  )
}
