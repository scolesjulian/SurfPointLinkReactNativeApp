import { View, Button, Text, Modal, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import AppStyles from '../styles/AppStyles';
import { auth, db } from "../firebase";
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"; 
import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
//import AddToDoModal from '../components/AddToDoModal';
//import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Home({ navigation, route }) {
    let logout = () => {
        signOut(auth).then(() => {
            navigation.popToTop();
        });
    }
    
    return (
       <SafeAreaView>
        <View style={AppStyles.container}>
         <Button title="Logout" onPress={logout} />   
        </View>
       </SafeAreaView> 
    )
}