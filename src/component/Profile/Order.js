import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import OrderTable from './OrderTable'
import axios from 'axios'
import { useAuthContext } from '../..//context/AuthContext'
import { Apis } from '../../Api'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 600px)': {
      display: 'grid',
      placeItems: 'center',
    },
  },
  deliIcon: {
    width: '100px',
    display: 'grid',
    placeItems: 'center',
    '@media (max-width: 600px)': {
      width: '50px',
    },
  },
  idd: {
    width: '160px',
    '@media (max-width: 600px)': {
      width: '100px',
      fontWeight: 'bold',
    },
  },
}))

const Order = ({ userdata }) => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const classes = useStyles()
  const [sdkdata, setSdkdata] = useState(false)
  const matches = useMediaQuery('(max-width:500px)')

  const { token } = userdata
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const getData = async () => {
    const response = await axios
      .get(`${Apis}myorders`, config)

      .catch((e) => {
        if (e && e.response) {
          if (e.response.status === 404) {
            setError(true)
          }
          if (e.response.status === 204) {
            setError(true)
          }
        }
      })
    if (response && response.data) {
      setData(response.data)
      setSdkdata(true)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className={classes.each}>
        <h2>Your Course Status</h2>
        <p>
          Once you buy an Course with us, you'll be able to track its status
          here.
        </p>

        {data.length === 0 ? (
          <h5>There is no Course to show </h5>
        ) : (
          data && sdkdata && <OrderTable data={data} />
        )}
      </div>
    </>
  )
}

export default Order
