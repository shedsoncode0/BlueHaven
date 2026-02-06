import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './pages/Home'
import RootLayout from './_root/RootLayout'
import AuthLayout from './_auth/AuthLayout'
import Signup from './_auth/forms/Signup'
import Login from './_auth/forms/Login'
import Dashboard from './_root/pages/Dashboard'
import Level from './_root/pages/Level'
import Referral from './_root/pages/Referral'
import Settings from './_root/pages/Settings'

function App() {

  return (
    <Routes>
      {/* Public */}
      <Route element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        {/* <Route path='/sign-in' element={<SigninForm />} />
        <Route path='/sign-up' element={<SignupForm />} /> */}
      </Route>


      {/* Private */}
      <Route element={<RootLayout />}>
        <Route path='/referral' element={<Referral />} />
        <Route path='/stage' element={<Level />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
