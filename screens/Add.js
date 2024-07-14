import React from "react";
import { SafeAreaView, Text, View, Dimensions, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Styles } from "./Styling.js";
import { FlashList } from "@shopify/flash-list";
import PAST_EXPENSES from "./past_expenses.js";
import { useState } from 'react';

export default function AddScreen() {
  const [money, setMoney] = useState(0);
  const [name, setName] = useState("");
  const [expense, setExpense] = useState(0);
  this.myTextInput = React.createRef();

  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text) => {
    setInputValue(text);
  };

  const handleSubmitEditing = () => {
    // Perform any action you want on submit
    console.log('Input submitted:', inputValue);

    // Clear the input field
    setInputValue('');
  };

  submitHandler = () => {
    setMoney({money: ""})
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
            onSubmitEditing={newMoney => {
              console.log(newMoney.nativeEvent.text)
            }}
            ref={this.myTextInput}
            placeholder="Enter money"
            keyboardType="phone-pad"
            style={{
              textAlign: 'center',
              fontFamily: "InterExtraBold",
              fontSize: 25
            }}
            />
            
          </View>
          <TouchableOpacity 
          style={Styles.violetContainer}
          onPress={() => setMoney('')}>
            <Text>Submit</Text>
          </TouchableOpacity>

          <TextInput
        value={inputValue}
        onChangeText={handleTextChange}
        placeholder="Type something..."
        onSubmitEditing={handleSubmitEditing}
        returnKeyType="done"
      />

      </SafeAreaView>
    );
}
  
  