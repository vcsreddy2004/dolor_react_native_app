import React, { useContext } from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthProvider, { AuthContext } from "./src/auth/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./src/screens/StackScreens/LandingScreen";
import LoginScreen from "./src/screens/StackScreens/LoginScreen";
import RegisterScreen from "./src/screens/StackScreens/RegisterScreen";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator></AppNavigator>
    </AuthProvider>
  );
}
let AppNavigator = () => {
  let {user} = useContext(AuthContext);
  let Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="bottomTab" screenOptions={{headerShown:false}}>
          <Stack.Screen name="bottomTab" component={BottomTabNavigator}></Stack.Screen>
        </Stack.Navigator>
      ) : 
        <Stack.Navigator initialRouteName='landing' screenOptions={{headerShown:false}}>
          <Stack.Screen name="landing" component={LandingScreen}></Stack.Screen>
          <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="register" component={RegisterScreen}></Stack.Screen>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}