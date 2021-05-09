import React, {useState, useEffect} from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar, ScrollView,Alert
} from 'react-native';
import {AuthContext} from '../components/context';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    email : '',
    password : '',
    confirm_password: '',
    name : '',
    nameError:'',
    check_textInputChange: false,
    secureTextEntry : true,
    confirm_secureTextEntry : true
  });
  const {SignUp} = React.useContext(AuthContext);
  const textInputchange = (val) => {
    if(val.name.length != 0)
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
 const validAge=(val) =>{
    if (val >= 8) {
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
  
}
const handllePasswordChange =(val) => {
  setData({
    ...data,
    password : val 
  });
}
const handleConfirmPasswordChange =(val) => {
  setData({
    ...data,
    confirm_password : val 
  });
}
const UpdateSecureTextEntry =() => {
  setData({
    ...data,
    secureTextEntry : !data.secureTextEntry
});
}
const UpdateConfirmSecureTextEntry =() => {
  setData({
    ...data,
    confirm_secureTextEntry : !data.confirm_secureTextEntry
});
}
const SignUpHandle = (name,email,password,) =>{
  if(data.name.length == 0){
    Alert.alert('Wrong Input!', 'Name field cannot be empty!',[
      {text: 'Okay'}
    ]);
    return;
   }
  // if(foundUser.length ==0){
  //  Alert.alert('Invalid User!', 'Username or Password is incorrect!',[
  //    {text: 'Okay'}
  //  ]);
  //  return;
  // }
  Login(foundUser);
}
const [pickerValue, setPickerValue] = useState()
// const validate = () => {
//   let profile = this.state;
//   if (!profile.email || !EMAIL_REG.test(profile.email)) {
//     Alert.alert("Please enter a valid email address.");
//     return false;
//   }
//   if (!profile.fullName || !NAME_REGEX.test(profile.fullName)) {
//     Alert.alert("Please enter a valid name.");
//     return false;
//   }
//   if (!profile.weight || !NUMBER_REGEX.test(profile.weight)) {
//     Alert.alert(
//       "Please enter your weight, weight should be a number (0.00 - 999.999)"
//     );
//     return false;
//   }
//   if (!profile.height || !NUMBER_REGEX.test(profile.height)) {
//     Alert.alert(
//       "Please enter your height, height should be a number (0.00 - 999.999)"
//     );
//     return false;
//   }
//   if (!profile.dateOfBirth) {
//     Alert.alert("Please enter your date of birth");
//     return false;
//   }
//   if (!profile.password && !profile.confirmPassword) {
//     Alert.alert("Please enter a password");
//     return false;
//   }
//   if (profile.password !== profile.confirmPassword) {
//     Alert.alert("Password and confirm password don't match.");
//     return false;
//   }
//   if (!profile.gender) {
//     Alert.alert("Please select your gender.");
//     return false;
//   }
//   return true;
// };
return(
    <ScrollView>
  <View style = {styles.container}>
    <StatusBar backgroundColor ='#01ab9d' barStyle="Light-content"/>
    
<Animatable.View 
animation="fadeInUpBig"
style= {styles.footer}>
<Text style ={styles.textfooter}> Full Name </Text>
<View style = {styles.action}>
<FontAwesomeIcons name = "user-circle" color = "black" size ={25} />
<TextInput placeholder = "Your Full Name"
  style ={styles.textInput}
  autoCapitalize ="words"

   />
</View>
<Text style ={styles.textfooter}> 
Email 
</Text>
<View style = {styles.action}>
  <FontAwesomeIcons name = "user-o" color = "black" size ={25}
  />
  <TextInput placeholder = "Your Email"
  style ={styles.textInput}
  autoCapitalize ="none"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
   
   />
   {data.check_textInputChange ?
  <Feather name ="check-circle"
  color = "blue"
  size ={25}
  />
  :null}
</View>
<Text style ={styles.textfooter}> Age </Text>
<View style = {styles.action}>
<FontAwesomeIcons name = "calendar-check-o" color = "black" size ={25}
  />
<TextInput placeholder = "Your Age"
  style ={styles.textInput}
  autoCapitalize ="none"
  keyboardType = "numeric"
  onEndEditing={(e)=>validAge(e.nativeEvent.text)}
   />
</View>
<Text style ={styles.textfooter}> Weight </Text>
<View style = {styles.action}>
<TextInput placeholder = "Your Weight"
  style ={styles.textInput}
  autoCapitalize ="none"
  keyboardType = "numeric"
   />
</View>
<Text style ={styles.textfooter}> Height </Text>
<View style = {styles.action}>
<TextInput placeholder = "Your Height"
  style ={styles.textInput}
  autoCapitalize ="none"
   />
</View>
<Text style ={styles.textfooter}> Gender </Text>
<View style = {styles.action}>
<Picker style ={styles.picker}
 selectedValue={pickerValue}
 onValueChange = {(itemValue)=> setPickerValue(itemValue)}
 >
   <Picker.Item label = "Male" value = "Male"/>
   <Picker.Item label ="Female" value = "Female"/>
 </Picker>
</View>
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
<Text style= {[styles.textfooter,{marginTop : 35}]}> Confirm Password</Text> 
<View style = {styles.action}>
  <FontAwesomeIcons name = "lock" color = "black" size ={25}
  />
  <TextInput placeholder = "Confirm Password"
  secureTextEntry ={data.confirm_secureTextEntry ? true : false}
  style ={styles.textInput}
  autoCapitalize ="none" 
  onChangeText ={(val) => handleConfirmPasswordChange(val)}
  />
  <TouchableOpacity
  onPress ={UpdateConfirmSecureTextEntry}
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
  
<View style = {[styles.Button,{marginTop : 25}]}>
<TouchableOpacity 
onPress = {()=> {SignUpHandle(data.name,data.email,
data.age,data.weight,data.height,data.password,data.confirmPassword)}}>
<LinearGradient
 colors = {['#01ab9d','#01ab9d']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'white'}
    
  ]} > REGISTER </Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity 
onPress = {()=> navigation.goBack() }
style = {[styles.signUp, {borderColor : '#01ab9d',
marginTop: 2}]}
>
<Text style= {[styles.textSign, {color: 'grey'}]}> Already a Registered User?LOGIN</Text>
</TouchableOpacity>
</View>
</Animatable.View>
</View>
</ScrollView> 
);
};
export default SignUp ;
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
  paddingHorizontal: 25,
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
borderBottomColor : '#01ab9d',
paddingBottom : 2
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
  height : 50,
  justifyContent : 'center',
  alignItems: 'center',
  borderRadius : 10
},
textSign : {
  fontSize : 18,
  fontWeight : 'bold'
},
picker :{
height:45,
width: 300,
borderColor: 'blue',
borderWidth : 3
}
  });

