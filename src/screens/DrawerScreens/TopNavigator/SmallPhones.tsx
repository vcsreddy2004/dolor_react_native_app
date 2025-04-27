import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SmallPhones() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SmallPhones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
})