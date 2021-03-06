import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import{ AuthContext } from '../components/context';
export function DrawerContent(props){
    const [isDarkTheme, setIsDarkTheme]= React.useState(false);
    const {LogOut} = React.useContext(AuthContext);
    const toggleTheme =()=>{
        setIsDarkTheme(!isDarkTheme);
    }
    return(
        <View style ={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style ={styles.drawerContent}>
            <View style= {styles.userInfoSection}>
<View>
    <Avatar.Image source={{
        uri:'https://api.adorable.io/avatars/50/abott@adorable.png'

    }} size ={50}/>
<View style ={{marginLeft:15,flexDirection:'column'}}>
    <Title style={styles.title}> Full name</Title>
    <Caption style={styles.caption}>@123user</Caption>
</View>
</View>
 </View>
 <Drawer.Section style ={styles.drawerSection}>
     <DrawerItem icon={({color,size})=> (
         <Icon name="home-outline"
         color={color}
         size={size}/>
     )}
label="Home"
onPress={()=>{props.navigation.navigate('Home')}}
/>
<DrawerItem icon={({color,size})=> (
         <Icon name="account-outline"
         color={color}
         size={size}/>
     )}
label="Profile"
onPress={()=>{props.navigation.navigate('Profile')}}
/>

<DrawerItem icon={({color,size})=> (
         <Icon name="account-check-outline"
         color={color}
         size={size}/>
     )}
label="About Us"
onPress={()=>{props.navigation.navigate('AboutUs')}}
/>
<Drawer.Section title="Preferences">
            <TouchableRipple onPress={()=> {toggleTheme()}}>
                <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
            <Switch value ={isDarkTheme}/>
            </View>
            </View>
            </TouchableRipple>
            </Drawer.Section>
 </Drawer.Section>
 </View>
 
        </DrawerContentScrollView>
        <Drawer.Section style ={styles.bottomDrawerSection}>
            <Drawer.Item
            icon ={({color,size})=>(
            <Icon name="exit-to-app"
            color ={color}
            size ={size}
            /> )}
            label= "Log out"
            onPress={()=>{LogOut()}}
            />
        </Drawer.Section>
    </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
