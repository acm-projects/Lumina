import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, ImageBackground, TextInput, Switch, Pressable} from 'react-native';

import {
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

// retrieves only the current value of 'user' from 'useAuthenticator'
function userSelector(context) {
  return [context.user];
}

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.signOutButton}>
      <Text style={styles.signOutText}>
        Sign Out
      </Text>
    </Pressable>
  );
};

const ProfileScreen = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Astronomy Night' },
    { id: 2, name: 'Stargazing Event' },
    { id: 3, name: 'Lunar Eclipse Viewing' },
  ]);

  const [address, setAddress] = useState('Dallas, TX');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const removeEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
      <ImageBackground
        source={require('/Users/thebenzsecrets/lumina4.0/assets/profileScreenImages/Untitled design (6).png')}
        style={styles.container}
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
        
        <SignOutButton/>

      </ImageBackground>
  );
};

export default ProfileScreen;


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
    marginTop:30,
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
    backgroundColor: '#7B62A9',
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
    textStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      padding: 10,
      color: '#fff'
    },
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: 'blue',
      paddingHorizontal: 100,
      paddingLeft: 65,
    },
    buttonText: { color: 'white', padding: 16, fontSize: 18 }
});