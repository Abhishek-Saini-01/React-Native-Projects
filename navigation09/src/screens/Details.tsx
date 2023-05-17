import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import {RootStackparamList} from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackparamList, 'Details'>


const Details = ({route}: DetailsProps) => {
    const {productId} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackparamList>>()
    
    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Details: {productId}</Text>
            <Button 
                title='Go to Home'
                // onPress={() => navigation.navigate("Home")}            
                onPress={() => navigation.goBack()}            
            />
            <Button 
                title='Go to First Scrren'
                // onPress={() => navigation.pop(2)}            
                onPress={() => navigation.popToTop()}            
            />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})