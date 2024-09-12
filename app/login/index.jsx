import { View, Text , Image , Pressable} from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'


export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

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
      <Pressable onPress={onPress} style={{
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