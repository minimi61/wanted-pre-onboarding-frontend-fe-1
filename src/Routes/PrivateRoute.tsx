import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../api/apis';

const PrivateRoute = () => {
  return (
     isLogin() ? <Outlet/> :  <Navigate to= '/'/>
  )
}

export default PrivateRoute