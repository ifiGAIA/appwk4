import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity,ScrollView} from 'react-native';
// import GEM from '../json/albums.json'

const DetailScreen = () => {
  return (
    
    <ScrollView style={styles.container} >
      {/* <View style={styles.headd}>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
         <Image  style={styles.headdd} source= {require('../img/漢堡.png')}/>
         </TouchableOpacity>
      <View style={styles.headd1}>
      <Text style={styles.header}> Albums </Text>
      </View>
     
      
      </View> */}
    
      </ScrollView>
  );
};


const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#d1d1d1"
  },
    headd:
    {
      backgroundColor:"#d1d1d1",
      // justifyContent:"center",
      // alignItems:"center",
      borderRadius:6,
      shadowColor:"#fff",
      shadowOffset:{width:0,height:2},
      shadowOpacity:1,
      height:100,
      // width:360,
      paddingTop:10,
      flexDirection:"row",
      
    },
    header:
    {
      fontSize:20,
      color:"#fff",
     
    },
    headdd:
    {
      width:70,
      height:70,
      marginTop:10
    },
    headd1:
    {
      justifyContent:"center",
      alignItems:"center",
      paddingLeft:80

    }
});

export default DetailScreen;