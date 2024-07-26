import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { LoadingScreen } from "./loading.js";
import { db, expenses, 
  setExpenses, UpdateContext, 
  setCurrentMoney, setTotalMoney,
  totalMoney, currentMoney,
  totalExpense, setTotalExpense,
  userMoney,
  userAcc,
  setUserAcc,
  userExpense,
  setUserMoney,
  setUserExpense
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

    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user_acc (id INTEGER PRIMARY KEY AUTOINCREMENT, money REAL NOT NULL, expense REAL NOT NULL)')
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
        userAcc[0][2] = totalExpense
        setTotalMoney(parseFloat(totalMoney) - parseFloat(totalExpense));
        userAcc[0][1] = totalMoney;
        setUserExpense(totalExpense)
        
        setCurrentName(undefined);
        setCurrentExpense(undefined);
        updateHomeScreen();
        const idToCheck = 1;
        checkIfRowExists(idToCheck, rowExists => {
          if (rowExists) {
            updateAcc_expense();
            console.log("User expense: " , userExpense)
          } else {
            console.log('The row does not exist.');
            addNewUserAcc()
          }
        });

        
      });
  }

  const updateAcc_money = () => {
    console.log("1")
      db.transaction((tx) => {
        console.log("2")
        tx.executeSql('UPDATE user_acc SET money = ? WHERE id = 1', [userMoney],
          (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              console.log("3")
              let exisUserAcc = [...userAcc]
              exisUserAcc[0][1] = userMoney
              setUserAcc(exisUserAcc);
              console.log("New money Submitted: ", userMoney)
            }
          },
          (txObj, error) => console.log(error)
        );
      });
  }

  const updateAcc_expense = () => {
    console.log("1")
      db.transaction((tx) => {
        console.log("2")
        tx.executeSql('UPDATE user_acc SET expense = ? WHERE id = 1', [userExpense],
          (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              console.log("3")
              let exisUserAcc = [...userAcc]
              exisUserAcc[0][2] = userExpense
              setUserAcc(exisUserAcc);
              console.log("New expense Submitted: ", userExpense)
            }
          },
          (txObj, error) => console.log(error)
        );
      });
  }

  const checkIfRowExists = (id, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT EXISTS(SELECT 1 FROM user_acc WHERE id = ?) AS exist',
        [id],
        (tx, results) => {
          const rowExists = results.rows.item(0).exist === 1;
          callback(rowExists);
        },
        error => {
          console.error('Error checking if row exists: ', error);
          callback(false);
        }
      );
    });
  };

  const addNewUserAcc = () => {
    console.log("1")
      db.transaction((tx) => {
        console.log("2")
        tx.executeSql('INSERT INTO user_acc (money, expense) values (?, ?)', [userMoney, userExpense],
          (txObj, resultSet) => {
            console.log("3")
            let exisUserAcc = [];
            exisUserAcc.push({ id: 1, money: userMoney, expense: userExpense});
            setUserAcc(exisUserAcc);
            console.log("Money Submitted: ", userMoney)
            console.log("Expense Submitted: ", userExpense)
          },
          (txObj, error) => console.log(error)
        );
    })
  };

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
            setUserMoney(temp_totalMoney)
            
            const idToCheck = 1;
            checkIfRowExists(idToCheck, rowExists => {
              if (rowExists) {
                updateAcc_money();
                console.log("User money: " , userMoney)
              } else {
                console.log('The row does not exist.');
                addNewUserAcc()
              }
            });

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
  
  