import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput , CheckBox} from "react-native";
import React, {useState} from 'react';

export function TelaA({navigation}) {
    const [isSelected, setSelection] = useState(false);
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
                                    placeholder="qual teu vulgo">

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
                            style={styles.checkbox}
                            />
                            <Text style={styles.label}>Voce está de acordo com os termos de uso.</Text>
                        </View>
                        </View>
                    

                                <View>   

                                    <Button title="Login" onPress={() => navigation.navigate('TelaB')}></Button>
                                    
                                </View>
                                <View>   

                                    <Button title="Login" onPress={() => navigation.navigate('TelaB')}></Button>
                                    
                                </View>
                                

                            
         </View>
    );
    
               
                       
                 


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
        width:200,
        margin: 12,
        padding: 10,
      }
    });



        
   

}
