import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, Touchable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer } from '@react-navigation/native';
//import LoginScreeen from "../lumina/screens/loginScreen";

//const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  const [form, setForm] = useState({
    email:'',
    username:'',
    password:'',
    city:'',
    state:'',
  });
  
  /*<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login Screen" component={LoginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>*/

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="signUp">
    //     <Stack.Screen name="App" component={App} />
    //     <Stack.Screen name="signUp" component={signUp} />

    <ImageBackground source={require("../assets/signUpBackground.png")}
    style={styles.container}>
      <SafeAreaView>
        <View>
          <Image source={require("../assets/Lumina_Logo.jpeg")} style={styles.logo}/>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create your Account</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.emailIcon} source={require('../assets/icons8-email-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Email"/>
        </View>

         <View style={styles.inputContainer}>
          <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
         </View>

         <View style={styles.inputContainer}>
          <Image style={styles.passwordIcon} source={require('../assets/icons8-password-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Password"/>
         </View>

         <View style={styles.inputContainer}>
          <Image style={styles.locationIcon} source={require('../assets/icons8-location-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="City, State"/>
         </View>

         <View style={styles.signUpContainer}>
          <Text style={styles.signUp}>Sign Up</Text>
         </View>

         <Button title="Already have an account? Login" onPress={() => navigation.navigate("login")}>
         {/* <View>
          <Text style={styles.alreadyAccount}>Already have an account? <Text style={styles.login}>Login</Text></Text>
         </View> */}
        </Button>
      </SafeAreaView>
    </ImageBackground>

    // </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis:0,

  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 10,
  },
  //**EMAIL, USERNAME, PASSWORD, LOCATION BUTTONS */
  inputContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 40,
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'center',
    height: 50,
  },
  emailIcon: {
    marginLeft: 10,
  },
  usernameIcon: {
    marginLeft: 10,
  },
  passwordIcon: {
    marginLeft: 10,
  },
  locationIcon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  /** SIGN UP BUTTON */
  signUpContainer: {
    marginTop: 20,
    backgroundColor: '#7D62A9',
    opacity: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 40,
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center', //gets sign up to center
  },
  signUp: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  /**Already have an account */
  alreadyAccount: {
    marginTop: 20,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  login: {
    color: '#7D62A9',
    fontSize: 15,
    fontWeight: '700',
  }
});