import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Paper,
  TextField,
  InputLabel,
  InputAdornment,
  Grid,
  MenuItem,
  Select,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '0px auto',
    marginTop: '60px',
    maxWidth: '1200px',
    '@media (max-width: 768px)': {
      maxWidth: '85%',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '0px 57px',
    '@media (max-width: 768px)': {
      gap: '20px 57px',
      gridTemplateColumns: '1fr ',
    },
  },
}))
const Filter = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <form className={classes.grid}>
          <TextField
            label='Search...'
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant='outlined'
          />
          <Grid>
            <InputLabel id='select-filled-label'>Category</InputLabel>
            <Select
              labelId='select-filled-label'
              fullWidth
              id='isAdmin'
              name='isAdmin'
              // value={formik.values.status}
              // onChange={formik.handleChange}
            >
              <MenuItem value={'deleted'}>Deleted</MenuItem>
              <MenuItem value={'verified'}>Verified</MenuItem>
              <MenuItem value={'unverified'}>Unverified</MenuItem>
            </Select>
          </Grid>
          <Grid>
            <InputLabel id='select-filled-label'>Category</InputLabel>
            <Select
              labelId='select-filled-label'
              fullWidth
              id='isAdmin'
              name='isAdmin'
              // value={formik.values.status}
              // onChange={formik.handleChange}
            >
              <MenuItem value={'deleted'}>Deleted</MenuItem>
              <MenuItem value={'verified'}>Verified</MenuItem>
              <MenuItem value={'unverified'}>Unverified</MenuItem>
            </Select>
          </Grid>
          <Grid>
            <InputLabel id='select-filled-label'>Category</InputLabel>
            <Select
              labelId='select-filled-label'
              fullWidth
              id='isAdmin'
              name='isAdmin'
              // value={formik.values.status}
              // onChange={formik.handleChange}
            >
              <MenuItem value={'deleted'}>Deleted</MenuItem>
              <MenuItem value={'verified'}>Verified</MenuItem>
              <MenuItem value={'unverified'}>Unverified</MenuItem>
            </Select>
          </Grid>
        </form>
      </section>
    </>
  )
}
export default Filter
