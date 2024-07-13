import React from "react";
import { SafeAreaView, Text, Image, Linking, Alert, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { LinearGradient } from 'expo-linear-gradient';

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
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        top: 80,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 5
      }}> About Me </Text>
      <Image 
      style = {{
        width: 200,
        height: 200,
        borderRadius: 100,
      }}
      source = {require('../assets/my_picture.jpg')} />
      <Text
      style = {{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
      }}
      >Hello, I am Gerald!</Text>
      <TouchableOpacity onPress={() => {
        openUrl(github)
      }}
      style={Styles.linkButtons}
      >
        <Text style={Styles.linkText}>Github</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        openUrl(facebook)
      }}
      style={Styles.linkButtons}
      >
        <Text style={Styles.linkText}>Facebook</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}