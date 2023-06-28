import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaA } from './telas/TelaA';
import { TelaB } from './telas/TelaB';
import { TelaC } from './telas/TelaC';
import { TelaD } from './telas/TelaD';
import { TelaE } from './telas/TelaE';
import { TelaF } from './telas/TelaF';
import { TelaG } from './telas/TelaG';
import { TelaH } from './telas/TelaH';
import { TelaI } from './telas/TelaI';
import { TelaJ } from './telas/TelaJ';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='TelaB'>
        <Stack.Screen name='TelaA'  component={TelaA} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaB' component={TelaB} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaC' component={TelaC} options={{ headerShown: false }} />
        <Stack.Screen name='TelaD' component={TelaD} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaE' component={TelaE} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaF' component={TelaF} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaG' component={TelaG} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaH' component={TelaH} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaI' component={TelaI} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaJ' component={TelaJ} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
