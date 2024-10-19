import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Onboarding from './components/screens/Onboarding';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SplashScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const navigateToOnboarding = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds
      navigation.navigate('Onboarding');
    };
    navigateToOnboarding();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Lumina</Text>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
