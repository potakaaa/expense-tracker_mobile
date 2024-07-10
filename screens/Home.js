import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Styles } from "./Styling.js";



export default function HomeScreen() {
  var money = 2000; var expense = 433; const CURRENCY_SYMBOL = "$ ";
  var expense_count = 1;
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.h1}>Money</Text>
      <Text style={Styles.moneyText}>{CURRENCY_SYMBOL + money}</Text>
      <Text style={[Styles.h1, {marginTop: 50}]}>Expenses</Text>
      <Text style={Styles.moneyText}>{CURRENCY_SYMBOL + expense}</Text>
      <View style={{
        backgroundColor: expense_count < 1 ? "transparent" : "#E9E08F", 
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 50}}>
        <Text style={Styles.h2}>Expense List</Text>
        <View style={Styles.rowList}>
          <Text style={[Styles.listText, {justifyContent: "flex-start"}]}>1</Text>
       
          <Text style={[Styles.listText, {justifyContent: "flex-end"}]}>3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}



  