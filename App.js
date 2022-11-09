import React, { useState } from 'react';
import { Text, Image, TextInput, View, StyleSheet, Button, Switch } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState(' ')
  const [apellidos, setApellidos] = useState(' ')
  const [edad, setEdad] = useState(' ')
  const [correo, setCorreo] = useState(' ')
  const [texto, setTexto] = useState(null);
  const [isEnabled, setIsEnabled] = useState();
  const resultado = () => {
    (edad < 18 ? setTexto(<Text style={styles.Rojo}>Menor de edad </Text>) : setTexto(<Text style={styles.Verde}>Mayor de edad </Text>))
  }

  return (
    <View style={styles.CentradoV}>
      <Text style={styles.Centrado}>FORM</Text>

      <View style={styles.TextoV}>
        <Text style={styles.Texto}>DIME TU NOMBRE  </Text>
        <TextInput style={styles.TextImp}
          value={nombre}
          onChangeText={nombre => setNombre(nombre)}
          defaultValue="Nombre" />
      </View>
      <View style={styles.TextoV}>
        <Text style={styles.Texto}>DIME TU APELLIDO</Text>
        <TextInput style={styles.TextImp}
          value={apellidos}
          onChangeText={apellidos => setApellidos(apellidos)}
          defaultValue="APELLIDO" />
      </View>

      <View style={styles.TextoV}>
        <Text style={styles.Texto}>DIME TU EDAD        </Text>
        <TextInput style={styles.TextImp}
          value={edad}
          onChangeText={edad => setEdad(edad)}
          defaultValue="EDAD" />
      </View>

      <View style={styles.TextoV}>
        <Text style={styles.Texto}>DIME TU CORREO  </Text>
        <TextInput style={styles.TextImp}
          value={correo}
          onChangeText={correo => setCorreo(correo)}
          defaultValue="CORREO" />
      </View>

      <View style={styles.TextoV}>
      <Text style={styles.Texto}>MEN                         </Text>
        <Switch
          Text={{ false: 'white', true: 'grey' }}
          trackColor={{ false: 'white', true: 'grey' }}
          thumbColor={isEnabled ? 'darkblue' : 'yellow'}
          onValueChange={() => setIsEnabled(previusState => !previusState)}
          value={isEnabled} />
          <Text style={styles.Texto}>                  NO MEN</Text>
      </View>
      <Button 
          title="FINALIZAR"
          onPress={resultado} />
      
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
    marginTop:170,
    color: "#58E0F6",
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
    textAlign: "center",
  },
  CentradoV: {
    flex:1,
    backgroundColor:'black',
    color: "#58E0F6",
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
    textAlign: "center",
  },
  TextoV: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 15,
  },
  Texto: {
    marginTop: 9,
    fontSize: 15,
    
    marginLeft:20,
    marginBottom:10,
    color:'white'
  },
  TextImp: {
    marginLeft: 20,
    height: 40,
    width: 170,
    color:'white',
    textAlign: "center",
    borderColor: "#3198EE",
    borderWidth: 2,
  },
  Boton: {
    marginTop: 9,
    fontSize: 15,
  },
});
