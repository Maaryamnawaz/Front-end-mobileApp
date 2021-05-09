import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import Recepies from './Recepies';
import Blogs from './Blogs';
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen =() => (
<Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: 'blue' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#01ab9d',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Recepies"
        component={Recepies}
        options={{
          tabBarLabel: 'Recepies',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chef-hat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="blogs"
        component={Blogs}
        options={{
          tabBarLabel: 'Blogs',
          tabBarColor: '#01ab9d',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
            headerStyle:{
            backgroundColor:'#5f9ea0',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            alignItems: 'center',
            
            fontWeight: 'bold'
          }
          }}>
          <HomeStack.Screen 
            name="Home"
              component={HomeScreen}
              options={{title: 'HomePage',headerLeft: ()=>(
                <Icon.Button name= "ios-menu" size= {25} backgroundColor="#5f9ea0" onPress={() =>
              {
                  navigation.openDrawer() }}> </Icon.Button>
              )
            }}
            />
          </HomeStack.Navigator>
    );
    const ProfileStackScreen = ({navigation}) =>(
      <ProfileStack.Navigator screenOptions={{
              headerStyle:{
              backgroundColor:'#5f9ea0',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              alignItems: 'center',
              
              fontWeight: 'bold'
            }
            }}>
         <ProfileStack.Screen 
            name="Profile"
              component={Profile}
              options={{title: 'Profile'}}
            />   
            </ProfileStack.Navigator>
      );
        