import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>Show the home page </div>
  },
  {

    path: '/about',
    element:<div>Here is the about page </div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRouter}></RouterProvider>
  </React.StrictMode>,
)
