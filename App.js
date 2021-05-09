import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View,SafeAreaView,Text, Settings} from 'react-native';
import MainScreen from './src/screens/Start'
import HomeScreen from './src/screens/HomePage';
import LoginScreen from './src/screens/login';
import SignUpScreen from './src/screens/SignUp';
import Recepies from './src/screens/Recepies';
import Workouts from './src/screens/Workouts';
import Profile from './src/screens/Profile';
import Nutritionists from './src/screens/Nutritionists';
import Blogs from './src/screens/Blogs';
import  ChatBot from './src/screens/ChatBot';
import Home from './src/screens/HomeScreen';
import FullBody from './src/screens/FullBody';
import Arms from './src/screens/Arms';
import Abs from './src/screens/Abs';
import Facial from './src/screens/Facial';
import Legs from './src/screens/Legs';
import WarmUp from './src/screens/WarmUp';
import Shoulders from './src/screens/Shoulders';
import MainTabScreen from './src/screens/MainTabScreen';
import {DrawerContent} from './src/screens/DrawerContent'
import AboutUs from './src/screens/Aboutus';
import RootStackScreen from './src/screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import { useEffect } from 'react';
import Login from './src/screens/login';
import SignUp from './src/screens/SignUp';
import {AuthContext} from './src/components/context';
import AsyncStorage from '@react-native-community/async-storage';

//const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const MainStackScreen = ({navigation}) =>(
//   <MainStack.Navigator screenOptions={{
//           headerStyle:{
//           backgroundColor:'#01ab9d',
//         },
//         headerTintColor: 'white',
//         headerTitleStyle:{
//           alignItems: 'center',
          
//           fontWeight: 'bold'
//         }
//         }}>
//         <MainStack.Screen 
//           name="Main"
//             component={MainScreen}
//             options={{title: 'Health & Nutrition'}
//           }
//           />
//         </MainStack.Navigator>
//   );

export default function App() {
 const initialLoginState={
    isLoading:true,
    userName : null,
userToken : null,
  };
  const loginReducer=(prevState, action) =>{
switch (action.type) {
  case 'RETRIEVE_TOKEN':
    return{
      ...prevState,
      userToken: action.token,
      isLoading: false,
    };
  case 'LOGIN':
    return{
      ...prevState,
      userName:action.id,
      userToken:action.token,
      isLoading: false
    };
    case 'REGISTER':
    return{
      ...prevState,
      userName:action.id,
      userToken:action.token,
      isLoading: false
    };
    case 'LOGOUT':
    return{
      ...prevState,
      userName:null,
      userToken:null,
      isLoading: false
    };
    }
  };
  const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState);
  const authContext= React.useMemo(()=>({
    Login:async(foundUser) =>{
      // setUserToken('abc');
      // setIsLoading(false);
     const userToken= String(foundUser[0].userToken);
     const userName = foundUser[0].username;
        try{
          userToken = 'abcd';
          await AsyncStorage.setItem('userToken',userToken)
        }
       catch(e){
         console.log(e);
       } 
      
     // console.log('user token:',userToken);
      dispatch({type: 'LOGIN', id:userName,token:userToken});
    },
    LogOut:async()=>{
        try{
          await AsyncStorage.removeItem('userToken')
        }
       catch(e){
         console.log(e);
       
      }
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({type: 'LOGOUT'});
    },
    SignUp:()=>{
      setUserToken('abc');
      setIsLoading(false);
    },

  }),[]);
  useEffect(()=>{
 setTimeout(async() => {
  // setIsLoading(false);
  let userToken;
  userToken = null;
  try{
     await AsyncStorage.getItem('userToken')
    }
   catch(e){
     console.log(e);
   } 
  
  //console.log('user token:',userToken);
  dispatch({type: 'REGISTER',token: userToken});
 },1000);
  },[]);
  if(loginState.isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='Large'/>
      </View>

    );
  }
return ( 
  <AuthContext.Provider value={authContext}>  
    <NavigationContainer>
      {loginState.userToken !==  null ?(
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />  
    {/* <Drawer.Screen name="Settings" component={Settingscreen} /> */}
      </Drawer.Navigator>
      )
    :
    <RootStackScreen/>
    }
 </NavigationContainer>
    </AuthContext.Provider> 
   );
}
