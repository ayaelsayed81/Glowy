import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
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
  Alert

} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage' ;
import { FlatList } from 'react-native-gesture-handler'; 
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {   
       cart_arr:[], 
      count:1,
       sum:0,
       shipping:55,
   
    show:false,
 
        }
    } 
   componentDidMount(){ 
    this.getarr()  
    this.total() 
   
   }
 async getarr()
{ 
 
    let cart_arr =await AsyncStorage.getItem("cart_arr")
    cart_arr=JSON.parse(cart_arr)  
    console.log(cart_arr)
    this.setState({cart_arr})  
    console.log(count)
}   


 async total(){   

  let cart_arr =await AsyncStorage.getItem("cart_arr")
   cart_arr=JSON.parse(cart_arr) 
 let sum=this.state.sum
  for(let i=0;i<cart_arr.length;i++)
  {
  sum+=cart_arr[i].price*cart_arr[i].count
  }    
  console.log(cart_arr.length)
  console.log(sum)
  this.setState({sum})
} 
 async delete(index)
{
  let cart_arr=this.state.cart_arr 
 
  for(let i=0;i<cart_arr.length;i++)
  {
    cart_arr.splice(index,1)  
  
  }
  this.setState({cart_arr})  
  
  await AsyncStorage.setItem("cart_arr",JSON.stringify(cart_arr))  
 
} 


async storetotal()
{ 
  let total=this.state.sum+this.state.shipping
  await AsyncStorage.setItem("total",JSON.stringify(total)) 
}


    render() {
        return (
          <>   
    <ScrollView> 
      <View style={{}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <View></View>
     <View style={{flexDirection:'row'}}> 
  <Text style={{fontSize:25,color:'black',fontWhieght:'bold',marginTop:20}}>Shopping Cart</Text> 
  <TouchableOpacity onPress={()=>
  {
    this.props.navigation.navigate("HomePage")
  }}>
  <AntDesign name="left" size={25} color="#E8859B" style={{padding:25}}/>   
  </TouchableOpacity>
 </View> 
          </View>
      
{this.state.cart_arr.map((item,index)=>
                <>      

<TouchableOpacity 
style={{width:'90%',height:130,borderRadius:25,borderWidth:2,borderColor:'#E8859B',alignSelf:'center',marginTop:30}}
onPress={()=>{
  this.props.navigation.navigate("productNav", {
    item
})
}}>

<View style={{flexDirection:'row',justifyContent:'space-around'}}> 
<View> 
  <TouchableOpacity 
  onPress={()=>{
    this.delete(index)
  }}>
<AntDesign name="delete" size={30} color="#E8859B" style={{padding:10,marginTop:-10}}/>  
</TouchableOpacity>

<View style={{width:80,height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:20
,marginTop:30,flexDirection:'row',justifyContent:'space-around'}}>

<TouchableOpacity style={{width:40,height:40,marginRight:40}}
onPress={()=>{
if(item.count!=1) 
{
  item.count--
  this.setState({item})   
  this.setState({sum:0})
  this.total()
}
}}
> 
<Text style={{fontSize:33,}} >-</Text>
</TouchableOpacity> 


<Text style={{fontSize:25,marginRight:20}}>{item.count}</Text> 

<TouchableOpacity style={{width:40,height:40,marginRight:20}} 
  onPress={()=>{
 item.count++
 this.setState({item})    
 this.total()
  }}  >  
<Text style={{fontSize:30,}}>+</Text>
</TouchableOpacity> 

        </View> 

              </View>


                <View >
                 <Text style={{color:'black',paddingStart:10}}>{item.name}</Text>    
                 <Text style={{color:'black',marginTop:70,paddingStart:10}}>{item.price}  EGP</Text> 
                 </View>

                 <Image source={{uri:item.img}}
                 style={{width:100,height:100,marginTop:10,borderRadius:10}}>

                 </Image>
                </View>
                  

                </TouchableOpacity>
              

                </>
)} 
<View style={{width:'100%',height:300,borderWidth:3,borderColor:'#E8859B',borderRadius:20,marginTop:150}}>
  
  <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:20}}> 
 
  <Text style={{fontSize:20,color:'black'}}>
{this.state.sum} EGP
  </Text>
  <Text style={{fontSize:20,color:'black'}}>
Subtotal {this.state.cart_arr.length} items
  </Text> 
 
  </View> 


   <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:10}}> 
   <Text style={{fontSize:20,color:'black'}}>
    55 EGP
  </Text>
  <Text style={{fontSize:20,color:'black'}}>
Shipping
  </Text> 
 
  </View>

  <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:10}}> 
  <Text style={{fontSize:20,color:'black'}}>
    {this.state.shipping+this.state.sum} EGP
  </Text>
  <Text style={{fontSize:20,color:'black'}}>
    Total
  </Text> 
   </View> 
 

 <TouchableOpacity style={{width:'80%',height:50,borderRadius:20,backgroundColor:'#FFE3E1',alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:20}} 
 onPress={()=>{ 
  if(this.state.show==false) 
  {
  this.setState({show:true})  
  this.storetotal()
  }
  else
  this.setState({show:false})
 }}>
<Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
  Checkout  {this.state.sum+this.state.shipping}  EGP
</Text>
 </TouchableOpacity> 

 
 <TouchableOpacity style={{width:'80%',height:50,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:20}} 
 onPress={()=>{
  this.props.navigation.navigate("HomePage")
 }}>
<Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
 Continue Shopping
</Text>
 </TouchableOpacity>
</View>  

<Modal 
transparent={false} 
animationType='fade'
visible={this.state.show}
     onRequestClose={() => {
      this.setState({ show: false })
    }}>  
    <View style={{width:300,height:300,borderColor:'#FFE3E1',borderWidth:3,alignSelf:'center',marginVertical:250,borderRadius:20}}>
      <Text style={{color:'#E8859B',fontSize:20,fontWeight:'bold',textAlign:'center',
    padding:20}}>Select your delivery method..</Text> 


<TouchableOpacity style={{width:'85%',height:40,borderRadius:20,backgroundColor:'#FFE3E1',alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:20}} 
 onPress={()=>{  
  this.setState({ show: false })
  this.props.navigation.navigate("paymentNav")
 }}>
<Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
At Home
</Text>
 </TouchableOpacity> 



 <TouchableOpacity style={{width:'85%',height:40,borderRadius:20,backgroundColor:'#FFE3E1',alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:30}} 
 onPress={()=>{
   alert('we waiting you to pick your products...') 
   
 }}>
<Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
From Store
</Text>
 </TouchableOpacity> 

    </View>
    </Modal> 
    </View>
</ScrollView>
</>
        )
    }
  }