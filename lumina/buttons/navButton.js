import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

export default function NavButton({text, navigation, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.imageStyle} source={require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/filledIcons/icons8-home-48 (3).png")}/>
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
    },
    imageStyle: {
        height: 20,
        width: 20,
    }
})