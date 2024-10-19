import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput
} from 'react-native';
import StarGazingCarousel from '/Users/thebenzsecrets/lumina4.0/features/eventScreenFeatures/carousels/stargazingCarousel.js';
import PlanetCarousel from '/Users/thebenzsecrets/lumina4.0/features/eventScreenFeatures/carousels/planetCarousel.js';
import LunarSolarCarousel from '/Users/thebenzsecrets/lumina4.0/features/eventScreenFeatures/carousels/lunar_solarCarousel.js';
import { starEvents } from '/Users/thebenzsecrets/lumina4.0/assets/eventScreenData/stargazing.js';
import { planetEvents } from '/Users/thebenzsecrets/lumina4.0/assets/eventScreenData/planets.js';
import { lunarAndSolarEvents } from '/Users/thebenzsecrets/lumina4.0/assets/eventScreenData/lunarAndSolar.js';

export default class EventScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/eventScreenImages/EventBackground.jpeg')} style={styles.container}>
              <SafeAreaView>
                <ScrollView>
                  <View>
                    <Text style={styles.title}>Events</Text>
                  </View>

                  <View>
                    <View style={styles.searchContainer}>
                      <Image style={styles.usernameIcon} source={require('../assets/icons8-search-30.png')}/>
                      <TextInput style={styles.textInput} text="Search" placeholderTextColor="white"/>
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
                    }}>PLANETS</Text>
                    <LunarSolarCarousel list={lunarAndSolarEvents}/>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </ImageBackground>
        )
    }
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
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'center',
    height: 40,
    width: 350,
    alignSelf: 'center',
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