import { View, Button, Image, StyleSheet, Text, TextInput , CheckBox} from "react-native";
import React, {useState} from 'react';
import { Link } from '@react-navigation/native';

export function TelaA({navigation}) 
{const [isSelected, setSelection] = useState(false);
    return (
    <View style={{JustifyContent:'center'}}> 
        <View style={styles.container}>
        {/* <View style={{
                 flexDirection: 'row',
                 height: 50,
                  padding: 40,
                }}>
                 <Text style={styles.text}>Welcome!</Text>
                </View>
                <br></br> */}
                           
                <View style={{flexDirection: 'row',
              padding: 40,}}>
                            <Image style={styles.imagem} source={require('../assets/user.png')}/> 
                            <Image style={styles.imagem} source={require('../assets/conecta.png')}/>             
                            <Image style={styles.imagem} source={require('../assets/img1.png')}/> 
                </View>
        </View>

            

        <View>
            
         <TextInput
          style={styles.input}
         placeholder="qual seu nome">
          
           </TextInput>
          <br></br>
          
           <TextInput
           style={styles.input}                                    
          placeholder="Conta bancária">
          </TextInput>
           <br></br>
           <TextInput
           style={styles.input}                                    
           placeholder="E-mail">
          </TextInput>
           <br></br>
          <TextInput
            style={styles.input}                                    
           placeholder="Senha">
         </TextInput>
          
           <Text style={styles.text2}>A senha precisa ter mais de 6 caracteres, uma maiúcula e um especial (@!#...)</Text>
          <br></br>
             <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox} />
                <Text style={styles.label}>Voce está de acordo com os termos de uso.</Text>
            </View>
        </View>
                              
          
          
        <View style={{flexDirection: 'row',
              justifyContent:'center',}}>   
          
          <Button title="Cadastrar" onPress={() => navigation.navigate('TelaC')}></Button>
          <View style={{ width: 10 }} />
          <Text style={styles.text2}>OR</Text>
          <View style={{ width: 10 }} />
          <Button title="Cancelar" onPress={() => navigation.navigate('TelaB')}></Button>
          
                                              
        </View>
        <View style={{alignSelf:'center'}}>
                                    
                                    <text>Ja está cadastrado? acesso?<Link to="/TelaB"style={{color:'blue'}}>Login</Link></text>
    </View>
                                                             
    </View>
      );
}
  
        


     const styles = StyleSheet.create({
        container: {
         paddingTop: 0,
         backgroundColor: 'blue',
         textShadowColor: 'white',
         JustifyContent:'center',
         alignItems:'center',
       },
    
        imagem: {
        width: 100,
        height: 100,
        },
    
        text: {
            color:'white',
        },

        text2: {
            color: 'blue',
        },

        input: {
            backgroundColor: 'white',
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },  

        checkboxContainer: {
            flexDirection: 'row',
            marginBottom: 20,
        },
        checkbox: {
            alignSelf: 'center',
        },
        label: {
            margin: 8,
        },
        

      button: {        
        height: 40,
        width:100,
        margin: 52,
        padding: 40,
      }

    });