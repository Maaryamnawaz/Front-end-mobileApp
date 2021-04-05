import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View,SafeAreaView,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
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
const Stack = createStackNavigator();
export default function App() {
  // eslint-disable-next-line prettier/prettier
  return (    
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen 
        name="HomePage"
          component={HomeScreen}
          options={{title: 'HomePage'}}
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
      </Stack.Navigator>
    </NavigationContainer>
   );
}
