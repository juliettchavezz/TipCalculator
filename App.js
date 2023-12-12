import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ventana1 from './Ventanas/Ventana1';
import Ventana2 from './Ventanas/Ventana2';
import AboutScreen from './Ventanas/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ventana1" component={Ventana1} options={{ title: 'Propina' }} />
        <Tab.Screen name="Ventana2" component={Ventana2} options={{ title: 'Contribución' }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: 'Preferencias' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
