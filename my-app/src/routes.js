import React from 'react'
import {Route, Routes} from 'react-router-dom';

import User from './pages/User'
import Login from './pages/Login'
import Detail from './pages/Detail'

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/detail/:username/:projname" element={<Detail />} />
      </Routes>
    </div>
  )
}
