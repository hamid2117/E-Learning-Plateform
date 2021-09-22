const filter_reducer = (state, action) => {
  if (action.type === 'Insert_Data') {
    return { ...state, cards: action.payload }
  }
  if (action.type === 'Load_Data') {
    const allCards = state.cards

    const allPrice = allCards.map((data) => data.price)
    const maxPrice = Math.max(...allPrice)
    const minPrice = Math.min(...allPrice)

    const filter = {
      ...state.filter,
      max_price: maxPrice,
      min_price: minPrice,
      price: maxPrice,
    }
    return { ...state, filter, filterdCard: state.cards }
  }
  if (action.type === 'update_Filter') {
    const { name, value } = action.payload
    return { ...state, filter: { ...state.filter, [name]: value } }
  }
  if (action.type === 'filter_card') {
    const { text, Category, price, level, max_price } = state.filter
    const { cards } = state
    let temCard = [...cards]

    if (text) {
      temCard = temCard.filter((data) => {
        return data.heading.toLowerCase().startsWith(text)
      })
    }
    if (Category !== 'all') {
      temCard = temCard.filter((data) => {
        return data.category === Category
      })
    }
    if (level !== 'all') {
      temCard = temCard.filter((data) => {
        return data.level === level
      })
    }
    if (price !== max_price) {
      temCard = temCard.filter((data) => {
        return data.price <= price
      })
    }
    return { ...state, filterdCard: temCard }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
