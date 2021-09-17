import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarIcon from '@material-ui/icons/Star'
const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    '&span': {
      color: '#ffb900',
      fontSize: '1rem',
      marginRight: '0.25rem',
    },
    '& p': {
      marginLeft: '0.5rem',
      marginBottom: 0,
    },
    marginBottom: '0.5rem',
  },
  stars: {
    color: '#ffb900',
  },
}))
const Stars = ({ stars, reviews }) => {
  const classes = useStyles()

  const temStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarIcon />
        ) : stars >= number ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
    )
  })
  return (
    <div className={classes.main}>
      <div className={classes.stars}>{temStar}</div>
      <p className='reviews'>({reviews} reviews)</p>
    </div>
  )
}

export default Stars
