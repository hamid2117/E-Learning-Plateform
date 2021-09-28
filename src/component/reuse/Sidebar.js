import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { useUiContext } from '../../context/Uicontext'
import sublinks from './navdata'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useUiContext()
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
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
