import React from "react";
import { SafeAreaView, Text } from "react-native";
import StackNavigator from "./src/navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}