import { View, Text } from 'react-native'
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LandingScreen from '../screens/StackScreens/LandingScreen';
import LoginScreen from '../screens/StackScreens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import RegisterScreen from '../screens/StackScreens/RegisterScreen';
export default function StackNavigator() {
    let Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='landing' screenOptions={{headerShown:false}}>
            <Stack.Screen name="landing" component={LandingScreen}></Stack.Screen>
            <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="register" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="bottomTab" component={BottomTabNavigator}></Stack.Screen>
        </Stack.Navigator>
    );
}