import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LaptopScreen from '../screens/DrawerScreens/LaptopScreen'
import MobileScreen from '../screens/DrawerScreens/MobileScreen'

export default function DrawerNavigator() {
    let Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator initialRouteName='Laptop'>
            <Drawer.Screen name="Laptop" component={LaptopScreen} />
            <Drawer.Screen name="Mobile" component={MobileScreen} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})