import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LaptopScreen from '../screens/DrawerScreens/LaptopScreen'
import MobileScreen from '../screens/DrawerScreens/MobileScreen'
import { AuthContext } from '../auth/AuthProvider'

export default function DrawerNavigator() {
    let {logout} = useContext(AuthContext);
    let Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator initialRouteName='Laptop'>
            <Drawer.Screen name="Laptop" component={LaptopScreen} options={{headerRight: () => (
            <Button
              onPress={logout}
              title="Logout"
              color="#000"
            />
          )
        }} />
            <Drawer.Screen name="Mobile" component={MobileScreen}options={{headerRight: () => (
            <Button
              onPress={logout}
              title="Logout"
              color="#000"
            />) }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})