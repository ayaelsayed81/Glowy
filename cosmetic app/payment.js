import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,ScrollView,Modal,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
       text1:'',
       text2:'',
       text3:'',
       color1:'white',
       color2:'white',
       id:0,
       cvv:'',
       date:'',
       fname:'',
       lname:'',
      
        }
    }
  async storetext1()
  { 
     
    await AsyncStorage.setItem("text1",JSON.stringify(this.state.text1))  
    console.log(this.state.text1)
  } 
  async storetext2()
  { 
    
    await AsyncStorage.setItem("text2",JSON.stringify(this.state.text2))
  }
  async storetext3()
  { 
    
    await AsyncStorage.setItem("text3",JSON.stringify(this.state.text3))
  }
 
  
    render() {
        return (
            <>     
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <View></View>
     <View style={{flexDirection:'row'}}> 
  <Text style={{fontSize:25,color:'black',fontWhieght:'bold',marginTop:20}}>Payment Information</Text>
  <TouchableOpacity
  style={{width:25,padding:25}} onPress={()=>
  {
  
  }}>
  
  </TouchableOpacity> 
 </View> 
          </View>   


               <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}> 
               

                
               <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#FFE3E1'}}>
               <Text style={{fontSize:20,textAlign:'center',color:'#E8859B'}}>3</Text>
               </View>  
             
               <View style={{borderBottomColor:'#E8859B',borderBottomWidth:5,width:80,marginTop:-20}}></View>  

               <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#FFE3E1'}}>
               <Text style={{fontSize:20,textAlign:'center',color:'#E8859B'}}>2</Text>
            </View>

               <View style={{borderBottomColor:'#E8859B',borderBottomWidth:5,marginTo:-20,width:80}}></View>    

            <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#E8859B'}}>
              <Text style={{fontSize:20,textAlign:'center',color:'#FFE3E1'}}>1</Text>
             </View>  



               </View> 


               <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}> 
               <Text style={{fontSize:19,textAlign:'center',color:'black'}}>Confirmation</Text> 
               <View style={{width:30,}}></View>  
               <Text style={{fontSize:20,textAlign:'center',color:'black'}}>Payment</Text> 
               <View style={{width:40,}}></View>  
               <Text style={{fontSize:19,textAlign:'center',color:'black',fontWeight:'bold'}}>Delivery</Text>

               </View> 

               <Text style={{fontSize:19,color:'black',padding:30}}>Enter your address </Text>  

               <View style={{width:'85%',height:350,borderColor:'#E8859B',borderWidth:3,alignSelf:'center',
               borderRadius:20}}> 
               <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>City</Text>
              <TextInput style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
     placeholder='Enter your city'
      
     value={this.state.text1}
      onChangeText={(val)=>{ 
        this.setState({text1:val})
      this.storetext1() 
      
     }}
      ></TextInput> 

<Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>Street</Text>
              <TextInput style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
     placeholder='Enter your street'
      
     value={this.state.text2}
     onChangeText={(val)=>{
      this.setState({text2:val})   
      this.storetext2() 
     }}></TextInput>

<Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>Building</Text>
              <TextInput style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
     placeholder='Enter your Building'
      
     value={this.state.text3}
     onChangeText={(val)=>{
      this.setState({text3:val})   
      this.storetext3() 
     }}></TextInput>


               </View> 

               <Text style={{fontSize:17,color:'black',padding:20}}>Selsect your payment method </Text>  
                <TouchableOpacity style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
     onPress={()=>{  
      if(this.state.color2!='white')
      alert('you can choose only one option') 
      else if(this.state.text1==''||this.state.text2==''||this.state.text3=='') 
      alert('please,complete your data') 
     else 
     { 
      if(this.state.color1=='white') 
      {
      this.setState({color1:'#E8859B'})   
      this.props.navigation.navigate("cardNav"),{
        color1:this.state.color1 
      } 
      }
      else 
      this.setState({color1:'white'})  
     }
     }}> 
                   <View style={{flexDirection:'row',marginLeft:200,justifyContent:'space-around',marginTop:5}}>  

                   <Text style={{fontSize:15,color:'black'}}>Pay by card</Text>
                    <View style={{width:30,height:30,borderRadius:15,backgroundColor:this.state.color1,borderColor:'#E8859B',borderWidth:3}}></View> 
                
                    </View>                
                </TouchableOpacity> 
                <TouchableOpacity style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between',marginTop:10}}
     onPress={()=>{ 
       
      if(this.state.color1!='white')
      alert('you can choose only one option') 
      else if(this.state.text1==''||this.state.text2==''||this.state.text3=='') 
      alert('please,complete your data')  
     else 
      { 
        if(this.state.color2=='white') 
        {
        this.setState({color2:'#E8859B'})   
        
        this.props.navigation.navigate("orderNav")
        }
        else 
        this.setState({color2:'white'})  
       }
     }}>

<View style={{flexDirection:'row',marginLeft:200,justifyContent:'space-around',marginTop:5}}>  

<Text style={{fontSize:15,color:'black'}}>Pay by cash</Text>
 <View style={{width:30,height:30,borderRadius:15,backgroundColor:this.state.color2,borderColor:'#E8859B',borderWidth:3}}></View> 

 </View>   
                </TouchableOpacity>  


      </ScrollView>
      </>
        )
    }
}