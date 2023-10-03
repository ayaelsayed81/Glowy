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
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {   
     text1:"",
     text2:"",
     text3:"",
     text4:"",
     arr:[],
     x:{},
     password:true,
     icon_name:'eye-slash' ,
     password2:true,
     icon_name2:'eye-slash' 


    }}
 async store()
{ 
  let text1=this.state.text1 
  let text2=this.state.text2
  let text3=this.state.text3
  let text4=this.state.text4 
  let arr=this.state.arr  
  let x=this.state.x
 
    if(text1==''||text2==''||text3==''||text4=='')
    {
      alert('enter your data') 
    } 
   else if(text1.length<3)
   {
    alert('your name must be more than 3 letters')
   } 
   else if(text3.length<6)
   {
    alert('your password must be more than 6 letters ')
   } 
   else if(text3!=text4)
   {
    alert('two diffrent passwords')
   }
  else
  { 
      arr.push({text1,text2,text3,text4})  
        this.setState({arr})
    console.log(arr) 
    await AsyncStorage.setItem("auth_arr",JSON.stringify(arr)) 
    this.props.navigation.navigate('signinNav') 
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

change2()
{
  if(this.state.password2==true)
  this.setState({password2:false}) 
  else 
  this.setState({password2:true})  
  if(this.state.icon_name2=='eye-slash')
  this.setState({icon_name2:'eye'}) 
  else
  this.setState({icon_name2:'eye-slash'}) 
}
  render() {
    return (
      <> 
      <StatusBar backgroundColor={'#E8859B'}></StatusBar> 
      <ScrollView>
     <View style={{width:'100%',height:'100%',backgroundColor:'#FCFCFF'}}>
         
         <Image 
         style={{width:150,height:150,alignSelf:'center',}} 
         source={{uri:'https://thumbs.dreamstime.com/b/lipstick-outline-icon-elements-beauty-cosmetics-illustration-icon-signs-symbols-can-be-used-web-logo-mobile-app-194512583.jpg'}}>
     
       

         </Image>
      <View style={{width:'85%',height:470,alignSelf:'center',borderWidth:3,borderColor:'#FFE3E1',borderRadius:20}}>
      <Text style={{fontSize:25,color:'black',textAlign:'center',marginTop:20,fontWeight:'bold'}}>Sign Up</Text>
      
    
      <Text style={{marginRight:30,marginTop:20}}>User Name</Text>
      <TextInput 
      style={{width:'80%',height:45,borderWidth:3,borderColor:'#E8859B',alignSelf:"center",marginTop:10,borderRadius:20}}
      value={this.state.text1}
      onChangeText={(val)=>{
       this.setState({text1:val})
      }}
      placeholder='enter your name'>

      </TextInput> 
      <Text style={{marginRight:30,marginTop:20}}>Email</Text>
      <TextInput 
      style={{width:'80%',height:45,borderWidth:3,borderColor:'#E8859B',alignSelf:"center",marginTop:10,borderRadius:20}}
      value={this.state.text2}
      onChangeText={(val)=>{
       this.setState({text2:val})
      }}
      placeholder='enter your email'>

      </TextInput>
      <Text style={{marginRight:30,marginTop:20}}>Password</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',height:45,borderWidth:3,borderColor:'#E8859B',alignSelf:"center",marginTop:10,borderRadius:20}}>
     <TouchableOpacity onPress={()=>{
      this.change()
     }}>
     <FontAwesome5 name={this.state.icon_name} size={20} color="#E8859B" style={{padding:10}}/> 
     </TouchableOpacity>
      <TextInput 
      value={this.state.text3}
      onChangeText={(val)=>{
       this.setState({text3:val})
      }} 
      secureTextEntry={this.state.password}
      placeholder='enter your password'
      keyboardType='password'
      name='password'>

      </TextInput>  
   
      </View>
      <Text style={{marginRight:30,marginTop:20}}>Confirm Password</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%',height:45,borderWidth:3,borderColor:'#E8859B',alignSelf:"center",marginTop:10,borderRadius:20}}>
     <TouchableOpacity onPress={()=>{
      this.change2()
     }}>
     <FontAwesome5 name={this.state.icon_name2} size={20} color="#E8859B" style={{padding:10}}/> 
     </TouchableOpacity>
      <TextInput 
      value={this.state.text4}
      onChangeText={(val)=>{
       this.setState({text4:val})
      }} 
      secureTextEntry={this.state.password2}
      placeholder='enter your password'
      keyboardType='password'
      name='password'>

      </TextInput>  
   
      </View>

      </View>
   

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
              
              <TouchableOpacity style={{width:160,height:45,borderRadius:20,borderWidth:3,borderColor:'#E8859B',backgroundColor:'#FFE3E1',
            alignItems:'center'}}
            onPress={()=>{
              
              this.store()
            }}>
              <Text style={{fontSize:20,color:'#E8859B',marginVertical:5}}>Sign Up</Text>
              </TouchableOpacity> 
              <TouchableOpacity 
              style={{width:160,height:45,borderRadius:20,borderWidth:3,borderColor:'#E8859B',  alignItems:'center'}}
              onPress={()=>{
                this.props.navigation.navigate('signinNav') 
              }}>

              <Text style={{fontSize:20,color:'#E8859B',marginVertical:5}}>Cancel</Text>
             </TouchableOpacity>
            </View>

     </View>
     </ScrollView>
      </>
    )
  }
}