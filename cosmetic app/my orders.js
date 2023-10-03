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
          orders_arr:[]
        }
    }
  

    componentDidMount(){   
       
       
       
        this.getarr()  
  
    }
     async getarr()
    { 
        let orders_arr =await AsyncStorage.getItem("orders_arr")
        orders_arr=JSON.parse(orders_arr)   
        this.setState({orders_arr}) 
        console.log(orders_arr)
       
    }   
     
 
    render() {
        return (
            <>  
     
     <ScrollView> 
      <View style={{}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
         
           <View></View>
           <View></View>
     <View style={{flexDirection:'row'}}> 
  <Text style={{fontSize:25,color:'black',fontWhieght:'bold',marginTop:20}}>Your orders</Text> 
  <TouchableOpacity onPress={()=>
  {
    this.props.navigation.navigate("profile")
  }}>
  <AntDesign name="left" size={25} color="#E8859B" style={{padding:25}}/>   
  </TouchableOpacity>
 </View>  
 
          </View>
      


{this.state.orders_arr.length==0?(
    <> 
    <Text>you haven't ordered any thing yet</Text>
    </>
):(
    <> 
     {this.state.orders_arr.map((item,index)=>
                <>      

<View style={{width:'90%',height:130,borderRadius:25,borderWidth:2,borderColor:'#E8859B',alignSelf:'center',marginTop:30}}>

<View style={{flexDirection:'row',justifyContent:'space-around'}}> 

<View >
 <Text style={{color:'black',paddingStart:10,padding:25}}>{item.name}</Text>    
 <Text style={{color:'black',marginTop:10,paddingStart:10}}>{item.price}  EGP</Text>   



 </View>

 <Image source={{uri:item.img}}
 style={{width:100,height:100,marginTop:10,borderRadius:10}}>

 </Image>
</View>
  

</View>


</>
)} 


    </>
)}
     
        







   














</View>

      </ScrollView>
  
     
         </>

  
          

        )
    }
}