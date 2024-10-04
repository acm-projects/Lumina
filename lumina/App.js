import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./screens/loginScreen";
import signUp from "./screens/signUpScreen";
import eventScreen from "./screens/eventScreen";
import homeScreen from "./screens/homeScreen";
import LoginButton from "./buttons/login/login_button";
import NoAccountButton from "./buttons/login/no_account_button";
import ExistingAccount from "./buttons/sign-up/existing_account_button";
import EventButton from "./buttons/event/eventButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login}/>
        <Stack.Screen name="signUp" component={signUp}/>
        <Stack.Screen name="eventScreen" component={eventScreen}/>
        <Stack.Screen name="homeScreen" component={homeScreen}/>
        <Stack.Screen name="LoginButton" component={LoginButton}/>
        <Stack.Screen name="ExistingAccountButton" component={ExistingAccount}/>
        <Stack.Screen name="EventButton" component={EventButton}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
