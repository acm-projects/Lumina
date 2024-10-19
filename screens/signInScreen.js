import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, Touchable} from 'react-native';

function LoginButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

function NoAccountButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.noAccountText}>{text}</Text>
  </TouchableOpacity>
  )
}

export default function SignInScreen({navigation}) {

  return (
    <ImageBackground source={require("/Users/thebenzsecrets/lumina4.0/assets/signInScreenImages/signUpBackground.png")}
    style={styles.container}>
      <SafeAreaView>
       <View>
         <Text style={styles.title}>Welcome Back</Text>
         <Text style={styles.subtitle}>Please login to continue.</Text>
       </View>

       <View>
         <Text style={styles.emailTitle}>Email</Text>
         <View style={styles.inputContainer}>
           <Image style={styles.usernameIcon} source={require('/Users/thebenzsecrets/lumina4.0/assets/signInScreenImages/icons8-person-24.png')}/>
           <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
         </View>
       </View>

       <View>
         <Text style={styles.passwordTitle}>Password</Text>
         <View style={styles.inputContainer}>
           <Image style={styles.usernameIcon} source={require('/Users/thebenzsecrets/lumina4.0/assets/signInScreenImages/icons8-person-24.png')}/>
           <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
         </View>
        </View>
        
        <View style={{marginLeft: 'auto', marginRight: 20, marginTop: 20}}>
          <Text style={styles.subtitle}>Forgot password?</Text>
        </View>

        <LoginButton text="login" style={{marginLeft: 500}} onPress={() => navigation.navigate("Tabs")}/>
        
        <NoAccountButton text="Don't have an account? Sign Up" onPress={() => navigation.navigate("signUpScreen")}/>

      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis:0,

  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'left',
    marginTop: 150,
    marginLeft: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'left',
    marginLeft: 20,
  },
  /** Form Titles */
  emailTitle: {
    marginTop: 40,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  passwordTitle: {
    marginTop: 20,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,

  },
  inputControl: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  inputContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'center',
    height: 50,
  },
  usernameIcon: {
    marginLeft: 10,
  },
  passwordIcon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  loginBox: {
    marginTop: 10,
    backgroundColor: '#7D62A9',
    opacity: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'right',
    height: 50,
  },
  //login button
  button: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#BA91F9',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  noAccountText: {
    marginTop: 150,
    alignSelf: 'center',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  }
});

// export default function App({navigation}) {
//   const [form, setForm] = useState({
//     email:'',
//     username:'',
//     password:'',
//     city:'',
//     state:'',
// });

// return (
//   <ImageBackground source={require("../assets/signUpBackground.png")}
//   style={styles.container}>
//     <SafeAreaView>
//       <View>
//         <Text style={styles.title}>Login</Text>
//         <Text style={styles.subtitle}>Enter your email and password to login.</Text>
//       </View>

//       <View>
//         <Text style={styles.emailTitle}>Email</Text>
//         <View style={styles.inputContainer}>
//           <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
//           <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
//         </View>
//       </View>

//       <View>
//         <Text style={styles.passwordTitle}>Password</Text>
//         <View style={styles.inputContainer}>
//           <Image style={styles.usernameIcon} source={require('../assets/icons8-person-24.png')}/>
//           <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
//         </View>
//       </View>

//       <Button style={styles.loginStyle} title="Don't have an account? Sign Up" onPress={() => navigation.navigate("homeScreen")}>
//        { <View>
//         <Text style={styles.alreadyAccount}>Already have an account? <Text style={styles.login}>Login</Text></Text>
//        </View> }
//       </Button>

//       <Button style={styles.loginStyle} title="Don't have an account? Sign Up" onPress={() => navigation.navigate("signUp")}>
//        { <View>
//         <Text style={styles.alreadyAccount}>Already have an account? <Text style={styles.login}>Login</Text></Text>
//        </View> }
//       </Button>


//     </SafeAreaView>
//   </ImageBackground>
// );
// };