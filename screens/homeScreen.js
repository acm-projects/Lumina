import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
          <ImageBackground source={require('/Users/thebenzsecrets/lumina4.0/assets/homeScreenImages/HomePageBackground.png')}
    style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.textStyle}>HomeScreen</Text>
            </View>
          </ImageBackground>
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
    }
});