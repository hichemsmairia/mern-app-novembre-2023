
import './App.css'
import AddUser from './views/AddUser'
import ListUsers from './views/ListUsers'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import UpdateUser from './views/UpdateUser'
import 'react-toastify/dist/ReactToastify.css';
import Login from './views/Login'
import Register from './views/Register'
import ProtectedRoutes from './layout/ProtectedRoutes'
import Fils from './views/Fils'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/add' element={<ProtectedRoutes><AddUser /></ProtectedRoutes>} />
        <Route path='/' element={<ProtectedRoutes><ListUsers /></ProtectedRoutes>} />
        <Route path='/update/:id' element={<ProtectedRoutes><UpdateUser /></ProtectedRoutes>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </>

  )
}

export default App


// ====> hoc = high order component 


/*

 <Navbar />
      <Routes>
        <Route path='/add' element={<ProtectedRoutes><AddUser /></ProtectedRoutes>} />
        <Route path='/' element={ <ProtectedRoutes><ListUsers /></ProtectedRoutes> } />
        <Route path='/update/:id' element={<ProtectedRoutes><UpdateUser /></ProtectedRoutes>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>


*/