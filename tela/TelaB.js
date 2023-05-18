import React from 'react';
import { View,Button } from 'react-native';

export function TelaB({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:'blue'}}>
        <Button
        title='Ir para tela A'
        onPress={()=>navigation.navigate('TelaA')}

        ></Button>

        

    </View>
  );
}