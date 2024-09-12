import { View, Text , Image , Pressable} from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'

export default function LoginScreen() {
  return (
    <View style={{
      backgroundColor:'#fff',
      height:'100%',
      flex: 1,
      justifyContent: 'center',  // Vertically center
      alignItems: 'center',   
    }}>
      <Image source={require('./../../assets/images/log.jpg')}
      style={{
        width:'80%',
        height:'400px',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
      }}
      />
      <View style={{
        padding:20,
        display:'flex',
        alignItems:'center'
      }}>
        <Text style={{
          fontSize:30,
          textAlign:'center',
          color:'black'
        }}>Ready to make a new friend</Text>
        <Text style={{
          fontSize:18,
          textAlign:'center',
          // color:'red',
        }}>Let's adopt the pet which you like and make there life happy again</Text>
      </View>
      <Pressable style={{
        padding:14,
        marginTop:80,
        backgroundColor:'#E8B20E',
        width:'100%',
        borderRadius:10
      }}>
      <Text style={{
        fontSize:20,
        textAlign:'center'
      }}>
        Get Started
      </Text>
      </Pressable>
    </View>
  )
}