import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function ProgressBar({progress}) {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, {width: `${progress*100}%`}]}>
        <View style={styles.highlight}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor:'lightgray',
    height:20,
    flex:1,
    borderRadius:10,
  },
  fg:{
    flex:1,
    backgroundColor:'#fac800',
    borderRadius:15,
  },
  highlight:{
    backgroundColor:'#fad131',
    width:"80%",
    height:5,
    borderRadius:5,
    marginTop:7,
    alignSelf:'center',
  }
})