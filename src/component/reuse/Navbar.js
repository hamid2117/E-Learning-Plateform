import React from 'react'
// import logo from './images/logo.svg'
import MenuIcon from '@material-ui/icons/Menu'
import { useUiContext } from './../../context/Uicontext'
import Logo from '../../img/logo.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useAuthContext } from '../../context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import { Button, Menu, MenuItem } from '@material-ui/core'
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useUiContext()
  const matches = useMediaQuery('(max-width:800px)')
  const { logout, userdata } = useAuthContext()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const location = useLocation()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  console.log(userdata)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    setAnchorEl(null)
    logout()
  }
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  if (location.pathname.match('/account')) {
    return null
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          {matches && (
            <img
              src={Logo}
              style={{ width: '90px' }}
              className='nav-logo'
              alt=''
            />
          )}
          <button className='btn toggle-btn' onClick={openSidebar}>
            <MenuIcon />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              courses
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              teachers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              pages
            </button>
          </li>
        </ul>
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
              <MenuItem onClick={handleLogout}>Logout </MenuItem>
            </Menu>
          </>
        ) : (
          <Link to='/account' className='btn signin-btn'>
            Sign in
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
