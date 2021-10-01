import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DataAcc from './DataAcc'
const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
  },
  main: {
    maxHeight: '100%',
    border: '1.5px solid #f1f1f3',
    borderRadius: '15px',
  },
  heading: {
    height: '80px',
    maxWidth: '92%',
    margin: '0px auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    '& div': {
      justifySelf: 'end',
      '& span': {
        marginLeft: '30px',
      },
    },
  },
  main2: {
    width: '90%',
    display: 'block',
    margin: '0px auto',
  },
}))

const Accordian = ({ courseData }) => {
  const classes = useStyles()
  const { lessons } = courseData.reduce(
    (total, data) => {
      const number = data.video.length
      total.lessons += number
      return total
    },
    {
      lessons: 0,
    }
  )

  return (
    <>
      <section className={classes.main}>
        <div className={classes.heading}>
          <h4>Topics for this course</h4>
          <div>
            <p>
              {courseData.length} chapters <span>{lessons} Videos</span>
            </p>
          </div>
        </div>
        <div className={classes.main2}>
          {courseData.map((dataa) => {
            return <DataAcc {...dataa} key={dataa.id} />
          })}
        </div>
      </section>
    </>
  )
}

export default Accordian
