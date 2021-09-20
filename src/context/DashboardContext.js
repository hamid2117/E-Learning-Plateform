import React, { createContext, useContext, useState } from 'react'
const AdminUiContext = createContext()

export const AdminUiProvider = ({ children }) => {
  const [adminCourse, setAdminCourse] = useState(false)

  const adminCloseCourse = () => {
    setAdminCourse(false)
  }
  const adminOpenCourse = () => {
    setAdminCourse(true)
  }

  return (
    <AdminUiContext.Provider
      value={{
        adminCloseCourse,
        adminOpenCourse,
        adminCourse,
      }}
    >
      {children}
    </AdminUiContext.Provider>
  )
}
export const useAdminUiContext = () => {
  return useContext(AdminUiContext)
}
