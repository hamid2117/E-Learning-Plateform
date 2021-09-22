import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './context/Uicontext'
import { AuthProvider } from './context/AuthContext'
import { AdminUiProvider } from './context/DashboardContext'
import { FilterProvider } from './context/FilterContext'
import { CartProvider } from './context/cart_context'
import { UpdateProvider } from './context/courseContext'
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AdminUiProvider>
        <UpdateProvider>
          <CartProvider>
            <FilterProvider>
              <AppProvider>
                <App />
              </AppProvider>
            </FilterProvider>
          </CartProvider>
        </UpdateProvider>
      </AdminUiProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
