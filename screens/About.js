import React from "react";
import { SafeAreaView, Text } from 'react-native';
import { Styles } from "./Styling.js";
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>This is the About page!</Text>
      </SafeAreaView>
    )
}