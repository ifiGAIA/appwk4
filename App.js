import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedbac, TouchableOpacity,Linking } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/components/Header';
import Albumlist from './src/components/Albumlist';
import DetailScreen from './src/components/DetailScreen';
import Bottom from './src/components/Bottom';
import albumData from "./src/json/album.json";

const Stack = createStackNavigator();

const App = () => {
  return (
  
<NavigationContainer >
  <Stack.Navigator>
    
    <Stack.Screen name="mybook" component={Albumlist} options={{
      headerLeft: () =>  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
      <Image style={styles.headdd} source= {require('./src/img/btn_漢堡.png')}/>
      </TouchableOpacity>,
       headerRight: () =>  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
       <Image style={styles.headd} source= {require('./src/img/btn_search.png')}/>
       </TouchableOpacity>,
      title:"My Book",
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#00b49f' },
      
    }}/>
    
    <Stack.Screen name="Detail" component={DetailScreen} />
    
  </Stack.Navigator>
  <Bottom/>
</NavigationContainer>


  );
}

const styles = StyleSheet.create({
  
  container:
  {
    borderColor: '#000',
    backgroundColor: "#000",
    color:'#000',
  },
  
  headdd:
  {
    width:50,
    height:50,
    left:4
  },
  headd:
  {
    width:50,
    height:50,
    right:4
  }

});
export default App;

  