import React from 'react'
// import logo from './images/logo.svg'
import MenuIcon from '@material-ui/icons/Menu'
import { useUiContext } from './../../context/Uicontext'
import Logo from '../../img/logo.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link, useLocation } from 'react-router-dom'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import { ShoppingBasket } from '@material-ui/icons'
import { Button, Menu, MenuItem, IconButton } from '@material-ui/core'
import { useAuthContext } from '../../context/AuthContext'
import { Badge } from '@material-ui/core'
import { useCartContext } from '../../context/cart_context'
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useUiContext()
  const matches = useMediaQuery('(max-width:800px)')
  // const matches = useMediaQuery('(max-width:800px)')
  const { logout, userdata } = useAuthContext()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const location = useLocation()
  const { total_items } = useCartContext()

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
  if (userdata.isAdmin) {
    return null
  }
  if (location.pathname.match('/account')) {
    if (!matches) {
      return null
    } else {
      return (
        <nav className='nav' onMouseOver={handleSubmenu}>
          <div className='nav-center'>
            <div className='nav-header'>
              {matches ? (
                <Link to='/'>
                  <img
                    src={Logo}
                    style={{ width: '90px' }}
                    className='nav-logo'
                    alt=''
                  />
                </Link>
              ) : (
                <div>
                  <IconButton
                    aria-label='cart'
                    component={Link}
                    to='/basket'
                    style={{ color: 'black' }}
                  >
                    <Badge badgeContent={total_items} color='primary'>
                      <ShoppingBasket />
                    </Badge>
                  </IconButton>
                </div>
              )}
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
                  <MenuItem
                    component={Link}
                    to='/profile'
                    onClick={handleClose}
                  >
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
        </nav>
      )
    }
  } else {
    return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            {matches ? (
              <Link to='/'>
                <img
                  src={Logo}
                  style={{ width: '90px' }}
                  className='nav-logo'
                  alt=''
                />
              </Link>
            ) : (
              <div>
                <IconButton
                  aria-label='cart'
                  component={Link}
                  to='/basket'
                  style={{ color: 'black' }}
                >
                  <Badge badgeContent={total_items} color='primary'>
                    <ShoppingBasket />
                  </Badge>
                </IconButton>
              </div>
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
      </nav>
    )
  }
}

export default Navbar
