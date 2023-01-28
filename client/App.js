import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcom Again!</Text>
      <Text style={styles.text2}>welcom back you have been missed!</Text>
      <TextInput style={styles.input} placeholder="Type email here"></TextInput>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Type password here"></TextInput>
      <Text style={styles.text4}>you don't have an account ? Register</Text>
      <Pressable style={styles.button} >
      <Text style={styles.text3}>Login</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    margin: 50,
    fontFamily: "sans-serif"
  },
  text1:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 40,
  },
  text2:{
    color: "black",
    fontSize: 20,
    margin: 12
  },
  text3: {
    color: 'white',
    fontWeight: "bold",
    textAlign: 'center',
  },
  text4:{
    color: "black",
    fontSize: 13,
    marginLeft: 70,
    marginTop: 20
  },
  input:{
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10, 
    fontSize: 16,
    marginTop: 20
  },
  button:{
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
    width: 300,
    height: 40,
    
  }

});
