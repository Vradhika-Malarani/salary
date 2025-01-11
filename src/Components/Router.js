import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router