import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50', // Change header background color
          },
          headerTintColor: '#fff', // Change header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Change header text font weight
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleStyle: {
              color: '#fff', // Change header title color
            },
          }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            headerTitleStyle: {
              color: '#fff', // Change header title color
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;