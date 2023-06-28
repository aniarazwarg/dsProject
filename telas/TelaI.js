import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput, } from "react-native";
import { Link } from '@react-navigation/native';

export function TelaI({navigation}) {
    return (
        
      <View style={{JustifyContent:'center'}}>
            <View style={styles.container}>
               <View style={{
                 flexDirection: 'row',
                 height: 70,
                  padding: 40,
                }}>
                 <Text style={styles.text}>Escaneie este Qr code!</Text>
                </View>
                            <br></br>
                            <Image style={styles.imagem} source={require('../assets/qr.png')}/>
                           
                            <Text style={styles.text}>SEU NOME</Text>
                            <Text style={styles.text}>E-mail@email.com</Text>
                         </View>
                        
                        <View>       
                        <View style={{alignSelf:'center'}}>
                 <Text >Tente com o codigo de barras</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                            <Image style={{height:50,width:100}} source={require('../assets/barras.png')}/>
                           
                            <Text style={styles.text}>SEU NOME</Text>
                            <Text style={styles.text}>E-mail@email.com</Text>
                         </View>
                         </View>
                         

                        

                                   

                                    <View style={{alignSelf:'center'}}>
                                   
                                    <text>Não pode escanear?<Link to="/TelaJ"style={{color:'blue'}}>digite as informaçoes da conta.</Link></text>
    </View>

         </View>
         );
        }
               
                       
                 


 const styles = StyleSheet.create({
     container: {
      padding: 50,
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


