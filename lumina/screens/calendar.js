import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventButton from '../buttons/event/eventButton';

export default function App({navigation}) {
  const data = [
    {name: "bob"}, 
    {name: "sarah"}, 
    {name: "jeff"}, 
    {name: "rob"}, 
    {name: "david"}, 
    {name: "cameron"}];
  
  const [starEvents, setStarEvents] =  useState([
    {host: 'University of Texas at Arlington', name: 'Texas Stargazing', destination: 'UTA Planetarium', day: '21', month: 'Sep'}
  ]);

  return (
      <ImageBackground source={require("../assets/EventBackground.jpeg")} style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Events</Text>
        </View>

        <View>
          <View style={styles.searchContainer}>
            <Image style={styles.usernameIcon} source={require('../assets/icons8-search-30.png')}/>
            <TextInput style={styles.textInput} placeholderTextColor="#0F1630"/>
          </View>
        </View>

        <View>
          <Text style={styles.subTitle}>STARGAZING</Text>

          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{gap: 10, paddingHorizontal: 12}}
            contentContainerStyle={{gap: 10, paddingBottom: 20}}
            keyExtractor={(item, idx) => item.name + idx}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity 
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexxDirection: "row",
                    backgroundColor: "#6b7280",
                    flex: 1,
                    height: 200,
                    borderRadius: 20,
                  }}>
                    <Text style={{color: "white"}}>{item.name}</Text>
                  </TouchableOpacity>
              );
            }}

            ListHeaderComponentStyle={{marginVertical: 10}}
            ListHeaderComponent={() => (
              <View>
                <FlatList
                  horizontal={true}
                  style={{ paddingVertical: 5}}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 40, paddingHorizontal: 12}}
                  data={data}
                  keyExtractor={(item, idx) => item + idx}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: 275,
                        height: 200,
                        backgroundColor: "#fca5a5",
                        borderRadius: 20,
                      }}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                    )}
                />

                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 12,
                    marginTop: 15,
                  }}
                  >
                  <Text style={{ fontWeight: "600"}}>Popular</Text>
                  <Text style={{ color: "skyblue"}}>See All</Text>
                </View>
              </View>
            )}
          />
          
          <FlatList>
            data={starEvents}
            
            renderItem={({item}) => (
              <Text style={styles.item}>{item.name}</Text>
            )}
          </FlatList>

        </View>

        <View>
          <Text style={styles.subTitle}>PLANETS</Text>
        </View>

        <View>
          <Text style={styles.subTitle}>LUNAR/SOLAR</Text>
        </View>

        <EventButton text="Don't have an account? Sign Up" onPress={() => navigation.navigate("signUp")}/>


      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis:0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'left',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 20,
  },

  /** SEARCH */
  usernameIcon: {
    marginLeft: 10,
    opacity: 1,
    tintColor: 'black',
  },
  searchContainer: {
    backgroundColor: '#D8D8D8',
    flexDirection: 'row',
    borderRadius: 50,
    marginHorizontal: 20,
    marginRight: 75,
    elevation: 10,
    marginaVertical: 20,
    alignItems: 'center',
    height: 40,
  },

  item: {
    height: 30,
    width: 50,
    color: 'white',
  },
  /** Events Universal Styles */
  subTitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginLeft: 20,
  },
});