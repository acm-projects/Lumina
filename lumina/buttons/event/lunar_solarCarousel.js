import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';

const LunarSolarCarousel = ({list}) => {
    return (
        <FlatList
            ListHeaderComponentStyle={{marginVertical: 10}}
            ListHeaderComponent={() => (
              <View>
                <FlatList
                  horizontal={true}
                  style={{ paddingVertical: 10}}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 40, paddingHorizontal: 12}}
                  data={list}
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
              </View>
            )}
          />
        );
};

export default LunarSolarCarousel;
