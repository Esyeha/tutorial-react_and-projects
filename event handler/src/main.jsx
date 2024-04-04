import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './Pages/login.jsx'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import RegisterPage from './Pages/register.jsx'
import NotFound from './Pages/404.jsx'
import Product from './Pages/product.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div >
     <Navbar judul="Home Page"/>
        <div className='text-blue-500 px-2 underline'>
       <Link to="/login">Login Page</Link>
       <br />
       <Link to="/login">Register Page</Link>
       <br />
       <Link to="/product">Product Page</Link>
        </div>
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
