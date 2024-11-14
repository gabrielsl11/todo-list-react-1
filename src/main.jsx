import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './pages/Details.jsx'
import App from './App.jsx'
import './index.css'

var router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/details',
    element: <Details />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
