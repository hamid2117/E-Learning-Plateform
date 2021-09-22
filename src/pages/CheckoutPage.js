import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Checkout from '../component/Checkout'
import Hero from './Hero'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

const CheckoutPage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Checkout</title>
      </Helmet>
      <Hero />
      <Checkout />
    </>
  )
}
export default CheckoutPage
