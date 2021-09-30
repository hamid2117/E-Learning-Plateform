import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@material-ui/core'
import { useAuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Apis } from '../../Api'
import { toast } from 'react-toastify'
import { useParams, Redirect } from 'react-router-dom'

const CheckoutForm = ({ total_amount, config }) => {
  const [clientSecret, setClientSecret] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { id } = useParams()
  const stripe = useStripe()
  const elements = useElements()
  const { userdata } = useAuthContext()

  const handleSubmit = async (event) => {
    event.preventDefault()

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
    } else {
      await axios.put(`${Apis}order/${id}/pay`)
      setRedirect(true)
      toast.success('Payment is done .')
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
        Pay {'   '} {total_amount + 5} rs
      </Button>
    </form>
  )
}
export default CheckoutForm
