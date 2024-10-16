import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export default getDaysInMonth;