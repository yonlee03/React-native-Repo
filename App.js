
import React, { useState } from 'react';
import{Text,Image, TextInput,View, StyleSheet, onChangeText,Button, Alert} from 'react-native';

const styles = StyleSheet.create({
  Verde: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  Rojo: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
  Azul: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export function mostrarResult(edad){
  
  return(
    (edad < 18 ? <Text style={styles.Rojo}>Menor de edad </Text> : <Text style={styles.Verde}>Mayor de edad </Text>)
  )

}


   

const nombre = 'Jose'
const apellidos= 'cortes'


export default function App(){
    const color=null
    const [edad, setEdad] = useState(' ')

    
   
  return(
   
   <View>
     
     <Text  > </Text>
      <Text  style={styles.Azul} >{"hola "+ nombre +" "+ apellidos} </Text>

      <Text  > </Text>

       <Text>DIME TU EDAD</Text>

      
       <Text  > </Text>
     <TextInput
       style={{
          height: 40,
          borderColor: 'green',
          borderWidth: 2,
         

      }}
      value={edad}
      onChangeText={edad => setEdad(edad)} 
      defaultValue="EDAD"/>
      
      <Text  > </Text>
      <Button
        title="FINALIZAR"onPress={() =>  {mostrarResult(edad)}}/>
      
      <Text style={{ color: 'black'}}  >{mostrarResult(edad)}</Text>

   </View>
    
  );

}


//<Text >{mostrarResult(edad)}</Text>