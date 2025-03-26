import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ type }) => {
  const user = localStorage.getItem(type);
  
  if (!user) {
    return <Navigate to="/shaft-tank/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 