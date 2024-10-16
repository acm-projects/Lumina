import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from "@react-navigation/native-stack";  
import login from "./screens/loginScreen";
import signUp from "./screens/signUpScreen";
import eventScreen from "./screens/eventScreen";
import homeScreen from "./screens/homeScreen";
import LoginButton from "./buttons/login/login_button";
import SignUpButton from "./buttons/sign-up/sign_up_button";
import calendarScreen from "./screens/calendar";
import profileScreen from "./screens/profileScreen.js";
import trackerScreen from "./screens/trackerScreen.js";

import UnfilledHomeIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/unfilledIcons/icons8-home-48 (2).png";
import UnfilledCalendarIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/unfilledIcons/icons8-calendar-48 (3).png";
import UnfilledConstellationIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/unfilledIcons/icons8-constellation-50 (2).png";
import UnfilledEventIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/unfilledIcons/icons8-three-people-48 (3).png";
import UnfilledProfileIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/unfilledIcons/icons8-person-48.png";

import FilledHomeIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/filledIcons/icons8-home-48 (3).png";
import FilledCalendarIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/filledIcons/icons8-calendar-48 (2).png";
import FilledConstellationIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/filledIcons/icons8-constellation-50 (3).png";
import FilledEventIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/filledIcons/icons8-three-people-48 (2).png";
import FilledProfileIcon from "/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/navigationIcons/filledIcons/icons8-person-48 (1).png";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);


function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login}/>
        <Stack.Screen name="signUp" component={signUp}/>
        <Stack.Screen name="Tabs" component={MyTabs} screenOptions={{headerShown: false}} />
      </Stack.Navigator>

  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      // Icons for each tab
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === 'homeScreen') {
          iconName = focused ? FilledHomeIcon : UnfilledHomeIcon;
        } else if (route.name === 'calendarScreen') {
          iconName = focused ? FilledCalendarIcon : UnfilledCalendarIcon;
        } else if (route.name === 'trackerScreen') {
          iconName = focused ? FilledConstellationIcon : UnfilledConstellationIcon;
        } else if (route.name === 'eventScreen') {
          iconName = focused ? FilledEventIcon : UnfilledEventIcon;
        } else if (route.name === 'profileScreen') {
          iconName = focused ? FilledProfileIcon : UnfilledProfileIcon;
        }
        return <Image source={iconName} style={{width: 24, height: 24}} />;
      },
      // Tab bar styling
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'tomato', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
      tabBarStyle: { backgroundColor: 'black', height: 80 }, // Tab bar background color
      tabBarLabelStyle: { fontSize: 12 }, // Font size of tab labels
      tabBarIconStyle: { marginTop: 15 }, // Adjust the icon position
      headerShown: false,
    })}>
        <Tab.Screen name="homeScreen" component={homeScreen}/>
        <Tab.Screen name="calendarScreen" component={calendarScreen} />
        <Tab.Screen name="trackerScreen" component={trackerScreen}/>
        <Tab.Screen name="eventScreen" component={eventScreen}/>
        <Tab.Screen name="profileScreen" component={profileScreen}/>
        
        {/* <Tab.Screen name="weeklyCalendarScreen" component={weeklyCalendarScreen}/>
        <Tab.Screen name="LoginButton" component={LoginButton}/>
        <Tab.Screen name="SignUpButton" component={SignUpButton}/>
        <Tab.Screen name="EventDetailButton" component={EventDetailButton}/>
        <Tab.Screen name="ExistingAccountButton" component={ExistingAccount}/>
        <Tab.Screen name="EventButton" component={EventButton}/>
        <Tab.Screen name="NavButton" component={NavButton}/>
        <Tab.Screen name="StarGazingCarousel" component={StarGazingCarousel}/>
        <Tab.Screen name="PlanetCarousel" component={PlanetCarousel}/>
        <Tab.Screen name="LunarSolarCarousel" component={LunarSolarCarousel}/>
        <Tab.Screen name ="EventDetailsScreen" component={EventDetailsScreen}/>
        <Tab.Screen name="RNCalendar" component={RNCalendar}/>
        <Tab.Screen name="EventDetailsCalendarScreen" component={EventDetailsCalendarScreen}/>
        <Tab.Screen name="MonthEventsCarousel" component={MonthEventsCarousel}/>
        <Tab.Screen name="BottomNavBar" component={BottomNavBar}/>
        <Tab.Screen name="HomeButton" component={HomeButton}/>
        <Tab.Screen name="EveButton" component={EventButton}/>
        <Tab.Screen name="CalendarButton" component={CalendarButton}/>
        <Tab.Screen name="ProfileButton" component={ProfileButton}/>
        <Tab.Screen name="TrackerButton" component={TrackerButton}/> */}
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  navigatorBox: {
    backgroundColor: "black",
    height: 80,
    width: 400,
  }
});
