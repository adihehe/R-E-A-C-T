import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter, useRouteLoaderData } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User.jsx'
import Github from './Github.jsx'

const route = createBrowserRouter([
  {path : "/",
    element: <Layout/>,
    children: [
      {path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },{
        path: "/contact",
        element: <Contact/>
      },
      {
        path: ":userid",
        element: <User/>
      },{
        path: "github",
        element: <Github/>,
        loader: ()=>{

          return fetch('https://api.github.com/users/hiteshchoudhary').then((res)=>res.json())
        }
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={route} />
  </React.StrictMode>,
)
