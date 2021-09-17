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
const Filter = ({
  text,
  Category,
  max_price,
  price,
  min_price,
  level,
  updateFilter,
  Level,
  category,
}) => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.main}>
        <form className={classes.grid}>
          <TextField
            label='Search...'
            name='text'
            onChange={updateFilter}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant='standard'
          />
          <Grid>
            <InputLabel id='select-filled-label'>Category</InputLabel>
            <Select
              labelId='select-filled-label'
              fullWidth
              id='category'
              name='Category'
              value={Category}
              onChange={updateFilter}
            >
              {category.map((data, index) => {
                return (
                  <MenuItem key={index} value={data}>
                    {data}
                  </MenuItem>
                )
              })}
            </Select>
          </Grid>
          <Grid>
            <InputLabel id='select-filled-label'>Level</InputLabel>
            <Select
              labelId='select-filled-label'
              fullWidth
              id='level'
              name='level'
              value={level}
              onChange={updateFilter}
            >
              {Level.map((data, index) => {
                return (
                  <MenuItem value={data} key={index}>
                    {data}
                  </MenuItem>
                )
              })}
            </Select>
          </Grid>
          <Grid>
            <div className={classes.Price}>
              <h5 id='range-slider' className={classes.title}>
                Price
              </h5>
              <p style={{ margin: '-5px 0px', marginTop: '-17px' }}>
                <span style={{ fontWeight: 'bold' }}> {price} </span>rs
              </p>
              <input
                name='price'
                type='range'
                value={price}
                onChange={updateFilter}
                style={{ width: '200px' }}
                min={min_price}
                max={max_price}
                valueLabelDisplay='auto'
              />
            </div>
          </Grid>
        </form>
      </section>
    </>
  )
}
export default Filter
