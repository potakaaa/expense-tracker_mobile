import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from "./Styling.js";


export default function LoadingScreen() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={Styles.h1}>Loading...</Text>
        </View>
    )
}