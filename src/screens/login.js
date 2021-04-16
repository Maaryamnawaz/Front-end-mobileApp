import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    email : '',
    password : '',
    check_textInputChange: false,
    secureTextEntry : true
  });
  const textInputchange = (val) => {
    if(val.length != 0)
    setData({
      ...data,
      email: val,
      check_textInputChange : true
    });
    else{
      setData({
        ...data,
        email: val,
        check_textInputChange : false
    });
  }
}
const handllePasswordChange =(val) => {
  setData({
    ...data,
    password : val 
  });
}
const UpdateSecureTextEntry =() => {
  setData({
    ...data,
    secureTextEntry : !data.secureTextEntry
});
}
  return(
  <View style = {styles.container}>
    <StatusBar backgroundColor ='#5f9ea0' barStyle="Light-content"/>
    <View style = {styles.header}>
<Text style ={styles.textheader}>Welcome to Health & Nutrition!</Text>
</View>
<View style= {styles.footer}>
<Text style ={styles.textfooter}> 
Email 
</Text>
<View style = {styles.action}>
  <FontAwesomeIcons name = "user-o" color = "black" size ={20}
  />
  <TextInput placeholder = "Your Email"
  style ={styles.textInput}
  autoCapitalize ="none"
   onChangeText ={(val) => textInputchange(val)}
   
   />
   {data.check_textInputChange ?
  <Feather name ="check-circle"
  color = "blue"
  size ={20}
  />
  :null}
</View>
<Text style= {[styles.textfooter,{marginTop : 35}]}> Password</Text> 
<View style = {styles.action}>
  <FontAwesomeIcons name = "lock" color = "black" size ={20}
  />
  <TextInput placeholder = "Your Password"
  secureTextEntry ={data.secureTextEntry ? true : false}
  style ={styles.textInput}
  autoCapitalize ="none" 
  onChangeText ={(val) => handllePasswordChange(val)}
  />
  <TouchableOpacity
  onPress ={UpdateSecureTextEntry}
   >
     {data.secureTextEntry ?
  <Feather name ="eye-off"
  color = "blue"
  size ={20}
  />
  :
  <Feather name ="eye"
  color = "blue"
  size ={20}
  />
     }
  </TouchableOpacity>
</View>
<View style = {styles.Button}>
  <TouchableOpacity onPress = {()=> navigation.navigate('HomeScreen') }>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'black'}
    
  ]} > LOGIN </Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity
onPress = {()=> navigation.navigate('SignUp') }
style = {[styles.signUp, {borderColor : '#5f9ea0',
marginTop: 2}]}>
<LinearGradient colors ={['white','white']}
style = {styles.login}>
<Text style= {[styles.textSign, {color: '#5f9ea0'}]}> Not a registered User?SIGN UP</Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity 
onPress = {()=> navigation.navigate('HomePage') }
style = {[styles.signUp, {borderColor : '#5f9ea0',
borderWidth : 0, marginTop: 0}]}
>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
<Text style= {[styles.textSign, {color: 'black'}]}> Continue without LOGIN </Text>
</LinearGradient>
</TouchableOpacity>

</View>
</View>
</View>
    );
  };
export default Login ;
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
  paddingVertical : 30,
},
  textheader: {
    color : 'black',
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
borderBottomColor : '#5f9ea0',
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

