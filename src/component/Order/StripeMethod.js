import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (elements == null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  )
}
export default CheckoutForm
