import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CloseIcon from '@material-ui/icons/Close'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  IconButton,
  Divider,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core'
import axios from 'axios'
import { Apis } from '../../../Api'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius: '10px',
    padding: '30px 15px',
    width: '400px',
  },
  head: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'start',
  },
  inputs: {
    padding: '25px 0px',
    display: 'grid',
    gap: '15px 0px',
  },
  sign: {
    backgroundColor: '#5f83ef',
    '&:hover': {
      backgroundColor: '#3764eb',
    },
  },
}))

const validationSchema = yup.object({
  heading: yup.string().required('Course title is required'),
  language: yup.string().required('Course language is required'),
  description: yup.string().required('Course Description is required'),
  category: yup.string().required('Course Category is required'),
  price: yup.number().required('Price is required .'),
  duration: yup.number().required('Duration is required .'),
})

export default function NewCourse({ adminCloseCourse, adminCourse, userdata }) {
  const classes = useStyles()

  const { token } = userdata

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const onSubmit = async (value) => {
    const { ...data } = value
    const response = await axios
      .post(`${Apis}course`, data, config)
      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 409) {
          }
        }
      })
    if (response && response.data) {
      adminCloseCourse()
      formik.resetForm()
    }
  }

  const formik = useFormik({
    initialValues: {
      heading: '',
      level: 'Beginner',
      category: '',
      language: '',
      duration: '',
      price: '',
      description: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  })

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={adminCourse}
        onClose={adminCloseCourse}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={adminCourse}>
          <div className={classes.paper}>
            <div className={classes.head}>
              <h3>Add Course</h3>
              <div style={{ justifySelf: 'end' }}>
                <IconButton onClick={() => adminCloseCourse()}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <Divider />
            <form onSubmit={formik.handleSubmit} className={classes.inputs}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id='heading'
                    name='heading'
                    variant='standard'
                    fullWidth
                    label='Course title'
                    required
                    error={
                      formik.touched.heading && formik.errors.heading
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched.heading && formik.errors.heading
                        ? formik.errors.heading
                        : null
                    }
                    onBlur={formik.handleBlur}
                    value={formik.values.heading}
                    onChange={formik.handleChange}
                    className={classes.lastNamee}
                    fullWidth
                    autoComplete='heading'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='language'
                    fullWidth
                    onBlur={formik.handleBlur}
                    type='text'
                    label='Course Language'
                    error={
                      formik.touched.language && formik.errors.language
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched.language && formik.errors.language
                        ? formik.errors.language
                        : null
                    }
                    value={formik.values.language}
                    onChange={formik.handleChange}
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='category'
                    fullWidth
                    onBlur={formik.handleBlur}
                    type='text'
                    label='Course Category'
                    error={
                      formik.touched.category && formik.errors.category
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched.category && formik.errors.category
                        ? formik.errors.category
                        : null
                    }
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='description'
                    fullWidth
                    type='text'
                    label='Course Description'
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.description && formik.errors.description
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : null
                    }
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    multiline
                    rows={4}
                    rowsMax={6}
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id='select-filled-label'>
                    Select your level
                  </InputLabel>
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
                    name='price'
                    type='number'
                    label='Price'
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.price && formik.errors.price ? true : false
                    }
                    helperText={
                      formik.touched.price && formik.errors.price
                        ? formik.errors.price
                        : null
                    }
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    fullWidth
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='duration'
                    type='number'
                    label='Duration'
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.duration && formik.errors.duration
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched.duration && formik.errors.duration
                        ? formik.errors.duration
                        : null
                    }
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    fullWidth
                    variant='standard'
                  />
                </Grid>
              </Grid>

              <Button className={classes.sign} type='submit'>
                add Course
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
