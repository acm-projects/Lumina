import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList
} from 'react-native'

const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

function getNumDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export default class CalendarScreen extends React.Component {
    render() {
        console.log(currentDate.getNumDaysInMonth);
        return (
          <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/calendarScreenImages/calendarBackground.jpeg')} style={styles.container}>
            <View>
              <Text style={styles.textStyle}>{getNumDaysInMonth(currentMonth, currentYear)}</Text>
            </View>
          </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 1,
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      padding: 10,
      color: '#fff'
    }
});