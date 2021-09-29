import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet'
import Videoo from '../component/Video'
const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

const VideoPage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Zilom | Videos</title>
      </Helmet>
      <div>
        <Videoo />
      </div>
    </>
  )
}
export default VideoPage
