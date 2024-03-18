
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'flex-start',
    marginTop:30,
  },
  row:{
    flexDirection:'row',
    alignSelf:'stretch',
    alignItems:'center',

    marginTop:10,
    marginHorizontal:10,
  },
  mascot:{
    width:'30%',
    aspectRatio:3/4,
    marginRight:10,
  },
  sentenceContainer:{
    borderWidth:1,
    borderColor:'lightgray',
    borderRadius:5,
    padding:10,
  },
  sentence:{
    fontSize:16,
  },
  textInput:{
    alignSelf:'stretch',
    flex:1,
    backgroundColor:'#ebebeb',
    borderWidth:1,
    borderColor:'lightgray',
    borderRadius:10,
    padding:10,
    fontSize:16,
  },
})

export default styles