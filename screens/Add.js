import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { LoadingScreen } from "./loading.js";
import * as SQLite from 'expo-sqlite/legacy';
import { db, expenses, setExpenses } from "./test.js";

export default function AddScreen() {
  const [money, setMoney] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentExpense, setCurrentExpense] = useState("");

  const [isLoaded, setLoaded] = useState(false)
  

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS exp_list (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, amount REAL)')
    });
    setLoaded(true);
    console.log(expenses)

  }, [db]);

  if (!isLoaded) {
    LoadingScreen;
  }

  const addExpenses = () => {
    console.log("1")
      db.transaction((tx) => {
        console.log("2")
        tx.executeSql('INSERT INTO exp_list (name, amount) values (?, ?)', [currentName, currentExpense],
          (txObj, resultSet) => {
            console.log("3")
            let existingExpenses = [...expenses];
            existingExpenses.push({ id: resultSet.insertId, name: currentName, amount: currentExpense});
            setExpenses(existingExpenses)
            console.log("Name Submitted: ", currentName)
            console.log("Expense Submitted: ", currentExpense)
            setCurrentName(undefined);
            setCurrentExpense(undefined);
          
          },
          (txObj, error) => console.log(error)
        );
      });
  }

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
              value={currentName}
              onChangeText={(text) => {
                setCurrentName(text);
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
              value={currentExpense}
              onChangeText={(text) => {
                setCurrentExpense(text);
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
        onPress={addExpenses}>
          <Text style={[Styles.h1, {fontSize: 16, paddingTop: 5, height: 30}]}>Submit</Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
}
  
  