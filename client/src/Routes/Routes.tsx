import { createBrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home'
import Layout from '../Layout/layout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Landing from '../Pages/Landing'
const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/playMates',
        element: <Landing />,
      },
    ],
  },
])

export default Routes
