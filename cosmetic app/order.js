import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,ScrollView,Modal} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';


export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          text1:'',
          text2:'',
          text3:'',
          total:'',
          show1:false,
          show2:false,
          textC:'',
          textS:'',
          textB:''
        }
    }

    componentDidMount(){  
        
         this.getdata() 
      
        } 
        async getdata()
        {
            let text1 =await AsyncStorage.getItem("text1")  
            text1=JSON.parse(text1) 
            let text2 =await AsyncStorage.getItem("text2")  
            text2=JSON.parse(text2)
            let text3 =await AsyncStorage.getItem("text3")  
            text3=JSON.parse(text3)  
            let total =await AsyncStorage.getItem("total")  
            total=JSON.parse(total) 
            this.setState({text1,text2,text3,total})  
         
         
        } 
     async storeedit()
     {
        await AsyncStorage.setItem("text1",JSON.stringify(text1))  
        await AsyncStorage.setItem("text2",JSON.stringify(text2))  
        await AsyncStorage.setItem("text3",JSON.stringify(text3))  
     } 



    async saveorders()
     {
      let cart_arr =await AsyncStorage.getItem("cart_arr")
      cart_arr=JSON.parse(cart_arr)   
    console.log(cart_arr)
    let orders_arr=[]
    for(let i=0;i<cart_arr.length;i++)
    {
      orders_arr.push(cart_arr[i])
    }
    console.log(orders_arr)
    await AsyncStorage.setItem("orders_arr",JSON.stringify(orders_arr))  
     }

    render() {
        return (
            <>     
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <View></View>
     <View style={{flexDirection:'row'}}> 
  <Text style={{fontSize:25,color:'black',fontWhieght:'bold',marginTop:20}}>Order Confirmation</Text>
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

               <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#E8859B'}}>
               <Text style={{fontSize:20,textAlign:'center',color:'#FFE3E1'}}>2</Text>
            </View>

               <View style={{borderBottomColor:'#E8859B',borderBottomWidth:5,marginTo:-20,width:80}}></View>    

            <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#E8859B'}}>
              <Text style={{fontSize:20,textAlign:'center',color:'#FFE3E1'}}>1</Text>
             </View>  



               </View> 


               <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}> 
               <Text style={{fontSize:19,textAlign:'center',color:'black'}}>Confirmation</Text> 
               <View style={{width:30,}}></View>  
               <Text style={{fontSize:20,textAlign:'center',color:'black',fontWeight:'bold'}}>Payment</Text> 
               <View style={{width:40,}}></View>  
               <Text style={{fontSize:19,textAlign:'center',color:'black',fontWeight:'bold'}}>Delivery</Text>

               </View> 

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>  
                   <TouchableOpacity onPress={()=>{
                    this.setState({show2:true})
                   }}>
                   <AntDesign name="edit" size={25} color="#E8859B" style={{paddingHorizontal:25,marginTop:10}}/>   
                   </TouchableOpacity>
               <Text style={{fontSize:19,color:'black',paddingHorizontal:30,fontWeight:'bold'}}> Your Address </Text>  
                </View> 

                     
<View style={{width:'85%',height:40,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:10}} >
    
     <Text style={{fontSize:17,paddingHorizontal:15,color:'black'}}>{this.state.text1},{this.state.text2},{this.state.text3}</Text>  
 </View>  



 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>  
                   <TouchableOpacity>
                   
                   </TouchableOpacity>
               <Text style={{fontSize:19,color:'black',paddingHorizontal:30,fontWeight:'bold'}}> Delivery </Text>  
                </View> 

                     
<View style={{width:'85%',height:40,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:10}} >
 <Text style={{fontSize:17,paddingHorizontal:15,color:'black'}}>At Home</Text>
 </View> 


 

 <View style={{width:'100%',height:100,borderWidth:3,borderColor:'#E8859B',borderRadius:20,marginTop:50}}>
  
  <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:20}}> 
 
  <Text style={{fontSize:25,color:'black'}}>
 {this.state.total} EGP
  </Text>
  <Text style={{fontSize:25,color:'black'}}>
Total
  </Text> 
 
  </View> 
</View> 


  
<TouchableOpacity style={{width:'85%',height:40,borderRadius:20,backgroundColor:'#FFE3E1',alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:30}} 
 onPress={()=>{   
    if(this.state.show1==false)
this.setState({show1:true})  
this.saveorders()
 }}>
<Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
Confirm
</Text>
 </TouchableOpacity>  
 
<Modal 

animationType='fade'
visible={this.state.show1}
     onRequestClose={() => {
      this.setState({ show1: false })
    }}>   


    <View style={{width:'100%',height:'100%',backgroundColor:'#FFE3E1'}}>
   
    <AnimatedLottieView
                  source={require('./lotties/kA4FqZqBwH.json')}
                  autoPlay
                  loop
                  style={{ height: 400, width: 400, alignSelf: 'center' }}
                  resizeMode="contain"
                /> 


                <Text style={{fontSize:30,fontWeight:'bold',color:'#E8859B',alignSelf:'center'}}>GREAT</Text>

 
                <Text style={{fontSize:20,color:'#E8859B',alignSelf:'center',marginTop:20}}>Your order has been confirmed,
                the order </Text> 
                <Text style={{fontSize:20,color:'#E8859B',alignSelf:'center'}} >will be recieved in 3 days</Text>

    </View>
   


    </Modal> 


    
<Modal 

animationType='fade'
visible={this.state.show2}
     onRequestClose={() => {
      this.setState({ show2: false })
    }}>    
    <ScrollView>
<View style={{width:300,height:400,borderColor:'#FFE3E1',borderWidth:3,alignSelf:'center',marginVertical:200,borderRadius:20}}>
<Text style={{color:'black',fontSize:20,fontWeight:'bold',
paddingHorizontal:20,marginTop:20}}> City</Text>  

 
<TextInput style={{width:'85%',height:40,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:10}} 
 value={this.state.textC}
 onChangeText={(val)=>{
  this.setState({textC:val}) 

 }}
 placeholder='enter your city'>

 </TextInput>   


 <Text style={{color:'black',fontSize:20,fontWeight:'bold',
paddingHorizontal:20,marginTop:20}}> Street</Text>  

 
<TextInput style={{width:'85%',height:40,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:10}} 
 value={this.state.textS}
 onChangeText={(val)=>{
  this.setState({textS:val}) 

 }}
 placeholder='enter your street'>

 </TextInput>  


 <Text style={{color:'black',fontSize:20,fontWeight:'bold',
paddingHorizontal:20,marginTop:20}}> Building</Text>  

 
<TextInput style={{width:'85%',height:40,borderRadius:20,alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:10}} 
 value={this.state.textB}
 onChangeText={(val)=>{
  this.setState({textB:val}) 

 }}
 placeholder='enter your building'>

 </TextInput>  
 <TouchableOpacity 
              style={{width:160,height:45,borderRadius:20,borderWidth:3,borderColor:'#E8859B',  alignItems:'center',alignSelf:'center',
            marginTop:50,backgroundColor:'#FFE3E1'}}
              onPress={()=>{  
                if(this.state.textC==''||this.state.textS==''||this.state.textB=='')
                {
                  alert('enter your data')
                }
                else{
                this.setState({show2:false}) 
                let textC=this.state.textC 
                let textS=this.state.textS
                let textB=this.state.textB
                this.setState({text1:textC})
                this.setState({text2:textS})
                this.setState({text3:textB})
               this.storeedit() 
                }
              }}>

              <Text style={{fontSize:20,color:'#E8859B',marginVertical:5}}>Edit</Text>
             </TouchableOpacity>

</View> 
</ScrollView>
</Modal>

                </ScrollView>
            </>
        )
    }
}