import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DrawerNavigator from './DrawerNavigator'
import ContactScreen from '../screens/BottomTabScreens/ContactScreen';
export default function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="home" 
                component={DrawerNavigator} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={"blue"} size={30} />
                    ),
                    headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="contact" 
                component={ContactScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon2 name="phone" color={"blue"} size={30} />
                    ),
                    headerShown: false,
                }} 
            />
        </Tab.Navigator>    
    )
}