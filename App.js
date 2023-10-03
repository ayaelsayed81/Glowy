







import * as React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';




import { NavigationContainer,DarkTheme } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './cosmetic app/home'
import cartScreen from './cosmetic app/shopping cart'
import favouriteScreen from './cosmetic app/favourite list'
import productScreen from './cosmetic app/item' 
import paymentScreen from './cosmetic app/payment'
import orderScreen from './cosmetic app/order'
import cardScreen from './cosmetic app/card' 
import searchScreen from './cosmetic app/search' 
import signinScreen from './cosmetic app/signin'
import signupScreen from './cosmetic app/sign up' 
import splashScreen from './cosmetic app/splashscreen'  
import profileScreen from './cosmetic app/profile' 
import myordersScreen from './cosmetic app/my orders'
const Tab = createBottomTabNavigator();



const Stack = createNativeStackNavigator()

 


function HomePage() {
  return (  

      <Tab.Navigator initialRouteName="HomeNav"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColo: '#E8859B',
          tabBarInactiveTintColor: '#E8859B', 


        }}>
        <Tab.Screen name="HomeNav" component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="home" size={24} color="#E8859B" />
            ),
          }} /> 
              <Tab.Screen name="Search" component={searchScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color="#E8859B" />
            ),
          }} />
            <Tab.Screen name="profile" component={profileScreen}
          options={{
            tabBarIcon: () => (
           
              <Ionicons name="person" size={30} color="#E8859B" style={{}}/>
            ),
          }} />
      

     </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer >


      <Stack.Navigator initialRouteName="splashNav"
        screenOptions={{
          headerShown: false, 
         
        }}> 
          <Stack.Screen name="signinNav" component={signinScreen} /> 
         <Stack.Screen name="HomePage" component={HomePage}/>


        <Stack.Screen name="HomeNav" component={HomeScreen} />
        <Stack.Screen name="productNav" component={productScreen} />
        <Stack.Screen name="cartNav" component={cartScreen} /> 
        <Stack.Screen name="paymentNav" component={paymentScreen} />  
        <Stack.Screen name="orderNav" component={orderScreen} />  
        <Stack.Screen name="cardNav" component={cardScreen} />   
        <Stack.Screen name="searchNav" component={searchScreen} /> 
        <Stack.Screen name="signupNav" component={signupScreen} />  
        <Stack.Screen name="splashNav" component={splashScreen} /> 
        <Stack.Screen name="favouriteNav" component={favouriteScreen} />  
        <Stack.Screen name="myordersNav" component={myordersScreen} />  
      </Stack.Navigator> 



    

    </NavigationContainer>
  )
}

