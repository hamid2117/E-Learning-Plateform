import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAuthContext } from './../../context/auth_context'
import { useCartContext } from './../../context/cart_context'
import axios from 'axios'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, 'Please enter your real Name')
    .required('First Name is required'),
  secondName: yup
    .string()
    .min(3, 'Please enter your real Name')
    .required('Last Name is required'),
  address: yup
    .string()
    .min(5, 'Please enter your address in detail .')
    .required('Please enter you address.'),
})
export default function AddressForm({
  handleNext,
  activeStep,
  steps,
  handleBack,
}) {
  const { userdata } = useAuthContext()
  const { shipAddress, shippingAddress } = useCartContext()
  const { firstName, secondName } = userdata
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
  const {
    firstName: sfirstName,
    secondName: ssecondName,
    address,
  } = shippingAddress
  const formik = useFormik({
    initialValues: {
      firstName: sfirstName || firstName,
      secondName: ssecondName || secondName,
      address: address || '',
      city: 'Bahawalpur',
      postalCode: '63100',
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
        Shipping address
      </Typography>
      <form action='submit'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? true
                  : false
              }
              helperText={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : null
              }
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label='First name'
              fullWidth
              autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='secondName'
              name='secondName'
              error={
                formik.touched.secondName && formik.errors.secondName
                  ? true
                  : false
              }
              helperText={
                formik.touched.secondName && formik.errors.secondName
                  ? formik.errors.secondName
                  : null
              }
              onBlur={formik.handleBlur}
              value={formik.values.secondName}
              onChange={formik.handleChange}
              label='Last name'
              fullWidth
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='address'
              name='address'
              autoFocus='true'
              placeholder='Model Town B Road, House # 38 , street # 18, Sarajia cloth house. '
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

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='city'
              name='city'
              label='City'
              value='Bahawalpur'
              fullWidth
              autoComplete='shipping address-level2'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='state'
              name='state'
              value='Punjab'
              label='State/Province/Region'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='postalCode'
              name='postalCode'
              value='63100'
              label='Zip / Postal code'
              fullWidth
              autoComplete='shipping postal-code'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='country'
              name='country'
              value='Pakistan'
              label='Country'
              fullWidth
              autoComplete='shipping country'
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
              label='Use this address for payment details'
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
