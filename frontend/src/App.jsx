
import './App.css'
import AddUser from './views/AddUser'
import ListUsers from './views/ListUsers'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import UpdateUser from './views/UpdateUser'
import 'react-toastify/dist/ReactToastify.css';
import Login from './views/Login'
import Register from './views/Register'

function App() {

  return (
    <>

      <Routes><Route path='/add' element={<AddUser />} />
        <Route path='/' element={<ListUsers />} />
        <Route path='/update/:id' element={<UpdateUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>

  )
}

export default App
