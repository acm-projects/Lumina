import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Sign In Function
  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      console.log('Signed in', user);
      // After successful sign-in, navigate to HomeScreen
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Error signing in:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={signIn} />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});


// import { FlatList, StyleSheet, Text, View, Button, Pressable, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';

// import {
//   withAuthenticator,
//   useAuthenticator
// } from '@aws-amplify/ui-react-native';

// // retrieves only the current value of 'user' from 'useAuthenticator'
// const userSelector = (context) => [context.user];

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

// const App = () => {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.container}>
//           <SignOutButton />
//         </View>
//       </SafeAreaView>
//   )
// }

// export default withAuthenticator(App);

// const styles = StyleSheet.create({
//   container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
//   todo: { marginBottom: 15 },
//   input: {
//     backgroundColor: '#ddd',
//     marginBottom: 10,
//     padding: 8,
//     fontSize: 18
//   },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   buttonContainer: {
//     alignSelf: 'center',
//     backgroundColor: 'black',
//     paddingHorizontal: 8
//   },
//   buttonText: { color: 'white', padding: 16, fontSize: 18 }
// });



// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, Touchable} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginButton from '../buttons/login/login_button';
// import NoAccountButton from '../buttons/login/no_account_button';

// //Authentication

// export default function App({navigation}) {
//     const [form, setForm] = useState({
//       email:'',
//       username:'',
//       password:'',
//       city:'',
//       state:'',
//   });

//   return (
//     <ImageBackground source={require("../assets/signUpBackground.png")}
//     style={styles.container}>
//       <SafeAreaView>
//        <View>
//          <Text style={styles.title}>Welcome Back</Text>
//          <Text style={styles.subtitle}>Please login to continue.</Text>
//        </View>

//        <View>
//          <Text style={styles.emailTitle}>Email</Text>
//          <View style={styles.inputContainer}>
//            <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
//            <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
//          </View>
//        </View>

//        <View>
//          <Text style={styles.passwordTitle}>Password</Text>
//          <View style={styles.inputContainer}>
//            <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
//            <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
//          </View>
//         </View>
        
//         <View style={{marginLeft: 'auto', marginRight: 20, marginTop: 20}}>
//           <Text style={styles.subtitle}>Forgot password?</Text>
//         </View>

//         <LoginButton text="login" style={{marginLeft: 500}} onPress={() => navigation.navigate('Tabs')} />
        
//         <NoAccountButton text="Don't have an account? Sign Up" onPress={() => navigation.navigate("signUp")}/>

//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 24,
//     paddingHorizontal: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis:0,

//   },
//   logo: {
//     width: 250,
//     height: 250,
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     alignSelf: 'left',
//     marginTop: 150,
//     marginLeft: 20,
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 20,
//     color: 'white',
//     alignSelf: 'left',
//     marginLeft: 20,
//   },
//   /** Form Titles */
//   emailTitle: {
//     marginTop: 40,
//     color: 'white',
//     marginLeft: 20,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   passwordTitle: {
//     marginTop: 20,
//     color: 'white',
//     marginLeft: 20,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   /** Form */
//   form: {
//     marginBottom: 24,
//     paddingHorizontal: 24,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   formAction: {
//     marginTop: 4,
//     marginBottom: 16,
//   },
//   formLink: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#075eec',
//     textAlign: 'center',
//   },
//   formFooter: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#222',
//     textAlign: 'center',
//     letterSpacing: 0.15,
//   },
//   /** Input */
//   input: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#222',
//     marginBottom: 8,

//   },
//   inputControl: {
//     height: 50,
//     backgroundColor: 'white',
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#222',
//     borderWidth: 1,
//     borderColor: '#C9D3DB',
//     borderStyle: 'solid',
//   },
//   inputContainer: {
//     marginTop: 10,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     borderRadius: 10,
//     marginHorizontal: 20,
//     elevation: 10,
//     marginaVertical: 20,
//     alignItems: 'center',
//     height: 50,
//   },
//   usernameIcon: {
//     marginLeft: 10,
//   },
//   passwordIcon: {
//     marginLeft: 10,
//   },
//   textInput: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   loginBox: {
//     marginTop: 10,
//     backgroundColor: '#7D62A9',
//     opacity: 1,
//     flexDirection: 'row',
//     borderRadius: 10,
//     marginHorizontal: 20,
//     elevation: 10,
//     marginaVertical: 20,
//     alignItems: 'right',
//     height: 50,
//   },
//   /** Button */
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     backgroundColor: 'white',
//   },
//   btnText: {
//     fontSize: 18,
//     lineHeight: 26,
//     fontWeight: '600',
//     color: '#fff',
//   },
// });

// // export default function App({navigation}) {
// //   const [form, setForm] = useState({
// //     email:'',
// //     username:'',
// //     password:'',
// //     city:'',
// //     state:'',
// // });

// // return (
// //   <ImageBackground source={require("../assets/signUpBackground.png")}
// //   style={styles.container}>
// //     <SafeAreaView>
// //       <View>
// //         <Text style={styles.title}>Login</Text>
// //         <Text style={styles.subtitle}>Enter your email and password to login.</Text>
// //       </View>

// //       <View>
// //         <Text style={styles.emailTitle}>Email</Text>
// //         <View style={styles.inputContainer}>
// //           <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
// //           <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
// //         </View>
// //       </View>

// //       <View>
// //         <Text style={styles.passwordTitle}>Password</Text>
// //         <View style={styles.inputContainer}>
// //           <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
// //           <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
// //         </View>
// //       </View>

// //       <Button style={styles.loginStyle} title="Don't have an account? Sign Up" onPress={() => navigation.navigate("homeScreen")}>
// //        { <View>
// //         <Text style={styles.alreadyAccount}>Already have an account? <Text style={styles.login}>Login</Text></Text>
// //        </View> }
// //       </Button>

// //       <Button style={styles.loginStyle} title="Don't have an account? Sign Up" onPress={() => navigation.navigate("signUp")}>
// //        { <View>
// //         <Text style={styles.alreadyAccount}>Already have an account? <Text style={styles.login}>Login</Text></Text>
// //        </View> }
// //       </Button>


// //     </SafeAreaView>
// //   </ImageBackground>
// // );
// // };