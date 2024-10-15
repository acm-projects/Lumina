import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function GoToWeek({text, navigation, onPress}) {
    return(
        <TouchableOpacity style={{justifyContent: "flex-end"}} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    button: {
        marginTop: 10,
        backgroundColor: '#474747',
        opacity: 0.4,
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 40,
        elevation: 10,
        marginaVertical: 20,
        alignItems: 'center',
        height: 30,
        width: 100,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})