import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import GEM from '../json/album.json';
import Header from '../components/Header';
import { AppLoading } from 'expo';

const DetailScreen = ({navigation}) => {
  console.log(navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home!</Text>
  </View>
   
 
  );
};


const styles = StyleSheet.create({
  


    
    
});

export default DetailScreen;