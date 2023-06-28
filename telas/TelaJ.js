import { View, Button, Image, StyleSheet, Text, TextInput , CheckBox} from "react-native";
import React, {useState} from 'react';

export function TelaJ({navigation}) 
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
                           
                {/* <View style={{flexDirection: 'row',
              padding: 40,}}> */}
                            <Image style={styles.imagem} source={require('../assets/user.png')}/> 
                           
                </View>
        {/* </View> */}

            

        <View>
           <text>Nome</text> 
         <TextInput
          style={styles.input}
         placeholder="qual seu nome">
          
           </TextInput>
          <br></br>
          <text>Conta</text> 
           <TextInput
           style={styles.input}                                    
          placeholder="Conta bancária">
          </TextInput>
           <br></br>
           <text>E-mail</text> 
           <TextInput
           style={styles.input}                                    
           placeholder="E-mail">
          </TextInput>
           <br></br>
           <text>Senha</text> 
          <TextInput
            style={styles.input}                                    
           placeholder="Senha">
         </TextInput>
         <text>Telefone</text> 
          <TextInput
            style={styles.input}                                    
           placeholder="telefone">
         </TextInput>
         <text>
            Endereço</text> 
          <TextInput
            style={styles.input2}                                    
           placeholder="endereço">
         </TextInput>
          
           <Text style={styles.text}> blablabla whiskas sache</Text>
          <br></br>
             {/* <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox} />
                <Text style={styles.label}>Voce está de acordo com os termos de uso.</Text>
            </View> */}
        </View>
                              
          
          
        <View style={{flexDirection: 'row',
              justifyContent:'center',}}>   
          
          
          <Button title="Salvar" onPress={() => navigation.navigate('TelaE')}></Button>
                                              
        </View>
                                                             
    </View>
      );
}
  
        


     const styles = StyleSheet.create({
        container: {
         paddingTop: 0,
         JustifyContent:'center',
         alignItems:'center',
       },
    
        imagem: {
        width: 100,
        height: 100,
        },
    
        text: {
         allingItens:'center',
        },

        text2: {
            color: 'blue',
        },

        input2: {
            backgroundColor: 'white',
            height: 80,
            margin: 12,
            borderWidth: 1,
            padding: 10,
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