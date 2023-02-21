import * as React from 'react';
import { View, Text, Image,Button, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <Image 
      style={styles.logo}
      source={require('../assets/little-lemon-logo.png')}
      resizeMode= "contain"
    />
    <Text
      style={styles.message}
      numberOfLines='2'
    >
      little Lemon your local Mediterranean Bistro
    </Text>
    <Pressable
      style={styles.button}
      onPress={ () => navigation.navigate('SubscribeScreen')}
    >
      <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    height: 300,
    width: 100,
    marginTop: '20%'
  },
  message: {
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '10%'
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#004225',
    borderColor: '#004225',
    borderWidth: 2,
    width: 300,
    marginTop: '50%',
    borderRadius: 50,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  }
})