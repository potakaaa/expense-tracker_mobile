import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, AboutScreen, AddScreen, LoadingScreen } from "./screens";
import { Styles } from "./screens/Styling.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, createContext } from 'react';
import { db, expenses, setExpenses, UpdateContext } from "./screens/exports.js";

const Tab = createMaterialBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [updateCounter, setUpdateCounter] = useState(0);

  const updateHomeScreen = () => {
    setUpdateCounter(updateCounter + 1);
  };

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

  const[fontsLoaded, error] = useFonts({
    "InterExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });
  const[isLoaded, setLoaded] = useState(false);

  if (fontsLoaded || error) {
    SplashScreen.hideAsync();
  }
  
  if (!fontsLoaded && !error) {
    return null;
  }

  if (!isLoaded) {
    LoadingScreen;
  }
  
  return (
    <UpdateContext.Provider value={{ updateCounter, updateHomeScreen }}>
      <NavigationContainer>        
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3e2465" 
        inactiveColor="#c99c06"
        title="Home"
        backBehavior="history"
        
        barStyle={{ 
          marginLeft:10, 
          marginRight:10,
          borderRadius: 50,
        }}
        >
          <Tab.Screen name="Home" 
          component={HomeScreen}
          initialParams={{ itemId: 1 }}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          />
          <Tab.Screen name="Add" 
          component={AddScreen}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={26} />
            ),
          }}
          />
          <Tab.Screen name="About" 
          component={AboutScreen} 
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={color} size={26} />
            ),
          }}
          />
          </Tab.Navigator>      
        </NavigationContainer>
      </UpdateContext.Provider>
 

    
  );
}


