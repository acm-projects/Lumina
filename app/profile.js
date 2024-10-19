import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function Example() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Astronomy Night' },
    { id: 2, name: 'Stargazing Event' },
    { id: 3, name: 'Lunar Eclipse Viewing' },
  ]);

  const [loaded] = useFonts({
    Nunito: require('/Users/apple/pleasework/LuminaApp/assets/fonts/Nunito-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  // Function to remove an event
  const removeEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Location Section */}
      <View style={styles.profile}>
        <Text style={styles.profileLocation}>Dallas, TX</Text>
      </View>

      {/* Your Events Section */}
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Events</Text>
          {events.length > 0 ? (
            events.map((event) => (
              <View key={event.id} style={styles.row}>
                <Text style={styles.rowLabel}>{event.name}</Text>
                <View style={styles.rowSpacer} />
                <TouchableOpacity onPress={() => removeEvent(event.id)}>
                  <Text style={styles.removeButton}>✖</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noEventsText}>No events available.</Text>
          )}
        </View>
      </ScrollView>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={() => { /* handle sign out */ }}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundImage: 'url(https://500px.com/photo/34169200/starry-night-by-alex-teuscher)', // replace with bg image
    backgroundSize: 'cover',
  },
  /** Profile */
  profile: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileLocation: {
    fontSize: 18,
    color: '#555',
    fontWeight: '600',
    fontFamily: 'Nunito',
  },
  /** Section */
  section: {
    paddingHorizontal: 24,
    marginTop: 30,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    fontFamily: 'Nunito',
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
    fontFamily: 'Nunito',
  },
  rowSpacer: {
    flexGrow: 1,
  },
  removeButton: {
    fontSize: 18,
    color: '#ff4444',
  },
  noEventsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  signOutButton: {
    backgroundColor: '#301934',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    width: '80%',
  },
  signOutText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito',
    fontWeight: '600',
  },
});
