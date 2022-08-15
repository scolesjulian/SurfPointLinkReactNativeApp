import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
     
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16
    },
    noPadding: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "red"
    },
    rowContainer: {
        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        marginVerical: 5
      
    },
    fillSpace: {
      flex: 1
    },

    stretch: {
      alignSelf: "stretch"
    },
    rightAligned: {
      
      justifyContent: "flex-end"
      
    },
    topMargin: {
      marginTop: 16
    },
    bottomMargin: {
      marginBottom: 16
    },
    rightMargin: {
        marginRight: 16
    },
    leftMargin: {
      marginLeft: 16
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
    darkTextInput: {
      borderBottomColor: "#000000"
    },
    errorText: {
      color: "#ff0000"
    },
    header: {
        fontSize: 20,
        alignSelf: 'center'
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