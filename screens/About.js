import React from "react";
import { SafeAreaView, Text, Image, Linking, Alert, TouchableOpacity, View } from 'react-native';
import { Styles } from "./Styling.js";
import { LinearGradient } from 'expo-linear-gradient';
import ImageBlurShadow from "react-native-image-blur-shadow";

const github = "https://github.com/potakaaa";
const facebook = "https://www.facebook.com/grldjr";


export default function AboutScreen() {

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`${url} can't be opened`);
    }
  }
  
  return (
    <SafeAreaView style={Styles.container}>
      <Text 
      style = {{
        fontFamily: "InterExtraBold",
        fontSize: 40,
        position: 'absolute',
        top: 70,
      }}>Hello</Text>
   
      <Image 
      style = {{
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignContent: 'center',
        elevation: 10,
      }}
      source = {require('../assets/my_picture.jpg')} />

      <Text
      style = {{
        fontFamily: "InterExtraBold",
        fontSize: 50,
        marginTop: 40,
      }}
      >I am Gerald!</Text>
      <Text style={{
        fontFamily: "InterExtraBold",
        fontSize: 20,
      }}>Connect with me?</Text>
      
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
      }}>

      </View>

      <View style={{ 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flexDirection: 'row', 
        flex: 1,
        flexWrap: 'wrap',
        }}>
        <View>
          <Text>Github</Text>
          <Text>Github</Text>
          <Text>Github</Text>
        </View>
        <View>
          <Text>icon</Text>
          <Text>icon</Text>
          <Text>icon</Text>
        </View>
      </View>

      <Text style={{
        fontFamily: "InterExtraBold",
        fontSize: 17,
        position: "absolute",
        bottom: 25,
      }}>Thank you for using my app!</Text>
      
    </SafeAreaView>
  )
}