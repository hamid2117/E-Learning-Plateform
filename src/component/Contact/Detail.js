import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Grid, TextField, Button } from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { social } from '../../DummyData'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gap: '0x 20px',
    marginTop: '100px',
    marginBottom: '200px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  firstgrid: {
    maxWidth: '75%',
    '& p': {
      color: 'blue',
      marginBottom: '10px',
    },
    '& h3': {
      fontSize: '40px',
      marginBottom: '20px',
      fontWeight: '500',
    },
    '& h5': {
      color: 'grey',
      marginBottom: '10px',

      fontWeight: '400',
      fontSize: '15px',
    },
  },
}))

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Please enter your real Name')
    .required('Name is required'),
  phone: yup
    .string()
    .min(3, 'Please enter your Phone Number .')
    .required('Phone is required'),
  address: yup
    .string()
    .min(7, 'Please enter your real Address')
    .required('Address is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Please enter strong password')
    .required('Password is required'),
})

const App = () => {
  const classes = useStyles()

  const onSubmit = async (value) => {
    // const { ...data } = value
    // const response = await axios.post(`${RegisterApi}`, data).catch((e) => {
    //   if (e && e.response) {
    //     if (e.response.status === 409) {
    //       // setEmailerror(true)
    //     } else {
    //     }
    //   }
    // })
    // if (response && response.data) {
    //   formik.resetForm()
    // }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  return (
    <>
      <section className={classes.main}>
        <div className={classes.firstgrid}>
          <p>Send a Message</p>
          <h3>
            We Always <br /> Ready to Hear From You
          </h3>
          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
          <div className={classes.socials}>
            {social.map((data) => {
              const { id, Icon, link } = data
              return (
                <IconButton className={classes.btn} key={id}>
                  <Icon />
                </IconButton>
              )
            })}
          </div>
        </div>
        <div className={classes.secondgrid}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='name'
                name='name'
                variant='standard'
                style={{ padding: -2 }}
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
                className={classes.firstNamee}
                id='name'
                label='name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='phone'
                variant='standard'
                required
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                id='phone'
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phone && formik.errors.phone ? true : false
                }
                helperText={
                  formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : null
                }
                name='phone'
                autoComplete='phone'
              />
            </Grid>

            <Grid item xs={12} style={{ marginBottom: '30px' }} sm={6}>
              <TextField
                variant='standard'
                required
                fullWidth
                className={classes.emailField}
                id='email'
                label='Email Address'
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: '30px' }} sm={6}>
              <TextField
                variant='standard'
                fullWidth
                className={classes.emailField}
                id='subject'
                label='Subject'
                value={formik.values.subject}
                onChange={formik.handleChange}
                name='subject'
                autoComplete='subject'
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: '30px' }}>
              <TextField
                variant='standard'
                required
                fullWidth
                className={classes.emailField}
                id='message'
                label='Message'
                error={
                  formik.touched.message && formik.errors.message ? true : false
                }
                helperText={
                  formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : null
                }
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='message'
                autoComplete='message'
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
            Send
          </Button>
        </div>
      </section>
    </>
  )
}
export default App
