import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { useUiContext } from '../../context/Uicontext'
import sublinks from './navdata'
import { Link } from 'react-router-dom'
import { Button, MenuItem, Menu } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import { useAuthContext } from '../../context/AuthContext'
const Sidebar = () => {
  const { logout, userdata } = useAuthContext()
  const { isSidebarOpen, closeSidebar } = useUiContext()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    setAnchorEl(null)
    logout()
  }
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <CloseIcon />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <Link key={index} to={url} onClick={closeSidebar}>
                        {icon}
                        {label}
                      </Link>
                    )
                  })}
                </div>
              </article>
            )
          })}
          {userdata.email ? (
            <>
              <Button
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
                endIcon={<ExpandIcon />}
              >
                {userdata.name}
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to='/profile' onClick={handleClose}>
                  Profile{' '}
                </MenuItem>
                {userdata.isAdmin && (
                  <MenuItem
                    component={Link}
                    to='/dashboard'
                    onClick={handleClose}
                  >
                    Dashboard
                  </MenuItem>
                )}
                {userdata.teacher && (
                  <MenuItem
                    component={Link}
                    to='/tcourselist'
                    onClick={handleClose}
                  >
                    My dashboard
                  </MenuItem>
                )}
                <MenuItem onClick={handleLogout}>Logout </MenuItem>
              </Menu>
            </>
          ) : (
            <Link to='/account' className='btn signin-btn'>
              Sign in
            </Link>
          )}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
