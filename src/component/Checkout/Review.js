import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import { useAuthContext } from './../../context/AuthContext'
import axios from 'axios'
import { useCartContext } from './../../context/cart_context'
import { Apis } from '../../Api'
const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
]
const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA',
]
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}))

export default function Review({ handleNext, activeStep, steps, handleBack }) {
  const classes = useStyles()
  const { cart, total_amount, shippingAddress, paymentMethod } =
    useCartContext()

  const { userdata } = useAuthContext()
  const { sendData, state } = useCartContext()
  const { token } = userdata
  const handleBoth = async () => {
    handleNext()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios
      .post(`${Apis}orders`, state, config)
      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            return { ...state, done: false }
          }
          if (e.response.status === 403) {
            return { ...state, done: false }
          }
        }
      })
    if (response && response.data) {
      sendData(response.data._id)
    }
  }

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product, index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText primary={product.heading} />
            <Typography variant='body2'>
              {product.amount} x {product.price}rs
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            {total_amount} rs
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Billing
          </Typography>
          <Typography gutterBottom>{shippingAddress.debitCard}</Typography>
          <Typography gutterBottom>{shippingAddress.address}</Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <Typography variant='h6' color='secondary' gutterBottom>
              {paymentMethod === 'card' ? 'Debit Card ' : 'Cash On Delivery'}
            </Typography>
            {paymentMethod === 'card' ? (
              <CreditCardIcon
                color='primary'
                style={{ marginTop: '6px', marginLeft: '16px' }}
              />
            ) : (
              <LocalAtmIcon
                color='primary'
                style={{
                  marginTop: '6px',
                  marginLeft: '16px',
                }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep !== 0 && (
          <Button
            onClick={handleBack}
            style={{ marginTop: '20px', marginRight: '17px' }}
          >
            Back
          </Button>
        )}
        <Button
          variant='contained'
          color='primary'
          onClick={handleBoth}
          style={{ marginTop: '20px' }}
        >
          Place Order
        </Button>
      </div>
    </>
  )
}
