import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const investor = localStorage.getItem('investor');
  
  if (!investor) {
    return <Navigate to="/shaft-tank/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 