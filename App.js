
import React, { useState } from 'react';
import{Text,Image, TextInput,View} from 'react-native';

const name="Xulo";

export default function App(){
  const [userName]= useState("Pruebita de los useState");



  const myconst = (myVariable)=>{
  
    
    return(
      myVariable
      );
  }

  const Human = (props)=>{
  
    
    return(
        <View>
          <Text>Nombre: {props.name}</Text>
          <Text>Altura: {props.altura}</Text>
        </View>
      );
  }

  return(

    <View>
      <Text>{myconst("Dime tu nombre de "+name)}</Text>

      <Text> </Text>

      <TextInput
       style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2 
      }}
      
      defaultValue="texto de ejemplo"
      />
      <Text> </Text>

      <Text>{userName}</Text>

      <Text> </Text>

      <Text> Los mejores nombres son: </Text>

      <Text> </Text>
      
      <Human name= " Paquirrin" altura= "2.5"/> 
      <Text> </Text>
      <Human name= " Jovani Vazquez" altura= "4.5"/> 
      <Text> </Text>
      <Human name= " Paco Gutierrez" altura= "1.5"/> 
      
      
      

    </View>
  )

}


