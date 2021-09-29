import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Order from '../component/Order'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

const CoursePage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Order</title>
      </Helmet>
      <Order />
    </>
  )
}
export default CoursePage
