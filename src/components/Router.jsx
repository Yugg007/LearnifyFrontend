import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Profile from './Profile'
import MyCourses from './MyCourses'
import Notification from './Notification';
import Cart from './Cart'
import TeachOnline from './TeachOnline'

const Router = ({ userDetail }) => {
    console.log("router page- " ,userDetail)
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Homepage userDetail={userDetail} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/my-courses' element={<MyCourses />} />
            <Route path='/teach-online' element={<TeachOnline />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </>
  )
}

export default Router