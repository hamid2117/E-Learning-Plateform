import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { CalendarToday, Description, Title } from '@material-ui/icons'
import axios from 'axios'
import { useAuthContext } from '../../../context/AuthContext'
import Formm from './Formm'
import { Apis } from '../../../Api'
// or
const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '90%',
    margin: '0px auto',
    marginBottom: '35px',
  },
  main2: {
    width: '100%',
    maxWidth: '90%',
    margin: '0px auto',
    height: '70vh',
    display: 'grid',
    gap: '9px',
    gridTemplateColumns: '25% 75%',
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
      const { data } = await axios.get(`${Apis}course/${id}`, config)
      if (data) {
        setNewData(data)
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
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
          <h1>Edit Course</h1>
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
              <div style={{ margin: '20px 0px' }}>
                <span style={{ fontWeight: 'bold' }}>Course Detail</span>
              </div>
              <div>
                <Title />
                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.heading}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}> Course category : </span>
                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.category}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}> Course level : </span>
                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.level}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}> Course Price : </span>
                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.price}$
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Course MaxStudent :</span>
                <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
                  {newData && newData.maxStudent}
                </span>
              </div>
              <div style={{ margin: '20px 0px' }}>
                <span style={{ fontWeight: 'bold' }}>More Detail</span>
              </div>
              {newData && newData.enrolled && (
                <div>
                  <span style={{ fontWeight: 'bold' }}> enrolled : </span>
                  <span>
                    {newData && newData.enrolled} {'    '} students
                  </span>
                </div>
              )}
              {newData && newData.review && (
                <div>
                  <span style={{ fontWeight: 'bold' }}>
                    {' '}
                    number of Review :{' '}
                  </span>
                  <span>{newData && newData.review}</span>
                </div>
              )}
              {newData && newData.star && (
                <div>
                  <span style={{ fontWeight: 'bold' }}> Rating Star : </span>
                  <span>{newData && newData.star}</span>
                </div>
              )}
              {newData && newData.lessons && (
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ fontWeight: 'bold' }}> Lessons : </span>
                  <span>{newData && newData.lessons}</span>
                </div>
              )}
              {newData && newData.description && (
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ fontWeight: 'bold' }}> Description : </span>
                  <span>{newData && newData.description}</span>
                </div>
              )}
              {newData && newData.learn && (
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ fontWeight: 'bold' }}>
                    What You gona learn :
                  </span>
                  <span>
                    {newData &&
                      newData.learn.map((data, index) => {
                        const { point } = data
                        return <div key={index}>{point}</div>
                      })}
                  </span>
                </div>
              )}
              {newData && newData.requirement && (
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ fontWeight: 'bold' }}>
                    Requirement for this Course :
                  </span>

                  <span>
                    {newData &&
                      newData.requirement.map((data, index) => {
                        const { point } = data
                        return <div key={index}>{point}</div>
                      })}
                  </span>
                </div>
              )}
              {newData && newData.target && (
                <div style={{ marginBottom: '30px' }}>
                  <span style={{ fontWeight: 'bold' }}>
                    What is target of this course . :
                  </span>

                  <span>
                    {newData &&
                      newData.target.map((data, index) => {
                        const { point } = data
                        return <div key={index}>{point}</div>
                      })}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>edit</span>
            </div>
            <Formm
              config={config}
              id={id}
              setNewData={setNewData}
              Apis={Apis}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default User
