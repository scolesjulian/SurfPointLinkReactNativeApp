
import { Text, View, TextInput, Button, ImageBackground, Image, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles.js';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton.js';
import Logo from '../assets/Logo_1.png';
import { auth } from "../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email, setEmail)
    .then(() => {
      navigation.popToTop();
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }
  
  
  return (
    <ImageBackground style={AppStyles.container} source={background}>
    <Image source={Logo} style={{width: 100, height: 100, marginBottom: 15, maxWidth: 300, maxHeight: 200}} resizeMode="contain" />
      <Text style={{fontSize: 24, fontWeight: "bold"}}>
         Surf Point Link
        </Text>


      <KeyboardAvoidingView
       style={AppStyles.backgroundCover} 
       behavior={Platform.OS === "android" ? "padding" : null}
       KeyboardVerticalOffset={60}>
      
        <Text style={[AppStyles.lightText, AppStyles.header]}>
          Reset Password
        </Text>
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput 
        style={[AppStyles.textInput, AppStyles.lightText, AppStyles.lightTextInput]} 
        placeholder='Email' 
        placeholderTextColor="#BEBEBE" 
        value={email} 
        onChangeText={setEmail} />
        
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
        </View>
        
        
        <Button  title="Reset Password" onPress={resetPassword} color="#ffd6ff" textColor="#000000"  />
        
      </KeyboardAvoidingView>
      
    </ImageBackground>
  );
}