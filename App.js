import React, {useState} from 'react';
import { Text, Image, TextInput, View, Switch  } from 'react-native';

export default function App() {
const[isEnabled,setIsEnabled]= useState();

return(
<View style={{alignItems:'center', marginTop:30, backgroundColor:'black'}} >
<Switch
trackColor={{false:'white', true:'grey'}}
thumbColor={isEnabled ? 'darkblue':'yellow'}
onValueChange={()=> setIsEnabled(previusState => !previusState)}
value={isEnabled}
/>
  <Image style={{width: 350, height:350}}
  source={{
  uri: 'https://media.tenor.com/vcXlB9xoqlIAAAAC/bob-esponja.gif'
  }}/>
 <Text style={{color:'white'}}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
 <Image style={{width: 350, height:300}}
  source={{
  uri: 'https://press.parentesys.com/gratis/img/33551/33551_0750109001588362112.webp'
  }}/> 
</View>
);
}


