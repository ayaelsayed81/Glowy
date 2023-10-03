import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,ScrollView,Modal} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
           
            cvv:'',
            date:'',
            fname:'',
            lname:''
        }
    }
 componentWillUnmount()
 {
this.setState({color1:'white'}) 
 }


    render() {
        return (
            <>     
          <ScrollView>
<View style={{width:'100%',height:'80%',alignItems:'center',borderColor:'#FFE3E1',borderWidth:3,alignSelf:'center',marginVertical:200,borderRadius:20}}>
      <Text style={{color:'#E8859B',width:220,fontSize:20,fontWeight:'bold',textAlign:'center',
    padding:20}}>Please , Enter your card information</Text>  
        
        <View style={{width:'85%',height:330,borderColor:'#E8859B',borderWidth:3,alignSelf:'center',
               borderRadius:20}}>   
                    <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>Card id</Text>
                <TextInput style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
   
      
     value={this.state.id}
     onChangeText={(val)=>{
      this.setState({id:val})  
     }}
      ></TextInput>  

            <View style={{flexDirection:'row',justifyContent:'space-around'}}> 
            <View>
            <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>Expired Date</Text>
                <TextInput style={{width:'100%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
  
      
     value={this.state.date}
     onChangeText={(val)=>{
      this.setState({date:val})  
     }}
      ></TextInput>   
      </View>
      <View>
        <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>your CVV</Text>
                <TextInput style={{width:'100%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
 
      
     value={this.state.cvv}
     onChangeText={(val)=>{
      this.setState({cvv:val})  
     }}
      ></TextInput>   
      </View>
            </View> 

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
        <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>Last Name</Text>
                <TextInput style={{width:'100%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
 
      
     value={this.state.lname}
     onChangeText={(val)=>{
      this.setState({lname:val})  
     }}
      ></TextInput>   
      </View> 
      <View>
        <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:20}}>First Name</Text>
                <TextInput style={{width:'100%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between'}}
 
      
     value={this.state.fname}
     onChangeText={(val)=>{
      this.setState({fname:val})  
     }}
      ></TextInput>   
      </View>
            </View> 

               </View>  


   
<TouchableOpacity style={{width:'85%',height:40,borderRadius:20,backgroundColor:'#FFE3E1',alignSelf:'center',borderColor:'#E8859B',
 borderWidth:2,marginTop:30}} 
 onPress={()=>{  
    if(
        this.state.id==''||this.state.date==''||this.state.cvv==''||this.state.fname==''||this.state.lname=='') 
        alert("complete your data") 
        else 
        this.props.navigation.navigate("orderNav")
 
 }}>
<Text style={{color:'#E8859B',fontSize:20,textAlign:'center',marginTop:5}}>
Done
</Text>
 </TouchableOpacity> 

     <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:20}}> 
        <TouchableOpacity onPress={()=>{
            this.setState({color1:'white'}) 
            this.props.navigation.navigate("paymentNav")
        }}> 
            <Text style={{fontSize:20,color:'black'}}>cancel</Text>
            </TouchableOpacity>  
           <View></View>
     </View>
               
    </View> 
    </ScrollView>
   
            </>
        )
    }
}