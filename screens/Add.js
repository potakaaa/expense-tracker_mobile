import React from "react";
import { SafeAreaView, Text, View, Dimensions } from 'react-native';
import { Styles } from "./Styling.js";
import { FlashList } from "@shopify/flash-list";
import PAST_EXPENSES from "./past_expenses.js";

export default function AddScreen() {
    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.h1}>This is the Add page!</Text>

        <FlashList
        data={PAST_EXPENSES}
        estimatedItemSize={200}
        estimatedListSize={{ height: 120, width: Dimensions.get("screen").width }}
        renderItem={({item}) => (
          <View style={{alignItems: 'flex-start', flexGrow: 1, minHeight: 200, minWidth: 200}}>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
          </View>
          
        )}
        />

      </SafeAreaView>
    );
}
  
  