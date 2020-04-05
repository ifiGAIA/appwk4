import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import GEM from '../json/album.json';
import Header from '../components/Header';
import { AppLoading } from 'expo';

const Albumlist = ({navigation}) => {
  console.log(navigation)
  return (
    
    <ScrollView style={styles.container} >
      
    <View style={styles.Gem} name="side_open">
    <View style={styles.Gem1}>
    <View style={styles.ph}>
    <Image style={styles.Gemph} source = {{uri:GEM[0].img1}}
    />
    </View>
    <View style={styles.Gem2}>
    <Text style={styles.text1}>{GEM[0].text1}</Text>
    <Text style={styles.text2}>{GEM[0].text2}</Text>
    <Text style={styles.text3}>{GEM[0].text3}</Text>
    <View style={styles.line}></View>
    <Text style={styles.text4}>{GEM[0].text4}</Text>
    </View>
    </View>
  </View>

  <View style={styles.Gemm}>
    <View style={styles.Gem1}>
    <View style={styles.ph}>
    <Image style={styles.Gemph} source = {{uri:GEM[1].img1}}
    />
    </View>
    <View style={styles.Gem2}>
    <Text style={styles.text1}>{GEM[1].text1}</Text>
    <Text style={styles.text2}>{GEM[1].text2}</Text>
    <Text style={styles.text33}>{GEM[1].text3}</Text>
    <View style={styles.line2}></View>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detail")}>
    <Image style={styles.Gemph1} source= {require('../img/btn_start.png')}
    />
    </TouchableOpacity>
    </View>
    </View>
  </View>
  
  <View style={styles.Gemm}>
    <View style={styles.Gem1}>
    <View style={styles.ph}>
    <Image style={styles.Gemph} source = {{uri:GEM[2].img1}}
    />
    </View>
    <View style={styles.Gem2}>
    <Text style={styles.text1}>{GEM[2].text1}</Text>
    <Text style={styles.text2}>{GEM[2].text2}</Text>
    <Text style={styles.text33}>{GEM[2].text3}</Text>
    <View style={styles.line2}></View>
    <Image style={styles.Gemph1} source= {require('../img/btn_start.png')}
    />
    </View>
    </View>
   
  </View>
  {/* <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[1].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[1].singer}</Text>
    <Text style={styles.gem}>{GEM[1].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Image style={styles.Gemph1} source = {{uri:GEM[1].img2}}
    />
    </TouchableOpacity>
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[2].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[2].singer}</Text>
    <Text style={styles.gem}>{GEM[2].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[2].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[3].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[3].singer}</Text>
    <Text style={styles.gem}>{GEM[3].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[3].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[4].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[4].singer}</Text>
    <Text style={styles.gem}>{GEM[4].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[4].img2}}
    />
    </View>
  </View>
  <View style={styles.Gem}>
    <View style={styles.Gem1}>
    <Image style={styles.Gemph} source = {{uri:GEM[5].img1}}
    />
    <View style={styles.Gem2}>
    <Text style={styles.gem}>{GEM[5].singer}</Text>
    <Text style={styles.gem}>{GEM[5].song}</Text>
    </View>
    </View>
    <View style={styles.gem1}>
      <Image style={styles.Gemph1} source = {{uri:GEM[5].img2}}
    />
    </View>
  </View> */}
  <View style={styles.bottomm}>
      <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Image style={styles.bGemph1} source= {require('../img/icon_bottomnav_home.png')}/>
      <Text style={styles.w1}>Home</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.bottom2}>
      <Image style={styles.bGemph1} source= {require('../img/icon_bottomnav_mybook_selected.png')}/>
      <Text style={styles.w2}>My Book</Text>
      </View>
      <View style={styles.bottom3}>
      <Image style={styles.bGemph1} source= {require('../img/icon_bottomnav_favorites.png')}/>
      <Text style={styles.w1}>Favorites</Text>
      </View>
      
      
      </View>
 <View style={styles.b}></View>
 <View style={styles.bb}>
<View style={styles.bb1}>
<Image style={styles.bph} source = {{uri:GEM[0].bph}}/>
<Text style={styles.bw1}>GamexHCl</Text>
<Text style={styles.bw1}>gdlab2017@gmail.com</Text>
<Image style={styles.bd} source= {require('../img/btn_down_arrow.png')}/>
</View>
<View style={styles.bbb}>
<Image style={styles.bh} source= {require('../img/icon_bottomnav_home.png')}/>
<Text style={styles.bbw1}>Home</Text>
</View>
<View style={styles.bbbb}>
<Image style={styles.bh} source= {require('../img/icon_drawer_mybook_pressed1.png')}/>
<Text style={styles.bbw11}>My Book</Text>
</View>
<View style={styles.bbb}>
<Image style={styles.bh} source= {require('../img/icon_bottomnav_favorites.png')}/>
<Text style={styles.bbw1}>Favorites</Text>
</View>
<View style={styles.bbb}>
<Image style={styles.bh} source= {require('../img/icon_drawer_setting.png')}/>
<Text style={styles.bbw1}>Settings</Text>
</View>
<View style={styles.bbb}>
<Image style={styles.bh} source= {require('../img/icon_drawer_aboutus.png')}/>
<Text style={styles.bbw1}>About us</Text>
</View>
 </View>
  </ScrollView>
 
  );
};


const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'#d1d1d1',
    
  },
    Gem:
    {
      height:180,
      backgroundColor:'#f8f8f8'
    },
    Gemm:
    {
      marginTop:2,
      height:180,
      backgroundColor:'#f8f8f8'
    },
    Gem1:
    {
      paddingLeft:15,
      flexDirection:"row",
      
    },
    text1:
    {
      fontSize:18,
      color:'#2e2e2e',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:13
    },
    text2:
    {
      fontSize:14,
      color:'#717171',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      paddingTop:13
    },
    text3:
    {
      fontSize:12,
      color:'#b1b1b1',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      width:210,
      paddingTop:13
    },
    text33:
    {
      fontSize:12,
      color:'#b1b1b1',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      width:230,
      paddingTop:13,
    },
    text4:
    {
      fontSize:12,
      color:'#b1b1b1',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      paddingTop:13
    },
    Gem2:
    {
      flexDirection:"column",
      marginTop:28
    },
    gem1:
    {
      paddingTop:20,
      alignItems:"center",
      shadowColor:"#fff",
      shadowOffset:{width:0,height:0},
      shadowOpacity:1,
    },
    Gemph:
    {
      margin:3,
      height:150,
      width:103,
      
    },
    ph:
    {
      marginTop:12,
      borderColor: "#d1d1d1",
      backgroundColor: "#f8f8f8",
      width:109,
      height:156,
      shadowColor:"#d1d1d1",
      shadowOffset:{width:0,height:0},
      shadowOpacity:1,
    },
    Gemph1:
    {
      marginLeft:25,
      height:26,
      width:87,
      marginTop:10
    },
    line:
    {
      width:204,
      backgroundColor:'#c3c3c3',
      height:3,
      marginTop:13,
      marginLeft:24,
      borderRadius:999,
      
    },
    line2:
    {
      width:204,
      backgroundColor:'#c3c3c3',
      height:3,
      marginTop:13,
      marginLeft:24,
      borderRadius:999,
      
    },
    b:
    {
      position:"absolute",
      height:1000,
      width:400,
      backgroundColor:"#000",
      opacity:0.5,
    
    },
    bottomm:
    {
      
      // justifyContent:"center",
      // alignItems:"center",
      
      // width:360,
      position:"absolute",
      flexDirection:"row",
      bottom:-60
      
      
    },
    bottom:
    {
      height:76,
      width:124,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bottom2:
    {
      height:76,
      width:126,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bottom3:
    {
      height:76,
      width:125,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bGemph1:
    {
        width:40,
        height:40,
        
    },
    w1:
    {
        fontSize:14,
        color:'#717171',
        fontWeight:'bold',
    },
    w2:
    {
        fontSize:14,
        color:'#00b49f',
        fontWeight:'bold',
    },
    bb:
    {
      position:"absolute",
      backgroundColor:"#ebebeb",
      width:320,
      height:900,
      shadowColor:"#404040",
      shadowOffset:{width:0,height:0},
      shadowOpacity:5,
    },
    bb1:
    {
      backgroundColor:"#00b49f",
      width:320,
      height:170,
    },
    bph:
    {
      width:70,
      height:70,
      margin:10,
      marginLeft:15,
      marginTop:35
    },
    bw1:
    {
      fontSize:16,
      color:'#fff',
      fontWeight:'bold',
      paddingLeft:22
    },
    bbb:
    {
      backgroundColor:"#ebebeb",
      flexDirection:"row",
      height:60,
      width:320
    },
    bbbb:
    {
      backgroundColor:"#00b49f",
      flexDirection:"row",
      height:60,
      width:320
    },
    bh:
    {
      height:30,
      width:30,
      margin:14,
      marginLeft:26
    },
    bbw1:
    {
      fontSize:16,
      color:'#5c5c5c',
      fontWeight:'bold',
      padding:20,
      paddingLeft:18
    },
    bbw11:
    {
      fontSize:16,
      color:'#fff',
      fontWeight:'bold',
      padding:20,
      paddingLeft:18
    },
    bd:
    {
      position:"absolute",
      width:30,
      height:30,
      left:275,
      top:125
    }


    
    
});

export default Albumlist;