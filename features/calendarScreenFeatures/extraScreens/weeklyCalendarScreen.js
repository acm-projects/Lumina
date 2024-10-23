import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView} from 'react-native';
import MonthlyData from "/Users/thebenzsecrets/lumina4.0/features/calendarScreenFeatures/month1/monthlyData.json";

const screenHeight = Dimensions.get('window').height; //852
const screenWidth = Dimensions.get('window').width; //393
const dayWidth = screenWidth / 7;

const WeeklyCalendarScreen = ({route}) => {
    const {year, month, dog} = route.params;
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

    const getDate = () => {
        return new Date(year, month, dog);
    };

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const shortDaysOfTheWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayString = daysOfTheWeek[getDate().getDay()];
    
    return (
        <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/calendarScreenImages/calendarScreenBackground3.jpg')} style={styles.container}>
            <ScrollView >
            <View style={header.headerBox}>
                <Text style={header.headerText}>{dayString}</Text>
                <Text style={header.subHeader}>{monthNames[month-1].substring(0, 3)} {dog}, {year}</Text>
            </View>
            <ScrollView style={weekdayWidget.container} horizontal={true} contentContainerStyle={{justifyContent: 'space-evenly'}}>
                <View style={weekdayWidget.dayBox}>
                    <Text style={weekdayWidget.dayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'white'}]}>{dog-3}</Text>
                </View>
                <View style={weekdayWidget.dayBox}>
                    <Text style={weekdayWidget.dayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'white'}]}>{dog-2}</Text>
                </View>
                <View style={weekdayWidget.dayBox}>
                    <Text style={weekdayWidget.dayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'white'}]}>{dog-1}</Text>
                </View>
                <View style={weekdayWidget.chosenDayBox}>
                    <Text style={weekdayWidget.chosenDayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'black'}]}>{dog}</Text>
                </View>
                <View style={weekdayWidget.dayBox}>
                    <Text style={weekdayWidget.dayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'white'}]}>{dog+1}</Text>
                </View>
                <View style={weekdayWidget.dayBox}>
                    <Text style={weekdayWidget.dayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'white'}]}>{dog+2}</Text>
                </View>
                <View style={weekdayWidget.dayBox}>
                    <Text style={weekdayWidget.dayText}>{shortDaysOfTheWeek[getDate().getDay()]}</Text>
                    <Text style={[weekdayWidget.subtitleNumberDay, {color: 'white'}]}>{dog+3}</Text>
                </View>
            </ScrollView>

            <View style={widgets.widgetContainer}>
                <View style={widgets.cloudContainer}>

                </View>

            </View>

            </ScrollView>
        </ImageBackground>

    );
};

const header = StyleSheet.create({
    headerBox: {
        top: 80,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    headerText: {
        fontWeight: '700',
        fontSize: 27,
        color: '#fff',
        textTransform: 'capitalize',
    },
    subHeader: {
        fontWeight: '300',
        fontSize: 15,
        color: 'white',
    }
});

const boxWidth = 85;

const weekdayWidget = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 110,
        height: 125,
        width: boxWidth * 7,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    dayBox: {
        borderRadius: 10,
        alignItems: 'center',
        width: boxWidth,
        height: 125,
        backgroundColor: 'transparent',
    },
    chosenDayBox: {
        borderRadius: 10,
        alignItems: 'center',
        width: boxWidth,
        height: 125,
        backgroundColor: '#7B62A9',
    },
    dayText: {
        top: 20,
        fontSize: 35,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '400',
    },
    chosenDayText: {
        top: 20,
        fontSize: 35,
        color: '#000D30',
        textTransform: 'capitalize',
        fontWeight: '400',
    },
    subtitleNumberDay: {
        top: 25,
        fontSize: 30,
        fontWeight: 'ultralight',
    }
});

const widgets = StyleSheet.create({
    widgetContainer: {
        flexDirection: 'row',
        height: 90,
        width: screenWidth,
        backgroundColor: 'white',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    cloudContainer: {
        height: 90,
        width: 80,
        backgroundColor: '#474747',
        borderRadius: 10,
    }
});

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