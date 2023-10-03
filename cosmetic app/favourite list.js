import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,ScrollView,ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage' ; 
import AnimatedLottieView from 'lottie-react-native';
export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fav_arr:[],  
       flag:true
         
        }
    }
  

    componentDidMount(){   
       
       
       
        this.getarr()  
       console.log(this.state.flag)
    }
     async getarr()
    { 
     
        let fav_arr =await AsyncStorage.getItem("arr2")
        fav_arr=JSON.parse(fav_arr)  
        console.log(fav_arr)
        this.setState({fav_arr})   
       if(this.state.fav_arr.length==0) 
       { 
      let flag=this.state.flag 
      flag= false
        this.setState({flag}) 
       }
    }   
     
   
async remove(index)
{
  let fav_arr=this.state.fav_arr 
 
  for(let i=0;i<fav_arr.length;i++)
  {
    fav_arr.splice(index,1)  
  
  } 
  this.setState({fav_arr})  
  await AsyncStorage.setItem("arr2",JSON.stringify(fav_arr))   
  
  if(this.state.fav_arr.length==0)
  { 
    let flag=this.state.flag 
    flag= false
      this.setState({flag}) 
  
  }
 
} 
     
async addto(item)
{
   if(item.state=='out of stock') 
   {
    alert('sorry, this item is out of stock')
   } 
   else 
   {
    let cart_arr =await AsyncStorage.getItem("cart_arr") 
     cart_arr = JSON.parse(cart_arr) 
    
    if(cart_arr == null  ){
      let array_data = []
      array_data.push(item)  
      item.count=1
      await AsyncStorage.setItem("cart_arr",JSON.stringify(array_data)) 
     
    }else{
      let array_data = cart_arr
       array_data.push(item)  
       item.count=1
       await AsyncStorage.setItem("cart_arr",JSON.stringify(array_data)) 
       ToastAndroid.show( 
        'product added to cart',
        ToastAndroid.SHORT

       )
    } 
 
    console.log(cart_arr) 
   }
}
  

    render() {
        return (
            <>  
     
     <ScrollView> 
      <View style={{}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
           <AntDesign name="heart" size={25} color="#E8859B" style={{padding:25}}/> 
           <View></View>
           <View></View>
     <View style={{flexDirection:'row'}}> 
  <Text style={{fontSize:25,color:'black',fontWhieght:'bold',marginTop:20}}>Wish-List</Text> 
  <TouchableOpacity onPress={()=>
  {
    this.props.navigation.navigate("HomePage")
  }}>
  <AntDesign name="left" size={25} color="#E8859B" style={{padding:25}}/>   
  </TouchableOpacity>
 </View>  
 
          </View>
      



     {this.state.flag==false?(
        <> 
   <AnimatedLottieView
                  source={require('./lotties/OA0R6O4tS2.json')}
                  autoPlay
                  loop
                  style={{ height: 300, width: 300, alignSelf: 'center' }}
                 
                /> 
           
<TouchableOpacity style={{width:'80%',height:50,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:300,backgroundColor:'#FFE3E1'}} 
 onPress={()=>{
  this.props.navigation.navigate("HomePage")
 }}>
    <Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
 find your favourites
</Text> 

 </TouchableOpacity>

        </>
     ):(
        <> 
           {this.state.fav_arr.map((item,index)=>
                <>      

<TouchableOpacity 
style={{width:'90%',height:130,borderRadius:25,borderWidth:2,borderColor:'#E8859B',alignSelf:'center',marginTop:30}}
onPress={()=>{
    this.props.navigation.navigate("productNav", {
        item
})
}}>

<View style={{flexDirection:'row',justifyContent:'space-around'}}> 

<View >
 <Text style={{color:'black',paddingStart:10}}>{item.name}</Text>    
 <Text style={{color:'black',marginTop:10,paddingStart:10}}>{item.price}  EGP</Text>   

 <View style={{flexDirection:'row',justifyContent:'space-around'}}>
             <TouchableOpacity 
              style={{width:100,height:30,borderRadius:20,borderWidth:1,borderColor:'#E8859B',  alignItems:'center',alignSelf:'center',
            marginTop:20,backgroundColor:'#FFE3E1'}} 
            onPress={()=>{
                this.addto(item)
            }}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
              <AntDesign name="shoppingcart" size={20} color="#E8859B" style={{}}/> 
              <Text style={{fontSize:15,color:'#E8859B'}}>Add to</Text>
            </View> 
              


            </TouchableOpacity> 
            <TouchableOpacity 
              style={{width:100,height:30,borderRadius:20,borderWidth:1,borderColor:'#E8859B',  alignItems:'center',alignSelf:'center',
            marginTop:20,backgroundColor:'#FFE3E1'}}
            onPress={()=>{
                this.remove(index)
            }}>
 <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
              <AntDesign name="delete" size={18} color="#E8859B" style={{}}/> 
              <Text style={{fontSize:15,color:'#E8859B'}}>Remove</Text>
            </View> 
            </TouchableOpacity>
            
            
 </View>


 </View>

 <Image source={{uri:item.img}}
 style={{width:100,height:100,marginTop:10,borderRadius:10}}>

 </Image>
</View>
  

</TouchableOpacity>


</>
)} 



<TouchableOpacity style={{width:'80%',height:50,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:400,backgroundColor:'#FFE3E1'}} 
 onPress={()=>{
  this.props.navigation.navigate("HomePage")
 }}>
    <Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
 Continue Shopping
</Text> 

 </TouchableOpacity>
















        </>
     )}
         















</View>

      </ScrollView>
  
     
         </>

  
          

        )
    }
}