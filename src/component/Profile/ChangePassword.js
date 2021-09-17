import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'

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

const ChangePassword = ({ userdata, updateData }) => {
  const classes = useStyles()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const { token } = userdata
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const onSubmit = async (value) => {
    const data = { ...value, token: token }
    const response = await axios
      .post('http://localhost:5000/api/v1/updatepassword', data, config)
      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            setError(true)
          }
          if (e.response.status === 380) {
            toast.error('Wronge old password')
          }
        }
      })
    if (response && response.data) {
      updateData(response.data)
      toast.success('Your Profile is Updated.')

      formik.resetForm()
      if (response.status === 200) {
        setSuccess(true)
      }
      if (response.status === 404) {
        setError(true)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError(false)
      setSuccess(false)
    }, 3000)
  }, [error, success])
  const formik = useFormik({
    initialValues: {
      newpassword: '',
      confirmPassword: '',
      oldpassword: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  return (
    <>
      <div className={classes.each}>
        <div className={classes.detailtitle}>
          <h2>Change Password</h2>
        </div>
        {success && (
          <>
            <br />
            <h5 style={{ textAlign: 'center', color: 'green' }}>
              "Your Profile is updated ."
            </h5>
          </>
        )}
        <br />
        <form onSubmit={formik.handleSubmit} className={classes.feilds}>
          <TextField
            name='oldpassword'
            type='password'
            id='oldpassword'
            autoComplete='none'
            label='Old Password'
            variant='outlined'
            fullWidth
            value={formik.values.oldpassword}
            onChange={formik.handleChange}
            required
          />
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
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ChangePassword
