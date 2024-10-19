import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, Touchable} from 'react-native';

function ExistingAccount ({text, onPress}) {
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{ text }</Text>
    </TouchableOpacity>
  )
}

function SignUpButton ({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={signUpButtonStyles.button}>
        <Text style={signUpButtonStyles.buttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}


export default function SignUpScren({navigation}) {

  return (

    <ImageBackground source={require("/Users/thebenzsecrets/lumina4.0/assets/signInScreenImages/signUpBackground.png")}
    style={styles.container}>
      <SafeAreaView>
        <View>
          <Image source={require("/Users/thebenzsecrets/lumina4.0/assets/signUpImages/Lumina_Logo.jpeg")} style={styles.logo}/>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create your Account</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.emailIcon} source={require('/Users/thebenzsecrets/lumina4.0/assets/signUpImages/icons8-email-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Email"/>
        </View>

         <View style={styles.inputContainer}>
          <Image style={styles.usernameIcon} source={require('/Users/thebenzsecrets/lumina4.0/assets/signUpImages/icons8-person-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Username"/>
         </View>

         <View style={styles.inputContainer}>
          <Image style={styles.passwordIcon} source={require('/Users/thebenzsecrets/lumina4.0/assets/signUpImages/icons8-password-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="Password"/>
         </View>

         <View style={styles.inputContainer}>
          <Image style={styles.locationIcon} source={require('/Users/thebenzsecrets/lumina4.0/assets/signUpImages/icons8-location-24.png')}/>
          <TextInput style={styles.textInput} placeholderTextColor="#0F1630" placeholder="City, State"/>
         </View>

          <SignUpButton text="Sign Up" onPress={() => navigation.navigate("Tabs")}/>

         <ExistingAccount text="Already have an account? Login" onPress={() => navigation.navigate("signInScreen")}/>

      </SafeAreaView>
    </ImageBackground>

  );
};

const existingAccountButtonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    bottom: 20
    },
buttonText: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
}
});

const signUpButtonStyles = StyleSheet.create({
  button: {
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
    justifyContent: 'center',
},
buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
}
});

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
  loginStyle: {
    marginTop: 40,
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