import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ProgressBar from '../ProgressBar'
import heart from '../../../assets/images/heart.png'

export default function Header({progress, lives}) {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress}/>
      <Image source={heart} style={styles.heart} resizeMode='contain'/>
      <Text style={styles.lives}>{lives}</Text>
    </View>
  )
}

const styles = StyleSheet.create({  
  root:{
    flexDirection:'row',
    marginTop:45,
    alignItems:'center',
  },
  heart:{
    height:30,
    width:30,
    marginLeft:15,
    marginRight:5,
  },
  lives:{
    color: 'red',
    fontWeight:'bold',
    alignSelf:'center',
    fontSize:18,
    // marginLeft:10,
  },
})