import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../api/apis';
import TodoMain from '../pages/TodoMain';

const PrivateRoute = () => {
  return (
     isLogin() ? <Outlet/> :  <Navigate to= '/'/>
  )
}

export default PrivateRoute