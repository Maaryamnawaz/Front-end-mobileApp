import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View,SafeAreaView,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomePage';
import LoginScreen from './src/screens/Login';
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
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
export default function App() {
  // eslint-disable-next-line prettier/prettier
  return (    
    <NavigationContainer initialRouteName="Login">
   <Stack.Navigator screenOptions={{
        headerStyle:{
        backgroundColor:'#5f9ea0',
      },
      headerTintColor: 'white',
      headerTitleStyle:{
        alignItems: 'center',
        
        fontWeight: 'bold'
      }
      }}>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'LOGIN'}}
        />
        <Stack.Screen 
        name="HomePage"
          component={HomeScreen}
          options={{title: 'HOMEPAGE'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{title: 'HomeScreen'}}
        />
        <Stack.Screen 
        name="Recepies"
          component={Recepies}
          options={{title: 'Recepies'}}
        />
         <Stack.Screen 
        name="Workouts"
          component={Workouts}
          options={{title: 'Workouts'}}
        />
        <Stack.Screen 
        name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
<Stack.Screen 
        name="Blogs"
          component={Blogs}
          options={{title: 'Blogs&SuccessStories'}}
        />
        <Stack.Screen 
        name="ChatBot"
          component={ChatBot}
          options={{title: 'ChatBot'}}
        />
        <Stack.Screen 
        name="Nutritionists"
          component={Nutritionists}
          options={{title: 'Nutritionists'}}
        />
         
       <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Sign Up'}}
        /> 
        <Stack.Screen
          name="FullBody"
          component={FullBody}
          options={{title: 'FullBody'}}
        />
        <Stack.Screen
          name="Abs"
          component={Abs}
          options={{title: 'Abs'}}
        />
        <Stack.Screen
          name="Arms"
          component={Arms}
          options={{title: 'Arms'}}
        /> 
        <Stack.Screen
          name="Legs"
          component={Legs}
          options={{title: 'Legs'}}
        />
        <Stack.Screen
          name="Facial"
          component={Facial}
          options={{title: 'Facial'}}
        />
        <Stack.Screen
          name="WarmUp"
          component={WarmUp}
          options={{title: 'Warm Up'}}
        />
        <Stack.Screen
          name="Shoulders"
          component={Shoulders}
          options={{title: 'Shoulders'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
