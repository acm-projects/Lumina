import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Image, BackHandler, Text, ImageBackground, TextInput} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import EventDetailButton from '../buttons/calendar/EventDetailButtons';

const EventDetailsCalendarScreen = ({navigation, route}) => {
    const {trip} = route.params;
    return (
        <ImageBackground source={require("../assets/EventBackground.jpeg")} style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.imageBox}>
                        <Image source={trip.image} style={[StyleSheet.absoluteFillObject, styles.image]}/>
                        <EventDetailButton onPress={() => navigation.navigate("calendarScreen")}/>
                    </View>
                    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.infoBox}>
                        <Text style={styles.title}>{trip.name}</Text>
                        <Text style={styles.date}>{trip.bob} {trip.time}</Text>
                        <Text style={styles.addressStyle}>{trip.address}</Text>
                        <Text style={styles.aboutStyle}>About</Text>
                        <Text style={styles.descriptionStyle}>{trip.description}</Text>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    testTrial: {
        fontSize: 20,
    },
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis:0,
    },
    //INFO BOX
    infoBox: {
        backgroundColor: '#0B112B',
        height: 800,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: "white",
        letterSpacing: 2,
        marginTop: 15,
        marginLeft: 10,
    },
    date: {
        fontSize: 20,
        fontWeight: '500',
        color: "white",
        letterSpacing: 1,
        marginTop: 10,
        marginLeft: 10,
    },
    addressStyle: {
        color: "gray",
        fontSize: 15,
        marginLeft: 10,
    },
    aboutStyle: {
        fontSize: 20,
        fontWeight: '700',
        color: "white",
        letterSpacing: 1,
        marginTop: 10,
        marginLeft: 10,
    },
    descriptionStyle: {
        fontSize: 20,
        fontWeight: '400',
        color: "white",
        letterSpacing: 1,
        marginTop: 10,
        marginLeft: 10,
    },
    imageBox: {
        width: 395,
        height: 400,
        marginTop: 15,
    },
    image: {
        borderTopLeftRadius: '20',
        borderTopRightRadius: '20',
        width: 395,
        height: 400,
    },
});

export default EventDetailsCalendarScreen;