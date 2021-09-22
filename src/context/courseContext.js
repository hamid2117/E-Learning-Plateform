import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react'
import reducer from './../reducer/update_reducer'
import axios from 'axios'
import { useAuthContext } from './AuthContext'

const DashboardContext = createContext()

const initialState = {
  heading: '',
  category: '',
  language: '',
  level: 'Beginner',
  duration: '',
  lessons: '',
  price: '',
  maxStudent: '',
  description: '',
  image: '',
  learn: [
    {
      _id: '',
      point: '',
    },
  ],
  requirement: [
    {
      _id: '',
      point: '',
    },
  ],
  target: [
    {
      _id: '',
      point: '',
    },
  ],
  courseData: [
    {
      heading: '',
      video: [
        {
          _id: '',
          heading: '',
          time: '',
        },
      ],
    },
  ],
  material: [
    {
      _id: '',
      heading: '',
    },
  ],
}
export const UpdateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { userdata } = useAuthContext()
  const { token } = userdata
  const [Success, setSuccess] = useState(false)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const handleNumberChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch({ type: 'HANDLENUMBERCHANGE', dispatch: { name, value } })
  }

  const handleChangeItem = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({ type: 'HANDLEITEMCHANGE', dispatch: { name, value, id } })
  }
  const handleDueDate = (data) => {
    dispatch({ type: 'HANDLEDUE', dispatch: data })
  }
  const handleInvoiceDate = (data) => {
    dispatch({ type: 'HANDLEINVOICE', dispatch: data })
  }
  const AddItem_Cart = () => {
    dispatch({ type: 'ADD_TO_CART' })
  }
  const Delete_Cart = (id) => {
    dispatch({ type: 'DELETE_CART', payload: id })
  }

  const handleNoteChange = (e) => {
    const value = e.target.value
    dispatch({ type: 'HANDLENOTECHANGE', dispatch: value })
  }

  const handleDataId = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/course/${id}`,
        config
      )
      if (response) {
        dispatch({ type: 'HANDLE_DATA', payload: response.data })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdateSubmit = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/course/${id}`,
        state,
        config
      )
      if (response) {
        setSuccess(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   dispatch({ type: 'TOTAL_COUNT' })
  // }, [state.itemCart])

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        handleInvoiceDate,
        handleDueDate,
        handleNoteChange,
        handleNumberChange,
        handleChangeItem,
        AddItem_Cart,
        Delete_Cart,
        handleDataId,
        handleUpdateSubmit,
        Success,
        setSuccess,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(DashboardContext)
}
