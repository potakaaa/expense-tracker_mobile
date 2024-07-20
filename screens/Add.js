import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Dimensions, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { LoadingScreen } from "./loading.js";
import * as SQLite from 'expo-sqlite/legacy';

export default function AddScreen() {
  const [money, setMoney] = useState("");
  const [name, setName] = useState("");
  const [expense, setExpense] = useState("");

  const [expenseArr, setExpenseArr] = useState([]);

  const[db, setDb] = useState(SQLite.openDatabase('expense.db'));
  const[isLoaded, setLoaded] = useState(false);

  const [currentName, setCurrentName] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");


  const addExpenseDB = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO exp_list (name, amount) values (?, ?)', [currentName, currentAmount],
        (txObj, resultSet) => {
          let existingExpenses = [...expenseArr];
          existingExpenses.push({ id: resultSet.insertId, name: currentName, amount: currentAmount });
          setExpenseArr(existingExpenses);
          setCurrentName("");
          setCurrentAmount("");
          console.log(expenseArr);
        },
        (txObj, error) => console.log("INSERT ERROR: " + error)
      );
    });
  }


  if (!isLoaded) {
    LoadingScreen;
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
            setCurrentName(name)
            setCurrentAmount(expense)
            addExpenseDB()
            setName("")
            setExpense("")
          }}>
            <Text style={[Styles.h1, {fontSize: 16, paddingTop: 5, height: 30}]}>Submit</Text>
          </TouchableOpacity>

          

      </SafeAreaView>
    );
}
  
  