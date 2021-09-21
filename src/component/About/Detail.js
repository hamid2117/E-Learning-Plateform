import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '1170px',
    margin: '20px auto ',
    marginBottom: '-90px',
    height: '400px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '@media (max-width: 768px)': {},
  },
  grid1: {
    display: 'grid',
    height: '90%',
    placeItems: 'center',
    '& h3': {
      fontSize: '40px',
      fontWeight: '500',
    },
  },
  grid2: {
    display: 'grid',
    height: '70%',
    placeItems: 'end',
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <div className={classes.grid1}>
          <h3>We share knowledge with the world</h3>
        </div>
        <div className={classes.grid2}>
          <h3 style={{ justifySelf: 'start' }}>
            Changing learning for the better
          </h3>
          <p>
            Whether you want to learn or to share what you know, you’ve come to
            the right place. As a global destination for online learning, we
            connect people through knowledge.
          </p>
        </div>
      </section>
    </>
  )
}
export default App
