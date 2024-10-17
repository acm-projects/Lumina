import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';

import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <SignOutButton />
        </View>
      </SafeAreaView>
  )
}

export default withAuthenticator(App);
