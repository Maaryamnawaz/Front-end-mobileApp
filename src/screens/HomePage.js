import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const HomePage = ({navigation}) => {
  return(
    <View style = {styles.container}>
    <StatusBar backgroundColor ='#5f9ea0' barStyle="Light-content"/>
    <View style = {styles.header}></View>
    <View>
    <Text style = {styles.textheader}> Welcome to Health And Nutrition!
    </Text>
    </View>
    < View style ={styles.footer}>
    <View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Recepies') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'white'}]} > Healthy Recepies </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Workouts') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'white'}]}> Workouts </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Nutritionists') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'white'}]}> Contact our Nutritionists </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Blogs') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'white'}]} > Blogs & SuccessStories </Text>
</LinearGradient>
</TouchableOpacity>
</View>
</View>
</View>
);
};

export default HomePage;
const styles= StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#5f9ea0'
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
  paddingVertical : 30
  },
  textheader: {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 30
  },
  textfooter: {
    color : 'black',
    fontSize : 18
  }, 
action: {
flexDirection : 'row',
marginTop: 0,
borderBottomWidth: 1,
borderBottomColor : '#5f9ea0',
paddingBottom :5
},
textInput : {
  flex :1, 
  //height: Platform.OS === 'android' ? 76 : 50,
  paddingLeft :10,
  color : 'black'
},
button :{
  alignItems : 'center',
  marginTop : 50
},
login: {
  width : '100%',
  height : 40,
  justifyContent : 'center',
  alignItems: 'center',
  borderRadius : 10,
  marginTop : 15
},
textSign : {
  fontSize : 18,
  fontWeight : 'bold'
},
signUp: {
  width : '100%',
  height : 30,
  justifyContent : 'flex-end',
  alignItems: 'flex-end',
  borderRadius : 5
},
text : {
  fontSize : 18,
  fontWeight: 'bold',
  color :'#5f9ea0'
},

  });

