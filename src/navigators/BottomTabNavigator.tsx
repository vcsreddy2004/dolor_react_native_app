import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DrawerNavigator from './DrawerNavigator'
import ContactScreen from '../screens/BottomTabScreens/ContactScreen';
export default function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({route})=> ({
                headerShown:false,
                tabBarStyle:{
                    height:60,
                },
                tabBarIcon: ({ focused, size, color }: { focused: boolean; size: number; color: string }) => {
                    let iconName: string = '';
                    if (route.name === "home") {
                        iconName = focused ? "home-sharp" : "home-outline";
                        size = focused ? size + 8 : size + 2;
                    } else if (route.name === "contact") {
                        iconName = focused ? "person" : "person-outline";
                        size = focused ? size + 8 : size + 2;
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen name="home" component={DrawerNavigator} />
            <Tab.Screen name="contact" component={ContactScreen} />
        </Tab.Navigator>    
    )
}