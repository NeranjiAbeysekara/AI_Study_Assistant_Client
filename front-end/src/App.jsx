import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from './pages/Signup'
import Calender from './pages/Calender'
import ChatPage from './pages/ChatPage'
import Dashboard from './pages/Dashboard'
import Notification from './pages/Notification'
import  ProfilePage from './pages/ProfilePage'
import Resources from './pages/Resources'
import Tasks from './pages/Tasks'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/chatpage' element={<ChatPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
      </Routes>
      
    </div>
  )
}

export default App
