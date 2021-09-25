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
import { useGlobalContext } from '../../../context/courseContext'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid ',
    width: '90%',
    margin: '0px auto',
    gap: '10px',
    '@media (max-width: 500px)': {},
  },
}))

const Formm = ({ config, id, setNewData, Apis }) => {
  const {
    heading,
    category,
    language,
    level,
    price,
    duration,
    lessons,
    maxStudent,
    description,
    handleFormChange,
  } = useGlobalContext()

  const classes = useStyles()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='heading'
            fullWidth
            name='heading'
            variant='standard'
            label='Course Title'
            value={heading}
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            id='category'
            name='category'
            variant='standard'
            label='Category'
            value={category}
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='language'
            fullWidth
            name='language'
            variant='standard'
            label='Coures Language'
            value={language}
            onChange={handleFormChange}
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InputLabel id='select-filled-label'>Select your level</InputLabel>
          <Select
            label='select-filled-label'
            className={classes.selected}
            name='level'
            fullWidth
            id='level'
            required
            onChange={handleFormChange}
            value={level}
          >
            <MenuItem value={'Beginner'}>Beginner</MenuItem>
            <MenuItem value={'Inter'}>Inter</MenuItem>
            <MenuItem value={'Expert'}>Expert</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='price'
            name='price'
            variant='standard'
            label='Price'
            type='number'
            value={price}
            onChange={handleFormChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='duration'
            name='duration'
            variant='standard'
            type='number'
            label='Duration'
            value={duration}
            onChange={handleFormChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='lessons'
            name='lessons'
            variant='standard'
            type='number'
            label='Lessons'
            value={lessons}
            onChange={handleFormChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='maxStudent'
            name='maxStudent'
            variant='standard'
            type='number'
            label='Max Student'
            value={maxStudent}
            onChange={handleFormChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='description'
            name='description'
            variant='standard'
            label='Description'
            value={description}
            onChange={handleFormChange}
            multiline
            rows={4}
            rowsMax={6}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  )
}
export default Formm
