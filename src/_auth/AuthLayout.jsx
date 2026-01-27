import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../store/useAuthStore';

const AuthLayout = () => {
  const {isAuthenticated } = useAuthStore();
  
  return (
    <>
    {isAuthenticated ? (
      <Navigate to="/dashboard" />
    ) : (
      <>
        <section className=''>
          <Outlet />
        </section>
      </>
    )}
    </>
  )
}

export default AuthLayout