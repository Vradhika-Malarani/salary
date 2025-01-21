import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Contact from './Contact'
import AccessModule from './AccessModule'
import UserRoles from './UserRoles'
import ResetPassword from './ResetPassword'
import MenuAllocation from './MenuAllocation'\
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/AccessModule'element={<AccessModule/>}/>
            <Route path='/UserRoles' element={<UserRoles/>}/>
            <Route path='/ResetPassword' element={<ResetPassword/>}/>
            <Route path='/MenuAllocation' element={<MenuAllocation/>}/>
            <Route path='/MainPage' element={<Mainpage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router