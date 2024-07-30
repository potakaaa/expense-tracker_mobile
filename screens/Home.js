import React, { useEffect, useState, useContext } from "react";
import { 
  Text, 
  View, 
  TouchableOpacity, 
  Dimensions,
} from 'react-native';
import { Styles } from "./Styling.js";
import { FlashList } from "@shopify/flash-list";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingScreen } from "./loading.js";
import { 
  db, expenses, setExpenses, 
  UpdateContext, totalMoney, setTotalMoney,
  totalExpense, setTotalExpense, currentMoney,
  userAcc, setUserAcc
 } from "./exports.js";

const CURRENCY_SYMBOL = "₱ ";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { updateCounter } = useContext(UpdateContext);
  // char
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {

    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS exp_list (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, amount REAL NOT NULL)')
    });

    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user_acc (id INTEGER PRIMARY KEY AUTOINCREMENT, money REAL NOT NULL, expense REAL NOT NULL)')
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM exp_list', null,
        (txObj, resultSet) => {
          setExpenses(resultSet.rows._array)
          console.log(resultSet.rows._array);
        },
        (txObj, error) => console.log("Expenses fetch error: " + error)
      );
      console.log(`Update counter: ${updateCounter}`);
    });
    
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM user_acc', null,
        (txObj, resultSet) => {
          setUserAcc(resultSet.rows._array)
          console.log(resultSet.rows._array);
        },
        (txObj, error) => console.log("User Account error: " + error)
      );
      console.log(`Update counter: ${updateCounter}`);
    });

    setLoaded(true);

  }, [db]);

  if (!isLoaded) {
    LoadingScreen;
  }

  const renderItem = ({ item }) => (
    <View style={{alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      }}>
      <Text style={[Styles.h1, { textAlign: "left", 
        fontSize: 17,
        marginLeft: 20,
        }]}>{item.name}</Text>
      <Text style={[Styles.h1, { textAlign: "right", 
        fontSize: 17,
        marginRight: 20,
        }]}>{item.amount}</Text>
    </View>
  );

  const getMoneyValue = () => {
    if (isNaN(userAcc[0][1])) {
      return 0;
    }
    return userAcc[0][1]
  }

  const getExpenseValue = () => {
    if (isNaN(userAcc[0][2])) {
      return 0;
    }
    return userAcc[0][2]
  }


  return (
    <SafeAreaView style={Styles.container}>
        
      <Text style={Styles.h1}>Money</Text>
      <View style={[Styles.yellowContainer, {marginBottom: 50}]}>
        <View style={Styles.rowContainer}>
          <Text style={[Styles.h1, {fontSize: 25}]}>{CURRENCY_SYMBOL + getMoneyValue()}</Text>
          <TouchableOpacity onPress={() => {
            console.log("Add pressed")
            console.log(Dimensions.get('screen'))
            navigation.navigate("Add")
          }}>
            <MaterialIcons style={{marginLeft: 10, marginBottom: 7}} name="add-circle" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={Styles.h1}>Expenses</Text>
      <View style={[Styles.yellowContainer, {marginBottom: 70}]}>
        <View style={Styles.rowContainer}>
          <Text style={[Styles.h1, {fontSize: 25}]}>{CURRENCY_SYMBOL + getExpenseValue()}</Text>
          <TouchableOpacity onPress={() => {
            console.log("Add pressed")
            navigation.navigate("Add")
          }}>
            <MaterialIcons style={{marginLeft: 10, marginBottom: 7}} name="add-circle" size={28} color="black" />
          </TouchableOpacity>
          
        </View>
      </View>
      
      <View style={[Styles.yellowContainer, {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      }]}>
        <View style={Styles.violetContainer}>
          <Text style={[Styles.h1]}>Past Spendings</Text>
        </View>
        <View style={[Styles.rowContainer, {maxHeight: 225}]}>
          <FlashList
            data={expenses}
            estimatedItemSize={100}
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>

      
      
      
      {/*
        <FlashList
          data={expenses}
          estimatedItemSize={10}
          estimatedListSize={{ height: 400, width: Dimensions.get("screen").width }}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      */}
    </SafeAreaView>

    

  );
}



  