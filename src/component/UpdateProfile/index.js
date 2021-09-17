import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  btns: {
    display: 'grid',
    gridTemplateRows: '60px 60px 60px',
    gridTemplateAreas: '50px',
  },
  feilds: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gap: '30px',
  },
  each: {
    width: '40%',
    margin: '40px auto',
  },
}))

const validationSchema = yup.object({
  newpassword: yup
    .string()
    .min(8, 'Please enter strong password')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Password does not matched'),
    })
    .required('Password is required'),
})

const Detail = () => {
  const [redirect, setRedirect] = useState(false)
  const classes = useStyles()
  const { token } = useParams()
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const onSubmit = async (value) => {
    const data = { ...value, token }
    const response = await axios
      .post('http://localhost:5000/api/v1/changepassword', data, config)
      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            toast.error('There is an error to reset password ')
          }
        }
      })
    if (response && response.data) {
      setRedirect(true)
      formik.resetForm()
      toast.success('Updated Password successfully.')
    }
  }

  const formik = useFormik({
    initialValues: {
      newpassword: '',
      confirmPassword: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  if (redirect) {
    return <Redirect to='/account' />
  }

  return (
    <>
      <div className={classes.each}>
        <div className={classes.detailtitle}>
          <h2>Change Password</h2>
        </div>
        <br />
        <form onSubmit={formik.handleSubmit} className={classes.feilds}>
          <TextField
            name='newpassword'
            type='password'
            id='newpassword'
            autoComplete='none'
            label='New Password'
            variant='outlined'
            fullWidth
            value={formik.values.newpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            error={
              formik.touched.newpassword && formik.errors.newpassword
                ? true
                : false
            }
            helperText={
              formik.touched.newpassword && formik.errors.newpassword
                ? formik.errors.newpassword
                : null
            }
          />
          <TextField
            name='confirmPassword'
            type='password'
            id='confirmPassword'
            autoComplete='none'
            id='filled-disabled'
            label='Confirm Password'
            variant='outlined'
            fullWidth
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? true
                : false
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : null
            }
          />
          <div className={classes.btn}>
            <Button variant='contained' color='primary' type='submit'>
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Detail
