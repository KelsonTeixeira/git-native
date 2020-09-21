import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AuthRouter from './auth.router';
import HomeRouter from './home.router';

const Router = () => {

  const { login } = useContext(AuthContext);  
  
  return login? <HomeRouter /> : <AuthRouter />;
}

export default Router;