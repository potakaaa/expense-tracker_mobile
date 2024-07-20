import React, { useEffect, useState } from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  ScrollView,
  useWindowDimensions,
  Dimensions
} from 'react-native';
import { Styles } from "./Styling.js";
import { FlashList } from "@shopify/flash-list";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingScreen } from "./loading.js";
import * as SQLite from 'expo-sqlite/legacy';

const CURRENCY_SYMBOL = "$ ";

export default function HomeScreen() {
  var money = 2000; var expense = 433; 
  var expense_count = 0;
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const[db, setDb] = useState(SQLite.openDatabase('expense.db'));
  const[isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS exp_list (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, amount REAL NOT NULL)')
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM exp_list', null,
        (txObj, resultSet) => {
          setExpenses(resultSet.rows._array)
          console.log(resultSet.rows._array);
        },
        (txObj, error) => console.log(error)
      );
    });

    setLoaded(true);

  }, [db]);

  if (!isLoaded) {
    LoadingScreen;
  }
  



  const renderItem = ({ item }) => (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      }}>
      <Text style={[Styles.h1, {
        textAlign: "left", 
        fontSize: 17,
        marginLeft: 20,
        }]}>{item.name}</Text>
      <Text style={[Styles.h1, {
        textAlign: "right", 
        fontSize: 17,
        marginRight: 20,
        }]}>{item.amount}</Text>
    </View>
  );

  return (
    <SafeAreaView style={Styles.container}>
        
      <Text style={Styles.h1}>Money</Text>
      <View style={[Styles.yellowContainer, {marginBottom: 50}]}>
        <View style={Styles.rowContainer}>
          <Text style={[Styles.h1, {fontSize: 25}]}>{CURRENCY_SYMBOL + 2000}</Text>
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
          <Text style={[Styles.h1, {fontSize: 25}]}>{CURRENCY_SYMBOL + 330}</Text>
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
        <View style={Styles.rowContainer}>
          <FlashList
          data={expenses}
          estimatedItemSize={10}
          estimatedListSize={{ height: 400, width: Dimensions.get("screen").width }}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          />
        </View>
      </View>

      
      
      
      {/*
      
      */}
    </SafeAreaView>

    

  );
}



  