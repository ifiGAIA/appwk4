import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedbac, TouchableOpacity,Linking } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation';

import Header from './src/components/Header';
import Albumlist from './src/components/Albumlist';
import DetailScreen from './src/components/DetailScreen';
import Bottom from './src/components/Bottom';
import albumData from "./src/json/album.json";

const Stack = createStackNavigator();

const Screen = () => {
  return (
  <View>
<Albumlist/>
{/* <Bottom/> */}
  </View>




  );
}

const styles = StyleSheet.create({
  
 

});
export default Screen;