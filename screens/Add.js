import React from "react";
import { SafeAreaView, Text } from 'react-native';
import { Styles } from "./Styling.js";
import { LinearGradient } from 'expo-linear-gradient';

export default function AddScreen() {
    return (
      <SafeAreaView style={Styles.container}>
      <Text style={Styles.h1}>This is the Add page!</Text>
      </SafeAreaView>
    );
}
  
  