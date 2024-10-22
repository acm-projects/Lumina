import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import MonthlyData from "/Users/thebenzsecrets/lumina4.0/features/calendarScreenFeatures/month1/monthlyData.json";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const dayWidth = screenWidth / 7;

const WeeklyCalendarScreen = ( {route} ) => {
    const {day} = route.params;
    const [currentDate, setCurrentDate] = useState(new Date());

    const getEventsForDay = (day) => {
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        console.log("Fetching events for date:", dateKey);
        return MonthlyData.events[dateKey] || [];
    };

    //function to get color for type of event
    const getEventColor = (event) => {
        switch(event.type) {
        case 1:
            return styles.solarBox;
        case 2:
            return styles.lunarBox;
        case 3: 
            return styles.stargazingBox;
        default:
            return styles.socialBox;
        }
    };
    
    return (
        <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/calendarScreenImages/calendarScreenBackground3.jpg')} style={styles.container}>
            <Text style={{fontSize: 30, color: 'white', top: screenHeight/2, left: screenWidth/2-15}}>{day}</Text>
            {getEventsForDay(day).map((event) => (
              <View style={getEventColor(event)}>
                <Text key={event.id} style={styles.eventText}>{event.name}</Text>
              </View>
            ))}
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    eventText: {
        fontSize: 10,
        color: 'white',
    },
    solarBox: {
        height: 14, width: dayWidth-3, backgroundColor: '#B98A13', marginBottom: 5
    },
    lunarBox: {
        height: 14, width: dayWidth-3, backgroundColor: '#807BE4', marginBottom: 5
    },
    stargazingBox: {
        height: 14, width: dayWidth-3, backgroundColor: '#2F43E4', marginBottom: 5
    },
    socialBox: {
        height: 14, width: dayWidth-3, backgroundColor: '#BA91F9', marginBottom: 5
    }
});

export default WeeklyCalendarScreen;