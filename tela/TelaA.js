import React from 'react';
import { View,Button,StyleSheet} from 'react-native';
import { Image } from 'react-native';
//importei o botao

//exportando a função navigation.
export function TelaA({navigation}) {
  return (
    <View style={styles.container

    //  backgroundColor:'mediumaquamarine'
     }>
      <Image style = {styles.Imagem} source={require('../assets/banco.png')}/>
      
    
       {/* <Image source={require('./assets/banco')} style={{width: 400, height: 400}} />  */}


     {/* <View style={{flex: 2, backgroundColor: 'white'}} /> */}

  
        <Button
        title='Ir para tela B'
        onPress={()=>navigation.navigate('TelaB')}

        ></Button>

        

    </View>
  );
}

const styles = StyleSheet.create{{
  container: {
    paddingTop: 50,
    backgroundColor:'blue',
  },

  Imagem: { 
    width:200,
    heidth:200,

  },
}};

  
{/* <View style={styles.container}>
<Text style={styles.texto}>2ds3</Text>
<TextInput style={styles.input}placeholder = 'Usuário'></TextInput>
<TextInput style={styles.input} placeholder = 'Senha'></TextInput>
<Button title='Login'></Button> */}



















{/* const styles = StyleSheet.create({
      container: {
      flex: 1,
      },
      image: {
      flex: 1,
      justifyContent: 'center',
      },
      texto: {
      color: 'white',
      fontSize: 32,
      lineHeight: 54,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',

      },

      input:{
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#000000c0',
      fontStyle:'italic',
      } */}





