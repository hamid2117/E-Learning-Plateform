import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { Apis } from '../../Api'
import { toast } from 'react-toastify'
import { useParams, Redirect } from 'react-router-dom'

const CheckoutForm = ({ total_amount, config, idd }) => {
  const [clientSecret, setClientSecret] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (elements == null) {
      return
    }
    const { data } = await axios.post(
      `${Apis}payment/process`,
      { total_amount: total_amount + 5 },
      config
    )
    setClientSecret(data.clientSecret)
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    )
    if (error) {
      toast.error('Payment is not done .')
      setLoading(false)
    } else {
      console.log('adfasdf')
      console.log(idd)
      await axios.put(`${Apis}order/${id || idd}/pay`)
      setRedirect(true)
      toast.success('Payment is done .')
      setLoading(true)
    }
  }
  if (redirect) {
    return <Redirect to='/profile' />
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
        type='submit'
        style={{ margin: '30px 0px' }}
        variant='outlined'
        color='primary'
        disabled={!stripe || !elements}
      >
        {loading ? 'loading ...' : `Pay ${'   '} ${total_amount + 5} rs`}
      </Button>
    </form>
  )
}
export default CheckoutForm
