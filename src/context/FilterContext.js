import React, { useReducer, useContext, createContext, useEffect } from 'react'
import reducer from '../reducer/filter_reducer'
import { CardData } from '../data'
const FilterContext = createContext()

const initialState = {
  cards: CardData,
  filterdCard: [],
  filter: {
    text: '',
    Category: 'all',
    max_price: 0,
    price: 0,
    min_price: 0,
    level: 'all',
  },
}
export const getUniqueValue = (data, type) => {
  const Array = data.map((data) => data[type])

  return ['all', ...new Set(Array)]
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const category = getUniqueValue(CardData, 'category')
  const Level = getUniqueValue(CardData, 'level')

  const updateFilter = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name === 'price') {
      value = Number(e.target.value)
    }
    dispatch({ type: 'update_Filter', payload: { name, value } })
  }

  useEffect(() => {
    dispatch({ type: 'filter_card' })
  }, [state.filter])

  useEffect(() => {
    dispatch({ type: 'Load_Data' })
  }, [CardData])

  return (
    <FilterContext.Provider value={{ ...state, Level, category, updateFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
