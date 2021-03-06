import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { rows } from './../../DummyData'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { useAuthContext } from './../../context/AuthContext'
import { Link, Redirect } from 'react-router-dom'
import { IconButton, Button, CircularProgress } from '@material-ui/core'
import axios from 'axios'
// import { useGlobalUiContext } from './../../context/uiContext'
import DeleteModel from '../DeleteModel'
import { toast } from 'react-toastify'
import { Apis } from '../../Api'

const UserList = () => {
  const [data, setData] = useState(rows)
  const [redirect, setRedirect] = useState(false)
  const [model, setModel] = useState(false)
  const [deleteData, setDeleteData] = useState(false)
  const [newId, setNewId] = useState('')
  const [loading, setLoading] = useState(false)
  const { userdata } = useAuthContext()
  const { token } = userdata

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const getData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${Apis}users`, config)
      if (response) {
        setData(response.data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      const response = await axios.delete(`${Apis}user/${id}`, config)
      if (response) {
        getData()
        toast.error('User is deleted.')
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

  // useEffect(() => {
  //   if (adminRegisterReload) {
  //     getData()
  //   }
  // }, [adminRegisterReload])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (deleteData) {
      handleDelete(newId)
    }
  }, [deleteData])

  const columns = [
    { field: '_id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: 'Name ', width: 150 },
    { field: 'email', headerName: 'Email ', width: 250 },
    {
      field: 'teacher',
      headerName: 'Teacher',
      description: 'This column has a value getter and is not sortable.',
      width: 160,
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: 170,
      renderCell: (params) => {
        return (
          <div className='userList'>
            {params.row.createdAt.substring(0, 10)}
          </div>
        )
      },
    },
    {
      field: 'isAdmin',
      headerName: 'Is Admin',
      description: 'This column has a value getter and is not sortable.',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button component={Link} to={`/useredit/${params.row._id}`}>
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
      ) : (
        <DataGrid
          rows={data}
          disableSelectionOnClick
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      )}
      <DeleteModel
        model={model}
        closeModel={closeModel}
        deleteUser={deleteUser}
      />
    </>
  )
}

export default UserList
