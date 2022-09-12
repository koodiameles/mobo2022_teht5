
import React from 'react';
import { Calculator } from './components/Calculator';
import { History } from './components/History';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'teal',
          headerStyle: { backgroundColor: 'black' },
        }}>
        <Stack.Screen component={Calculator} name="Laskin" />
        <Stack.Screen component={History} name="Historia" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}