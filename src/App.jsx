import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from './context/AuthContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
