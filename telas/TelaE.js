import { View, Button, Image, StyleSheet, Text, TextInput , CheckBox , Picker,} from "react-native";
import React, {useState} from 'react';
import DatePicker from 'react-native';

export function TelaE({navigation}) 
{
    // const [date, setDate] = useState(new Date());
    // const [showPicker, setShowPicker] = useState(false);
  
    // const handleDateChange = (selectedDate) => {
    //   setShowPicker(false);
    //   setDate(selectedDate || date);
    // };
        // const [number, setNumber] = useState('');

        const handleNumberChange = (itemValue) => {
        setNumber(itemValue);
        };
    
        // const [number, setNumber] = useState('');
      
        // const handleNumberChange = (text) => {
        //   setNumber(text.replace(/[^0-9]/g, ''));
        // 

        
            const [day, setDay] = useState('');
          
            const handleDayChange = (itemValue) => {
              setDay(itemValue);
            };
          
            const days = Array.from({ length: 30 }, (_, i) => i + 1);
// --------------------dia-------------------------------------------------
            const [mes, setMes] = useState('');
          
            const handleMesChange = (itemValue) => {
              setMes(itemValue);
            };
          
            const meses = Array.from({ length: 12 }, (_, i) => i + 1);
// -------------------------mes-----------------------------------------------

            const [year, setYear] = useState('');
        
            const handleYearChange = (itemValue) => {
            setYear(itemValue);
            };
        
            const years = Array.from({ length: 11 }, (_, i) => i + 2023);
  
// ------------------------ano-----------------------------------

// ---------------------ddd----------------------

        
        const [ddd, setDdd] = useState('');

        const handleDddChange = (itemValue) => {
        setDdd(itemValue);
        };

        const ddds = Array.from({ length: 89 }, (_, i) => i + 11);


    const [isSelected, setSelection] = useState(false);
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
                <Image style={styles.imagem} source={require('../assets/cartao.png')}/>                           
                </View>
        {/* </View> */}

            

        <View>
           <text>Nome</text> 
         <TextInput
          style={styles.input}
         placeholder="qual seu nome">
          
           </TextInput>
          <br></br>
          <text>NUMERO DO CARTÃO</text> 
           <TextInput
           style={styles.input}                                    
          placeholder="INSIRA O NUMERO DO CARTÃO">
          </TextInput>
           <br></br>
           <text>E-mail</text> 
           <TextInput
           style={styles.input}                                    
           placeholder="E-mail">
          </TextInput>
           <br></br>
          

                {/* <Button title="Selecione uma data" onPress={() => setShowPicker(true)} />
            {showPicker && (
                <DatePicker
                date={date}
                mode="date"
                onDateChange={handleDateChange}
                />)} */}
     
 
         {/* <text>Telefone</text> 
          <TextInput
            style={styles.input}                                    
           placeholder="telefone">
         </TextInput> */}

                {/* <TextInput style={styles.input}                                    
           placeholder="DIA"></TextInput>
            value={number}
            onChangeText={handleNumberChange}
            keyboardType="numeric"
            /> */}
                    
                    {/* <Picker
      selectedValue={number}
      onValueChange={handleNumberChange}
    >
      <Picker.Item label="1" value="1" />
      <Picker.Item label="2" value="2" />
      <Picker.Item label="3" value="3" />
      <Picker.Item label="4" value="4" />
      <Picker.Item label="5" value="5" />
    </Picker> */}
    
    <text>Data de vencimento: </text> 
    <View style={{ flexDirection: 'row' }}>
    
 
    <View style={{width:10}}/>
<Picker 
selectedValue={day}
onValueChange={handleDayChange}
style={{ flex: 1 }}

>
{days.map((d) => (
<Picker.Item key={d} label={d.toString()} value={d.toString()} />
))}
</Picker>
<View style={{width:10}}/>
{/* -------------------------------dia  */}
<Picker
selectedValue={mes}
onValueChange={handleDayChange}
style={{ flex: 1 }}
>
{meses.map((m) => (
<Picker.Item key={m} label={m.toString()} value={m.toString()} />
))}
</Picker>
<View style={{width:10}}/>
{/* --------------------------------mes */}
<Picker
selectedValue={year}
onValueChange={handleYearChange}
style={{ flex: 1 }}
>
{years.map((y) => (
<Picker.Item key={y} label={y.toString()} value={y.toString()} />
))}
</Picker>
<View style={{width:10}}/>
{/* ------------------------------------ano */}
</View>
    
<text>Senha</text> 
          <TextInput
            style={styles.input}                                    
           placeholder="Senha">
         </TextInput>
        

         <text>Telefone</text> 
         <View style={{ flexDirection: 'row' }}>

          <Picker selectedValue={ddd} onValueChange={handleDddChange}
          style={{ height: 41 , margin:11 , borderColor:'black'}}
          >
                {ddds.map((d) => (
                <Picker.Item key={d} label={d.toString()} value={d.toString()} />
                ))}
            </Picker>
         <TextInput
            style={styles.input}                                    
           placeholder="Numero">
         </TextInput>
         </View>
         
         <text>*blablabla whisckas sachê</text> 


        </View>
                              
          
          
        <View style={{flexDirection: 'row',
              justifyContent:'center',}}>   
          
          
          <Button title="Adicionar Cartão" onPress={() => navigation.navigate('TelaB')}></Button>
                                              
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
    