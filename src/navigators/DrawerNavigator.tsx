import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            <TouchableOpacity
              onPress={logout}
              style={styles.logoutBtn}
            >
              <Text style={{color:"white",padding:10,}}>Log Out</Text>
            </TouchableOpacity>
          )}}
          />
          <Drawer.Screen name="Mobile" component={MobileScreen}options={{headerRight: () => (
            <TouchableOpacity
              onPress={logout}
              style={styles.logoutBtn}
            >
              <Text style={{color:"white",padding:10,}}>Log Out</Text>
            </TouchableOpacity>
          )}}
          />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
  logoutBtn: {
    backgroundColor:"red",  
    marginInline:20, 
  }
})