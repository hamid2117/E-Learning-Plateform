import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import MuiAlert from '@material-ui/lab/Alert'
import { useAuthContext } from '../../context/AuthContext'
import axios from 'axios'
import Stripe from './Stripe'
import { Apis } from '../../Api'
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '1170px',
    margin: '50px auto',
    marginBottom: '200px',
    '@media (max-width: 780px)': {
      width: '90%',
    },
  },
  gridd: {
    display: 'grid',
    gridTemplateColumns: '60%  40%',
    '@media (max-width: 780px)': {
      gridTemplateColumns: '100%',
    },
  },
  divider: {
    margin: '30px auto',
    marginBottom: '15px',
    width: '95%',
  },
  dividerr: {
    margin: '5px auto',
    width: '80%',
  },
  secondSection: {
    border: '1px solid #bcccdc',
    width: '80%',
    margin: '0px auto',
    '@media (max-width: 780px)': {
      margin: '30px auto',
      marginTop: '70px',
    },
  },
}))

const Order = () => {
  const { id } = useParams()

  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [sdkdata, setSdkdata] = useState(false)
  const { userdata } = useAuthContext()
  const { token } = userdata
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const getData = async () => {
    const response = await axios
      .get(`${Apis}order/${id}`, config)

      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            setError(true)
          }
        }
      })
    if (response && response.data) {
      setData(response.data)
    }
  }

  const {
    shippingAddress,
    isDelivered,
    isPaid,
    shipping_fee,
    total_items,
    user,
    paymentMethod,
    total_amount,
    cart,
    _id,
  } = data

  const issPaid = data && data.isPaid

  useEffect(() => {
    getData()
  }, [issPaid])

  useEffect(() => {
    const add_paypalScript = async () => {
      const { data: clientId } = await axios.get('${Apis}config/paypal')
      const script = document.createElement('script')
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      window.onload = () => {
        setSdkdata(true)
      }
      document.body.appendChild(script)
    }
    add_paypalScript()
    setSdkdata(true)
  }, [])

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
  }

  const handleSuccess = (paymentResult) => {
    const updatepaid = async () => {
      const response = await axios
        .put(`${Apis}order/${id}/pay`, paymentResult, config)
        .catch((e) => {
          if (e && e.response) {
            if (e.response.status === 404) {
              setError(true)
            }
          }
        })
      if (response && response.data) {
        setData(response.data)
      }
    }
    updatepaid()
  }

  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        <Typography variant='h5' gutterBottom style={{ marginBottom: '25px' }}>
          <strong>Order : </strong> {_id}
        </Typography>
        <div className={classes.gridd}>
          <div className={classes.firstSection}>
            <div className={classes.shipping}>
              <Typography
                variant='h4'
                style={{ fontSize: '28px' }}
                gutterBottom
              >
                Learned
              </Typography>
              <p>
                <strong>Email : </strong>
                <a href={`mailto:${user && user.email}`}>
                  {user && user.email}
                </a>
              </p>
              <p>
                <strong>Address : </strong>
                {shippingAddress && shippingAddress.address}
              </p>
              {isDelivered ? (
                <Alert style={{ background: '#82c785' }}>
                  Completed Course
                </Alert>
              ) : (
                <Alert severity='error' style={{ background: '#ef7970' }}>
                  Not Completed
                </Alert>
              )}
            </div>
            <Divider className={classes.divider} />
            <div>
              <Typography
                variant='h4'
                style={{ fontSize: '28px' }}
                gutterBottom
              >
                Payment Method
              </Typography>
              <p>
                <strong> Method : </strong>
                {paymentMethod}
              </p>
              {isPaid ? (
                <Alert style={{ background: '#82c785' }}>
                  <strong>Paid at</strong> {data.paidAt}
                </Alert>
              ) : (
                <Alert severity='error' style={{ background: '#ef7970' }}>
                  Not Paid
                </Alert>
              )}
            </div>
            <Divider className={classes.divider} />
            <div>
              <Typography
                variant='h4'
                style={{ fontSize: '28px' }}
                gutterBottom
              >
                Ordered Items
              </Typography>
              <List style={{ width: '90%', margin: '5px auto' }} disablePadding>
                {cart &&
                  cart.map((product, index) => {
                    return (
                      <>
                        <ListItem className={classes.listItem} key={index}>
                          <ListItemText primary={product.heading} />
                          <Typography variant='body2'>
                            {product.amount} x {product.price}rs
                          </Typography>
                        </ListItem>
                        <Divider />
                      </>
                    )
                  })}
              </List>
            </div>
          </div>
          <div>
            <div className={classes.secondSection}>
              <Typography
                variant='h4'
                style={{
                  fontSize: '28px',
                  textAlign: 'center',
                  margin: '10px 0px',
                }}
              >
                Order Summary
              </Typography>
              <Divider className={classes.dividerr} />
              <ListItem style={{ width: '80%', marginLeft: '15px' }}>
                <ListItemText primary={'SubTotal : '} />
                <Typography variant='body2'>
                  {total_amount && total_amount}
                </Typography>
              </ListItem>
              <Divider className={classes.dividerr} />
              <ListItem style={{ width: '80%', marginLeft: '15px' }}>
                <ListItemText primary={'Items : '} />
                <Typography variant='body2'>
                  {total_items && total_items}
                </Typography>
              </ListItem>
              <Divider className={classes.dividerr} />
              <ListItem style={{ width: '80%', marginLeft: '15px' }}>
                <ListItemText primary={'Shipping fee : '} />
                <Typography variant='body2'>5</Typography>
              </ListItem>
              <Divider className={classes.dividerr} />
              <ListItem
                style={{
                  width: '80%',
                  marginLeft: '15px',
                  marginBottom: '25px',
                }}
              >
                <ListItemText primary={'Order Total : '} />
                <Typography variant='body2'>{5 + total_amount}</Typography>
              </ListItem>
              {!issPaid && (
                <ListItem
                  style={{
                    width: '80%',
                    marginLeft: '15px',
                    marginBottom: '25px',
                  }}
                >
                  <Stripe config={config} />
                </ListItem>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Order
