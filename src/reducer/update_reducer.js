const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = {
        id: Date.now(),
        Name: '',
        Quantity: 0,
        Price: 0,
        Discount: 0,
      }
      return { ...state, itemCart: [...state.itemCart, newItem] }
    case 'DELETE_CART':
      const newItemm = state.itemCart.filter(
        (data) => data.id !== action.payload
      )
      console.log(action.payload)
      return { ...state, itemCart: newItemm }

    case 'HANDLEITEMCHANGE':
      let newDataa = state.itemCart.map((data) => {
        if (data.id == action.dispatch.id) {
          return {
            ...data,
            [action.dispatch.name]: action.dispatch.value,
          }
        }
        return data
      })
      let { Amount } = newDataa.reduce(
        (total, item) => {
          if (item.id == action.dispatch.id) {
            let { Price, Quantity, Discount, Amount } = item
            total.Amount += Price * Quantity - Discount
            return total
          }
          return total
        },
        { Amount: 0 }
      )
      let newDataaa = newDataa.map((data) => {
        if (data.id == action.dispatch.id) {
          return {
            ...data,
            Amount,
          }
        }
        return data
      })

      return { ...state, itemCart: newDataaa }

    case 'HANDLENUMBERCHANGE':
      let newInvoiceNumber = action.dispatch.value
      let newRefNumber = action.dispatch.value
      if (action.dispatch.name === 'invoiceNumber') {
        return { ...state, invoiceNumber: newInvoiceNumber }
      }
      if (action.dispatch.name === 'refNumber') {
        return { ...state, refNumber: newRefNumber }
      }
      return { ...state }
    case 'HANDLEDUE':
      return { ...state, invoiceDate: action.dispatch }
    case 'HANDLEINVOICE':
      return { ...state, dueDate: action.dispatch }
    case 'HANDLENOTECHANGE':
      return { ...state, note: action.dispatch }
    case 'HANDLE_DATA':
      const {
        heading,
        category,
        language,
        level,
        duration,
        lessons,
        price,
        maxStudent,
        description,
        image,
        learn,
        requirement,
        target,
        courseData,
        material,
      } = action.payload

      return {
        ...state,
        heading,
        category,
        language,
        level,
        duration,
        lessons,
        price,
        maxStudent,
        description,
        image,
        learn,
        requirement,
        target,
        courseData,
        material,
      }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default dashboardReducer
