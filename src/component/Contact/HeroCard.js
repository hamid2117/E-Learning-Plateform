import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { heroCard } from '../../DummyData'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '150px',
    margin: '0px auto',
    maxWidth: '1200px',
    display: 'grid',
    padding: '0px 40px',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '0px 57px',
    '@media (max-width: 768px)': {
      marginTop: '40px',
      gridTemplateColumns: '1fr',
      height: '370px',
      gap: '30px 57px',
    },
  },
  card: {
    height: '100px',
    display: 'grid',
    gridTemplateColumns: '30% 70%',
    margin: 'auto 0px',
    placeItems: 'center',
    '&:hover': {
      border: '1.5px solid #8149dc',
      boxShadow:
        'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
    },
  },
  heading: {
    justifySelf: 'start',
  },
  btn: {
    padding: '17px',
    fontSize: '17px',
  },
}))

const HeroCardPage = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        {heroCard.map((data) => {
          const { id, Icon, tilte, para } = data
          return (
            <Paper elevation={4} key={id} className={classes.card}>
              <div>
                <img src={Icon} alt='certificate' style={{ height: '60px' }} />
              </div>
              <div className={classes.heading}>
                <h4>{tilte}</h4>
                <p>{para}</p>
              </div>
            </Paper>
          )
        })}
      </section>
    </>
  )
}
export default HeroCardPage
