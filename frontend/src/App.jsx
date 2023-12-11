
import './App.css'
import AddUser from './views/AddUser'
import ListUsers from './views/ListUsers'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/add' element={<AddUser />} />
      <Route path='/' element={<ListUsers />
      } />

    </Routes>

  )
}

export default App
