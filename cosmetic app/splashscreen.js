import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,StatusBar} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage';

import AnimatedLottieView from 'lottie-react-native';
export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
componentDidMount()
{
    setTimeout(() => {
      this.login()  
  
    },1000);
}
 
 async login()
{  
    let logged =await AsyncStorage.getItem("logged")  
    logged=JSON.parse(logged)  
    console.log(logged)
     if(logged==1)
     { 
        this.props.navigation.navigate('HomePage') 
     
     } 
     else
     {
        this.props.navigation.navigate('signinNav')  
        
     }
}

    render() {
        return (
            <>    
              <StatusBar backgroundColor={'#E8859B'}></StatusBar> 
         <View style={{width:'100%',height:'100%',backgroundColor:'#E8859B'}}
         >
              
              <Image 
         style={{width:150,height:150,alignSelf:'center',marginVertical:300,borderRadius:40}} 
         
 source={{uri:'https://thumbs.dreamstime.com/b/lipstick-outline-icon-elements-beauty-cosmetics-illustration-icon-signs-symbols-can-be-used-web-logo-mobile-app-194512583.jpg'}}>
     
       

         </Image>
         </View>
            </>
        )
    }
}