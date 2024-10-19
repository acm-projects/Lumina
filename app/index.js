import React, { useState } from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

const { width } = Dimensions.get('window');

const slides = [
  { key: '1', image: require('/Users/apple/pleasework/LuminaApp/assets/images/page1.png') }, 
  { key: '2', image: require('/Users/apple/pleasework/LuminaApp/assets/images/page2.png') }, 
  { key: '3', image: require('/Users/apple/pleasework/LuminaApp/assets/images/page3.png') }, 
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation(); 

  const onScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  const handleThirdImageClick = () => {
    navigation.navigate('home'); 
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <TouchableOpacity 
            key={slide.key} 
            onPress={index === 2 ? handleThirdImageClick : null} 
          >
            <Image source={slide.image} style={styles.slide} />
          </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d24',
  },
  slide: {
    width,
    height: '100%',
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

export default Carousel;
