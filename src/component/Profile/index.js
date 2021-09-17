import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Detail from './Detail'
import Order from './Order'
import ChangePassword from './ChangePassword'
import { useAuthContext } from './../../context/AuthContext'
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  tittle: {
    backgroundColor: '#f1f5f9',
    display: 'grid',
    textAlign: 'center',
    placeItems: 'center',
    height: '350px',
    '& h1': {
      marginBottom: '-90px',
    },
  },
  main: {
    width: '100%',
    maxWidth: '1170px',
    margin: '0px auto',
    display: 'grid',
    margin: '110px auto',
    gridTemplateColumns: '30% 70%',
    gap: '30px',
    '@media (max-width: 950px)': {
      padding: '10px 10px',
      padding: '10px 40px 10px 10px',
      gap: '10px',
    },
    '@media (max-width: 750px)': {
      gridTemplateColumns: '100%',
      margin: '50px auto',
      padding: '10px 10px 10px 10px',
      gap: '30px',
    },
  },
  btns: {
    display: 'grid',
    gridTemplateRows: '60px 60px 60px',
    gridTemplateAreas: '50px',
    '@media (max-width: 750px)': {
      gridTemplateRows: '1fr',
      gridTemplateColumns: '1fr 1fr 1fr ',
    },
  },

  btn: {
    '@media (min-width: 750px)': {
      borderLeft: '5px solid #64748b',
    },
    '@media (max-width: 750px)': {
      borderBottom: '5px solid #64748b',
      fontSize: '13px',
    },
    color: ' #64748b',
    borderRadius: '0px',
  },
  btnn: {
    '@media (max-width: 750px)': {
      fontSize: '13px',
    },
  },
}))

const Profile = () => {
  const { userdata, logout, updateData } = useAuthContext()
  const [refresh, setRefresh] = useState({
    name: '',
  })
  const [btnn, setBtnn] = useState(0)
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    if (!userdata.name) {
      history.push('/')
    } else {
      setRefresh({
        name: userdata.name,
      })
    }
  }, [userdata, userdata.name])

  return (
    <>
      <section>
        <div className={classes.tittle}>
          <h1>Welcome {refresh.name}</h1>
          <Button
            style={{ marginTop: '-120px' }}
            variant='outlined'
            color='secondary'
            onClick={logout}
          >
            Logout
          </Button>
        </div>
        <div className={classes.main}>
          <div className={classes.btns}>
            {['Overview', 'My detail', 'Change Password'].map((item, index) => {
              return (
                <Button
                  className={index === btnn ? classes.btn : classes.btnn}
                  key={index}
                  onClick={() => setBtnn(index)}
                >
                  {item}
                </Button>
              )
            })}
          </div>
          {(btnn == 0 && <Order userdata={userdata} />) ||
            (btnn == 1 && (
              <Detail userdata={userdata} updateData={updateData} />
            )) ||
            (btnn == 2 && (
              <ChangePassword userdata={userdata} updateData={updateData} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Profile
