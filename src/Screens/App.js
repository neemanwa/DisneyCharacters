/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DisneyCharList from './DisneyCharList';
import DisneyCharDetails from './DisneyCharDetails';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator
        screenOptions ={
          {
            headerShown: false
          }
        }>
     <Stack.Screen name="DisneyCharList" component={DisneyCharList}/>
     <Stack.Screen name="DisneyCharDetails" component={DisneyCharDetails}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
