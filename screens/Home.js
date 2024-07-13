import React from "react";
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  ScrollView,
  useWindowDimensions 
} from 'react-native';
import { Styles } from "./Styling.js";
import { FlashList } from "@shopify/flash-list";
import PAST_EXPENSES from "./past_expenses.js";

const CURRENCY_SYMBOL = "$ ";

export default function HomeScreen() {
  var money = 2000; var expense = 433; 
  var expense_count = 0;
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
          marginTop: 50}}>
          <Text style={Styles.h2}>Expense List</Text>
          
          <FlashList
          data={PAST_EXPENSES}
          estimatedItemSize={200}
          
          renderItem={({item}) => (
            <View>
              <View style={Styles.rowList}>
                <Text style={[Styles.listText, {textAlign: "left"}]}>{item.name}</Text>
                <Text style={[Styles.listText, {textAlign: "right"}]}>{item.amount}</Text>
              </View>
            </View>
          )}
          />
        </View>
    </SafeAreaView>
  );
}



  