import React, {useState, useEffect} from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import {Text, SafeAreaView, View, Button, TouchableOpacity,Dimensions,
StyleSheet, TextInput, Platform, StatusBar, ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    email : '',
    password : '',
    confirm_password: '',
    name : '',
    check_textInputChange: false,
    secureTextEntry : true,
    confirm_secureTextEntry : true
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
const [pickerValue, setPickerValue] = useState()
return(
    <ScrollView>
  <View style = {styles.container}>
    <StatusBar backgroundColor ='#5f9ea0' barStyle="Light-content"/>
    
<View style= {styles.footer}>
<Text style ={styles.textfooter}> Full Name </Text>
<View style = {styles.action}>
<FontAwesomeIcons name = "user-circle" color = "black" size ={20} />
<TextInput placeholder = "Your Full Name"
  style ={styles.textInput}
  autoCapitalize ="words"
   />
</View>
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
<Text style ={styles.textfooter}> Age </Text>
<View style = {styles.action}>
<FontAwesomeIcons name = "calendar-check-o" color = "black" size ={20}
  />
<TextInput placeholder = "Your Age"
  style ={styles.textInput}
  autoCapitalize ="none"
   />
</View>
<Text style ={styles.textfooter}> Weight </Text>
<View style = {styles.action}>
<TextInput placeholder = "Your Weight"
  style ={styles.textInput}
  autoCapitalize ="none"
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
   <Picker.Item label = "male" value = "male"/>
   <Picker.Item label ="female" value = "female"/>
 </Picker>
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
<Text style= {[styles.textfooter,{marginTop : 35}]}> Confirm Password</Text> 
<View style = {styles.action}>
  <FontAwesomeIcons name = "lock" color = "black" size ={20}
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
<TouchableOpacity 
onPress = {()=> navigation.navigate('HomeScreen')}>
<LinearGradient
 colors = {['#5f9ea0','#5f9ea0']}
 style = {styles.login}>
  <Text style= {[styles.textSign, {color: 'black'}
    
  ]} > Sign Up </Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity 
onPress = {()=> navigation.goBack() }
style = {[styles.signUp, {borderColor : '#5f9ea0',
marginTop: 2}]}
>
<Text style= {[styles.text, {color: '#5f9ea0'}]}> Already a User?Login</Text>
</TouchableOpacity>
</View>
</View>
</View>
</ScrollView> 
);
};
export default SignUp ;
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

