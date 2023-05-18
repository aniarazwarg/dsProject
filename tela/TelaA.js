import React from 'react';
import { View,Button } from 'react-native';
//importei o botao

//exportando a função navigation.
export function TelaA({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:'red'}}>
        <Button
        title='Ir para tela B'
        onPress={()=>navigation.navigate('TelaB')}

        ></Button>

        

    </View>
  );
}