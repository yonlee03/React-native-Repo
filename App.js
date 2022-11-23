import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function() {
const DATA = [
{ id: '1',
title: 'Pedro',
Icon: 'wan',},
{ id: '2',
title: 'Jose',
Icon: 'alien',},
{ id: '3',
title: 'Paco',
Icon: 'alpha-i-box',},
{ id: '4',
title: 'Martin',
Icon: 'alpha-j-box',},
{ id: '5',
title: 'Lucia',
Icon: 'alpha-l-circle-outline',},
];


  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Icon name={item.Icon} size={100} color="#4F8EF7"/>
  </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#000001',
  },
  item: {
    backgroundColor: 'darkblue',
    color:'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color:'white',
  },
});