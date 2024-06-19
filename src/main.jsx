import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Donation from './Donation/Donation'
import Statistics from './Statistics/Statistics'
import Root from './Root/Root'
import ErrorPage from './Error/ErrorPage'

const router= createBrowserRouter([
 {
  path: "/",
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/donation',
      element:<Donation></Donation>
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
  
  ]
  
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
