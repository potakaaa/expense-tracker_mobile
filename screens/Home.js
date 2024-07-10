import React from "react";
import { View, Text, StyleSheet  } from 'react-native';
import { Styles } from "./Styling.js";
import { LinearGradient } from 'expo-linear-gradient';



export default function HomeScreen() {
    return (
      <LinearGradient colors={['#94FFAC', '#3EB759', '#036F1B']} 
      style={Styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
        <Text style={Styles.text}>This is the Home page!</Text>
      </LinearGradient>
    );
}



  