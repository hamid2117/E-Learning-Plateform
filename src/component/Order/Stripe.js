import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Apis } from '../../Api'
import StripeMethod from './StripeMethod'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const Stripee = ({ config, total_amount }) => {
  const [stripeKey, setStripeKey] = useState('')

  useEffect(async () => {
    const { data } = await axios.get(`${Apis}stripekey`, config)
    setStripeKey(data.apiKey)
  }, [Apis])

  return (
    <>
      <section style={{ width: '100%' }}>
        {stripeKey && (
          <Elements stripe={loadStripe(stripeKey)}>
            <StripeMethod total_amount={total_amount} config={config} />
          </Elements>
        )}
      </section>
    </>
  )
}

export default Stripee
