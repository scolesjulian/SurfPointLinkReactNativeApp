import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
     
    },
    rowContainer: {
        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVerical: 5
    },
    topMargin: {
      marginTop: 16
    },
    bottomMargin: {
      marginBottom: 16
    },

    backgroundCover: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: 2

    },
    lightText: {
        color: '#457b9d',
        padding: 16,
        fontWeight: "bold"
    },
    errorText: {
      color: "#ff0000"
    },
    header: {
        fontSize: 20
    },
    textInput: {
      alignSelf: 'stretch',
      padding: 8,
      borderBottomWidth: 2,
      marginVertical: 8  
    },
    lightTextInput: {
      borderBottomColor: "#ffffff"
    },
    
    inlineTextButton: {
        color: "#87F1FF"
    },
    pressedInlineTextButton: {
        color: "#87F1FF",
        opacity: 0.6
    },
    buttonLogin: {
      borderRadius: 50
    }

  });