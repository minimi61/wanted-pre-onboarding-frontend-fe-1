import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../api/apis';

const PrivateRoute = ({element: Element, ...rest}) => {
  return (
     isLogin() ? <Outlet/> :  <Navigate to= '/'/>
  )
}

export default PrivateRoute