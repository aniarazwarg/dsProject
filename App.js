import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaA } from './telas/TelaA';
import { TelaB } from './telas/TelaB';
import { TelaC } from './telas/TelaC';
import { TelaD } from './telas/TelaD';
import { TelaE } from './telas/TelaE';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='TelaE'>
        <Stack.Screen name='TelaA'  component={TelaA} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaB' component={TelaB} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaC' component={TelaC} options={{ headerShown: false }} />
        <Stack.Screen name='TelaD' component={TelaD} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaE' component={TelaE} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
