import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Foet from './screen/Foet'
import Fod from './screen/Fod'
import Home from './components/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react'
import RefreshHandler from './pages/RefreshHandler'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to='/login' />
  }


  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/foet' element={<PrivateRoute element={<Foet />} />} />
        <Route path='/fod' element={<PrivateRoute element={<Fod />} />} />
      </Routes>
    </>
  )
}

export default App
