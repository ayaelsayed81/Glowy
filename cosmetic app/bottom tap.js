import * as React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from './cosmetic app/home'
import productScreen from './cosmetic app/item'
import cartScreen from './cosmetic app/shopping cart'






const Tab = createBottomTabNavigator();


export function TabNavigator()
{
    return (
        <Tab.Navigator initialRouteName="HomeNav"
        screenOptions={{
         headerShown: false,
         tabBarActiveTintColo:'#E8859B',
         tabBarInactiveTintColor:'black',
        
               }}>
  <Tab.Screen name="HomeNav" component={HomeScreen} 
   options={{
    tabBarIcon: () => (
      <AntDesign name="home" size={24} color="black" />
    ),
  }}/>
  <Tab.Screen name="cartNav" component={cartScreen} 
   options={{
    tabBarIcon: () => (
      <AntDesign name="shoppingcart" size={24} color="black" />
    ),
  }}/>
 
  <Tab.Screen name="favouriteNav" component={favouriteScreen} 
   options={{
    tabBarIcon: () => (
      <AntDesign name="hearto" size={24} color="black" />
    ),
  }}/> 
    </Tab.Navigator>  
   
    )
}




