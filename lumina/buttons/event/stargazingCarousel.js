import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const CARD_WIDTH = 275;
const CARD_HEIGHT = 200;

const StarGazingCarousel = ({list}) => {
    const navigation = useNavigation();
    return (
        <FlatList
            ListHeaderComponentStyle={{marginVertical: 10}}
            ListHeaderComponent={() => (
              <View>
                <FlatList
                  horizontal={true}
                  style={{ paddingVertical: 10}}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 40, paddingHorizontal: 20}}
                  data={list}
                  keyExtractor={(item, idx) => item + idx}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        borderRadius: 20,
                      }}
                      
                      onPress={() => 
                        navigation.navigate('EventDetailsScreen', {trip: item})
                      }
                    >
                      <View style={styles.card}>
                        <View style = {styles.imageBox}>
                          <Image source={item.image} style={styles.image}/>
                        </View>
                        <View style={styles.dateBox}>
                          <Text style={styles.dayText}>{item.day}</Text>
                          <Text style={styles.monthText}>{item.month}</Text>
                        </View>
                        <View style={styles.titleBox}>
                          <Text style={styles.hostText}>{item.host}</Text>
                          <Text style={styles.title}>{item.name}</Text>
                          <Text style={styles.locationText}>{item.location}</Text>
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

export default StarGazingCarousel;

// export default function StarGazingCarousel({text, navigation, onPress}) {
//   return (
//       <TouchableOpacity onPress={onPress}>
//         <Text style={styles.buttonText}>{ text }</Text>
//       </TouchableOpacity>
//   )
// }

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
    bottom: 20,
    left: 10,
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
  locationText: {
    fontSize: 10,
    fontWeight: '900',
    color: "white",
    letterSpacing: 2,
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
  dayText: {
    top: 5,
    textAlign: 'center',
    fontWeight:'700',
    fontSize: '30',
    color: '#8C70B6', 

  },
  monthText: {
    textAlign: 'center',
    color: '#8C70B6',
  },
});