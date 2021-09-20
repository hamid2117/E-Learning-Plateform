import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { useFormik } from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid ',
    width: '80%',
    gap: '10px',
    '@media (max-width: 500px)': {},
  },
}))

const Formm = ({ config, id, setNewData, Apis }) => {
  const classes = useStyles()

  const onSubmit = async (value) => {
    const { ...data } = value
    try {
      const { data: dataa } = await axios.put(
        `${Apis}course/${id}`,
        data,
        config
      )
      if (dataa) {
        setNewData(dataa)
        toast.success('Course Data is updated.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        formik.resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      heading: '',
      category: '',
      language: '',
      level: 'Beginner',
      price: '',
      duration: '',
      lessons: '',
      maxStudent: '',
      description: '',
    },
    onSubmit,
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.main}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='heading'
              fullWidth
              name='heading'
              variant='standard'
              label='Course Title'
              value={formik.values.heading}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id='category'
              name='category'
              variant='standard'
              label='Category'
              value={formik.values.category}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='language'
              fullWidth
              name='language'
              variant='standard'
              label='Coures Language'
              value={formik.values.language}
              onChange={formik.handleChange}
              multiline
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id='select-filled-label'>Select your level</InputLabel>
            <Select
              label='select-filled-label'
              className={classes.selected}
              name='level'
              fullWidth
              id='level'
              required
              onChange={formik.handleChange}
              value={formik.values.level}
            >
              <MenuItem value={'Beginner'}>Beginner</MenuItem>
              <MenuItem value={'Inter'}>Inter</MenuItem>
              <MenuItem value={'Expert'}>Expert</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='price'
              name='price'
              variant='standard'
              label='Price'
              type='number'
              value={formik.values.price}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='duration'
              name='duration'
              variant='standard'
              type='number'
              label='Duration'
              value={formik.values.duration}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='lessons'
              name='lessons'
              variant='standard'
              type='number'
              label='Lessons'
              value={formik.values.lessons}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='maxStudent'
              name='maxStudent'
              variant='standard'
              type='number'
              label='Max Student'
              value={formik.values.maxStudent}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='description'
              name='description'
              variant='standard'
              type='number'
              label='Description'
              value={formik.values.description}
              onChange={formik.handleChange}
              multiline
              rows={4}
              rowsMax={6}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button variant='outlined' color='primary' type='submit'>
          Edit
        </Button>
      </form>
    </>
  )
}
export default Formm
