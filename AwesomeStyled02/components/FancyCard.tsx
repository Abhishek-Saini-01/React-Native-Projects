import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[ styles.card, styles.cardElevated]}>
            <Image source={{
                uri: 'https://images.unsplash.com/photo-1545126126-ebea588ee202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardText}>Hawa Mahel</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                <Text style={styles.cardDecription}>Mahel is a place in the city ogf Jaipur, India. Built from red and pink sandstones, it is on the edge of the City Palace.</Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>

        </View>
        <View style={[ styles.card, styles.cardElevated]}>
            <Image source={{
                uri: 'https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardText}>Hawa Mahel</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                <Text style={styles.cardDecription}>Mahel is a place in the city ogf Jaipur, India. Built from red and pink sandstones, it is on the edge of the City Palace.</Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 340,
        height: 360,
        borderRadius: 6,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },

    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: 'black',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDecription: {
        color: '#242b2e',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {
        color: 'black',
        fontSize: 16,
    },
})

export default FancyCard
