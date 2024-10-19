import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native'

import {
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

// retrieves only the current value of 'user' from 'useAuthenticator'
function userSelector(context) {
  return [context.user];
}

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

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SignOutButton/>
                <Text style={styles.textStyle}>ProfileScreen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5059ae',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      padding: 10,
      color: '#fff'
    },
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: 'blue',
      paddingHorizontal: 100,
      paddingLeft: 65,
    },
    buttonText: { color: 'white', padding: 16, fontSize: 18 }
});