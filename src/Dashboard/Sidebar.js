import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Paper, Tooltip } from '@material-ui/core'
import { Sidebar } from '../DummyData'
import { Link, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid',
    marginTop: '50px',
    marginRight: '10px',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    height: '250px',
    position: 'sticky',
    top: '15px',
  },
  btn: {
    height: '50px',
    borderRadius: '0px',
  },
}))

const App = () => {
  const location = useLocation()
  const classes = useStyles()

  return (
    <Paper className={classes.main}>
      {Sidebar.map((data) => {
        const { Icon, id, link, heading } = data
        return (
          <Tooltip key={id} title={heading} arrow>
            <IconButton
              component={Link}
              to={link}
              style={
                location.pathname === link
                  ? {
                      borderLeft: '5px solid #0894fc',
                      backgroundColor: '#e6f4ff',
                    }
                  : null
              }
              className={classes.btn}
              variant='outlined'
            >
              <Icon style={{ color: '#0785e3' }} />
            </IconButton>
          </Tooltip>
        )
      })}
    </Paper>
  )
}
export default App
