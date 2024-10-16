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
import GoToWeek from '/Users/thebenzsecrets/Desktop/Lumina/lumina/buttons/calendar/GoToWeek.js';
import getDaysInMonth from 'react-native-calendars/src/calendar/day';

export default function App({navigation}) {
  const daysInMonth = getDaysInMonth.getDaysInMonth();
  
  return (
      <ImageBackground source={require("/Users/thebenzsecrets/Desktop/Lumina/lumina/assets/calendarPhotos/31AD543C-39F9-4AB5-AF7C-902A3B99310D.jpeg")} style={styles.container}>
      <Text style={styles.title}>{daysInMonthß}</Text>
      <ScrollView>
      <SafeAreaView>
        <View>
          <View style={{flexDirection: 'row'}}>
            {/* <GoToWeek text="Week" onPress={() => navigation.navigate("weeklyCalendarScreen")}/> */}
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'center', width: 375}}>
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
          <RNCalendar/> */}
        </View>

      </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flex: 1,
    flexShrink: 1,
    flexBasis:0,
    height: 852,
    width: 393,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 20,
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