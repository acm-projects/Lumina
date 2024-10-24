import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView, Image} from 'react-native';
import MonthlyData from "/Users/thebenzsecrets/lumina4.0/features/calendarScreenFeatures/month1/monthlyData.json";
import { FlatList } from 'react-native-gesture-handler';
import CalendarEventCarousel from '../carousels/calendarEventCarousel';

const screenHeight = Dimensions.get('window').height; //852
const screenWidth = Dimensions.get('window').width; //393
const dayWidth = screenWidth / 7;

const WeeklyCalendarScreen = ({route}) => {
    const {year, month, dog} = route.params;
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentCloudPrec, setCloudPrec] = useState(0);
    const [currentMoonPhase, setMoonPhase]  = useState("Full Moon");
    const [currentIllumination, setIllumination] = useState(0);


    const getEventsForDay = (day) => {
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        console.log("Fetching events for date:", dateKey);
        return MonthlyData.events[dateKey] || [];
    };

    const lists = [
        { id: 1, title: 'International Observe the Moon Night', date: 'September 18th', time: '8:00AM to 10:00AM', location: '700 Planetarium Place, Arlington TX', photo: require('/Users/thebenzsecrets/lumina4.0/assets/eventScreenImages/events_stargazing_photos/photo1.jpeg')},
        { id: 2, title: 'International Observe the Moon Night', date: 'September 18th', time: '8:00AM to 10:00AM', location: '700 Planetarium Place, Arlington TX', photo: require('/Users/thebenzsecrets/lumina4.0/assets/eventScreenImages/events_stargazing_photos/photo2.jpeg')},
        { id: 3, title: 'International Observe the Moon Night', date: 'September 18th', time: '8:00AM to 10:00AM', location: '700 Planetarium Place, Arlington TX', photo: require('/Users/thebenzsecrets/lumina4.0/assets/eventScreenImages/events_stargazing_photos/photo3.jpg')},
        { id: 4, title: 'International Observe the Moon Night', date: 'September 18th', time: '8:00AM to 10:00AM', location: '700 Planetarium Place, Arlington TX', photo: require('/Users/thebenzsecrets/lumina4.0/assets/eventScreenImages/events_stargazing_photos/photo4.jpg')},
        { id: 5, title: 'International Observe the Moon Night', date: 'September 18th', time: '8:00AM to 10:00AM', location: '700 Planetarium Place, Arlington TX', photo: require('/Users/thebenzsecrets/lumina4.0/assets/eventScreenImages/events_stargazing_photos/photo5.jpg')},
    ];

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
                <Text style={header.subHeader}>{monthNames[month].substring(0, 3)} {dog}, {year}</Text>
            </View>
            <ScrollView style={weekdayWidget.container} horizontal={true} contentContainerStyle={{justifyContent: 'space-evenly', gap: 10, paddingHorizontal: 30}} showsHorizontalScrollIndicator='false'>
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
                    <Image style={{height: 30, width: 30, resizeMode: 'contain', marginLeft: 10, marginTop: 10}} source={require('/Users/thebenzsecrets/lumina4.0/assets/calendarScreenImages/icons8-cloud-96.png')}/>
                    <Text style={widgets.cloudText}>Clouds</Text>
                    <Text style={widgets.cloudNumberText}>{currentCloudPrec}%</Text>
                </View>
                <View style={[widgets.moonContainer, {paddingHorizontal: 10}]}>
                    <Text style={[widgets.moonText, {top: 10, resizeMode: 'contain', fontWeight: 'bold'}]}>Full Moon</Text>
                    <Text style={{color: 'white', resizeMode: 'contain', top: 10}}>Illumination: {currentIllumination}%</Text>
                    <View style={{height: 1, backgroundColor: '#7379AE', width: 110, top: 10}}/>
                    <Text style={{color: 'white', resizeMode: 'contain', top: 10}}>Altitude: 40</Text>
                    <View style={{height: 1, backgroundColor: '#7379AE', width: 110, top: 10}}/>
                    <Text style={{color: 'white', resizeMode: 'contain', top: 10}}>Age: 12.4 days</Text>
                </View>
                <View style={widgets.weatherContainer}>
                    <Text style={widgets.weatherText}>98</Text>
                    <Text style={{fontSize: 15, color: 'white', alignSelf: 'center', marginTop: 10}}>Partly Cloudy</Text>
                </View>
            </View>

            <View style={{top: 30}}>
                <CalendarEventCarousel items={lists}/>
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
        fontSize: 40,
        color: '#fff',
        textTransform: 'capitalize',
    },
    subHeader: {
        fontWeight: '300',
        fontSize: 15,
        color: 'white',
    }
});

const boxWidth = 60;

const weekdayWidget = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 110,
        height: 100,
        width: boxWidth * 7,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignContent: 'center',
    },
    dayBox: {
        borderRadius: 10,
        alignItems: 'center',
        width: boxWidth,
        height: 90,
        backgroundColor: 'transparent',
    },
    chosenDayBox: {
        borderRadius: 5,
        alignItems: 'center',
        width: boxWidth,
        height: 90,
        backgroundColor: '#7B62A9',
    },
    dayText: {
        top: 15,
        fontSize: 30,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '400',
    },
    chosenDayText: {
        top: 15,
        fontSize: 30,
        color: '#000D30',
        textTransform: 'capitalize',
        fontWeight: '400',
    },
    subtitleNumberDay: {
        top: 15,
        fontSize: 20,
        fontWeight: 'ultralight',
    }
});

const widgets = StyleSheet.create({
    widgetContainer: {
        flexDirection: 'row',
        height: 90,
        width: screenWidth,
        marginTop: 30,
        paddingHorizontal: 20,
    },
    cloudContainer: {
        height: 90,
        width: 80,
        backgroundColor: '#182748',
        borderRadius: 10,
    },
    cloudText: {
        color: 'white',
        top: 5,
        resizeMode: 'contain',
        fontSize: 15,
        left: 10,
    },
    cloudNumberText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
        fontWeight: '500',
    },
    moonContainer: {
        marginLeft: 20,
        height: 90,
        width: 150,
        backgroundColor: '#182748',
        borderRadius: 10,
    },
    moonText: {
        color: 'white',
    },
    weatherContainer: {
        marginLeft: 20,
        height: 90,
        width: 80,
        backgroundColor: '#182748',
        borderRadius: 10,
    },
    weatherText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 25,
        top: 10,
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