import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  Home,
  Error,
  Course,
  SingleCourse,
  Account,
  UpdatePassword,
  Profile,
  UserDashboard,
  CourseDashboard,
  UserEdit,
  CourseEdit,
  Tcourselist,
  Contact,
  About,
  Order,
  Basket,
  Video,
  Checkout,
} from './pages'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Header, Footer, Sidebar, Submenu } from './component/reuse'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles((theme) => ({
  main: {
    '@media (max-width: 500px)': {},
  },
}))

toast.configure({
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})

const App = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:800px)')

  return (
    <>
      <main className={classes.main}>
        <Router>
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {!matches && <Header />}
          <Sidebar />
          <Navbar />
          <Submenu />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/dashboard'>
              <UserDashboard />
            </Route>
            <Route exact path='/video'>
              <Video />
            </Route>
            <Route exact path='/order/:id'>
              <Order />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/basket'>
              <Basket />
            </Route>
            <Route exact path='/useredit/:id'>
              <UserEdit />
            </Route>
            <Route exact path='/courseedit/:id'>
              <CourseEdit />
            </Route>
            <Route exact path='/coursedashboard'>
              <CourseDashboard />
            </Route>
            <Route exact path='/course'>
              <Course />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />
            </Route>
            <Route exact path='/tcourselist'>
              <Tcourselist />
            </Route>
            <Route exact path='/updatepassword/:token'>
              <UpdatePassword />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/course/:id'>
              <SingleCourse />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/account'>
              <Account />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </main>
    </>
  )
}
export default App
