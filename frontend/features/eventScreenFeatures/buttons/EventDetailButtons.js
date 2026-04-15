import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function EventDetailButton({onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.upperLine}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    upperLine: {
        backgroundColor: 'white',
        height: 5,
        width: 100,
        alignSelf: 'center',
        marginTop: 20,
    },
});