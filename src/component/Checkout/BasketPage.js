import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Divider } from '@material-ui/core'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import BasketData from './BasketData'
import { useCartContext } from './../../context/cart_context'
import { useAuthContext } from '../../context/auth_context'

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '6rem 1rem',
    width: '100%',
    maxWidth: '1200px',
    margin: '0px auto',
    '@media (max-width: 800px)': {
      padding: '2.5rem',
    },
    '@media (max-width: 350px)': {
      padding: '0rem',
    },
  },
  title: {
    textAlign: 'center',
    paddingLeft: '6px',
  },
  basketItems: {
    display: 'grid',
  },
  itemsitem: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr auto',
    '@media (max-width: 800px)': {
      gridTemplateColumns: '40% 45% 15%',
    },
    gridTemplateRows: '75px',
    margin: '50px 0px',
    placeItems: 'center',
  },
  itemamount: {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: '1fr 13px 1fr',
    '@media (max-width: 800px)': {
      gridTemplateColumns: '40% 20% 40%',
      gap: '0px 15px',
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '20px 15px 20px',
      gap: '0px 15px',
    },
    gap: '0px 20px',
  },
  imgSection: {
    height: '100%',
    gridTemplateRows: '75px',
    display: 'grid',
    gridTemplateColumns: '100px 50%',
    '@media (max-width: 500px)': {
      gridTemplateColumns: '85px 50%',
    },
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'left',
  },
  imgtitle: {
    height: '40px',
    display: 'grid',
    placeItems: 'center',
  },
  itemsButtons: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-between',
  },
  checkout: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 800px)': {
      justifyContent: 'center',
    },
    marginTop: '2rem',
  },
  checkoutBox: {
    border: '1px solid #bcccdc',
    padding: '40px 60px 15px 30px',
    borderRadius: '4px',
    display: 'grid',
  },
  textss: {
    display: 'grid',
    gridTemplateColumns: '80% 20%',
  },
  listsss: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    paddingRight: '40px',
    width: '100%',
  },
  subtotal: {
    margin: '0px',
  },
  empty: {
    height: '80vh',
    display: 'grid',
    padding: '100px 0px',
    placeItems: 'center',
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: '60px 50px',
    alignItems: 'center',
  },
  colorbtn: {
    display: 'flex',
    display: 'inline-block',
    width: '0.5rem',
    height: '0.5rem',
    padding: '8px',
    borderRadius: '50%',
    background: '#222',
    marginRight: '0.5rem',
    border: 'none',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:
      'rgba(0, 0, 0, 0.35) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.22) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.19) 0px -3px 5px',
  },
}))

const BasketPage = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:800px)')
  const matchess = useMediaQuery('(max-width:500px)')
  const { userdata } = useAuthContext()

  const { cart, shipping_fee, total_amount, removeItem, clearCart } =
    useCartContext()

  if (cart.length < 1) {
    return (
      <main className={classes.empty}>
        <h2>Your cart is empty</h2>
        <Button
          component={Link}
          variant='contained'
          color='secondary'
          to='/product'
        >
          Fill it
        </Button>
      </main>
    )
  }
  return (
    <section className={classes.main}>
      <div className={classes.title}>
        <h2>Your Basket</h2>
      </div>
      <div className={classes.basketItems}>
        <div className={classes.itemstitle}>
          {!matches && (
            <List className={classes.listsss}>
              {['Item', 'Price', 'Quantity', 'Subtotal'].map((text, index) => {
                return (
                  <ListItem key={index} style={{ textAlign: 'center' }}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              })}
            </List>
          )}
        </div>
        <Divider />
        <div className={classes.items}>
          {cart.map((data, index) => {
            return (
              <div key={index} className={classes.itemsitem}>
                <BasketData {...data} />
              </div>
            )
          })}
        </div>

        <Divider />
        <div className={classes.itemsButtons}>
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to='/Product'
          >
            {matchess ? 'C.Shopping' : 'Continue Shopping'}
          </Button>
          <Button
            onClick={() => clearCart()}
            variant='contained'
            color='secondary'
          >
            {matchess ? 'Clear Cart' : 'Clear Shopping Cart'}
          </Button>
        </div>
      </div>
      <section className={classes.checkout}>
        <div>
          <article className={classes.checkoutBox}>
            <h5 className={classes.textss}>
              Subtotal :<span>{total_amount}rs</span>
            </h5>
            <p className={classes.textss}>
              shipping_fee :<span>{shipping_fee}rs</span>
            </p>
            <Divider />
            <h4
              className={classes.textss}
              style={{
                marginTop: '15px',
              }}
            >
              Order Total : <span>{total_amount + shipping_fee}rs</span>
            </h4>
          </article>
          {userdata.email ? (
            <Button
              variant='contained'
              component={Link}
              to='/checkout'
              color='primary'
              style={{ width: '100%', marginTop: '14px' }}
            >
              PROCEED CHECKOUT
            </Button>
          ) : (
            <Button
              variant='contained'
              component={Link}
              to='/account'
              color='primary'
              style={{ width: '100%', marginTop: '14px' }}
            >
              Log in
            </Button>
          )}
        </div>
      </section>
    </section>
  )
}

export default BasketPage
