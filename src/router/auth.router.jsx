import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/login';

const AuthStack = createStackNavigator();

const AuthRouter = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='Login' component={Login} />
  </AuthStack.Navigator>
);

export default AuthRouter;