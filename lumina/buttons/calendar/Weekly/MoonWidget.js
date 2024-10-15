import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MoonWidget({text, navigation, onPress}) {
    return(
        <View style={styles.button}>
            <View style={{flexDirection: 'column', marginTop: 10, marginLeft: 10}}>
                <Text style={styles.text}>Phase: Full Moon</Text>
                <Text style={styles.text}>Brightness: 100%</Text>
            </View>
            <Image style={{ left: 10, height: 60, width: 60, top: 20,}}source={require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/moon_phase_icon_photos/icons8-moon-48 (1).png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#112450',
        borderRadius: 10,
        marginLeft: 20,
        elevation: 10,
        marginaVertical: 20,
        height: 100,
        width: 230,
        flexDirection: 'row',
    },
    text: {
        marginTop: 5,
        marginRight: 10,
        color: "white",
        fontWeight: 'bold',
    }

})