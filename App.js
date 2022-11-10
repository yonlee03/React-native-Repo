import React, { useState } from 'react';
import { Text, Image, TextInput, View, StyleSheet, Button, Switch } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [edad, setEdad] = useState('')
  const [correo, setCorreo] = useState('')
  const [sexo, setSexo] = useState('')
  const [texto, setTexto] = useState(null);
  const [isEnabled, setIsEnabled] = useState();
  const [display, setDisplay] = useState();
  
  const resultado = () => {
      setDisplay('on')
      if(display=='on'){
        setTexto('Mi nombre es '+nombre+'\nMis apellidos son '+apellidos+
        '\nMis edad es '+edad+'\nMis correo es '+correo+'\nMis sexo es '+sexo)
      }
  }

  return (
    <View style={styles.CentradoV}>
      <Text style={styles.Centrado}>FORM</Text>

      <View style={styles.TextoV}>
        <Text style={styles.Texto}>DIME TU NOMBRE  </Text>
        <TextInput style={styles.TextImp}
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}
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
      <Text style={styles.Texto}>Hombre                       </Text>
        <Switch
          Text={{ false: 'white', true: 'grey' }}
          trackColor={{ false: 'white', true: 'grey' }}
          thumbColor={isEnabled ? 'pink' : '#58E0F6'}
          onValueChange={() => setIsEnabled(previusState => !previusState)}
          value={isEnabled}
           />
          <Text style={styles.Texto}>                    Mujer</Text>
      </View>
      <Button 
          title="FINALIZAR"
          onPress={resultado} />
          
      <Text style={styles.Azul}>{texto}</Text>
      
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
    marginTop:20,
    color: "#3393FF",
    fontWeight: 'bold',
    fontSize:20,
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

