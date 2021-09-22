import React from 'react'
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  UPDATE_PAY,
  UPDATE_ADDRESS,
  TOGGLE_CART_ITEM_AMOUNT,
  SEND,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, price, heading, duration, lessons, image } = action.payload
      const temProduct = state.cart.find((data) => data.id === id)
      if (temProduct) {
        return { ...state, cart: [...state.cart] }
      } else {
        const newItem = {
          id,
          price,
          heading,
          duration,
          lessons,
          image,
          amount: 1,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }
    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((data) => data.id !== action.payload)
      return { ...state, cart: tempCart }
    case CLEAR_CART:
      return { ...state, cart: [] }
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: idd, value } = action.payload

      const tempaCart = state.cart.map((data) => {
        if (data.id === idd) {
          if (value === 'inc') {
            let newAmount = data.amount + 1
            if (newAmount > data.max) {
              newAmount = data.max
            }
            return { ...data, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = data.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...data, amount: newAmount }
          }
        } else {
          return data
        }
      })
      return { ...state, cart: tempaCart }
    case COUNT_CART_TOTALS:
      const { total_amount, total_items } = state.cart.reduce(
        (total, cartItemm) => {
          const { amount, price } = cartItemm
          total.total_items += amount
          total.total_amount += price * amount
          return total
        },
        { total_items: 0, total_amount: 0 }
      )
      return { ...state, total_items, total_amount }
    case UPDATE_PAY:
      return { ...state, paymentMethod: action.payload }
    case UPDATE_ADDRESS:
      return { ...state, shippingAddress: action.payload }
    case SEND:
      return { ...state, done: action.payload }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default cart_reducer
