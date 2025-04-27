import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const phones = [
    { name: 'Phone A', specs: '4GB RAM, 64GB Storage', price: '\u20B9 24809' },
    { name: 'Phone B', specs: '6GB RAM, 128GB Storage', price: '\u20B9 23909' },
    { name: 'Phone C', specs: '8GB RAM, 256GB Storage', price: '\u20B9 22322' },
];
export default function MediumPhones() {
    return (
        <View style={styles.container}>
            {phones.map((phone, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.cardText}>{phone.name}</Text>
                    <Text style={styles.specsText}>{phone.specs}</Text>
                    <Text style={styles.priceText}>{phone.price}</Text>
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
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    specsText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
        marginTop: 8,
    },
});