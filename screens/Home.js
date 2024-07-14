import React from "react";
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
import PAST_EXPENSES from "./past_expenses.js";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CURRENCY_SYMBOL = "$ ";

export default function HomeScreen() {
  var money = 2000; var expense = 433; 
  var expense_count = 0;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
        
      <Text style={Styles.h1}>Money</Text>
      <View style={[Styles.yellowContainer, {marginBottom: 50}]}>
        <View style={Styles.rowContainer}>
          <Text style={[Styles.h1, {fontSize: 40}]}>{CURRENCY_SYMBOL + 2000}</Text>
          <TouchableOpacity onPress={() => {
            console.log("Add pressed")
            navigation.navigate("Add")
          }}>
            <MaterialIcons style={{marginLeft: 10, marginBottom: 7}} name="add-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={Styles.h1}>Expenses</Text>
      <View style={[Styles.yellowContainer, {marginBottom: 50}]}>
        <View style={Styles.rowContainer}>
          <Text style={[Styles.h1, {fontSize: 40}]}>{CURRENCY_SYMBOL + 330}</Text>
          <TouchableOpacity onPress={() => {
            console.log("Add pressed")
            navigation.navigate("Add")
          }}>
            <MaterialIcons style={{marginLeft: 10, marginBottom: 7}} name="add-circle" size={30} color="black" />
          </TouchableOpacity>
          
        </View>
      </View>
      
      <View style={[Styles.yellowContainer, {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      }]}>
        <View style={Styles.violetContainer}>
          <Text style={[Styles.h1, {fontSize: 34}]}>Past Spendings</Text>
        </View>
        <View style={Styles.rowContainer}>
          <FlashList
        data={PAST_EXPENSES}
        estimatedItemSize={10}
        estimatedListSize={{ height: 100, width: Dimensions.get("screen").width }}
        renderItem={({item}) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            }}>
            <Text style={[Styles.h1, {
              textAlign: "left", 
              fontSize: 19,
              marginLeft: 20,
              }]}>{item.name}</Text>
            <Text style={[Styles.h1, {
              textAlign: "right", 
              fontSize: 19,
              marginRight: 20,
              }]}>{item.amount}</Text>
          </View>
          
        )}
        />
        </View>
      </View>

      
      
      
      {/*
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
      */}
    </SafeAreaView>

    

  );
}



  