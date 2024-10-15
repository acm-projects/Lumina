import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, Touchable} from 'react-native';
import NavigationBar from '../buttons/NavigationBar/navigationBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({navigation}) {

  return (
    <ImageBackground source={require("../assets/HomePageBackground.png")}
    style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>ProfileScreen</Text>
          <Text style={styles.subtitle}>Enter your email and password to login.</Text>
        </View>

        <Button style={styles.loginStyle} title="Go to Event" onPress={() => navigation.navigate("eventScreen")}/>
        <Button style={styles.loginStyle} title="Go to Calendaar" onPress={() => navigation.navigate("calendarScreen")}/>
        <NavigationBar/>

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
    marginTop: 20,
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
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
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
    opacity: 0.1,
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
    alignItems: 'center',
    height: 50,
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});