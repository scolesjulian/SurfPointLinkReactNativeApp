import { View, Text, TextInput, Image, Button, ImageBackground, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import AppStyles from '../styles/AppStyles';
import Logo from '../assets/Logo_1.png';


export default function AddToDoModal(props) {
  const background = require("../assets/background.jpg");
  let [todo, setTodo] = React.useState("");
  return (
    <ImageBackground style={AppStyles.imageContainer} source={background}>
    <Image source={Logo} style={{width: 100, height: 100, marginBottom: 15, maxWidth: 300, maxHeight: 200}} resizeMode="contain" />
    <Text style={AppStyles.header}>Add your favorite Spot</Text>
    <KeyboardAvoidingView 
        style={AppStyles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
    <View style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}>
      
      <TextInput 
          
          placeholder='Enter your Spot here...'
          placeholderTextColor="#FFFFFF"
          value={todo}
          onChangeText={setTodo} />

    </View>
      
      <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin]}>
        <Button title="Cancel" color="#F37878" onPress={props.onClose} />
        <Button title="SAVE" color="#ADCF9F" onPress={() => {
          props.addToDo(todo);
          setTodo("");
          props.onClose();
        }} />
      
    </View>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
}