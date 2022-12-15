import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Basket from './basket'
import Login from './login'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:'/main',
    element:<App/>
  },
  {
    path:'/basket',
    element:<Basket/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
