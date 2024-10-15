import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const RNCalendar = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
      <Calendar
      onDayPress={ day => {
        setSelected(day.dateString);
      }}
      theme={{
        monthTextColor: 'white',
        textMonthFontSize: 30,
        textMonthFontWeight: 'bold',
        backgroundColor: 'transparent',
        calendarBackground: 'transparent',
        arrowColor: 'white',
        dayTextColor: 'white',
        textDisabledColor: 'gray',
      }}
      hideDayNames={true}
      //specify the current date
      current={'2024-09-01'}
      //mark specified dates as marked
      markedDates={{
        '2024-09-03': {selected: true, marked: true, selectedColor: 'blue'},
      }}

      />

    </View>
  )
}

export default RNCalendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})