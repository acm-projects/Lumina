import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function WeatherWidget({text, navigation, onPress}) {
    return(
        <View>
            <View style={styles.button}>
                <Image style={[styles.image, {opacity: 1}]} source={require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-cloud-lightning-50.png")}/>
                <Text style={[styles.buttonText, {opacity: 1}]}>{ text }</Text>
                <Text style={[styles.buttonText, {marginRight: 50, opacity: 1}]}>{"10%"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create( {
    button: {
        backgroundColor: '#112450',
        borderRadius: 10,
        marginLeft: 20,
        elevation: 10,
        marginaVertical: 20,
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    buttonText: {
        marginTop: 0,
        color: 'white',
        fontSize: 15,
        marginRight: 30,
    },
    image: {
        marginTop: 10,
        marginRight: 40,
        height: 40,
        width: 40,
    }
})