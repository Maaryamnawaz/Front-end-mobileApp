import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar, ScrollView, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return(
    <ScrollView>
    <View style = {styles.container}>
    <StatusBar backgroundColor ='#5f9ea0' barStyle="Light-content"/>
    <View style = {styles.header}>
    <Text style = {styles.textheader}>Welcome to 
    Health & Nutrition!
    </Text>
    </View>
     <View style= {styles.footer}>
     <ScrollView contentContainerStyle={{alignSelf:'center'}}>
     <View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('ChatBot') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Image source={require('../assests/chatbot.png')}/>
  <Text style= {[styles.textSign, {color: 'white'}]} > ChatBot</Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
<TouchableOpacity onPress = {()=> navigation.navigate('Profile') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
<Image source={require('../assests/profile.png')}/>
<Text style= {[styles.textSign, {color: 'white'}]} > Profile </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
<TouchableOpacity onPress = {()=> navigation.navigate('Workouts') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
 <Image style ={{width: 40, height: 40}}source={require('../assests/workout.png')}/>
  <Text style= {[styles.textSign, {color: 'white'}]}> Workouts </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Nutritionists') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
<Image source={require('../assests/nutritionist.png')}/>
  <Text style= {[styles.textSign, {color: 'white'}]}> Nutritionist </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Blogs') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
<Image source={require('../assests/blogs.png')}/>
  <Text style= {[styles.textSign, {color: 'white'}]} >  Facts </Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('Recepies') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
<Image source={require('../assests/recepie.png')}/>
  <Text style= {[styles.textSign, {color: 'white'}]} > Recepies </Text>
</LinearGradient>
</TouchableOpacity>
</View>
</ScrollView>
</View>
</View>
</ScrollView>
);
};
export default HomeScreen;
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
  borderTopLeftRadius : 45,
  borderTopRightRadius : 45,
  paddingHorizontal: 20,
  paddingVertical : 30
  },
  textheader: {
    color : 'black',
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
  flexDirection: 'row',
  width : '100%',
  height : 100,
  justifyContent : 'center',
  alignItems: 'center',
  borderRadius : 10,
  marginTop : 30,
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
