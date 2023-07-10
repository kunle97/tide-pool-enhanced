import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/userSlice';

const RequireAuth = () => {
  const user = useSelector(selectUser);
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};

export default RequireAuth;
