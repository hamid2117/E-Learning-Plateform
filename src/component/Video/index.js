import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { courseData } from './FakeData'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CourseDetail from './CourseDetail'
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
}))

const VideoPage = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:1080px)')
  const matchess = useMediaQuery('(min-width:768px)')
  const matchesss = useMediaQuery('(min-width:500px)')
  const { heading, video } = courseData[0]
  const { link } = video[0]
  const [linked, setLinked] = useState(link)
  const updateLink = (newLink) => {
    setLinked(newLink)
  }
  return (
    <>
      <div className={classes.main}>
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
