/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 /**
https://github.com/neemanwa/DisneyCharacters
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DisneyCharList from './DisneyCharList';
import DisneyCharDetails from './DisneyCharDetails';

import {Provider} from 'react-redux';
import DisneyCharReducer from '../redux/reducers/DisneyCharReducer';
import {createStore, combineReducers} from 'redux';
import {GET_DISNEY_CHAR_REDUCERS} from '../Constants/constants';


const Stack = createNativeStackNavigator();
const myStore = createStore(DisneyCharReducer);


function App() {
    return (
      <Provider store = {myStore}>
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
    </Provider>
  );
}

export default App;
