import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Cep from './Componentes/Cep';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
      <Text>Digite seu CEP </Text>
     
     <TextInput
       placehoulder='ex: 11740000'
       keyboardType='numeric'
       style={styles.input}
     />

      <TouchableOpacity 
      style={styles.botao}
      >

        <Text style={styles.txtBotao}>Buscar</Text>
      </TouchableOpacity>

      <Cep />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    alignItems: 'center',
  },
  texto:{
    fontSize:20,
  },
  input:{
    width:'80%',
    marginLeft:'5%',
    borderBottomWidth:2,
    marginTop:20,
    fontSize:30,
    
  },
  botao:{
  marginTop:30,
  width:'80%',
  padding:15,
  
  },
  txtBotao:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    textAlign: 'center',
    borderRadius: 10
    
  }
});
