import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashBoard from './Pages/DashBoard.jsx'
import EditProfile from './Pages/EditProfile.jsx'
import FeaturedPage from './Pages/FeaturedPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/dashboard",
    element:<DashBoard />,
  },
  {
    path:"/editprofile",
    element:<EditProfile />,
  },
  {
    path:"/featuredpage",
    element:<FeaturedPage />,
  },
])

const Container = document.getElementById("root")
const root = ReactDOM.createRoot(Container)
root.render(
  <RouterProvider router={router} />
)