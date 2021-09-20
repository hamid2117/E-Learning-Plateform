import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid ',
    width: '65%',
    gap: '10px',
    '@media (max-width: 500px)': {},
  },
}))

const validationSchema = yup.object({
  email: yup.string().email('Please enter a valid email address'),
})
const Formm = ({ config, id, setNewData, Apis }) => {
  const classes = useStyles()

  const onSubmit = async (value) => {
    const { ...data } = value
    try {
      const { data: dataa } = await axios.put(`${Apis}user/${id}`, data, config)
      if (dataa) {
        setNewData(dataa)
        toast.success('User Data is updated.')

        formik.resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      teacher: false,
      isAdmin: false,
    },
    onSubmit,
    validationSchema,
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.main}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='name'
              name='name'
              variant='standard'
              label='Name'
              error={formik.touched.name && formik.errors.name ? true : false}
              helperText={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
              onBlur={formik.handleBlur}
              value={formik.values.name}
              onChange={formik.handleChange}
              className={classes.lastNamee}
              fullWidth
              autoComplete='lname'
            />
          </Grid>
        </Grid>
        <TextField
          id='email'
          label='Email'
          variant='standard'
          fullWidth
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='email'
        />
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
        <InputLabel id='select-filled-label'>IsAdmin</InputLabel>
        <Select
          labelId='select-filled-label'
          id='isAdmin'
          name='isAdmin'
          value={formik.values.isAdmin}
          onChange={formik.handleChange}
        >
          <MenuItem value={false}>User</MenuItem>
          <MenuItem value={true}>Admin</MenuItem>
        </Select>
        <Button variant='outlined' color='primary' type='submit'>
          Edit
        </Button>
      </form>
    </>
  )
}
export default Formm
