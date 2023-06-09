import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact'
import Portfolio from './routes/Portfolio'
import Services from './routes/Services'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Error from './routes/Error'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />
  },
  {
    path: "/portfolio",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Portfolio />
      },
      {
        path: ":portfolioid",
        element: <Gallery category={"portfolio"} />
      }
    ]
  },
  {
    path: "/services",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Services />
      },
      {
        path: ":serviceid",
        element: <Gallery category={"service"} />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
