import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar, Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from '../components/context';
import Users from '../user/Users';
import { atan } from 'react-native-reanimated';
const LoginScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email : '',
    password : '',
    check_textInputChange: false,
    secureTextEntry : true,
    isValidUser: true,
    isValidPassword:true,
  });
  const {Login} = React.useContext(AuthContext);
  const textInputchange = (val) => {
    if(val.trim().length >= 4)
    setData({
      ...data,
      email: val,
      check_textInputChange : true,
      isValidUser: true,
    });
    else{
      setData({
        ...data,
        email: val,
        check_textInputChange : false,
        isValidUser:false,
    });
  }
}
const handllePasswordChange =(val) => {
  if(val.trim().length >= 8){
  setData({
    ...data,
    password : val,
    isValidPassword:true,
  });
}
else{
  setData({
    ...data,
    password : val,
    isValidPassword:false,
  });
}
}
const UpdateSecureTextEntry =() => {
  setData({
    ...data,
    secureTextEntry : !data.secureTextEntry
});
}
const handleValidUser=(val) =>{
  if (val.trim().length >= 4) {
    setData({
      ...data,
      isValidUser: true
  });
  }
  else{
    setData({
      ...data,
      isValidUser: false
  }); 
  }
}
const loginHandle = (email,password) =>{
  const foundUser= Users.filter( item =>{
    return email == item.username && password== item.password;
  });
  if(data.email.length == 0 || data.password.length == 0){
    Alert.alert('Wrong Input!', 'Username or Password field cannot be empty!',[
      {text: 'Okay'}
    ]);
    return;
   }
  if(foundUser.length ==0){
   Alert.alert('Invalid User!', 'Username or Password is incorrect!',[
     {text: 'Okay'}
   ]);
   return;
  }
  Login(foundUser);
}
  return(
  <View style = {styles.container}>
    <StatusBar backgroundColor ='#01ab9d' barStyle="Light-content"/>
    <View style = {styles.header}>
<Text style ={styles.textheader}>Welcome to Health & Nutrition!</Text>
</View>
<Animatable.View 
animation="fadeInUpBig"
style= {styles.footer}>
<Text style ={styles.textfooter}> 
Email 
</Text>
<View style = {styles.action}>
  <FontAwesomeIcons name = "user-o" color = "black" size ={25}
  />
  <TextInput placeholder = "Your Email"
  style ={styles.textInput}
  autoCapitalize ="none"
   onChangeText ={(val) => textInputchange(val)}
   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
   />
   {data.check_textInputChange ?
   <Animatable.View 
   animation="bounceIn">
  <Feather name ="check-circle"
  color = "blue"
  size ={25}
  />
  </Animatable.View>
  :null}
</View>
{data.isValidUser ? null :
<Animatable.View animation="fadeInLeft" duration={500}>
<Text style={styles.errorMsg}> Username must be 4 characters long.</Text>
</Animatable.View>
}
<Text style= {[styles.textfooter,{marginTop : 35}]}> Password</Text> 
<View style = {styles.action}>
  <FontAwesomeIcons name = "lock" color = "black" size ={25}
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
  size ={25}
  />
  :
  <Feather name ="eye"
  color = "blue"
  size ={25}
  />
     }
  </TouchableOpacity>
</View>
{data.isValidPassword ? null :
<Animatable.View animation="fadeInLeft" duration={500}>
<Text style={styles.errorMsg}> Password must be 8 characters long.</Text>
</Animatable.View>
}
<View style = {[styles.Button,{marginTop : 20}]}>
  <TouchableOpacity onPress = {()=> {loginHandle(data.email,data.password)}}>
<LinearGradient
 colors = {['#01ab9d','#01ab9d']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'white'}
    
  ]} > LOGIN </Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity
onPress = {()=> navigation.navigate('SignUp') }
style = {[styles.signUp, {borderColor : '#01ab9d',
marginTop: 2}]}>
<LinearGradient colors ={['white','white']}
style = {styles.login}>
<Text style= {[styles.textSign, {color: 'grey'}]}> Not a registered User?SIGN UP</Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity 
onPress = {()=> navigation.navigate('HomePage') }
style = {[styles.signUp, {borderColor : '#01ab9d',
borderWidth : 0, marginTop: 0}]}
>
<LinearGradient
 colors = {['#01ab9d','#01ab9d']}
 style = {styles.login}>
<Text style= {[styles.textSign, {color: 'white'}]}> Continue without LOGIN </Text>
</LinearGradient>
</TouchableOpacity>
</View>
</Animatable.View>
</View>
    );
  };
export default LoginScreen;
const styles= StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#01ab9d'
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
marginTop: 2,
borderBottomWidth: 1,
borderBottomColor : '#01ab9d',
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
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
},
textSign : {
  fontSize : 18,
  fontWeight : 'bold'
 
}
});

