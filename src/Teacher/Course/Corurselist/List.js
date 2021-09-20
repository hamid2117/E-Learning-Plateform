import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { CardData } from './../../../data'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { Link, Redirect } from 'react-router-dom'
import { IconButton, Button, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import DeleteModel from '../../DeleteModel'
import { toast } from 'react-toastify'
import { Apis } from '../../../Api'

const CourseList = ({ userdata, adminCloseCourse }) => {
  const [data, setData] = useState(CardData)
  const [loading, setLoading] = useState(true)
  const [redirect, setRedirect] = useState(false)
  const [model, setModel] = useState(false)
  const [deleteData, setDeleteData] = useState(false)
  const [newId, setNewId] = useState('')
  const { token } = userdata

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getData = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${Apis}courseuser`, config)
      if (data) {
        setLoading(false)
        setData(data)
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log(error)
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      const response = await axios.delete(`${Apis}course/${id}`, config)
      if (response) {
        getData()
        setDeleteData(false)
        toast.error('Course is deleted.', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const closeModel = () => {
    setModel(false)
  }
  const deleteUser = () => {
    setDeleteData(true)
    setModel(false)
  }
  const handleDeleteBtn = (id) => {
    setNewId(id)
    setModel(true)
  }

  useEffect(() => {
    getData()
  }, [adminCloseCourse])

  useEffect(() => {
    if (deleteData) {
      handleDelete(newId)
    }
  }, [deleteData])

  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'heading', headerName: 'Course heading', width: 260 },
    { field: 'category', headerName: 'Category', width: 170 },
    { field: 'level', headerName: 'Level', width: 160 },
    { field: 'duration', headerName: 'Duration', width: 140 },
    { field: 'price', headerName: 'Price', width: 140 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button component={Link} to={`/courseedit/${params.row._id}`}>
              Edit
            </Button>
            <IconButton
              className='userListDelete'
              onClick={() => {
                handleDeleteBtn(params.row._id)
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </>
        )
      },
    },
  ]

  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <>
      {loading ? (
        <div
          style={{
            width: '100%',
            height: '80%',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <CircularProgress color='primary' />
        </div>
      ) : data.length >= 1 ? (
        <DataGrid
          rows={data}
          disableSelectionOnClick
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '80%',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <h4>No Courses to display . </h4>
        </div>
      )}
      <DeleteModel
        model={model}
        closeModel={closeModel}
        deleteUser={deleteUser}
      />
    </>
  )
}

export default CourseList
