import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, AboutScreen, AddScreen } from "./screens";
import { Styles } from "./screens/Styling.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from "expo-font";

const Tab = createMaterialBottomTabNavigator();

export default function App() {

const[fontsLoaded] = useFonts({
  "InterExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
})
  
  return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3e2465" 
        inactiveColor="#c99c06"
        title="Home"
        
        barStyle={{ marginLeft:10, marginRight:10 }}
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


