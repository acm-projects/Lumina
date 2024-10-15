import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import EventButton from '../buttons/event/eventButton';
import RNCalendar from '../buttons/calendar/RNCalendar';
import { MonthlyEvents } from '../assets/monthlyEvents';
import MonthEventsCarousel from '../buttons/calendar/MonthEventsCarousel';
import GoToWeek from '../buttons/calendar/GoToWeek';
import BottomNavBar from '../buttons/bottomNavBar';

export default function App({navigation}) {

  return (
      <ImageBackground source={require("../assets/EventBackground.jpeg")} style={styles.container}>
      <SafeAreaView>
        <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>MONTH</Text>
            <GoToWeek text="Week" onPress={() => navigation.navigate("weeklyCalendarScreen")}/>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', width: 375}}>
            <Text style={styles.subTitle}>SU</Text>
            <Text style={styles.subTitle}>MO</Text>
            <Text style={styles.subTitle}>TU</Text>
            <Text style={styles.subTitle}>WE</Text>
            <Text style={styles.subTitle}>TH</Text>
            <Text style={styles.subTitle}>FR</Text>
            <Text style={styles.subTitle}>SA</Text>
          </View>
          <View style={styles.box}>
          </View>
          <RNCalendar/>
          <MonthEventsCarousel list={MonthlyEvents}/>
        </View>
        <EventButton text="Don't have an account? Sign Up" onPress={() => navigation.navigate("signUp")}/>

        </ScrollView>
        <BottomNavBar/>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis:0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'left',
    marginBottom: 36,
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
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginTop: 10,
    letterSpacing: 5,
  },
  box: {
    marginTop: 20,
    marginBottom: 10,
    height: 2,
    width: 350,
    alignSelf: 'center',
    backgroundColor:'white',
  },
  item: {
    height: 30,
    width: 50,
    color: 'white',
  },
  /** Events Universal Styles */
  subTitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginLeft: 20,
  },
});