import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput,Card} from "react-native";
// import { Card } from 'react-native-elements';

export function TelaC({navigation}) {
    return (
        
      <View style={{JustifyContent:'center'}}>
            <View style={styles.container}>
               {/* <View style={{
                 flexDirection: 'row',
                 height: 70,
                  padding: 40,
                }}>
                 <Text style={styles.text}>Welcome!</Text> */}
                {/* </View> */}
                            <br></br>
                            <Image style={styles.imagem} source={require('../assets/user.png')}/>
                           <Text style={styles.text}>NOME</Text>
                           <Text style={styles.text1}>email@email.com</Text>

                           
                            {/* <Card>
                                
                                <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                                
                            </Card> */}
                            

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


