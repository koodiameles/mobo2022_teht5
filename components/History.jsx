import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList} from 'react-native';

export function History({ route, navigation }) {

  const { calculatorHistory } = route.params;

  console.log(calculatorHistory)
  return (
    <>
     <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={{color:"white", fontSize: 22}}>HISTORY</Text>
      </View>
        <FlatList 
          style={styles.list}
          data={calculatorHistory}
          renderItem={({ item }) => <Text style={{color:"white"}}>{item}</Text>}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'black',
  },
  containerHeader: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  input : {
    width:"80%", 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    color:"white",
  },
  assignmentHeaderText: {
    fontSize: 40,
    color:"#6495ED",
  }
});
 
