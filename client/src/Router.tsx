import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CreateImage } from './pages/CreateImage'
import { EditImage } from './pages/EditImage'
import { ViewImage } from './pages/ViewImage'

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/create',
        element: <CreateImage />,
      },
      {
        path: '/edit',
        element: <EditImage />,
      },
      {
        path: '/view',
        element: <ViewImage />,
      },
    ],
  },
])
