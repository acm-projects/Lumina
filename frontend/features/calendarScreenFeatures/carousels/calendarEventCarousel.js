import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CalendarEventCarousel = ({ items }) => {
    const navigation = useNavigation();
    return (
        <ScrollView vertical={true} contentContainerStyle={{justifyContent: 'space-evenly', gap: 30, paddingHorizontal: 20}}>
            {items.map((item, index) => (
                <Pressable onPress={() => 
                    navigation.navigate('eventDetailsScreen', {trip: item})
                  }>
                <View key={index} style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <View>
                            <Text style={styles.eventNameText}>{item.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.dateText}>{item.date}</Text>
                        </View>
                        <View>
                            <Text style={styles.timeText}>{item.time}</Text>
                        </View>
                        <View>
                            <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.imageContainer} source={item.photo}/>
                    </View>
                </View>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#7B62A9',
        borderRadius: 20,
        height: 140,
        flex: 1,
    },
    textContainer: {
        marginLeft: 20,
        height: 140,
        width: 180,
        paddingVertical: 18,
    },
    eventNameText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    dateText: {
        color: 'white',
    },
    timeText: {
        color: 'white',
    },
    locationText: {
        color: 'white',
    },
    imageContainer: {
        height: 140,
        width: 140,
        left: 13,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
});

export default CalendarEventCarousel;
