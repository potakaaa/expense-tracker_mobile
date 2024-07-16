import React from "react";
import { SafeAreaView, Text, View, Dimensions, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { FlashList } from "@shopify/flash-list";
import PAST_EXPENSES from "./past_expenses.js";
import { useState } from 'react';

export default function AddScreen() {
  const [money, setMoney] = useState("");
  const [name, setName] = useState("");
  const [expense, setExpense] = useState("");

    return (
      <SafeAreaView style={Styles.container}>
        <Text style={Styles.h1}>Add Money</Text>
          <View style={[Styles.yellowContainer, {
            marginBottom: 50, 
            paddingBottom: 15,
            paddingTop: 15
            }]}>
            <TextInput 
            value={money}
            onChangeText={(text) => {
              setMoney(text);
            }}
            onSubmitEditing={() => {
              console.log("Money Submitted: ", money)
              setMoney("")
            }}
            placeholder={"Amount"}
            keyboardType="phone-pad"
            style={{
              textAlign: 'center',
              fontFamily: "InterExtraBold",
              fontSize: 20,
              width: 120,




            }}
            returnKeyType="done"
            />
            
          </View>

          <Text style={Styles.h1}>Add Expense</Text>
            <View style={[Styles.yellowContainer, {
              marginBottom: 20, 
              paddingBottom: 15,
              paddingTop: 15
              }]}>
                <TextInput 
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
                placeholder={"Name"}
                style={{
                  textAlign: 'center',
                  fontFamily: "InterExtraBold",
                  fontSize: 20,
                  width: 120,
                }}
                returnKeyType="done"
                />

          </View>
              
              <View style={[Styles.yellowContainer, {
              marginBottom: 30, 
              paddingBottom: 15,
              paddingTop: 15
              }]}>
                <TextInput 
                value={expense}
                onChangeText={(text) => {
                  setExpense(text);
                }}
                placeholder={"Amount"}
                keyboardType="phone-pad"
                style={{
                  textAlign: 'center',
                  fontFamily: "InterExtraBold",
                  fontSize: 20,
                  width: 120,

                }}
                returnKeyType="done"
                />
              
            </View>



          <TouchableOpacity 
          style={Styles.violetContainer}
          onPress={() => {
            console.log("Name Submitted: ", name)
            console.log("Expense Submitted: ", expense)
            setName("")
            setExpense("")
          }}>
            <Text style={[Styles.h1, {fontSize: 16, paddingTop: 5, height: 30}]}>Submit</Text>
          </TouchableOpacity>

          

      </SafeAreaView>
    );
}
  
  