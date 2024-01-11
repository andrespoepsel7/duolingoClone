import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#58cc02',
      height: 50,
      alignSelf: 'stretch',
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
      borderRadius:5,
      borderBottomWidth:5,
      borderColor:'#57a600', 
    },
    disabledContainer:{
      backgroundColor: 'lightgray',
      borderColor: 'gray',
    },
    text:{
      fontSize:20,
      color:'white',
      fontWeight:'bold',
      paddingVertical:5,
      borderBottomWidth: 1.5,
      borderColor:'white',
    }
})

export default styles