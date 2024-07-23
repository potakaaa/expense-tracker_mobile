import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { LoadingScreen } from "./loading.js";
import { db, expenses, 
  setExpenses, UpdateContext, 
  setCurrentMoney, setTotalMoney,
  totalMoney, currentMoney,
  totalExpense, setTotalExpense
} from "./exports.js";

export default function AddScreen({navigation}) {
  const [money, setMoney] = useState(0.0);
  const [currentName, setCurrentName] = useState("");
  const [currentExpense, setCurrentExpense] = useState("");

  const [isLoaded, setLoaded] = useState(false)

  const { updateHomeScreen } = useContext(UpdateContext);
  

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS exp_list (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, amount REAL NOT NULL)')
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
          },
          (txObj, error) => console.log(error)
        );
        setTotalExpense(parseFloat(currentExpense) + parseFloat(totalExpense));
        setTotalMonet(parseFloat(totalMoney) - parseFloat(totalExpense));
        
        setCurrentName(undefined);
        setCurrentExpense(undefined);
        updateHomeScreen();
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
            setCurrentMoney(money)
            let temp_totalMoney = 0.0
            temp_totalMoney = parseFloat(currentMoney) + parseFloat(totalMoney)
            console.log(`${currentMoney} + ${totalMoney}`)
            setTotalMoney(temp_totalMoney)
            console.log(`${totalMoney}`)
            
            setMoney(0.0)
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
  
  