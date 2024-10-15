import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Image} from 'react-native';
import NavButton from './navButton';
import HomeButton from './iconBar/homeButton';
import CalendarButton from './iconBar/calendarButton';
import TrackerButton from './iconBar/trackerButton';
import EveButton from './iconBar/eventButton';
import ProfileButton from './iconBar/profileButton';

export default function BottomNavBar({navigation}) {
    return(
        <View style={styles.navigationBarBox} >
            <View style={styles.iconBox} >
                <HomeButton text="Home"onPress={() => navigation.navigate("homeScreen")}/>
                <CalendarButton text="Calendar" onPress={() => navigation.navigate("calendarScreen")}/>
                <TrackerButton text="Tracker" onPress={() => navigation.navigate("trackerScreen")}/>
                <EveButton text="Event" onPress={() => navigation.navigate("eventScreen")}/>
                <ProfileButton text="Profile" onPress={() => navigation.navigate("profileScreen")}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    navigationBarBox: {
        opacity: 1,
        bottom: -410,
        height: 100,
        width: 400,
        backgroundColor: "black",
    },
    iconBox: {
        flexDirection: 'row',
        marginVertical: 20,
        height: 50,
        marginRight: 300,
        gap: 30,
        alignItems: 'center',
        marginLeft: 30,
    },
    imageIconBox: {
        flexGrow: 1,
        marginLeft: 15,
    }
});