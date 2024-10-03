import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./screens/loginScreen";
import signUp from "./screens/signUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signUp">
        <Stack.Screen name="login" component={login}/>
        <Stack.Screen name="signUp" component={signUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
