import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import MonthlyData from "/Users/thebenzsecrets/lumina4.0/features/calendarScreenFeatures/month1/monthlyData.json";

const screenWidth = Dimensions.get('window').width;
const dayWidth = screenWidth / 7;

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  
  // Helper function to get the number of days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper function to get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Update the calendar when the current date changes
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const totalDays = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);

    const daysArray = [];
    
    // Fill in the blanks for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push("");
    }

    // Fill in the days of the current month
    for (let day = 1; day <= totalDays; day++) {
      daysArray.push(day);
    }

    setDaysInMonth(daysArray);
  }, [currentDate]);

  // Get events for a specific day
  const getEventsForDay = (day) => {
    const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return MonthlyData.events[dateKey] || [];
  };

  // Go to the previous month
  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(prevMonthDate);
  };

  // Go to the next month
  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(nextMonthDate);
  };

  // Format the month and year for the header
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

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
      
  }

  return (
    <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/calendarScreenImages/calendarScreenBackground3.jpg')} style={styles.container}>
    <View style={styles.calendarContainer}>
      {/* Header for the current month and navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={[styles.navButton, {marginLeft: 20}]}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{`${currentMonth} ${currentYear}`}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={[styles.navButton, {marginRight: 20}]}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Weekday labels */}
      <View style={styles.weekdayLabels}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <Text key={index} style={styles.weekdayLabel}>{day}</Text>
        ))}
      </View>

      <View style={{height: 2, width: '100%', backgroundColor: '#7379AE'}}/>

      {/* Days grid */}
      <View style={styles.daysGrid}>
        {daysInMonth.map((day, index) => (
          <View key={index} style={index % 7 === 6 ? styles.endBox : styles.dayBox}>
            <View style={day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() ? styles.todayBox: styles.noBox}>
            <Text style={day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() ? styles.today : styles.dayText}>
              {day}
            </Text>
            </View>
            {/* Render events under each day */}
            {getEventsForDay(day).map((event) => (
              <View style={getEventColor(event)}>
              <Text key={event.id} style={styles.eventText}>{event.name}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
    </ImageBackground>
  );
};



// Basic styles for the calendar
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarContainer: {
    top: 100,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  headerText: {
      fontWeight: '700',
      fontSize: 27,
      color: '#fff',
      textTransform: 'capitalize',
  },
  weekdayLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  weekdayLabel: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // rowGap: 75,
    // columnGap: 10,
  },
  dayBox: {
    width:dayWidth,
    height: 125,
    borderColor: '#7379AE',
    borderWidth: 1,
    alignItems: 'center',
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  endBox: {
    width:dayWidth,
    height: 125,
    borderColor: '#7379AE',
    borderWidth: 1,
    alignItems: 'center',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  dayText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  noBox: {

  },
  today: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 2,
  },
  todayBox: {
    height: 25,
    width: 25,
    position: 'absolute',
    backgroundColor: '#BA91F9',
    marginTop: 8,
    borderRadius: 20,
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

export default CustomCalendar;









// export default class CalendarScreen extends React.Component {
//     render() {
//         console.log(currentDate.getDaysInMonth);
//         return (
//           <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/calendarScreenImages/calendarScreenBackground3.jpg')} style={styles.container}>
//             <Text style={{color: 'white', left: 20, top: 70, fontSize: 27, fontWeight: '700',}}>{monthName}</Text>
//             <View style={{position: 'absolute', height: phoneHeight, width: phoneWidth}}>
//               <View style={{top: 160, flexDirection: 'column', gap: 102.5, position: 'absolute'}}>
//                 <View style={{height: 2, width: phoneWidth, backgroundColor: '#7379AE'}}/>
//                 <View style={{height: 2, width: phoneWidth, backgroundColor: '#7379AE'}}/>
//                 <View style={{height: 2, width: phoneWidth, backgroundColor: '#7379AE'}}/>
//                 <View style={{height: 2, width: phoneWidth, backgroundColor: '#7379AE'}}/>
//                 <View style={{height: 2, width: phoneWidth, backgroundColor: '#7379AE'}}/>
//                 <View style={{height: 2, width: phoneWidth, backgroundColor: '#7379AE'}}/>
//               </View>
//               <View style={{top: 160, gap: 56.1428571429, flexDirection: 'row' }}>
//                 <View style={[styles.line, {marginLeft: 56.1428571429}]}/>
//                 <View style={styles.line}/>
//                 <View style={styles.line}/>
//                 <View style={styles.line}/>
//                 <View style={styles.line}/>
//                 <View style={styles.line}/>
//               </View>

//               {/* <Text style={styles.textStyle}>{getNumDaysInMonth(currentMonth, currentYear)}</Text> */}
//             </View>
//             <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.subTitle}>SU</Text>
//                 <Text style={styles.subTitle}>MO</Text>
//                 <Text style={styles.subTitle}>TU</Text>
//                 <Text style={styles.subTitle}>WE</Text>
//                 <Text style={styles.subTitle}>TH</Text>
//                 <Text style={styles.subTitle}>FR</Text>
//                 <Text style={styles.subTitle}>SA</Text>
//             </View>
            
//             <View style={{ flexDirection: 'column', justifyContent: 'center', gap: 72, position: 'absolute', top: 80}}>
//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>

//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>

//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>

//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>

//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>

//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>

//               <View style={{ top: 85,flexDirection: 'row', justifyContent: 'center', gap: 29.0}}>
//                 <Text style={styles.datesText}>SU</Text>
//                 <Text style={styles.datesText}>MO</Text>
//                 <Text style={styles.datesText}>TU</Text>
//                 <Text style={styles.datesText}>WE</Text>
//                 <Text style={styles.datesText}>TH</Text>
//                 <Text style={styles.datesText}>FR</Text>
//                 <Text style={styles.datesText}>SA</Text>
//               </View>
//             </View>
            
//           </ImageBackground>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexShrink: 1,
//     },
//     textStyle: {
//       position: 'absolute',
//       fontWeight: 'bold',
//       fontSize: 18,
//       padding: 10,
//       color: '#fff',
//     },
//     line: {
//       height: 700,
//       width: 2,
//       backgroundColor: '#7379AE',
//     },
//     subTitle: {
//       fontSize: 20,
//       fontWeight: '700',
//       color: 'white',
//       marginTop: 10,
//     },
//     datesText: {
//       fontSize: 15,
//       fontWeight: '500',
//       color: 'white',
//       marginTop: 10,
//     }
// });