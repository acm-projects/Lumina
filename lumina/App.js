import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";  
import login from "./screens/loginScreen";
import signUp from "./screens/signUpScreen";
import eventScreen from "./screens/eventScreen";
import homeScreen from "./screens/homeScreen";
import LoginButton from "./buttons/login/login_button";
import SignUpButton from "./buttons/sign-up/sign_up_button";
import ExistingAccount from "./buttons/sign-up/existing_account_button";
import EventDetailButton from "./buttons/calendar/EventDetailButtons";
import EventButton from "./buttons/event/eventButton";
import StarGazingCarousel from "./buttons/event/stargazingCarousel";
import PlanetCarousel from "./buttons/event/planetCarousel";
import LunarSolarCarousel from "./buttons/event/lunar_solarCarousel";
import calendarScreen from "./screens/calendar";
import weeklyCalendarScreen from "./screens/weeklyCalendar.js"
import EventDetailsScreen from "./screens/EventDetailsScreen";
import RNCalendar from "./buttons/calendar/RNCalendar";
import EventDetailsCalendarScreen from "./screens/EventDetailsCalendarScreen";
import MonthEventsCarousel from "./buttons/calendar/MonthEventsCarousel";
import profileScreen from "./screens/profileScreen.js";
import trackerScreen from "./screens/trackerScreen.js";
import BottomNavBar from './buttons/bottomNavBar.js';
import NavButton from './buttons/navButton.js';

import HomeButton from './buttons/iconBar/homeButton.js';
import CalendarButton from './buttons/iconBar/calendarButton.js';
import TrackerButton from './buttons/iconBar/trackerButton.js';
import ProfileButton from './buttons/iconBar/profileButton.js'
import EveButton from './buttons/iconBar/eventButton.js';
import { Calendar } from 'react-native-calendars';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login}/>
        <Stack.Screen name="signUp" component={signUp}/>
        <Stack.Screen name="eventScreen" component={eventScreen}/>
        <Stack.Screen name="homeScreen" component={homeScreen}/>
        <Stack.Screen name="profileScreen" component={profileScreen}/>
        <Stack.Screen name="calendarScreen" component={calendarScreen}/>
        <Stack.Screen name="trackerScreen" component={trackerScreen}/>
        <Stack.Screen name="weeklyCalendarScreen" component={weeklyCalendarScreen}/>
        <Stack.Screen name="LoginButton" component={LoginButton}/>
        <Stack.Screen name="SignUpButton" component={SignUpButton}/>
        <Stack.Screen name="EventDetailButton" component={EventDetailButton}/>
        <Stack.Screen name="ExistingAccountButton" component={ExistingAccount}/>
        <Stack.Screen name="EventButton" component={EventButton}/>
        <Stack.Screen name="NavButton" component={NavButton}/>
        <Stack.Screen name="StarGazingCarousel" component={StarGazingCarousel}/>
        <Stack.Screen name="PlanetCarousel" component={PlanetCarousel}/>
        <Stack.Screen name="LunarSolarCarousel" component={LunarSolarCarousel}/>
        <Stack.Screen name ="EventDetailsScreen" component={EventDetailsScreen}/>
        <Stack.Screen name="RNCalendar" component={RNCalendar}/>
        <Stack.Screen name="EventDetailsCalendarScreen" component={EventDetailsCalendarScreen}/>
        <Stack.Screen name="MonthEventsCarousel" component={MonthEventsCarousel}/>
        <Stack.Screen name="BottomNavBar" component={BottomNavBar}/>
        <Stack.Screen name="HomeButton" component={HomeButton}/>
        <Stack.Screen name="EveButton" component={EventButton}/>
        <Stack.Screen name="CalendarButton" component={CalendarButton}/>
        <Stack.Screen name="ProfileButton" component={ProfileButton}/>
        <Stack.Screen name="TrackerButton" component={TrackerButton}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  navigatorBox: {
    backgroundColor: "black",
    height: 80,
    width: 400,
  }
});
