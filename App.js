import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaA } from './telas/TelaA';
import { TelaB } from './telas/TelaB';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaB'>
        <Stack.Screen name='TelaA' component={TelaA}/>
        <Stack.Screen name='TelaB' component={TelaB}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
