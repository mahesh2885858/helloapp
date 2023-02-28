/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import {

  StyleSheet, Text, View

} from 'react-native';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './components/ProfileScreen';

// enableScreens()
const Stack = createNativeStackNavigator()
function App(): JSX.Element {


  return (

    <>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />


        </Stack.Navigator>
        {/* <View><Text>mahesh</Text></View> */}
      </NavigationContainer>
    </>
  );
}



export default App;
