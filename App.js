import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaA } from './telas/TelaA';
import { TelaB } from './telas/TelaB';
import { TelaC } from './telas/TelaC';
import { TelaD } from './telas/TelaD';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaC'>
        <Stack.Screen name='TelaA' component={TelaA}/>
        <Stack.Screen name='TelaB' component={TelaB}/>
        <Stack.Screen name='TelaC' component={TelaC}/>
        <Stack.Screen name='TelaD' component={TelaD}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
