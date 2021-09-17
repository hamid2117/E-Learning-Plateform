import React, { useState, useEffect } from 'react'
import {
  TextField,
  Button,
  CssBaseline,
  Link,
  Grid,
  makeStyles,
  Container,
} from '@material-ui/core'
import { useFormik } from 'formik'
import { useAuthContext } from '../../context/AuthContext'
import axios from 'axios'
import * as yup from 'yup'
import { ForgetPassword } from '../../Api'
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
})

export default function SignIn({ changeExpands }) {
  const classes = useStyles()
  const [emailerror, setEmailerror] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const { loginData } = useAuthContext()

  const onSubmit = async (value) => {
    const { ...data } = value
    const response = await axios.post(`${ForgetPassword}`, data).catch((e) => {
      if (e && e.response) {
        if (e.response.status === 404) {
          setEmailerror(true)
        }
        if (e.response.status === 409) {
          setEmailerror(false)
          toast.error('Please confirm your Email .')
        }
      }
    })
    if (response && response.data) {
      loginData(response.data)
      toast.success('Link is sended to Your email.')
      formik.resetForm()
      setEmailerror(false)
      setTimeout(() => {
        setRedirect(true)
      }, 800)
    }
  }

  const formik = useFormik({
    initialValues: { email: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })
  useEffect(() => {
    if (redirect) {
      changeExpands()
    }
  }, [redirect])

  return (
    <Container component='main' style={{ maxWidth: '400px' }}>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant='standard'
            margin='normal'
            required
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
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
            style={{ paddign: 10, width: '355px' }}
            autoFocus
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            loading={true}
            disabled={!formik.isValid}
            className={classes.submit}
          >
            Send mail
          </Button>
          <Grid container style={{ marginTop: '20px' }}>
            <Grid className={classes.changerr} item>
              <Link onClick={() => changeExpands()} variant='body2'>
                {'Go back to Login screen'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
