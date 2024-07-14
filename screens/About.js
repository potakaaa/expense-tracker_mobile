import React from "react";
import { SafeAreaView, Text, Image, Linking, Alert, View, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { AntDesign } from '@expo/vector-icons';

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
        marginTop: 100,
        justifyContent: 'center',
        alignContent: 'center',
        elevation: 10,
      }}
      source = {require('../assets/my_picture.jpg')} />

      <Text
      style = {{
        fontFamily: "InterExtraBold",
        fontSize: 50,
        marginTop: 20,
      }}
      >I am Gerald!</Text>
      <Text style={{
        fontFamily: "InterExtraBold",
        fontSize: 20,
      }}>Connect with me?</Text>

      
      <View style={{ 
        justifyContent: "space-around",
        alignItems: "center",
        height: 220,
        width: 200,
        marginTop: 30,
        }}>

        <TouchableOpacity 
        style={[Styles.aboutTouchables, {marginTop: 0}]}
        onPress={() => {
          console.log("FB Pressed")
          openUrl("https://www.facebook.com/grldjr")
        }}>
          <View style={{flexDirection: "row", alignItems: "center"}}> 
            <AntDesign name="facebook-square" size={30} color="#1877F2" />
            <Text style={{
              marginLeft: 10,
              fontFamily: "InterExtraBold",
              fontSize: 17,
              }}>Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
        style={Styles.aboutTouchables}
        onPress={() => {
          console.log("Github Pressed")
          openUrl("https://github.com/potakaaa")
        }}>
          <View style={{flexDirection: "row", alignItems: "center"}}> 
          <AntDesign name="github" size={30} color="#171412" />
            <Text style={{
              marginLeft: 10,
              fontFamily: "InterExtraBold",
              fontSize: 17,
              }}>Github</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
        style={Styles.aboutTouchables}
        onPress={() => {
          console.log("LinkedIn Pressed")
          openUrl("https://www.linkedin.com/in/gerald-helbiro-jr-83880a212/")
        }}>
          <View style={{flexDirection: "row", alignItems: "center"}}> 
          <AntDesign name="linkedin-square" size={30} color="#0a66c2" />
            <Text style={{
              marginLeft: 10,
              fontFamily: "InterExtraBold",
              fontSize: 17,
              }}>LinkedIn</Text>
          </View>
        </TouchableOpacity>

      </View>
      
      {/*
      <AntDesign name="facebook-square" size={24} color="black" />
      <AntDesign name="github" size={24} color="black" />
      <AntDesign name="linkedin-square" size={24} color="black" />

      <Text>Facebook</Text>
      <Text>Github</Text>
      <Text>Linked</Text>
      */}

      <Text style={{
        fontFamily: "InterExtraBold",
        fontSize: 17,
        position: "absolute",
        bottom: 25,

      }}>Thank you for using my app!</Text>

    </SafeAreaView>
  )
}