import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CourseDetail from './CourseDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext'
import { Apis } from '../../Api'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0px auto',
    '@media (max-width: 1080px)': {
      maxWidth: '768px',
    },
    '@media (max-width: 768px)': {
      maxWidth: '500px',
    },
    '@media (max-width: 500px)': {
      maxWidth: '90%',
    },
  },
  video: {
    margin: '70px 0px',
    padding: '0px auto',
  },
  content: {
    marginBottom: '40px',
  },
  loading: {
    height: '80vh',
    display: 'grid',
    placeItems: 'center',
  },
  heading: {
    marginTop: '20px',
  },
}))

const VideoPage = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [courseData, setCourseData] = useState([])
  const [heading, setHeading] = useState('')
  const [linked, setLinked] = useState('')

  const { userdata } = useAuthContext()
  const { id } = useParams()
  const { token } = userdata
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  useEffect(async () => {
    setLoading(true)
    const { data } = await axios.get(`${Apis}video/${id}`, config)
    setCourseData(data.courseData)
    setHeading(data.heading)
    const { heading, video } = data.courseData[0]
    const { link } = video[0]
    setLinked(link)
    setLoading(false)
  }, [id])
  const matches = useMediaQuery('(min-width:1080px)')
  const matchess = useMediaQuery('(min-width:768px)')
  const matchesss = useMediaQuery('(min-width:500px)')

  const updateLink = (newLink) => {
    setLinked(newLink)
  }
  if (loading) {
    return (
      <section className={classes.loading}>
        <div class='lds-hourglass'></div>
      </section>
    )
  }

  return (
    <>
      <div className={classes.main}>
        {matchess && (
          <div className={classes.heading}>
            <h4>{heading}</h4>
          </div>
        )}
        <div className={classes.video}>
          <iframe
            width={
              matches ? '1080' : matchess ? '768' : matchesss ? '500' : '330'
            }
            height={
              matches ? '480' : matchess ? '400' : matchess ? '300' : '220'
            }
            className={classes.realvideo}
            src={`${linked}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
        <div className={classes.content}>
          <CourseDetail courseData={courseData} updateLink={updateLink} />
        </div>
      </div>
    </>
  )
}
export default VideoPage
