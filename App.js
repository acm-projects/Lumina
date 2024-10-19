import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withAuthenticator } from '@aws-amplify/ui-react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";  
import homeScreen from "./screens/homeScreen";
import profileScreen from "./screens/profileScreen.js";

import UnfilledHomeIcon from "";
import UnfilledCalendarIcon from "";
import UnfilledConstellationIcon from "";
import UnfilledEventIcon from "";
import UnfilledProfileIcon from "";

import FilledHomeIcon from "";
import FilledCalendarIcon from "";
import FilledConstellationIcon from "";
import FilledEventIcon from "";
import FilledProfileIcon from "";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//       <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
//         <Stack.Screen name="login" component={login}/>
//         <Stack.Screen name="signUp" component={signUp}/>
//         <Stack.Screen name="Tabs" component={MyTabs} screenOptions={{headerShown: false}} />
//       </Stack.Navigator>

//   );
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator screenOptions={({ route }) => ({
//       // Icons for each tab
//       tabBarIcon: ({ focused }) => {
//         let iconName;
//         if (route.name === 'homeScreen') {
//           iconName = focused ? FilledHomeIcon : UnfilledHomeIcon;
//         } else if (route.name === 'calendarScreen') {
//           iconName = focused ? FilledCalendarIcon : UnfilledCalendarIcon;
//         } else if (route.name === 'trackerScreen') {
//           iconName = focused ? FilledConstellationIcon : UnfilledConstellationIcon;
//         } else if (route.name === 'eventScreen') {
//           iconName = focused ? FilledEventIcon : UnfilledEventIcon;
//         } else if (route.name === 'profileScreen') {
//           iconName = focused ? FilledProfileIcon : UnfilledProfileIcon;
//         }
//         return <Image source={iconName} style={{width: 24, height: 24}} />;
//       },
//       // Tab bar styling
//       tabBarShowLabel: false,
//       tabBarActiveTintColor: 'tomato', // Active tab color
//       tabBarInactiveTintColor: 'gray', // Inactive tab color
//       tabBarStyle: { backgroundColor: 'black', height: 80 }, // Tab bar background color
//       tabBarLabelStyle: { fontSize: 12 }, // Font size of tab labels
//       tabBarIconStyle: { marginTop: 15 }, // Adjust the icon position
//       headerShown: false,
//     })}>
//         <Tab.Screen name="homeScreen" component={homeScreen}/>
//         <Tab.Screen name="calendarScreen" component={calendarScreen} />
//         <Tab.Screen name="trackerScreen" component={trackerScreen}/>
//         <Tab.Screen name="eventScreen" component={eventScreen}/>
//         <Tab.Screen name="profileScreen" component={profileScreen}/>
//       </Tab.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
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

export default withAuthenticator(App);