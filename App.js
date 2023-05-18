import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground } from 
'react-native';
import { TextInput } from 'react-native-web';


import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TelaA } from './tela/TelaA';
import { TelaB } from './tela/TelaB';


const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaA'>
        <Stack.Screen name='TelaA' component={TelaA} />
        <Stack.Screen name='TelaB' component={TelaB} />
      </Stack.Navigator>
    </NavigationContainer>

);
}




//     <View style={styles.container}>
//       <TelaA/>


// <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
// <Text style={styles.texto}>2ds3</Text>
//       <TextInput style={styles.input}placeholder = 'Usuário'></TextInput>
//       <TextInput style={styles.input} placeholder = 'Senha'></TextInput>
//       <Button title='Login'></Button>

//     </ImageBackground>
      
      

//       <StatusBar style="auto" />
//     </View>

// const image = {uri: 'https://reactjs.org/logo-og.png'};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   texto: {
//     color: 'white',
//     fontSize: 32,
//     lineHeight: 54,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
    
//   },

//   input:{
//     color: 'white',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//     fontStyle:'italic',
//   },
 
// });


  




