import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SmallPhones from './TopNavigator/SmallPhones';
import MediumPhones from './TopNavigator/MediumPhones';
import LargePhones from './TopNavigator/LargePhones';

export default function MobileScreen() {
  let Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator style={styles.mainView}>
      <Tab.Screen name={"10K-20K"} component={SmallPhones}></Tab.Screen>
      <Tab.Screen name={"20K-30K"} component={MediumPhones}></Tab.Screen>
      <Tab.Screen name={"30K+"} component={LargePhones}></Tab.Screen>
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  mainView: {
    top:20,
  }
});