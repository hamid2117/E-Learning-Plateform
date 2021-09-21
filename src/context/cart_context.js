import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  SEND,
  UPDATE_PAY,
  UPDATE_ADDRESS,
} from '../actions'

const getLocalStorage = () => {
  const cartItem = localStorage.getItem('cartItems')
  if (cartItem) {
    return JSON.parse(cartItem)
  } else {
    return []
  }
}
const getAddressLocalStorage = () => {
  const address = localStorage.getItem('address')
  if (address) {
    return JSON.parse(address)
  } else {
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50,
  paymentMethod: 'card',
  shippingAddress: getAddressLocalStorage(),
  done: '',
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cartItems', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(state.shippingAddress))
  }, [state.shippingAddress])

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  const payMethod = (value) => {
    dispatch({ type: UPDATE_PAY, payload: value })
  }
  const shipAddress = (value) => {
    dispatch({ type: UPDATE_ADDRESS, payload: value })
  }
  const sendData = (token) => {
    dispatch({ type: SEND, payload: token })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        state,
        removeItem,
        sendData,
        payMethod,
        shipAddress,
        toggleAmount,
        clearCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
