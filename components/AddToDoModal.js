import { View, Text, TextInput, Button, ImageBackground, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import AppStyles from '../styles/AppStyles';


export default function AddToDoModal(props) {
  const background = require("../assets/background.jpg");
  let [todo, setTodo] = React.useState("");
  return (
    <ImageBackground style={AppStyles.imageContainer} source={background}>
    <Text style={AppStyles.header}>Add you favorite Link</Text>
    <KeyboardAvoidingView 
        style={AppStyles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
    <View>
      
      <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Link'
          placeholderTextColor="#BEBEBE"
          value={todo}
          onChangeText={setTodo} />
      
      <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin]}>
        <Button title="Cancel" color="#FF6B6B" onPress={props.onClose} />
        <Button title="OK" color="#6BCB77" onPress={() => {
          props.addToDo(todo);
          setTodo("");
          props.onClose();
        }} />
      </View>
    </View>
    </KeyboardAvoidingView>
    </ImageBackground>
  );
}