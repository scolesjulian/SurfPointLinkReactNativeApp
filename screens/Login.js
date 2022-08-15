
import { Text, View, TextInput, Button, ImageBackground, Image, Platform, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../styles/AppStyles.js';
import Logo from '../assets/Logo_1.png';
import InlineTextButton from '../components/InlineTextButton.js';
import React from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";




export default function Login({ navigation }) {
  const background = require("../assets/background.jpg");

  if (auth.currentUser) {
    navigation.navigate("Home");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Home", { user: userCredential.user});
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
      } else {
        setErrorMessage("Please enter an email and password");
      }
    }
    
  
  
  return (
      <ImageBackground style={AppStyles.imageContainer} source={background}>
      <Image source={Logo} style={{width: 100, height: 100, marginBottom: 15, maxWidth: 300, maxHeight: 200}} resizeMode="contain" />
      <Text style={{fontSize: 24, fontWeight: "bold"}}>
         Surf Point Link
        </Text>
      <KeyboardAvoidingView
       style={AppStyles.backgroundCover} 
       behavior={Platform.OS === "android" ? "padding" : null}
       KeyboardVerticalOffset={60}>
      
      <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
      <Text style={AppStyles.errorText}>{errorMessage}</Text>
      <TextInput 
        style={[AppStyles.textInput, AppStyles.lightText, AppStyles.lightTextInput]} 
        placeholder='Email' 
        placeholderTextColor="#BEBEBE" 
        value={email} 
        onChangeText={setEmail} />
      <TextInput 
        style={[AppStyles.textInput, AppStyles.lightText, AppStyles.lightTextInput]} 
        placeholder='Password' 
        placeholderTextColor="#d5bdaf" 
        secureTextEntry={true}
        value={password} 
        onChangeText={setPassword} />
      <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
        <Text style={AppStyles.lightText}>Don't have an account? </Text>
        <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      </View>
      <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
        <Text style={AppStyles.lightText}>Forgot your password? </Text>
        <InlineTextButton text="Reset" onPress={() => navigation.navigate("ResetPassword")} />
      </View>
        <Button  title="Login" onPress={login} color="#ffd6ff" />
    </KeyboardAvoidingView>
  </ImageBackground>
   
  );
}