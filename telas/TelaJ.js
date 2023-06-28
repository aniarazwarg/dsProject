import { View, Button, Image, StyleSheet, Text, TextInput , CheckBox,Picker} from "react-native";
import React, {useState} from 'react';

export function TelaJ({navigation}) 

{const [isSelected, setSelection] = useState(false);

  const handleNumberChange = (itemValue) => {
    setNumber(itemValue);
    };
  const [conta, setConta] = useState('');
      
        const handleContaChange = (itemValue) => {
          setConta(itemValue);
        };
      
        const contas = Array.from({ length: 10 }, (_, i) => i + 245);

        const [number, setNumber] = useState('');
// ---------------------------------



    return (
    
// 
    <View style={{JustifyContent:'center'}}> 
        <View style={styles.container}>
        <View style={{
                 flexDirection: 'row',
                 
                }}>
                  <Image style={styles.imagem} source={require('../assets/telaj (2).png')}/> 
                  <Image style={{height:100,width:80}} source={require('../assets/telaj.png')}/> 

                </View>
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
                            
                           
                </View>
        {/* </View> */}

            
        <View style={{
                         justifyContent:'space-around',padding:40}}> 


  

        <View style={{ alignItems:'center'}}>
           <text>Conta corrente</text> 
         <TextInput
          style={styles.input}
         placeholder="numero da conta"></TextInput>
          
          <View style={{justifyContent:'center'}}/>
          <text>
            selecione conta</text> 
          <Picker 
          selectedValue={conta}
          onValueChange={handleContaChange}
          style={{ width:300}}

          >
          {contas.map((c) => (
          <Picker.Item key={c} label={c.toString()} value={c.toString()} />
          ))}
          </Picker>
<br></br>
          <View style={{
                 flexDirection: 'row',
                 
                }}>
<Picker style={{height:40, padding:5, margin:10}}
      selectedValue={number}
      onValueChange={handleNumberChange}
    >
      <Picker.Item label="$" value="$" />
      <Picker.Item label="R$" value="R$" />
      
    </Picker>

    <TextInput
          style={styles.input}
         placeholder="Valor"></TextInput>
                  </View>
</View>
         <text>
            Mensagem</text> 
          <TextInput
            style={styles.input2}                                    
           placeholder="mensagem">
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
          
          
          <Button title="Salvar" onPress={() => navigation.navigate('TelaB')}></Button>
                                              
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
        width: 200,
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