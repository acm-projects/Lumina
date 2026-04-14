import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';
import { Authenticator, useAuthenticator, useTheme} from '@aws-amplify/ui-react-native';
//import {SignIn, SignUp, ConfirmSignUp, ConfirmSignIn} from 'aws-amplify-react-native';

// Screen Imports
import IntroScreen from '../lumina4.0/screens/introScreen.js';
import HomeScreen from '../lumina4.0/screens/homeScreen';
import CalendarScreen from '../lumina4.0/screens/calendarScreen';
import TrackerScreen from '../lumina4.0/screens/trackerScreen';
import EventScreen from '../lumina4.0/screens/eventScreen';
import ProfileScreen from '../lumina4.0/screens/profileScreen';
import EventDetailsScreen from '../lumina4.0/features/eventScreenFeatures/extraScreens/EventDetailsScreen';
import WeeklyCalendarScreen from '../lumina4.0/features/calendarScreenFeatures/extraScreens/weeklyCalendarScreen';

//filled icons
import FilledHomeIcon from '/Users/thebenzsecrets/lumina4.0/assets/filledIcons/icons8-home-48 (3).png';
import FilledCalendarIcon from  '/Users/thebenzsecrets/lumina4.0/assets/filledIcons/icons8-calendar-48 (2).png';
import FilledTrackerIcon from '/Users/thebenzsecrets/lumina4.0/assets/filledIcons/icons8-constellation-50 (3).png';
import FilledEventIcon from '/Users/thebenzsecrets/lumina4.0/assets/filledIcons/icons8-three-people-48 (2).png';
import FilledProfileIcon from '/Users/thebenzsecrets/lumina4.0/assets/filledIcons/icons8-person-48 (1).png';

//unfilled icons
import UnfilledHomeIcon from '/Users/thebenzsecrets/lumina4.0/assets/unfilledIcons/icons8-home-48 (2).png';
import UnfilledCalendarIcon from '/Users/thebenzsecrets/lumina4.0/assets/unfilledIcons/icons8-calendar-48 (3).png';
import UnfilledTrackerIcon from '/Users/thebenzsecrets/lumina4.0/assets/unfilledIcons/icons8-constellation-50 (2).png';
import UnfilledEventIcon from '/Users/thebenzsecrets/lumina4.0/assets/unfilledIcons/icons8-three-people-48 (3).png';
import UnfilledProfileIcon from '/Users/thebenzsecrets/lumina4.0/assets/unfilledIcons/icons8-person-48.png';

Amplify.configure(config);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'homeScreen') {
            iconName = focused ? FilledHomeIcon : UnfilledHomeIcon;
          } else if (route.name === 'calendarScreen') {
            iconName = focused ? FilledCalendarIcon : UnfilledCalendarIcon;
          } else if (route.name === 'trackerScreen') {
            iconName = focused ? FilledTrackerIcon : UnfilledTrackerIcon;
          } else if (route.name === 'eventScreen') {
            iconName = focused ? FilledEventIcon : UnfilledEventIcon;
          } else if (route.name === 'profileScreen') {
            iconName = focused ? FilledProfileIcon : UnfilledProfileIcon;
          }
          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'black', height: 80 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="homeScreen" component={HomeScreen} />
      <Tab.Screen name="calendarScreen" component={CalendarScreen} />
      <Tab.Screen name="trackerScreen" component={TrackerScreen} />
      <Tab.Screen name="eventScreen" component={EventScreen} />
      <Tab.Screen name="profileScreen" component={ProfileScreen} />
      <Tab.Screen name="eventDetailsScreen" component={EventDetailsScreen} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="weeklyCalendarScreen" component={WeeklyCalendarScreen} options={{ tabBarButton: () => null }} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="introScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="introScreen" component={IntroScreen} />
      <Stack.Screen name="authenticationScreens" component={AuthenticationScreens} />
    </Stack.Navigator>
  );
}

function AppContent() {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <View style={styles.container}>
      {user ? <MyTabs /> : <Authenticator />}
    </View>
  );
}

// function CustomSignUp({ signUp }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');

//   const handleSignUp = async () => {
//     try {
//       await signUp({
//         username: email,
//         password,
//         attributes: {
//           email,
//           'custom:state': state,
//           'custom:city': city,
//         },
//       });
//       console.log('Sign-up successful!');
//     } catch (error) {
//       console.log('Error signing up:', error);
//     }
//   };

//   return (
//     <View style={styles.signUpContainer}>
//       <Text style={styles.title}>Custom Sign Up</Text>
//       <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
//       <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword} />
//       <TextInput style={styles.input} placeholder="Enter your state" value={state} onChangeText={setState} />
//       <TextInput style={styles.input} placeholder="Enter your city" value={city} onChangeText={setCity} />
//       <Button title="Sign Up" onPress={handleSignUp} />
//     </View>
//   );
// }

function AuthenticationScreens() {
  const {
    tokens: { colors },
  } = useTheme();

  return (
    <View style={styles.container}>
      <Authenticator.Provider>
        <Authenticator
          Container={(props) => (
            // reuse default `Container` and apply custom background
            <Authenticator.Container
              {...props}
              style={{ backgroundColor: 'white'}}
            />
          )}
          // will render on every subcomponent
          formFields={{
            signUp: {
              email: {
                label: 'Email',
                placeholder: 'Enter your email',
                isRequired: true,
              },
              password: {
                label: 'Password',
                placeholder: 'Enter your password',
                isRequired: true,
              },
              'custom:state': {
                label: 'State',
                placeholder: 'Enter your state',
                isRequired: true,
              },
              'custom:city': {
                label: 'City',
                placeholder: 'Enter your city',
                isRequired: true,
              },
            }
          }}
        >
          <AppContent/>
        </Authenticator>
      </Authenticator.Provider>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 16,
  },
});