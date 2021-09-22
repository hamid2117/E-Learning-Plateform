import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAuthContext } from './../../context/AuthContext'
import { useCartContext } from './../../context/cart_context'
import axios from 'axios'

const validationSchema = yup.object({
  address: yup
    .string()
    .min(5, 'Please enter your address in detail .')
    .required('Please enter you address.'),
  debitCard: yup
    .string()
    .min(2, 'Please enter mention Debit Card owner .')
    .required('Please enter Debit Card owner.'),
})
export default function AddressForm({
  handleNext,
  activeStep,
  steps,
  handleBack,
}) {
  const { userdata } = useAuthContext()
  const { shipAddress, shippingAddress } = useCartContext()
  const { email, address } = userdata
  const onSubmit = async (value) => {
    shipAddress(value)
    // const response = await axios
    //   .put('http://localhost:5000/api/v1/profile', data, config)
    //   .catch((e) => {
    //     if (e && e.response) {
    //       if (e.response.status === 404) {
    //         setError(true)
    //       }
    //     }
    //   })
    // if (response && response.data) {
    //   updateData(response.data)
    //   if (response.status === 200) {
    //     setSuccess(true)
    //   }
    //   if (response.status === 404) {
    //     setError(true)
    //   }
    // }
  }
  const { email: semail, address: saddress } = shippingAddress
  const formik = useFormik({
    initialValues: {
      email: semail || email,
      address: saddress || address,
      debitCard: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })
  const handleboth = (e) => {
    e.preventDefault()
    formik.handleSubmit()
    handleNext()
  }
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Billing Detail
      </Typography>
      <form action='submit'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id='address'
              name='address'
              autoFocus='true'
              placeholder={address}
              label='Address line '
              fullWidth
              autoComplete='shipping address-line1'
              error={
                formik.touched.address && formik.errors.address ? true : false
              }
              helperText={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : null
              }
              onBlur={formik.handleBlur}
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id='debitCard'
              name='debitCard'
              label='DebitCard Owner'
              value={formik.values.debitCard}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled
                  defaultChecked
                  inputProps={{ 'aria-label': 'disabled checked checkbox' }}
                />
              }
              label='Payment with DebitCard and Paypal'
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleboth}
            style={{ marginTop: '20px' }}
            disabled={!formik.isValid}
            loading={true}
          >
            Next
          </Button>
        </div>
      </form>
    </>
  )
}
