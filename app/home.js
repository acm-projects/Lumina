import React from 'react';
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: '/Users/apple/pleasework/LuminaApp/assets/images/homescreen.png' }}
        style={styles.background}
      >
        {/* Moon Phases Section */}
        <View style={styles.moonPhasesContainer}>
          <Text style={styles.sectionTitle}>Moon Phases</Text>
          <Image
            source={{ uri: 'https://moonphases.org/themes/xwm-moonphases/assets/images/moon-phases/waning_gibbous.png' }}
            style={styles.moonImage}
          />
          <Text style={styles.moonPhaseText}>Full Moon</Text>
        </View>

        {/* Weather Section */}
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>72°</Text>
          <Text style={styles.weatherSubText}>Dallas, Texas</Text>
          <Text style={styles.weatherSubText}>Partly Cloudy</Text>
        </View>

        {/* Purple Button Section */}
        <View style={styles.planningButtonContainer}>
          <TouchableOpacity style={styles.planningButton}>
            <Text style={styles.buttonText}>Start planning</Text>
            <Text style={styles.buttonSubText}>via our celestial events calendar</Text>
          </TouchableOpacity>
        </View>

        {/* News Section */}
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>News</Text>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>Breaking: Celestial Event Next Week!</Text>
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>Astronomy Conference Highlights</Text>
          </View>
        </View>

        {/* Recommendations Section */}
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
  moonPhasesContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
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
  weatherContainer: {
    alignItems: 'center',
    marginVertical: 10,
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
    marginVertical: 30,
  },
  planningButton: {
    backgroundColor: '#7C63AB',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Nunito-sans',
  },
  buttonSubText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Nunito-sans',
  },
  newsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  newsItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
    alignItems: 'center',
  },
  newsText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Nunito-sans',
  },
  recommendationsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  recommendationItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
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
