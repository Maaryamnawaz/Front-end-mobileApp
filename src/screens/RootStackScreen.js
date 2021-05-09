import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './Start';
import SignUp from './SignUp';
import HomePage from './HomePage';
import LoginScreen from './login';
import HomeScreen from './HomeScreen';
import Workouts from './Workouts';
import ChatBot from './ChatBot';
import Nutritionists from './Nutritionists';
import Blogs from './Blogs';
import Recepies from './Recepies';
import WarmUp from './WarmUp';
import Facial from './Facial';
import Legs from './Legs';
import Arms from './Arms';
import Shoulders from './Shoulders';
import Abs from './Abs';
import FullBody from './FullBody';
const RootStack = createStackNavigator();
const RootStackScreen =({navigation}) => (
<RootStack.Navigator headerMode='none'>
    <RootStack.Screen name='MainScreen' component={MainScreen}/>
    <RootStack.Screen name='Login' component={LoginScreen}/>
    <RootStack.Screen name='SignUp' component={SignUp}/>
    <RootStack.Screen name='HomePage' component={HomePage}/>
    <RootStack.Screen name='HomeScreen' component={HomeScreen}/>
    <RootStack.Screen name='Workouts' component={Workouts}/>
    <RootStack.Screen name='chatBot' component={ChatBot}/>
    <RootStack.Screen name='Nutritionists' component={Nutritionists}/>
    <RootStack.Screen name ='Blogs' component={Blogs}/>
    <RootStack.Screen name ='Recepies' component={Recepies}/>
    <RootStack.Screen name ='WarmUp' component={WarmUp}/>
    <RootStack.Screen name ='Facial' component={Facial}/>
    <RootStack.Screen name ='Legs' component={Legs}/>
    <RootStack.Screen name ='Arms' component={Arms}/>
    <RootStack.Screen name ='Shoulders' component={Shoulders}/>
    <RootStack.Screen name ='Abs' component={Abs}/>
    <RootStack.Screen name ='FullBody' component={FullBody}/>
</RootStack.Navigator>

);
export default RootStackScreen;

