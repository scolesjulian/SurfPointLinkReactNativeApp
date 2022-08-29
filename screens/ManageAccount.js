import { Button, View, TextInput, Text, ImageBackground, KeyboardAvoidingView, Image } from 'react-native';
import React from 'react';
import AppStyles from '../styles/AppStyles';
import Logo from '../assets/Logo_1.png';
import { auth, db } from "../firebase";
import { collection, query, where, getDocs, writeBatch } from "firebase/firestore"; 
import { signOut, updatePassword, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';

export default function ManageAccount({ navigation }) {
  const background = require("../assets/background.jpg");

  let [newPassword, setNewPassword] = React.useState("");
  let [currentPassword, setCurrentPassword] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  }

  let updateUserPassword = () => {
    signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        updatePassword(user, newPassword).then(() => {
          setNewPassword("");
          setErrorMessage("");
          setCurrentPassword("");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  let deleteUserAndToDos = () => {
    if (currentPassword === "") {
      setErrorMessage("Must enter current password to delete account");
    } else {
      signInWithEmailAndPassword(auth, auth.currentUser.email, currentPassword)
      .then((userCredential) => {
        const user = userCredential.user;

        // Get all todos for user and delete
        let batch = writeBatch(db);
        const q = query(collection(db, "todos"), where("userId", "==", user.uid));
        getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            batch.delete(doc.ref);
          });
          batch.commit();
  
          deleteUser(user).then(() => {
            navigation.popToTop();
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }
  };

  return (
    <ImageBackground style={AppStyles.imageContainer} source={background}>
    <Image source={Logo} style={{width: 100, height: 100, marginBottom: 15, maxWidth: 300, maxHeight: 200}} resizeMode="contain" />
    
    <Text style={{fontSize: 24, fontWeight: "bold"}}>
         Manage Account
        </Text>
    <KeyboardAvoidingView 
        style={AppStyles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
      <Text style={AppStyles.errorText}>{errorMessage}</Text>
      <TextInput 
         style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Current Password'
          placeholderTextColor="#BEBEBE"
          value={currentPassword}
          secureTextEntry={true}
          onChangeText={setCurrentPassword} />
      <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='New Password'
          placeholderTextColor="#BEBEBE"
          value={newPassword}
          secureTextEntry={true}
          onChangeText={setNewPassword} />
      <Button title="Update Password" color="#ADCF9F" onPress={updateUserPassword} />
      <Button title="Delete User" color="#F37878" onPress={deleteUserAndToDos} />
      <Button title="Logout" color="#f7b267" rightAligned="right" onPress={logout} />
      <Button title="Back to Links" color="#F5EDDC" onPress={() => navigation.pop()} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}