import React from 'react';
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: '/Users/apple/pleasework/luminaapp_new/assets/images/homescreen.png' }}
        style={styles.background}
      >
        <View style={styles.moonAndWeatherContainer}>
          <View style={styles.moonPhasesContainer}>
            <Text style={styles.moonTitle}>Moon Phases</Text>
            <Image
              source={{ uri: 'https://moonphases.org/themes/xwm-moonphases/assets/images/moon-phases/waning_gibbous.png' }}
              style={styles.moonImage}
            />
            <Text style={styles.moonPhaseText}>Full Moon</Text>
          </View>

          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>72°</Text>
            <Text style={styles.weatherSubText}>Dallas, Texas</Text>
            <Text style={styles.weatherSubText}>Partly Cloudy</Text>
          </View>
        </View>

        <View style={styles.planningButtonContainer}>
          <TouchableOpacity style={styles.planningButton}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Start planning</Text>
              <Image
                source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/8atour/circle-right-arrow.png' }} 
                style={styles.icon} 
              />
            </View>
            <Text style={styles.buttonSubText}>via our celestial events calendar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>News</Text>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>Breaking: Celestial Event Next Week!</Text>
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>Astronomy Conference Highlights</Text>
          </View>
        </View>

        <View style={styles.recommendationsContainer}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationText}>Best Stargazing Opportunities</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moonAndWeatherContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '90%',
    marginTop: 40,
  },
  moonPhasesContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Nunito-sans',
  },
  moonImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  moonPhaseText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  moonTitle: {
    fontSize: 19,
    paddingBottom: 10,
    color: '#fff',
    fontFamily: 'Nunito-sans',
    fontWeight: 'bold',
  },
  weatherText: {
    fontSize: 60,
    color: '#fff',
  },
  weatherSubText: {
    fontSize: 18,
    color: '#d1d1d1',
  },
  planningButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  planningButton: {
    backgroundColor: '#7C63AB',
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'left', 
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Nunito-sans',
    marginTop: 5,
  },
  icon: {
    width: 40, 
    height: 40,
    marginLeft: 45,
    marginTop: 5,
  },
  buttonSubText: {
    fontSize: 11,
    color: '#fff',
    fontFamily: 'Nunito-sans',
    marginRight: 50,
    marginTop: -5,
  },
  newsContainer: {
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  newsItem: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
    alignItems: 'center',
  },
  newsText: {
    fontSize: 16,
    color: '#fff',
  },
  recommendationsContainer: {
    alignItems: 'flex-start',
    marginVertical: -10,
    marginTop: 10,
  },
  recommendationItem: {
    backgroundColor: '#000',
    padding: 40,
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
    alignItems: 'center',
  },
  recommendationText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Nunito-sans',
  },
});
