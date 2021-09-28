import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Cards from './Cards'
import Filter from './Filter'
import { useFilterContext } from '../../context/FilterContext'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100%',
    margin: '40px auto',
    marginBottom: '100px',
    maxWidth: '1200px',
    '@media (max-width: 768px)': {
      maxWidth: '95%',
      height: '100%',
    },
    '@media (max-width: 500px)': {
      maxWidth: '95%',
      height: '100%',
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
  empty: {
    height: '300px',
    width: '100%',
    gridColumn: '1/span 4',
    display: 'grid',
    textAlign: 'center',
    placeItems: 'center',
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
          {filterdCard.length < 1 ? (
            <>
              <div className={classes.empty}>
                <h3>
                  {' '}
                  empty <br /> <br /> No courses to show .{' '}
                </h3>
              </div>
            </>
          ) : (
            <>
              {filterdCard.map((data, index) => {
                return <Cards key={index} {...data} />
              })}
            </>
          )}
        </div>
      </section>
    </>
  )
}
export default HomePage
