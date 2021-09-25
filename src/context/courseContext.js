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
import { toast } from 'react-toastify'
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
      _id: '',
      heading: '',
      video: [
        {
          _id: '',
          heading: '',
          time: '',
          link: '',
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

  const handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch({ type: 'HANDLEFORMCHANGE', payload: { name, value } })
  }
  const handleDueDate = (data) => {
    dispatch({ type: 'HANDLEDUE', dispatch: data })
  }
  const handleInvoiceDate = (data) => {
    dispatch({ type: 'HANDLEINVOICE', dispatch: data })
  }
  const handleChangeItem = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({ type: 'HANDLEITEMCHANGE', dispatch: { name, value, id } })
  }
  const AddItem_Cart = () => {
    dispatch({ type: 'ADD_TO_CART' })
  }
  const Delete_Cart = (id) => {
    dispatch({ type: 'DELETE_CART', payload: id })
  }
  const handleChangeRequirement = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({ type: 'HANDLEREQCHANGE', dispatch: { name, value, id } })
  }
  const AddItem_Requirement = () => {
    dispatch({ type: 'ADD_TO_REQ' })
  }
  const Delete_Requirement = (id) => {
    dispatch({ type: 'DELETE_REQ', payload: id })
  }
  const handleChangeTarget = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({ type: 'HANDLETARCHANGE', dispatch: { name, value, id } })
  }
  const AddItem_Target = () => {
    dispatch({ type: 'ADD_TO_TAR' })
  }
  const Delete_Target = (id) => {
    dispatch({ type: 'DELETE_TAR', payload: id })
  }
  const handleChangeMaterial = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({ type: 'HANDLEMARCHANGE', dispatch: { name, value, id } })
  }
  const AddItem_Material = () => {
    dispatch({ type: 'ADD_TO_MAR' })
  }
  const Delete_Material = (id) => {
    dispatch({ type: 'DELETE_MAR', payload: id })
  }
  const handleChangeCourse = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({ type: 'HANDLECOURSECHANGE', dispatch: { name, value, id } })
  }
  const AddItem_Course = () => {
    dispatch({ type: 'ADD_TO_COURSE' })
  }
  const Delete_Course = (id) => {
    dispatch({ type: 'DELETE_COURSE', payload: id })
  }
  const handleChangeVideo = (e, courseId) => {
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id
    dispatch({
      type: 'HANDLEVIDEOCHANGE',
      dispatch: { name, value, id, courseId },
    })
  }
  const AddItem_Video = (id) => {
    dispatch({ type: 'ADD_TO_VIDEO', dispatch: id })
  }
  const Delete_Video = (id) => {
    dispatch({ type: 'DELETE_VIDEO', dispatch: id })
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
        // setSuccess(true)
        toast.success('Course data is updated')
      }
    } catch (error) {
      console.log(error)
      toast.error('system problem occured')
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
        handleFormChange,
        handleChangeItem,
        handleChangeRequirement,
        AddItem_Requirement,
        Delete_Requirement,
        handleChangeTarget,
        AddItem_Target,
        Delete_Target,
        handleChangeMaterial,
        AddItem_Material,
        Delete_Material,
        handleChangeCourse,
        AddItem_Course,
        Delete_Course,
        handleChangeVideo,
        AddItem_Video,
        Delete_Video,
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
