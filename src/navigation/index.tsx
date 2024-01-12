// index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from '../screens/UserList';
import Photos from '../screens/Photos';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Photos" component={Photos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
