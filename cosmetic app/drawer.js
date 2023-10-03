import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  createDrawerNavigator,
  
} from '@react-navigation/drawer'; 

import {NavigationContainer} from '@react-navigation/native'; 


const Drawer = createDrawerNavigator();


import HomeScreen from './cosmetic app/home'
import makeupScreen from './cosmetic app/makeup'
import skincareScreen from './cosmetic app/skincare'
import haircareScreen from './cosmetic app/haircare'
import bodycareScreen from './cosmetic app/bodycare'







export default class App extends React.Component {






  render() {
    return (
      <>
        <NavigationContainer>

          <Drawer.Navigator initialRouteName="HomeNav"
      
           screenOptions={{headerShown:false,drawerType:'slide',drawerInactiveTintColor:'black',drawerActiveTintColor:'#E8859B'}}>
            <Drawer.Screen name="Home" component={HomeScreen} 
              options={{
                drawerIcon: () => (
                  <Ionicons name="home" size={24} color="black" />
                ),
              }}/> 

          <Drawer.Screen name="makeup" component={makeupScreen} 
              options={{
              
             
              }}/> 
              
          <Drawer.Screen name="skincare" component={skincareScreen} 
              options={{
              
             
              }}/>
  <Drawer.Screen name="haircare" component={haircareScreen} 
              options={{
              
             
              }}/> 
              <Drawer.Screen name="bodycare" component={bodycareScreen} 
              options={{
              
             
              }}/>

          </Drawer.Navigator>  
         

        </NavigationContainer> 



      </>
    )
  }
}