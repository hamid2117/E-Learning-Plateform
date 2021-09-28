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
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useFormik } from 'formik'
import { useAuthContext } from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import { LoginApi } from '../../Api'
import { toast } from 'react-toastify'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(0.2),
  },
  submit: {
    margin: theme.spacing(1.5, 0, 1),
    // backgroundColor: 'green',
    background:
      'linear-gradient(90deg, rgba(55,100,235,1) 12%, rgba(75,116,237,1) 32%, rgba(95,131,239,1) 53%, rgba(115,147,241,1) 68%, rgba(135,162,243,1) 80%, rgba(175,193,247,1) 94%)',
    color: 'white',
  },
  changerr: {
    '@media (max-width: 500px)': {
      marginTop: '17px',
    },
  },
}))
const validationSchema = yup.object({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export default function SignIn({ changeExpand, changeExpandForget }) {
  const classes = useStyles()
  const [emailerror, setEmailerror] = useState(false)
  const [passworderror, setpassworderror] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [adminRedirect, setAdminRedirect] = useState(false)
  const { loginData } = useAuthContext()

  const handleClickShowPassword = () => {
    setShowPassword((e) => !e)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const onSubmit = async (value) => {
    const { ...data } = value
    const response = await axios.post(`${LoginApi}`, data).catch((e) => {
      if (e && e.response) {
        if (e.response.status === 404) {
          setEmailerror(true)
        }
        if (e.response.status === 403) {
          setEmailerror(false)
          setpassworderror(true)
        }
        if (e.response.status === 409) {
          setEmailerror(false)
          setpassworderror(false)
          toast.error('Please confirm your Email .')
        }
      }
    })
    if (response && response.data) {
      loginData(response.data)
      formik.resetForm()
      toast.success("You're logged in . ")
      setEmailerror(false)
      setpassworderror(false)
      if (!response.data.isAdmin) {
        setTimeout(() => {
          setRedirect(true)
        }, 800)
      } else {
        setTimeout(() => {
          setAdminRedirect(true)
        }, 800)
      }
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  if (redirect) {
    return <Redirect to='/' />
  }

  if (adminRedirect) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant='standard'
            margin='normal'
            required
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null || (emailerror && 'This email address not registered')
            }
            error={
              formik.touched.email && formik.errors.email
                ? true
                : false || emailerror
                ? true
                : false
            }
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            style={{ paddign: 5 }}
            autoFocus
          />
          <TextField
            variant='standard'
            margin='normal'
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null || (passworderror && 'Invalid password')
            }
            error={
              formik.touched.password && formik.errors.password
                ? true
                : false || passworderror
                ? true
                : false
            }
            required
            fullWidth
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
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
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
            style={{ marginTop: 1 }}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            loading={true}
            disabled={!formik.isValid}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container style={{ marginTop: '20px' }}>
            <Grid item xs>
              <Link onClick={() => changeExpandForget()} variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid className={classes.changerr} item>
              <Link onClick={() => changeExpand()} variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
