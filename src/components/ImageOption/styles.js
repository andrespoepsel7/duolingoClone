
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  optionContainer:{
    borderWidth:2,
    borderBottomWidth:4,
    borderColor:'lightgrey',
    borderRadius:10,

    width:'48%',
    height:'48%',

    padding:10,
    alignItems:'center',
  },
  selectedContainer:{
      backgroundColor:"#ddf4fe",
      borderColor:"#81d5fe",
    },
  optionImage:{
    width:'100%',
    flex:1,
  },
  optionText:{
    fontWeight:"bold",
  },
  selectedText:{
    color:"#40bef7",
    fontWeight:"bold"
  }
})

export default styles