import {React, useState} from 'react';
import { View, Text, Image, Pressable,TextInput, StyleSheet, Alert } from 'react-native';
import { ValidateEmail } from '../utils';

const SubscribeScreen = () => {
  const [value, onChangeText] = useState('');
  // Add subscribe screen code here
  return <View style={styles.container}>
    <Image 
      style={styles.logo}
      source={require('../assets/little-lemon-logo-grey.png')}
      resizeMode= "contain"
    />
    <Text
      style={styles.message}
      numberOfLines='2'
    >
      Subscribe to our Newsletter for our latest delicious recipes!
    </Text>
    <TextInput
      style={styles.textInput}
      placeholder='Type your email'
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Pressable
      style={styles.button}
      onPress={ () => Alert.alert('Thanks for Subscribing, stay tuned!')}
    >
      <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>
  </View>;
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 175,
    width: 75,
  },
  message: {
    width: 250,
    textAlign: 'center',
    fontSize: 14,
  },
  textInput:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#004225',
    borderColor: '#004225',
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  }
})