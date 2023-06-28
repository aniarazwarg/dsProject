import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput,Card,TouchableOpacity} from "react-native";
// import { Card } from 'react-native-elements';
import { Link } from '@react-navigation/native';




export function TelaH ({navigation}) {
    return (
        
      <View style={{JustifyContent:'center'}}>

                                    <View style={{flexDirection: 'row',
                         justifyContent:'space-around',padding:40}}> 
           
           
           
                                   
                                   <Image style={styles.imgcirculo} source={require('../assets/cambio (1).png')}/>
                                   
                                   
                                   <Image style={styles.imgcirculo} source={require('../assets/cambio (3).png')}/>
                                   
                                   
                                   <Image style={styles.imgcirculo} source={require('../assets/cambio (2).png')}/>
                                   
                                    
                                              
                                   </View>

                                   <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                         
          <TextInput
            style={styles.input2}                                    
           placeholder="Euro">
         </TextInput>
                          </View>
                          <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                          <text>
            Converter para: </text>
            </View>
            <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                         
          <TextInput
            style={styles.input2}                                    
           placeholder="Real">
         </TextInput>
                          </View>

                                   <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                         <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>1</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>2</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>3</text>
                          </View>
                          </View>

                          <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                         <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>4</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>5</text>
                          </View>                          
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>6</text>
                          </View>
                          </View>
                          <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                         <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>7</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>8</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>9</text>
                          </View>
                         </View>
                         <View style={{flexDirection: 'row',
                         justifyContent:'center'}}> 
                         <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>00</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>0</text>
                          </View>
                          <View style={styles.Retangulo}>
                           <text style={{fontSize:'X-large' }}>.</text>
                          </View>
                         </View>
                                   

                         
                        
                         
                        
                        

                                    

<View style={{alignSelf:'center'}}>
                                    <Link to="/TelaF"style={{color:'blue'}}>Voltar</Link>
                                    
    </View>

         </View>
         );
        }
               
                       
                 


 const styles = StyleSheet.create({

    link:{
      color:'blue'
    },

      circulo:{
        backgroundColor:'blue',
        width:70,
        height:70,
        borderRadius:40,
      },

      imgcirculo:{
        
        width:70,
        height:70,
        borderRadius:40,
      },

     Retangulo:{
      
      alignItems:'center',
      width:70,
      height:30,
      backgroundColor: 'blue',
      margin:5,
      
     },
     container: {
      alignItems:'center',
      paddingTop: 10,
      paddingBottom : 20,
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

    input2: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

      button: {
             
        height: 40,
        width:100,
        margin: 12,
        padding: 10,
      }
    });


