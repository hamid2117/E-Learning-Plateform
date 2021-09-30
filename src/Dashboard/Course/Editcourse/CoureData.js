import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Divider, IconButton, Grid } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useGlobalContext } from './../../../context/courseContext'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'grid',
    gap: '20px 30px',
    gridTemplateColumns: '1fr',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr auto',
    gap: '40px 60px',
  },
}))

const CourseData = () => {
  const classes = useStyles()
  const {
    AddItem_Cart,
    courseData,
    Delete_Cart,
    handleChangeVideo,
    handleChangeCourse,
    AddItem_Video,
    Delete_Video,
    AddItem_Course,
    Delete_Course,
  } = useGlobalContext()

  return (
    <>
      <Grid>
        {courseData.map((data, index) => {
          const { _id: courseId, heading, video } = data
          return (
            <>
              <form key={index} className={classes.gridItem}>
                <TextField
                  id={courseId}
                  required
                  label='Course Chapter title '
                  variant='outlined'
                  name='heading'
                  type='text'
                  value={heading}
                  onChange={handleChangeCourse}
                />
                {video.map((data, index) => {
                  const { _id, heading, time, link } = data
                  return (
                    <>
                      <div key={index} className={classes.grid}>
                        <TextField
                          id={_id || index}
                          required
                          label='Course video title '
                          variant='standard'
                          name='heading'
                          type='text'
                          value={heading}
                          onChange={(e) => handleChangeVideo(e, courseId)}
                        />
                        <TextField
                          id={_id || index}
                          required
                          label='Video Timing'
                          variant='standard'
                          name='time'
                          type='text'
                          value={time}
                          onChange={(e) => handleChangeVideo(e, courseId)}
                        />
                        <TextField
                          id={_id || index}
                          required
                          label='Video Link'
                          variant='standard'
                          name='link'
                          type='text'
                          value={link}
                          onChange={(e) => handleChangeVideo(e, courseId)}
                        />
                        <div>
                          <IconButton
                            onClick={() => Delete_Video(_id || index)}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      </div>
                    </>
                  )
                })}
                <Button
                  style={{ width: '100%' }}
                  startIcon={<ShoppingBasketIcon />}
                  onClick={() => AddItem_Video(courseId)}
                >
                  Add Video
                </Button>
                {courseData.length !== 1 && (
                  <div>
                    <IconButton onClick={() => Delete_Course(courseId)}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </div>
                )}
              </form>
              <Divider style={{ marginBottom: '20px' }} />
            </>
          )
        })}
        <Button
          style={{ width: '100%' }}
          startIcon={<ShoppingBasketIcon />}
          onClick={() => AddItem_Course()}
        >
          Add Chapter
        </Button>
      </Grid>
    </>
  )
}

export default CourseData
