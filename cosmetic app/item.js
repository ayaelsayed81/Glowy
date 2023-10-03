import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,ScrollView,ToastAndroid,BackHandler} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage';




export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
           item:this.props.route.params.item , 
           index:this.props.route.params.index , 
           heart:'heart-outline',
           count:1,
           cart_arr:[], 
       
        }
    }
  async  favourite()
    {
        if(this.state.heart!='heart')
        {
            this.setState({heart:'heart'}) 
            let fav_arr =await AsyncStorage.getItem("arr2") 
            fav_arr = JSON.parse(fav_arr) 
           
           if(fav_arr == null  ){
             let array_data = []
             array_data.push(this.state.item) 
             await AsyncStorage.setItem("arr2",JSON.stringify(array_data)) 
            
           }else{
             let array_data = fav_arr
              array_data.push(this.state.item)  
         
              await AsyncStorage.setItem("arr2",JSON.stringify(array_data)) 
              ToastAndroid.show( 
                'product added to favourites',
                ToastAndroid.SHORT
        
               )
           } 
         
           console.log(fav_arr) 

           
        }
    } 
   plus()
   {
    let count=this.state.count
    count+=1
    this.setState({count}) 

   }
   minus()
   {
    let count=this.state.count 
    if(count!=1) {
    count-=1
    this.setState({count})}
   } 
    async push()
   {  
     if(this.state.item.state=='out of stock')
   {
    alert('sorry, this product is out of stock')
   }  
 
  
   else
   {
    this.state.item.count=this.state.count
    let cart_arr =await AsyncStorage.getItem("cart_arr") 
     cart_arr = JSON.parse(cart_arr) 
    
    if(cart_arr == null  ){
      let array_data = []
      array_data.push(this.state.item) 
      await AsyncStorage.setItem("cart_arr",JSON.stringify(array_data)) 
     
    }else{
      let array_data = cart_arr
       array_data.push(this.state.item)  
  
       await AsyncStorage.setItem("cart_arr",JSON.stringify(array_data)) 
       ToastAndroid.show( 
        'product added to cart',
        ToastAndroid.SHORT

       )
    } 
    console.log(count)
    console.log(cart_arr) 
  }
//     if(this.state.cart_arr.length==0)
//     {
//    let cart_arr=this.state.cart_arr
//     cart_arr.push(this.state.item)  
// console.log(cart_arr)
//     this.setState({cart_arr})  
//    await AsyncStorage.setItem("arr",JSON.stringify(cart_arr))  
//    await AsyncStorage.setItem("count",JSON.stringify(this.state.count))  

//     }
//     else{ 
//      let cart_arr =await AsyncStorage.getItem("arr") 
//      cart_arr=JSON.parse(cart_arr) 
//      console.log(cart_arr) 
//      console.log(this.state.item)
//      cart_arr.push(this.state.item)   
//      console.log(cart_arr)
//      this.setState({cart_arr})   
//      await AsyncStorage.setItem("arr",JSON.stringify(cart_arr))  
//     }
  }
  
   
    render() {
        return (
            <>   
      
       <View style={{width:'100%',height:'100%'}}>
      
      
          <Image style={{width:'100%',height:'60%',borderRadius:20}}
          source={{uri:this.state.item.img}}>
          </Image>   

     
          <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginTop:20,marginRight:20}}>
            {this.state.item.name}
          </Text>  
        
        {this.state.item.state=='in stock'?(
          <> 
           <Text style={{fontSize:25,marginTop:20,marginRight:20,color:'green',fontWeight:'bold'}}>
            {this.state.item.state}
          </Text>   
          </>
        ):(
          <> 
           <Text style={{fontSize:25,marginTop:20,marginRight:20,color:'red',fontWeight:'bold'}}>
            {this.state.item.state}
          </Text> 
          </>
        )}
           
        
        
 
          <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
          {this.state.item.colors.map((item2,index)=>
                <>     
                <TouchableOpacity 
                style={{width:50,height:50,borderRadius:25,backgroundColor:item2,marginRight:10}}
                onPress={()=>{
                
                }}>

                </TouchableOpacity>
              </>
            
          )   

         }       
         </View>  

         <View style={{flexDirection:'row',justifyContent:'space-around'}}> 

            <TouchableOpacity style={{width:230,height:50,borderWidth:2,backgroundColor:'#FFE3E1',borderColor:'#E8859B',borderRadius:20
        ,marginTop:30}}
        onPress={()=>{  
          
            this.push()
        }}>
            <Text style={{textAlign:'center',color:'#E8859B',fontSize:20,marginTop:5}}>Add To Cart</Text>
        </TouchableOpacity>
  
  <View style={{width:120,height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:20
        ,marginTop:30,flexDirection:'row',justifyContent:'space-around'}}>
      
<TouchableOpacity style={{width:10,height:80}}> 
<Text style={{fontSize:30,}} 
onPress={()=>{
this.minus()
}}>-</Text>
</TouchableOpacity> 


<Text style={{fontSize:30,marginLeft:20}}>{this.state.count}</Text> 



<TouchableOpacity style={{width:40,height:40}} 
  onPress={()=>{
  this.plus()
  }}  >  
<Text style={{fontSize:30,}}>+</Text>
</TouchableOpacity> 

        </View> 


         </View>
       
         
         <TouchableOpacity style={{width:250,height:50,borderWidth:2,backgroundColor:'#E8859B',borderColor:'#E8859B',borderRadius:20
        ,marginTop:10,alignSelf:'center'}}
        onPress={()=>{  
          this.props.navigation.navigate("cartNav",) 
         
        }}> 
        <View style={{flexDirection:'row',justifyContent:'space-around'}}> 
        <AntDesign name="shoppingcart" size={30} color="#FFE3E1" style={{padding:10,marginTop:-5}} ></AntDesign>
            <Text style={{textAlign:'center',color:'#FFE3E1',fontSize:20,marginTop:5,fontWeight:'bold'}}>Go To Cart</Text>
            </View>
        </TouchableOpacity>
  
        
          <View style={{flexDirection:'row',marginTop:-670,justifyContent:'space-between',paddingHorizontal:20}}>  
          <TouchableOpacity onPress={
            ()=>{ 
              
             this.favourite()
            }
          }>
          <Ionicons name={this.state.heart} size={30} color="#E8859B" style={{padding:10,marginTop:-10}}/> 
          </TouchableOpacity>  
          <TouchableOpacity 
          onPress={()=>{
           this.props.navigation.navigate('HomePage')
          }}> 
            <AntDesign name="left" size={30} color="#E8859B" style={{padding:10,marginTop:-10}}/>  
          </TouchableOpacity>
      
        </View> 


   




       
       </View> 
   
            </>

        )
    }
}