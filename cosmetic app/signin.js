import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput
} from 'react-native'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {   
     text1:"",
     text2:"",
     arr:[],
     password:true,
     icon_name:'eye-slash'

    }}
 
  
 async store()
{  let text1=this.state.text1
  let text2=this.state.text2

  let arr=await AsyncStorage.getItem("auth_arr")
  arr=JSON.parse(arr)  
  this.setState({arr})  
  console.log(arr) 
  console.log(this.state.text1,this.state.text2)
  if(text1==''||text2=='')  
  {
    alert('enter your data')
  } 
  else
  {
    let arr=this.state.arr
    
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].text2==text1&&arr[i].text3==text2)
      {  
        await AsyncStorage.setItem("email",JSON.stringify(text1))  
        await AsyncStorage.setItem("password",JSON.stringify(text2))  

       await AsyncStorage.setItem("logged",JSON.stringify(1))  
       this.props.navigation.navigate('HomePage') 
      }  
    
      else
      {
        alert('no account with this data please,enter right email and password')
      }
    }
  }

}
change()
{
  if(this.state.password==true)
  this.setState({password:false}) 
  else 
  this.setState({password:true})  
  if(this.state.icon_name=='eye-slash')
  this.setState({icon_name:'eye'}) 
  else
  this.setState({icon_name:'eye-slash'}) 
}

  render() {
    return (
      <> 
      <StatusBar backgroundColor={'#E8859B'}></StatusBar>
     <View style={{width:'100%',height:'100%',backgroundColor:'#FCFCFF'}}>
         
         <Image 
         style={{width:150,height:150,alignSelf:'center',borderRadius:40}}
         source={{uri:'https://thumbs.dreamstime.com/b/lipstick-outline-icon-elements-beauty-cosmetics-illustration-icon-signs-symbols-can-be-used-web-logo-mobile-app-194512583.jpg'}}>
     
  

         </Image>
      <View style={{width:'85%',height:400,alignSelf:'center',borderWidth:3,borderColor:'#FFE3E1',borderRadius:20}}>
      <Text style={{fontSize:25,color:'black',textAlign:'center',marginTop:20,fontWeight:'bold'}}>Sign in</Text>
      
    
      <Text style={{marginRight:30,marginTop:20}}>Email Address</Text>
      <TextInput 

      style={{width:'80%',height:45,borderWidth:3,borderColor:'#E8859B',alignSelf:"center",marginTop:10,borderRadius:20}}
      value={this.state.text1}
      onChangeText={(val)=>{
       this.setState({text1:val})
      }}
      placeholder='enter your email address'>

      </TextInput>



      <Text style={{marginRight:30,marginTop:20}}>Password</Text> 
    <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',height:45,borderWidth:3,borderColor:'#E8859B',alignSelf:"center",marginTop:10,borderRadius:20}}>
     <TouchableOpacity onPress={()=>{
      this.change()
     }}>
     <FontAwesome5 name={this.state.icon_name} size={20} color="#E8859B" style={{padding:10}}/> 
     </TouchableOpacity>
      <TextInput 
      value={this.state.text2}
      onChangeText={(val)=>{
       this.setState({text2:val})
      }} 
      secureTextEntry={this.state.password}
      placeholder='enter your password'
      keyboardType='password'
      name='password'>

      </TextInput>  
   
      </View>
      <TouchableOpacity style={{width:'80%',height:45,backgroundColor:'#FFE3E1',alignSelf:"center",marginTop:60,borderRadius:20,alignItems:'center'}}
      onPress={()=>{
     this.store()  
      }}>
      <Text style={{fontSize:25,color:'#E8859B'}}>Log in</Text>
      </TouchableOpacity>
   <TouchableOpacity>
    <Text style={{marginRight:200,marginTop:10}}>Forget Password</Text>
    <View style={{borderBottomWidth:1,width:110,marginLeft:20,marginTop:-2}}></View>
   </TouchableOpacity>
      </View>


        <View style={{flexDirection:'row',marginTop:20,marginLeft:15}}>
      <View style={{borderBottomColor:'grey',borderBottomWidth:1,width:130,marginLeft:20,marginTop:-2}}></View>
      <Text style={{marginLeft:15}}>OR</Text>
      <View style={{borderBottomColor:'grey',borderBottomWidth:1,width:130,marginLeft:20,marginTop:-2}}></View> 
      </View> 


      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
      
      <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:'#FFE3E1'}}>
      <EvilIcons name="sc-facebook" size={45} color="#E8859B" style={{padding:10}} ></EvilIcons>
      </TouchableOpacity> 

      <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:'#FFE3E1'}}>
      <AntDesign name="google" size={30} color="#E8859B" style={{padding:15}} ></AntDesign>
      </TouchableOpacity>

      <TouchableOpacity style={{width:60,height:60,borderRadius:30,backgroundColor:'#FFE3E1'}}>
      <AntDesign name="apple1" size={30} color="#E8859B" style={{padding:15}} ></AntDesign>
      </TouchableOpacity>
      </View> 

        <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
          <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('signupNav') 
          }}>
        <Text>Sign Up</Text> 
        <View style={{borderBottomWidth:1,width:45,marginLeft:20,marginTop:-2}}></View>
        </TouchableOpacity>
      <Text style={{color:'#E8859B',}}>New Member ?</Text> 
    
      </View> 



     </View>
       
      </>
    )
  }
}