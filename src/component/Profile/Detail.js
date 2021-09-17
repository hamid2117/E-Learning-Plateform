import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import { InputLabel, Select, MenuItem } from '@material-ui/core'

const validationSchema = yup.object({
  address: yup.string().min(6, 'Please enter your real address'),
  email: yup.string().email('Please enter a valid email address'),
})

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
  checkBox: {
    marginBottom: '30px',
  },
  detailtitle: {
    marginBottom: '16px',
    '& h5': {
      textAlign: 'center',
      color: 'red',
    },
  },
}))

const Detail = ({ userdata, updateData }) => {
  const classes = useStyles()
  const [emailerror, setEmailerror] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const { name, email, address, token } = userdata

  const [refresh, setRefresh] = useState({
    name,
    email,
    address,
    token,
  })
  useEffect(() => {
    setRefresh({
      name,
      email,
      token,
      address,
    })
  }, [userdata])
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refresh.token}`,
    },
  }
  const onSubmit = async (value) => {
    console.log(value)
    const { ...data } = value
    const response = await axios
      .put('http://localhost:5000/api/v1/profile', data, config)
      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            setError(true)
          }
        }
      })
    if (response && response.data) {
      updateData(response.data)
      if (response.status === 200) {
        setSuccess(true)
      }
      if (response.status === 404) {
        setError(true)
      }
    }
  }
  const formik = useFormik({
    initialValues: {
      name: refresh.name,
      email: refresh.email,
      address: refresh.address,
      teacher: false,
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  useEffect(() => {
    setTimeout(() => {
      setError(false)
      setSuccess(false)
    }, 3000)
  }, [error, success])
  return (
    <>
      <div className={classes.each}>
        <div className={classes.detailtitle}>
          <h3>Your Details</h3>
          {error && <h5>"Your Profile can't be update at this moment ."</h5>}
          {success && (
            <h5 style={{ textAlign: 'center', color: 'green' }}>
              "Your Profile is updated ."
            </h5>
          )}
        </div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className={classes.feilds}>
            <TextField
              id='name'
              name='name'
              label='First Name'
              variant='filled'
              required
              error={formik.touched.name && formik.errors.name ? true : false}
              helperText={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            />
            <TextField
              id='filled-disabled'
              label='Email'
              variant='filled'
              fullWidth
              error={
                formik.touched.email && formik.errors.email
                  ? true
                  : false || emailerror
                  ? true
                  : false
              }
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null || emailerror
                  ? 'Email is already registered'
                  : null
              }
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='email'
            />
            <TextField
              id='filled-disabled'
              label='Address'
              variant='filled'
              fullWidth
              error={
                formik.touched.address && formik.errors.address ? true : false
              }
              helperText={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : null
              }
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='address'
            />
            <div>
              <InputLabel id='select-filled-label'>Role</InputLabel>
              <Select
                labelId='select-filled-label'
                id='teacher'
                name='teacher'
                value={formik.values.teacher}
                onChange={formik.handleChange}
              >
                <MenuItem value={false}>Student</MenuItem>
                <MenuItem value={true}>Teacher</MenuItem>
              </Select>
            </div>
          </div>
          {/* <div className={classes.updateBtn}> */}
          <Button variant='contained' color='primary' type='submit'>
            Save Changes
          </Button>
          {/* </div> */}
        </form>
      </div>
    </>
  )
}

export default Detail
