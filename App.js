import React, { useEffect, useState }  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Animated,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import {
  Authenticator,
  useAuthenticator,
  useTheme,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Amplify
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';
Amplify.configure(config);

//Auth Tab Screen Imports
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';

//App Tab Screen Imports
import HomeScreen from './screens/homeScreen';
import CalendarScreen from './screens/calendarScreen';
import TrackerScreen from './screens/trackerScreen';
import EventScreen from './screens/eventScreen';
import ProfileScreen from './screens/profileScreen';

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

//Non-permanent
import { generateClient } from 'aws-amplify/api';
import { createTodo } from './src/graphql/mutations';
import { listTodos } from './src/graphql/queries';

//event screen imports
import StarGazingCarousel from './features/eventScreenFeatures/carousels/stargazingCarousel';
import PlanetCarousel from './features/eventScreenFeatures/carousels/planetCarousel';
import LunarSolarCarousel from './features/eventScreenFeatures/carousels/lunar_solarCarousel';
import EventDetailsScreen from './features/eventScreenFeatures/extraScreens/EventDetailsScreen';
import EventDetailButton from './features/eventScreenFeatures/buttons/EventDetailButtons';

const Stack = createNativeStackNavigator();

//Configurations and options for the tab navigator
const configurations = {
  Home: {
    screen: HomeScreen,
  },
  Calendar: {
    screen: CalendarScreen,
  },
  Tracker: {
    screen: TrackerScreen,
  },
}

const options = {
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'tomato', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
      tabBarStyle: { backgroundColor: 'black', height: 80 }, // Tab bar background color
      tabBarLabelStyle: { fontSize: 12 }, // Font size of tab labels
      tabBarIconStyle: { marginTop: 15 }, // Adjust the icon position
      headerShown: false,
}

//bottom app tabs
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      // Icons for each tab
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
        return <Image source={iconName} style={{width: 24, height: 24}} />;
      },
      // Tab bar styling
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'tomato', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
      tabBarStyle: { backgroundColor: 'black', height: 80 }, // Tab bar background color
      tabBarLabelStyle: { fontSize: 12 }, // Font size of tab labels
      tabBarIconStyle: { marginTop: 15 }, // Adjust the icon position
      headerShown: false,
    })}>
        <Tab.Screen name="homeScreen" component={HomeScreen}/>
        <Tab.Screen name="calendarScreen" component={CalendarScreen} />
        <Tab.Screen name="trackerScreen" component={TrackerScreen}/>
        <Tab.Screen name="eventScreen" component={EventScreen}/>
        <Tab.Screen name="profileScreen" component={ProfileScreen}/>
        
        {/* NOT ON TAB BAR */}
        <Tab.Screen name="eventDetailsScreen" component={EventDetailsScreen} options={{
          tabBarButton: () => null, // Hides the tab from the tab bar
        }}/>
      </Tab.Navigator>
  );
}

function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="signInScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="signInScreen" component={SignInScreen}/>
        <Stack.Screen name="signUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="Tabs" component={MyTabs} screenOptions={{headerShown: false}} />
      </Stack.Navigator>

  );
}



// retrieves only the current value of 'user' from 'useAuthenticator'
// function userSelector(context) {
//   return [context.user];
// }

// const SignOutButton = () => {
//   const { user, signOut } = useAuthenticator(userSelector);
//   return (
//     <Pressable onPress={signOut} style={styles.buttonContainer}>
//       <Text style={styles.buttonText}>
//         Hello, {user.username}! Click here to sign out!
//       </Text>
//     </Pressable>
//   );
// };

const initialFormState = { name: '', description: '' };
const client = generateClient();

const App = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos
      });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialFormState);
      await client.graphql({
        query: createTodo,
        variables: { input: todo }
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <NavigationContainer>
    {/* <SafeAreaView style={styles.container}> */}
      <View style={{flex: 1}}>
        {/* <SignOutButton /> */}
        {/* <TextInput
          onChangeText={(value) => setInput('name', value)}
          style={styles.input}
          value={formState.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={(value) => setInput('description', value)}
          style={styles.input}
          value={formState.description}
          placeholder="Description"
        />
        <Pressable onPress={addTodo} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create todo</Text>
        </Pressable>
        {todos.map((todo, index) => (
          <View key={todo.id ? todo.id : index} style={styles.todo}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <Text style={styles.todoDescription}>{todo.description}</Text>
          </View>
        ))} */}
        <HomeStack/>
      </View>
    {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

const customeTheme = {...useTheme};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {flex: 1, alignSelf: 'center', backgroundColor: 'black'},
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingLeft: 65,
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 }
});




// import React from 'react';
// import { Button, StyleSheet, Text, View, ImageBackground} from 'react-native';

// import { Amplify } from 'aws-amplify';
// import {
//   Authenticator,
//   useAuthenticator,
//   useTheme,
// } from '@aws-amplify/ui-react-native';

// import config from './src/amplifyconfiguration.json';
// Amplify.configure(config);

// const MyAppHeader = () => {
//   const {
//     tokens: { space, fontSizes },
//   } = useTheme();
//   return (
//     <View>
//       <Text style={{ fontSize: fontSizes.xxxl, padding: space.xl }}>
//         My Header
//       </Text>
//     </View>
//   );
// };

// function SignOutButton() {
//   const { signOut } = useAuthenticator();
//   return <Button onPress={signOut} title="Sign Out" />;
// }

// function App() {
//   const {
//     tokens: { colors },
//   } = useTheme();

//   return (
//     <Authenticator.Provider>
//       <Authenticator
//         // will wrap every subcomponent
//         Container={(props) => (
//           <ImageBackground 
//             source={require('./assets/adaptive-icon.png')} // Replace with your image URL
//             style={styles.background} // Apply styles for the background image
//           >
//             <Authenticator.Container {...props} style={{backgroundColor: 'white' }}>
//             </Authenticator.Container>
//           </ImageBackground>
//         )}
//         // will render on every subcomponent
//         Header={MyAppHeader}
//       >
//         <View style={styles.container}>
//           <SignOutButton />
//         </View>
//       </Authenticator>
//     </Authenticator.Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center',
//   },
//   background: {
//     flex: 1, // Make sure the background takes the full size
//     justifyContent: 'center', // Center the content vertically
//     alignItems: 'center', // Center the content horizontally
//   },
// });

// export default App;