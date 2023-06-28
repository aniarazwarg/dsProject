import React from "react";
import { View, Button, Image, StyleSheet, Text, TextInput,Card,TouchableOpacity} from "react-native";
// import { Card } from 'react-native-elements';
import { Link } from '@react-navigation/native';




export function TelaG ({navigation}) {
    return (
        
      <View style={{JustifyContent:'center',}}>
            <View style={styles.container}>
               <View style={{
                 flexDirection: 'row',
                 paddingTop:20,}}>
                  <Image style={styles.imagem} source={require('../assets/user.png')}/>
                 <View style={{JustifyContent:'center', paddingLeft:20, paddingTop:30}}>
                           <Text style={styles.text}>Saldo</Text>
                           <Text style={{fontSize:'X-large'}}>4789,01</Text>
                  </View>
                 
                </View> 
                            <br></br>
                            
                            
                           <br></br>
                           {/* <View style={styles.Retangulo}>
                           
                            <text>Saldo</text>
                            <text style={{fontSize:'X-large' }}>R$ 10</text>
                            <Button   title="transfer" onPress={() => navigation.navigate('TelaA')}></Button>

                           </View> */}

                           

                            {/* <Card>
                                
                                <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                                
                            </Card> */}
                            

                         </View>

                         <br></br>
                        
                         <View style={{flexDirection: 'row',
              justifyContent:'space-around',padding:20}}> 



                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (1).png')}/>
                        </View>
                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (2).png')}/>
                        </View>
                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (3).png')}/>
                        </View>
                         
                                   
                        </View>
                        
                        <View style={{flexDirection: 'row',
              justifyContent:'space-around',padding:20}}> 



                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (3).png')}/>
                        </View>
                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (4).png')}/>
                        </View>
                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (5).png')}/>
                        </View>
                         
                                   
                        </View>
                        <View style={{flexDirection: 'row',
              justifyContent:'space-around',padding:20}}> 



                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (6).png')}/>
                        </View>
                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (7).png')}/>
                        </View>
                        <View style={styles.circulo}>
                        <Image style={styles.imgcirculo} source={require('../assets/telag (8).png')}/>
                        </View>
                         
                                   
                        </View>
                        
                        

                                    {/* <View style={{alignItems:'center'}}>   

                                    <Button title="Login" onPress={() => navigation.navigate('TelaA')}></Button>
                                    
                                    </View> */}

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
      backgroundColor: 'blue',
      textShadowColor: 'white',
      
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


