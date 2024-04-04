import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './Pages/login.jsx'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import RegisterPage from './Pages/register.jsx'
import NotFound from './Pages/404.jsx'
import Product from './Pages/product.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
     <h1>Home Page</h1>
       <Link to="/login">Login Page</Link>
       <br />
       <Link to="/login">Register Page</Link>
      </div>,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/product",
    element: <Product />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
