import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Modal,
  Alert,
  TouchableRipple,
  PermissionsAndroid

} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage' ;  
import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker'; 
import {launchCamera} from 'react-native-image-picker';
import { FlatList } from 'react-native-gesture-handler'; 
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {    
        
        arr:[],
        user_name:'',
        email:'',
       

        }
    } 

    componentDidMount()
    {
        this.getdata()
    } 
    async getdata()
    {
        let arr=await AsyncStorage.getItem("auth_arr")
        arr=JSON.parse(arr) 
        this.setState({arr})  
       
        for(let i=0;i<arr.length;i++)
        {
       let user_name=this.state.user_name 
       let email=this.state.email
       user_name=arr[i].text1 
       email=arr[i].text2
       this.setState({user_name}) 
       this.setState({email})
        }
    } 

   opencamera()
   { 
    ImagePicker.showImagePicker({}, res => {

        console.log('Response = ', res);
  
        if (res.didCancel) {
  
          console.log('User cancelled image picker');
  
        } else if (res.error) {
  
          console.log('ImagePicker Error: ', res.error);
  
        } else if (res.customButton) {
  
          console.log('User tapped custom button: ', res.customButton);
  
          alert(res.customButton);
  
        } else {
             
          let source = res;
  
        
  
        }
    })
   
   }


    
 render() {
        return (
          <>   
        
      <View style={{width:120,height:120,borderRadius:60,borderWidth:2,borderColor:'grey',alignSelf:'center',
    alignItems:'center',marginTop:40}}>
      <Ionicons name="person" size={100} style={{}}/>
      </View> 
      <Text style={{fontSize:20,fontWeight:'bold',color:'#E8859B',alignSelf:'center'}}>{this.state.user_name}</Text> 
       

      <TouchableOpacity onPress={()=>{
         this.props.navigation.navigate("myordersNav")
      }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:80}}>   

       <View></View> 

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,paddingHorizontal:20,color:'black',fontWeight:'bold'}}>My Orders</Text>
        <FontAwesome5 name="clipboard-list" size={30} color="#E8859B" style={{paddingHorizontal:20}}/>
        </View>   


        </View>
    </TouchableOpacity> 


    <TouchableOpacity onPress={()=>{
        
            this.props.navigation.navigate("favouriteNav",) 
           
          
    }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>   

       <View></View> 

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,padding:20,color:'black',fontWeight:'bold'}}>Favourite list</Text>

        <AntDesign name="heart" size={30} color="#E8859B" style={{padding:20}}/> 
        </View>   


        </View>
    </TouchableOpacity> 

    <TouchableOpacity onPress={()=>{
       
      }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-5}}>   

       <View></View> 

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,padding:20,color:'black',fontWeight:'bold'}}>Settings</Text>
       
        <AntDesign name="setting" size={30} color="#E8859B" style={{padding:20}}/> 
        </View>   


        </View>
    </TouchableOpacity> 
                  
 


    
          </>


        );
 }

}