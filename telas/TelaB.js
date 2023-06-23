import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput} from "react-native";

export function TelaB({navigation}) {
    return (
        
        <View style={{JustifyContent:'center'}}>
                        <View style={styles.container}>
                                <View
                                    style={{
                                    flexDirection: 'row',
                                    height: 70,
                                    padding: 30,
                                    }}>
                                    <Text style={styles.text}>Welcome!</Text>
                                </View>
                            <br></br>
                            <Image style={styles.imagem} source={require('../assets/img1.png')}/>
                           

                        </View>
                        
                        <View>       
                                    <TextInput
                                     style={styles.input}
                                    placeholder="E-mail">

                                    </TextInput>
                                    <br></br>

                                    <TextInput
                                     style={styles.input}                                    
                                    placeholder="Senha">

                                    </TextInput>

                        </View>

                                    <View>   

                                    <Button title="Login" onPress={() => navigation.navigate('TelaA')}></Button>
                                    
                                    </View>

         </View>
         );
        }
               
                       
                 


 const styles = StyleSheet.create({
     container: {
      paddingTop: 50,
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

    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

      button: {        
        height: 40,
        width:200,
        margin: 12,
        padding: 10,
      }
    });


