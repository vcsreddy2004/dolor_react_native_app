import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const phones = [
    { name: 'Phone A', specs: '6.5-inch, 128GB', price: '\u20B9 79809' },
    { name: 'Phone B', specs: '6.7-inch, 256GB', price: '\u20B9 89670' },
    { name: 'Phone C', specs: '6.9-inch, 512GB', price: '\u20B9 98980' },
];
export default function LargePhones() {
    return (
        <View style={styles.container}>
            {phones.map((phone, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.name}>{phone.name}</Text>
                    <Text style={styles.specs}>{phone.specs}</Text>
                    <Text style={styles.price}>{phone.price}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    specs: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        color: '#007BFF',
        fontWeight: 'bold',
    },
});