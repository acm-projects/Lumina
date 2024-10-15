import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';

const CARD_WIDTH = 75;
const CARD_HEIGHT = 150;

const WeatherCarousel = ({list}) => {
    return (
        <FlatList
            ListHeaderComponentStyle={{marginTop: 0}}
            ListHeaderComponent={() => (
              <View>
                <FlatList
                  horizontal={true}
                  style={{ paddingVertical: 0}}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 10, paddingHorizontal: 20}}
                  data={list}
                  keyExtractor={(item, idx) => item + idx}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "transparent",
                        borderRadius: 20,
                      }}
                    >
                      <View style={styles.card}>
                        <View style={styles.titleBox}>
                          <Image style={styles.iconSettings}source={item.Image}/>
                          <Text style={styles.degreeText}>{item.Degree}</Text>
                          <Text style={styles.dayText}>{item.DayOfTheWeek}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    )}
                />
              </View>
            )}
          />
        );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    marginTop: 30,
    paddingHorizontal: 13,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: "white",
    letterSpacing: 2,
  },
  hostText: {
    fontSize: 13,
    fontWeight: '700',
    color: "white",
  },
  degreeText: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
  },
  dayText: {
    color: "white",
    alignSelf: "center",
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },
  dateBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    position: 'absolute',
    right: 10,
    top: 10,
  },
  monthText: {
    textAlign: 'center',
    color: '#8C70B6',
  },
});

export default WeatherCarousel;
