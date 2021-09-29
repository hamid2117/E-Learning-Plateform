import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Apis } from '../../Api'
import StripeMethod from './StripeMethod'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const Stripee = ({ config }) => {
  const [stripeKey, setStripeKey] = useState('')

  useEffect(async () => {
    const { data } = await axios.get(`${Apis}stripekey`, config)
    setStripeKey(data.apiKey)
  }, [Apis])

  return (
    <>
      <section>
        <h2>This is the api of </h2>
        {stripeKey && (
          <Elements stripe={loadStripe(stripeKey)}>
            <StripeMethod />
          </Elements>
        )}
      </section>
    </>
  )
}

export default Stripee
