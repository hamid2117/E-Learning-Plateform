import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Cards from './Cards'
import Filter from './Filter'
import { useFilterContext } from '../../context/FilterContext'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '800px',
    margin: '0px auto',
    maxWidth: '1200px',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      height: '1700px',
    },
    '@media (max-width: 500px)': {
      maxWidth: '95%',
      height: '2800px',
    },
  },
  heading: {
    '& p': {
      color: '#8149dc',
      marginBottom: '24px',
    },
    textAlign: 'center',
    '& h4': {
      fontWeight: '600',
      fontSize: '35px',
      marginBottom: '60px',
    },
  },
  pointchild: {
    display: 'grid',
    gridTemplateColumns: '7% 93%',
    marginBottom: '10px',
  },
  btn: {
    fontSize: '14px',
    padding: '17px',
    marginTop: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '0px 40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr',
    },
  },
}))
const HomePage = () => {
  const { filterdCard, filter, Level, category, updateFilter } =
    useFilterContext()
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <div className={classes.heading}>
          <p>Checkout New List</p>
          <h4>Explore Courses</h4>
        </div>
        <Filter
          {...filter}
          Level={Level}
          category={category}
          updateFilter={updateFilter}
        />
        <div className={classes.grid}>
          {filterdCard.map((data, index) => {
            return <Cards key={index} {...data} />
          })}
        </div>
      </section>
    </>
  )
}
export default HomePage