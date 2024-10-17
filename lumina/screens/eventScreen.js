import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventButton from '../buttons/event/eventButton';
import StarGazingCarousel from '../buttons/event/stargazingCarousel';
import PlanetCarousel from '../buttons/event/planetCarousel';
import LunarSolarCarousel from '../buttons/event/lunar_solarCarousel';
import { starEvents } from '../assets/stargazing';
import { planetEvents } from '../assets/planets';
import { lunarAndSolarEvents } from '../assets/lunarAndSolar';

export default function App({navigation}) {

  return (
      <ImageBackground source={require("../assets/EventBackground.jpeg")} style={styles.container}>
      <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.title}>Events</Text>
        </View>

        <View>
          <View style={styles.searchContainer}>
            <Image style={styles.usernameIcon} source={require('../assets/icons8-search-30.png')}/>
            <TextInput style={styles.textInput} placeholderTextColor="#0F1630"/>
          </View>
        </View>

        <View>
          <Text style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white',
              marginLeft: 20,
          }}>STARGAZING</Text>

          <StarGazingCarousel list={starEvents}/>
        </View>

        <View>
          <Text style={{
              fontSize: 20,
              color: 'white',
              marginLeft: 20,
          }}>PLANETS</Text>
          <PlanetCarousel list={planetEvents}/>
        </View>

        <View>
          <Text style={{
            fontSize: 20,
            color: 'white',
            marginLeft: 20,
          }}>LUNAR/SOLAR</Text>

          <LunarSolarCarousel list={lunarAndSolarEvents}/>
        </View>
        </ScrollView>
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
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 20,
  },

  /** SEARCH */
  usernameIcon: {
    marginLeft: 10,
    opacity: 1,
    tintColor: 'black',
  },
  searchContainer: {
    backgroundColor: '#D8D8D8',
    flexDirection: 'row',
    borderRadius: 50,
    marginHorizontal: 20,
    marginRight: 75,
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'center',
    height: 40,
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