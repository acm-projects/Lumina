import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ExistingAccount({text, navigation, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    buttonText: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    }
})