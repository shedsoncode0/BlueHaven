import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

const AuthLayout = () => {
  const { user, loading } = useAuth();

  console.log(user);

  // Show nothing or a loader while checking auth
  if (loading) return <p>Loading...</p>;

  // If logged in, redirect to dashboard
  if (user) return <Navigate to="/dashboard" />;

  // Otherwise show login/signup pages
  return (
    <section>
      <Outlet />
    </section>
  );
};

export default AuthLayout;
