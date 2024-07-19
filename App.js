import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, AboutScreen, AddScreen, LoadingScreen } from "./screens";
import { Styles } from "./screens/Styling.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { SQLiteProvider } from 'expo-sqlite/next';
import * as SQLite from 'expo-sqlite/legacy';
import { Suspense } from 'react';

const loadDatabase = async () => {
  const db = await SQLite.openDatabase('./db/past_expense.db');
};

const Tab = createMaterialBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const[fontsLoaded, error] = useFonts({
    "InterExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });
  const[isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    loadDatabase()
      .then(() => setLoaded(true))
      .catch((e) => console.log(e));
  }, []);

  if (fontsLoaded || error) {
    SplashScreen.hideAsync();
  }
  
  if (!fontsLoaded && !error) {
    return null;
  }

  if (!isLoaded) {
    LoadingScreen()
  }
  
  return (
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
 

    
  );
}


