import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';

export const Days = [
    {
        Degree: 72,
        DayOfTheWeek: "MON",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-cloud-50.png"),
        current: true,
    },
    {
        Degree: 78,
        DayOfTheWeek: "TUE",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-cloud-lightning-50.png"),
        current: false,
    },
    {
        Degree: 92,
        DayOfTheWeek: "WED",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-sun-50.png"),
        current: false,
    },
    {
        Degree: 52,
        DayOfTheWeek: "THU",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-sun-50.png"),
        current: false,
    },
    {
        Degree: 58,
        DayOfTheWeek: "FRI",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-cloud-50.png"),
        current: false,
    },
    {
        Degree: 62,
        DayOfTheWeek: "SAT",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-cloud-50.png"),
        current: false,
    },
    {
        Degree: 59,
        DayOfTheWeek: "SUN",
        Month: "September",
        Image: require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/weather_icon_photos/icons8-cloud-50.png"),
        current: false,
    },
];