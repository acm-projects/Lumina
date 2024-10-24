import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, TextInput, Switch } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Astronomy Night' },
    { id: 2, name: 'Stargazing Event' },
    { id: 3, name: 'Lunar Eclipse Viewing' },
  ]);

  const [loaded] = useFonts({
    Nunito: require('/Users/apple/pleasework/luminaapp_new/assets/fonts/Nunito-VariableFont_wght.ttf'),
  });

  const [address, setAddress] = useState('Dallas, TX');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  if (!loaded) {
    return null;
  }

  const removeEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: '/Users/apple/pleasework/luminaapp_new/assets/images/profilebg.png' }}
        style={styles.background}
      >
        <View style={styles.profile}>
          <TextInput
            style={styles.profileLocation}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.notificationsContainer}>
          <Text style={styles.notificationsLabel}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </View>

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

        <TouchableOpacity style={styles.signOutButton} onPress={() => {}}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileLocation: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Nunito',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    textAlign: 'center',
    padding: 8,
  },
  notificationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 60,
    marginTop: 20,
  },
  notificationsLabel: {
    fontSize: 20,
    fontFamily: 'Nunito',
    color: '#fff',
    flex: 1,
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 30,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    fontFamily: 'Nunito',
  },
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
    color: '#000',
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
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  signOutButton: {
    backgroundColor: '#301934',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 110,
    width: '80%',
  },
  signOutText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito',
    fontWeight: '3000',
  },
});
