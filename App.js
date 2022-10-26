import React, { useState } from 'react';
import { Text, Image, TextInput, View, StyleSheet, onChangeText, Button, Alert } from 'react-native';





export default function App() {
  const nombre = <Text style={[styles.Azul]}>Jose Manuel</Text>;
  const apellidos = <Text style={[styles.Azul]}>Rodriguez Cortes</Text>;
  const [edad, setEdad] = useState(' ')
  const [texto, setTexto] = useState(null);
  const resultado = () => {
    (edad < 18 ? setTexto(<Text style={styles.Rojo}>Menor de edad</Text>) : setTexto(<Text style={styles.Verde}>Mayor de edad</Text>))
  }

  return (
    <View>
      <Text style={styles.Texto1}>Mi nombre es {nombre} y me apellido {apellidos} </Text>
      
      <Text style={styles.Centrado}>DIME TU EDAD</Text>
      <Text  > </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "#3198EE",
          borderWidth: 2,
        }}
        value={edad}
        onChangeText={edad => setEdad(edad)}
        defaultValue="EDAD" />
      <Text  > </Text>
      <Button
        title="FINALIZAR"
        onPress={resultado} />
      <Text style={styles.Centrado}>{texto}</Text>
    </View>

  );

}

const styles = StyleSheet.create({
  Verde: {
    color: "green",
    fontWeight: 'bold',
    fontSize: 15,
  },
  Rojo: {
    color: "red",
    fontWeight: 'bold',
    fontSize: 15,
  },
  Azul: {
    color: "#3393FF",
    fontWeight: 'bold',   
  },
  Centrado: {
    color: "#58E0F6",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: "center",
    marginTop:20,
  },
  Texto1:{
    fontSize: 13,
    textAlign: "center",
    marginTop:20,
  }
});
