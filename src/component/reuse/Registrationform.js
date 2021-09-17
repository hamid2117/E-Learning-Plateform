import React, { useState } from 'react'
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  CssBaseline,
  Link,
  Grid,
  makeStyles,
  Container,
} from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1983FF',
    transition: 'all 0.2s ease',
  },
  genderAndcalender: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr ',
    paddingLeft: '5px',
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr  ',
      marginBottom: '-15px',
      padding: '-15px',
    },
  },

  gender: {
    marginBottom: '-10px',
    padding: '-10px',
    '@media (max-width: 500px)': {
      marginTop: '8px',
      paddingLeft: '8px',
    },
  },
  emailField: {
    marginBottom: '-8px',
    padding: '-8px',
    marginTop: '-8px',
    '@media (max-width: 500px)': {
      marginTop: '5px',
    },
  },
  firstNamee: {
    marginBottom: '-5px',
    padding: '-8px',
    marginTop: '-13px',
    '@media (max-width: 500px)': {
      marginTop: '-23px',
      marginBottom: '0px',
    },
  },
  lastNamee: {
    marginBottom: '-10px',
    padding: '-10px',
    marginTop: '-13px',
    '@media (max-width: 500px)': {
      marginBottom: '0px',
    },
  },
  main: {
    width: '100%',
    maxWidth: '90%',
    margin: '0px auto',
  },
}))
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, 'Please enter your real Name')
    .required('First Name is required'),
  secondName: yup
    .string()
    .min(3, 'Please enter your real Name')
    .required('Last Name is required'),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Please enter strong password')
    .required('Password is required'),
})

export default function SignUp({ changeExpands }) {
  const classes = useStyles()
  const [emailerror, setEmailerror] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = async (value) => {
    const { ...data } = value
    const response = await axios.post('/api/v1/register', data).catch((e) => {
      if (e && e.response) {
        if (e.response.status === 409) {
          setEmailerror(true)
        }
      }
    })
    if (response && response.data) {
      formik.resetForm()
      setEmailerror(false)
      setTimeout(() => {
        changeExpands()
      }, 800)
    }
  }
  const handleClickShowPassword = () => {
    setShowPassword((e) => !e)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      number: '',
      email: '',
      password: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  return (
    <Container component='main' className={classes.main}>
      <div style={{ margin: '20px 0px' }}>
        <h4>Fill Your Registration</h4>
      </div>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='standard'
                style={{ padding: -2 }}
                required
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
                fullWidth
                className={classes.firstNamee}
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='secondName'
                name='secondName'
                variant='standard'
                label='Last Name'
                required
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
                className={classes.lastNamee}
                fullWidth
                autoComplete='lname'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='MobileNumber'
                variant='standard'
                required
                fullWidth
                value={formik.values.number}
                onChange={formik.handleChange}
                id='number'
                onBlur={formik.handleBlur}
                error={
                  formik.touched.number && formik.errors.number ? true : false
                }
                helperText={
                  formik.touched.number && formik.errors.number
                    ? formik.errors.number
                    : null
                }
                name='number'
                autoComplete='number'
                style={{ marginTop: '-9px', marginBottom: '-8px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                required
                fullWidth
                className={classes.emailField}
                id='email'
                label='Email Address'
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
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                required
                fullWidth
                value={formik.values.password}
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                style={{ marginTop: '-6px' }}
                type={showPassword ? 'text' : 'password'}
                name='password'
                label='Password'
                id='password'
                autoComplete='current-password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        aria-label='password'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            variant='contained'
            fullWidth
            color='primary'
            className={classes.submit}
            disabled={!formik.isValid}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link onClick={() => changeExpands()} variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
