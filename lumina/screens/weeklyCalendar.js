import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import WeatherCarousel from '../buttons/calendar/weeklyWeatherCarousel';
import { Days } from '../assets/days';
import GoToWeek from '../buttons/calendar/GoToWeek';
import WeatherWidget from '../buttons/calendar/Weekly/WeatherWidget';
import MoonWidget from '../buttons/calendar/Weekly/MoonWidget';
import MonthEventsCarousel from '../buttons/calendar/MonthEventsCarousel';
import { MonthlyEvents } from '../assets/monthlyEvents';

export default function App({navigation}) {
    return (
        <ImageBackground source={require("../assets/EventBackground.jpeg")} style={styles.container}>
        <SafeAreaView>
        <ScrollView>
        <View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <Text style={styles.title}>DALLAS, TEXAS</Text>
                <GoToWeek text="Month" onPress={() => navigation.navigate("calendarScreen")}/>
            </View>
            <View style={styles.box}/>
            <WeatherCarousel list={Days}/>
            <View style={styles.box}/>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <WeatherWidget text="Clouds" style={{}} onPress={() => navigation.navigate("homeScreen")}/>
                <MoonWidget/>
            </View>
            <MonthEventsCarousel list={MonthlyEvents}/>
        </View>
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis:0,
      },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginTop: 10,
        textAlign: 'left',
        marginLeft: 20,
        letterSpacing: 5,
    },
    box: {
        height: 2,
        width: 350,
        alignSelf: 'center',
        backgroundColor:'white',
      },
});