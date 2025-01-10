import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router