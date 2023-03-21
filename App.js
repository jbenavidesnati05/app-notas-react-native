import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity  } from 'react-native';
import { useState } from 'react';


export default function App() {

  // Declaracion de variables 
  const[id, setid]                  = useState('');
  const[nombre, setnombre]          = useState('');
  const[asigantura, setasigantura]  = useState('');
  const[nota1, setnota1]            = useState(0);
  const[nota2, setnota2]            = useState(0);
  const[nota3, setnota3]            = useState(0);

  return (
    <View style={[styles.container,{flex:1}]}>

    <View style={[styles.views,styles.container,{flex:5, backgroundColor:'yellowgreen', }]}>
      <Text
      style ={{color:'black', fontWeight:'bold',borderRadius:10,
        padding:10,
        width:100,
        fontSize:15,
        borderColor:'black',
        textAlign:'center'}}
      >SISTEMA DE NOTAS</Text>

      {/* INICIO INPUTS  */}
      <TextInput
        placeholder='Identificacion' 
        style= {styles.inputs}
        onChangeText={id => setid(id)}
        value = {id}
      >
      </TextInput>
      
      <TextInput
        placeholder='Nombres' 
        style= {styles.inputs}
        onChangeText={nombre => setnombre(nombre)}
        value = {nombre}
      >
      </TextInput>

      <TextInput
        placeholder='Asignatura' 
        style= {styles.inputs}
        onChangeText={asigantura => setasigantura(asigantura)}
        value = {asigantura}
      >
      </TextInput>

      <TextInput
        placeholder='Nota 1=> 30%' 
        style= {styles.inputs}
        onChangeText={nota1 => setnota1(nota1)}
        value = {nota1}
      >
      </TextInput>

      <TextInput
        placeholder='Nota 2=> 35%' 
        style= {styles.inputs}
        onChangeText={nota2 => setnota2(nota2)}
        value = {nota2}
      >
      </TextInput>

      <TextInput
        placeholder='Nota 3=> 35%' 
        style= {styles.inputs}
        onChangeText={nota3 => setnota3(nota3)}
        value = {nota3}
      >
      </TextInput>

      <Text style ={{color:'black', fontWeight:'bold'}}>Resultado</Text>
      <Text style ={{color:'black', fontWeight:'bold', borderRadius:10, padding:10, width:100, borderColor:'black', textAlign:'center'}}>{3.5}</Text>

      <View style={{flexDirection:'row', marginTop:20}}>
        <TouchableOpacity style={styles.button}
        onPress = {()=>calcular("+")}
        >
          <Text style={styles.textTouchable}>Calcular / Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress = {()=>calcular("-")}
        >
          <Text style={styles.textTouchable}>Limpiar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress = {()=>calcular("*")}
        >
          <Text style={styles.textTouchable}>Buscar</Text>
        </TouchableOpacity>
      </View>

        {/* <TouchableOpacity style={styles.button}
        onPress = {()=>{
          setValor1('')
          setValor2('')
          setResultado(0)
          setMensaje("")
        }}
        >
            <Text style={styles.textTouchable}>Limpiar</Text>
        </TouchableOpacity> */}
      {/* <View>
      <View>
        <Text style={{color:esValido?"green":"red"}}>{mensaje}</Text>
      </View>

      </View> */}

    </View>

  

  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  views:{
    width:'100%', 
    height:'100%', 
    borderColor:'black', 
    borderWidth:2, 
    borderRadius:5
    
  },
  inputs:{
    borderRadius:50,
    margin:10,
    padding:5,
    width:150,
    borderColor:'black',
    textAlign:'center',
    backgroundColor : 'white',

    
  },
  button:{
    backgroundColor:'white',
    borderRadius:10,padding:10,
    margin : 10
  },
  textTouchable:{
    fontFamily:'bold',
  }
});
