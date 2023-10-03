import * as React from 'react'



import { Text, View, TouchableOpacity, TextInput } from 'react-native'









import { NavigationContainer } from '@react-navigation/native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';












import HomeScreen from './cosmetic app/home'
import productScreen from './cosmetic app/item'
import cartScreen from './cosmetic app/shopping cart'







const Stack = createNativeStackNavigator()







export default class App extends React.Component {






  render() {
    return (
      <>   
   
        <NavigationContainer>

          <Stack.Navigator initialRouteName="HomeNav"
            screenOptions={{
             headerShown: false,
                   }}>

        
            <Stack.Screen name="HomeNav" component={HomeScreen} />
            <Stack.Screen name="productNav" component={productScreen} /> 
            <Stack.Screen name="searchNav" component={searchScreen} />
            <Stack.Screen name="cartNav" component={cartScreen} />
          </Stack.Navigator>


        </NavigationContainer> 
         


      </>
    )
  }
}