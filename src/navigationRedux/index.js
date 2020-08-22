import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './Store';

import Home from './screens/Home';

const Stack = createStackNavigator();

function User() {
  return (
    <Text>User Screen</Text>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='User' component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
