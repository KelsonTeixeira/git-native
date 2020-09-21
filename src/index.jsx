import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/auth';

import Router from './router';

const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </NavigationContainer>
);

export default App;