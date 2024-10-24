import React, { useState } from "react";
import { StyleSheet, View, Dimensions, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native'; 
import * as Font from 'expo-font';

const { width } = Dimensions.get('window');

const slides = [
  { key: '1', video: require('/Users/apple/pleasework/luminaapp_new/assets/images/page1.mp4'), title: 'Explore celestial events', description: 'Stay updated on upcoming meteor showers, eclipses, and more with our easy-to-use celestial calendar.' },
  { key: '2', video: require('/Users/apple/pleasework/luminaapp_new/assets/images/page2.mp4'), title: 'Discover nearby stargazing sites', description: 'Find hidden gems with our location finder, showing you the best dark sky locations.' },
  { key: '3', video: require('/Users/apple/pleasework/luminaapp_new/assets/images/page3final.mp4'), title: 'Connect with your community', description: 'Join fellow astronomy enthusiasts on your journey through the stars!' },
];

const SplashCarousel = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const onScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  const handleSplashPress = () => {
    setShowSplash(false);
  };

  const handleStartPress = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      {showSplash ? (
        <TouchableOpacity onPress={handleSplashPress} style={styles.splashContainer}>
          <Image source={require('/Users/apple/pleasework/luminaapp_new/assets/splash.png')} style={styles.splashImage} />
        </TouchableOpacity>
      ) : (
        <>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
          >
            {slides.map((slide, index) => (
              <View key={slide.key} style={styles.slideContainer}>
                <Video
                  source={slide.video}
                  rate={0.6}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay={index === activeIndex}
                  isLooping
                  style={styles.video}
                />
                {index <= 2 && (
                  <View style={[styles.overlayContainer, index === 0 ? styles.darkBlue : (index === 1 ? styles.lightBlue : styles.customStyleForThirdSlide)]}>
                    <Text style={styles.overlayTitle}>{slide.title}</Text>
                  </View>
                )}
                {index <= 2 && (
                  <Text style={styles.description}>{slide.description}</Text>
                )}
                {index === 2 && (
                  <TouchableOpacity 
                    style={styles.startButton} 
                    onPress={handleStartPress}
                  >
                    <Text style={styles.startButtonText}>Start</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>
          <View style={styles.paginationWrapper}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === activeIndex ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d24',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slideContainer: {
    width,
    height: '100%',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 320,
    left: 20,
    right: 20,
    padding: 10,
    borderRadius: 10,
  },
  darkBlue: {
    backgroundColor: 'rgba(10, 25, 47, 0.7)',
  },
  lightBlue: {
    backgroundColor: 'rgba(137, 196, 244, 0.6)',
  },
  customStyleForThirdSlide: {
    backgroundColor: 'rgba(284, 100, 50, 0.3)',
    padding: 20,
    borderRadius: 10,
  },
  overlayTitle: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
  description: {
    position: 'absolute',
    bottom: 230,
    left: 20,
    right: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
  startButton: {
    position: 'absolute',
    bottom: 125,
    left: '50%',
    transform: [{ translateX: -75 }],
    width: 150,
    height: 50,
    backgroundColor: '#7C63AB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationDot: {
    height: 20,
    width: 20,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 26,
    borderWidth: 3,
    borderColor: '#7C63AB',
  },
  inactiveDot: {
    backgroundColor: '#7c63ab',
    width: 20,
    borderWidth: 3,
    borderColor: '#7C63AB',
  },
});

export default SplashCarousel;
