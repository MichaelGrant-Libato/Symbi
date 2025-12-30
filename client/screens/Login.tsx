import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

//import styles 
import {loginStyles} from '../styles/Login.styles';

export default function Login(){
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    Alert.alert('Symbi Login', 'Attempting Login for: ${email}');
  };

  //use imported styles
  return (
    <LinearGradient
      colors={['#74ebd5', '#ACB6E5']}
      style={loginStyles.container}>

        <View style={loginStyles.loginBox}>
          <Text style={loginStyles.title}>Welcome to Symbi</Text>
          <Text style={loginStyles.subtitle}>Nurture yourself with care for your companion.</Text>

          <TextInput
            style={loginStyles.input}
            placeholder="Enter your email"
            placeholderTextColor="#7f8c8d"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}/>

          <TextInput
            style={loginStyles.input}
            placeholder = "Enter your password"
            placeholderTextColor= "#7f8c8d"
            secureTextEntry/>

          <TouchableOpacity style = {loginStyles.button} onPress={handleLogin}>
            <Text style = {loginStyles.buttonText}>Start your Journey</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
  )
}