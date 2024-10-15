import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SignUpButton({text, navigation, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    button: {
        marginTop: 20,
        backgroundColor: '#7D62A9',
        opacity: 10,
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 40,
        elevation: 10,
        marginaVertical: 20,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    }
})