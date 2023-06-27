import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput,Card,TouchableOpacity} from "react-native";
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
                           <br></br>
                           <View style={styles.Retangulo}>
                           
                            <text>Saldo</text>
                            <text style={{fontSize:'X-large' }}>R$ 10</text>
                            <Button   title="transfer" onPress={() => navigation.navigate('TelaA')}></Button>

                           </View>

                           

                            {/* <Card>
                                
                                <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                                
                            </Card> */}
                            

                         </View>

                         <br></br>
                        
                         <View style={{flexDirection: 'row',
              justifyContent:'center',}}> 
                          <br></br>   

                        <View style={styles.circulo}/>
                                    <Text> blablabla whisckas sache </Text>
                                    <br></br>

                                   
                        </View>
                        <br></br>
                        <View style={{flexDirection: 'row',
              justifyContent:'center',}}> 
                          <br></br>   

                        <View style={styles.circulo}/>
                                    <Text> blablabla whisckas sache </Text>
                                    <br></br>

                                   
                        </View>
                        <br></br>
                        <View style={{flexDirection: 'row',
              justifyContent:'center',}}> 
                          <br></br>   

                        <View style={styles.circulo}/>
                                    <Text> blablabla whisckas sache </Text>
                                    <br></br>

                                   
                        </View>
                        <br></br>
                        <View style={{flexDirection: 'row',
              justifyContent:'center',}}> 
                          <br></br>   

                        <View style={styles.circulo}/>
                                    <Text> blablabla whisckas sache </Text>
                                    <br></br>

                                   
                        </View>
                        
                        

                                    {/* <View style={{alignItems:'center'}}>   

                                    <Button title="Login" onPress={() => navigation.navigate('TelaA')}></Button>
                                    
                                    </View> */}

                                    <View style = {{alignItems:'center'}} >
                                      <TouchableOpacity onPress={() => navigation.navigate('telaA')}>
                                        <text style= {styles.link}>mais</text>
                                        </TouchableOpacity>                       
                                        </View>

         </View>
         );
        }
               
                       
                 


 const styles = StyleSheet.create({

    link:{
      color:'blue'
    },

      circulo:{
        width:30,
        height:30,
        backgroundColor:'blue',
        borderRadius:40,
      },

     Retangulo:{
      padding:15,
      alignItems:'center',
      width:240,
      height:100,
      backgroundColor: 'white',
      borderRadius:20,
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

    input: {
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


