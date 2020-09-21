import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import Home from '../Screens/home';

const HomeStack = createStackNavigator();

const HomeRouter = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
    </HomeStack.Navigator>
  );
}

export default HomeRouter;