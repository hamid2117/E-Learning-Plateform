import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Divider } from '@material-ui/core'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { IconButton } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { AmountBtn } from './../smallCp'
import { useCartContext } from './../../context/cart_context'

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '6rem',
    '@media (max-width: 800px)': {
      padding: '2.5rem',
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

const BasketData = ({ id, name, color, image, price, amount }) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:800px)')

  const { removeItem, toggleAmount } = useCartContext()
  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }
  return (
    <>
      <div className={classes.imgSection}>
        <img
          src={image}
          alt='img'
          style={{
            width: '100%',
            height: '90%',
            border: '1px solid #f1f5f9',
            borderRadius: '5px',
            objectFit: 'cover',
            marginBotton: '10px',

            margin: 'auto 0px',
          }}
        />
        <div>
          <p style={{ margin: '0px' }}>{name}</p>
          <div className={classes.colors}>
            <span> Color : </span>
            <div style={{ width: '30px' }}>
              <IconButton
                className={classes.colorbtn}
                style={{ backgroundColor: color }}
              ></IconButton>
            </div>
          </div>
          {matches && <p style={{ margin: '0px', color: 'red' }}>{price}rs</p>}
        </div>
      </div>
      {!matches && (
        <p style={{ margin: '0px', marginRight: '10px' }}>{price}rs</p>
      )}
      <AmountBtn amount={amount} increase={increase} decrease={decrease} />
      {!matches && <p className={classes.subtotal}>{price * amount}rs</p>}
      <IconButton
        onClick={() => removeItem(id)}
        style={{ height: '46px', margin: 'auto 0px' }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </>
  )
}

export default BasketData
