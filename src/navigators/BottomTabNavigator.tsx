import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/BottomTabScreens/SearchScreen';
export default function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={"blue"} size={30} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="search" 
                component={SearchScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={"blue"} size={30} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="menu" 
                component={SearchScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="menu" color={"blue"} size={30} />
                    ),
                }} 
            />
        </Tab.Navigator>    
    )
}