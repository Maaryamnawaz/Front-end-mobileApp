import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const Nutritionists = ({navigation}) => {
return(
  <View style = {styles.container}>
    <StatusBar backgroundColor ='#009387' barStyle="Light-content"/>
    <View style = {styles.header}>
<Text style ={styles.textheader}> Contact Our Nutritionists</Text>
</View>
<View style= {styles.footer}>
</View>
</View>
    );
  }
export default Nutritionists ;
const styles= StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#009387'
  },
  header: {
    flex : 1,
    justifyContent : 'flex-end',
    paddingHorizontal: 10,
    paddingBottom :10
  },
footer: {
  flex :3, 
  backgroundColor : 'white',
  borderTopLeftRadius : 35,
  borderTopRightRadius : 35,
  paddingHorizontal: 20,
  paddingVertical : 30,

  },
  textheader: {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 30,
    fontFamily: 'times new Roman'
  },
  textfooter: {
    color : 'black',
    fontSize : 18
  }, 
action: {
flexDirection : 'row',
marginTop: 0,
borderBottomWidth: 1,
borderBottomColor : '#009387',
paddingBottom :5,
justifyContent: 'center'
},
textInput : {
  flex :1, 
  //height: Platform.OS === 'android' ? 76 : 50,
  paddingLeft :10,
  color : 'black'
},
button :{
  alignItems : 'center',
  marginTop : 60,
  marginLeft: 50,
  justifyContent: 'center'
},
login: {
  width : '100%',
  height : 60,
  justifyContent : 'center',
  alignItems: 'center',
  borderRadius : 20
},
textSign : {
  fontSize : 18,
  fontWeight : 'bold'
 
}
});

