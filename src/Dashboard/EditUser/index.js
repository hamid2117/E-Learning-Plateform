import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@material-ui/icons'
import axios from 'axios'
import { useAuthContext } from './../../context/AuthContext'
import Formm from './Formm'

// or
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '70%',
    margin: '0px auto',
    marginBottom: '35px',
  },
  main2: {
    width: '100%',
    maxWidth: '70%',
    margin: '0px auto',
    height: '70vh',
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: '1fr 3fr ',
  },
}))

const User = () => {
  const classes = useStyles()
  const { id } = useParams()
  const [newData, setNewData] = useState({})
  const { userdata } = useAuthContext()
  const { token } = userdata
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://gymhaskdfjlhasdlkjfadshfkjlasd.herokuapp.com/api/v1/user/${id}`,
        config
      )
      if (data) {
        console.log(data)
        setNewData(data)
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // setRedirect(true)
      }
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        <div className={classes.main}>
          <h1>Edit User</h1>
        </div>
        <div className={classes.main2}>
          <div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Account Detail</span>
              <div style={{ marginBottom: '9px' }}>
                <span style={{ fontWeight: 'bold' }}> Id </span>
                <span style={{ marginLeft: '10px' }}>
                  {newData && newData._id}
                </span>
              </div>
              <div style={{ marginBottom: '9px' }}>
                <CalendarToday />
                <span
                  style={{
                    marginLeft: '10px',
                    marginBottom: '15px',
                    fontSize: '13px',
                  }}
                >
                  {newData && newData.createdAt}
                </span>
              </div>
              <div>
                <PermIdentity />
                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.name}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}> Role : </span>

                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.trainer ? 'Trainer' : 'Learner'}
                </span>
              </div>
              <div style={{ margin: '20px 0px' }}>
                <span style={{ fontWeight: 'bold' }}>Contact Detail</span>
              </div>
              <div>
                <MailOutline />
                <span>{newData && newData.email}</span>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>edit</span>
            </div>
            <Formm config={config} id={id} setNewData={setNewData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default User
