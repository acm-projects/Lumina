import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const CARD_WIDTH = 350;
const CARD_HEIGHT = 150;

const MonthEventsCarousel = ({list}) => {
    const navigation = useNavigation();
    return (
        <FlatList
            ListHeaderComponentStyle={{marginVertical: 10}}
            ListHeaderComponent={() => (
              <View>
                <FlatList
                  vertical={true}
                  style={{ paddingVertical: 10}}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{gap: 40, paddingHorizontal: 20}}
                  data={list}
                  keyExtractor={(item, idx) => item + idx}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#7D66B3",
                        borderRadius: 20,
                        width: CARD_WIDTH,
                        height: CARD_HEIGHT,
                        marginBottom: 20,
                        marginLeft: 20,
                        opacity: 1.0,
                      }}
                      
                      onPress={() => 
                        navigation.navigate('EventDetailsCalendarScreen', {trip: item})
                      }
                    >
                      <View style={styles.card}>
                        <View style = {styles.imageBox}>
                          <Image source={item.image} style={styles.image}/>
                        </View>
                        <View style={styles.titleBox}>
                          <Text style={styles.title}>{item.name}</Text>
                          <Text style={styles.hostText}>{item.host}</Text>
                          <Text style={styles.locationText}>{item.address}</Text>
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

export default MonthEventsCarousel;

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
    width: 150,
    height: CARD_HEIGHT,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    marginLeft: 200,
  },
  image: {
    height: CARD_HEIGHT,
    width: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleBox: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 170,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: "white",
    letterSpacing: 2,
  },
  hostText: {
    fontSize: 13,
    fontWeight: '500',
    color: "white",
  },
  locationText: {
    fontSize: 10,
    fontWeight: '500',
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