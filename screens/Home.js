import React from "react";
import { SafeAreaView, Text, StyleSheet  } from 'react-native';
import { Styles } from "./Styling.js";
import { LinearGradient } from 'expo-linear-gradient';



export default function HomeScreen() {
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>This is the Home page!</Text>
      </SafeAreaView>
    );
}



  