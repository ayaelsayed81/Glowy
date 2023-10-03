import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = {  
            
            phone:'01067652277', 
            text:'',
        }}
    
  nav()
  {
    if(this.state.text==!this.state.phone)
    {
      //alert('you must enter student phone')
      console.log("eror")
    } 
    else if(this.state.text==this.state.phone)
    {
        this.props.navigation.navigate("secondScreen")
    }
  }
      
 render()
{
    return (
        <>  
      <View style={{width:'100%',height:'100%',backgroundColor:'#9b7b9c'}}>
<TextInput 
    placeholder='enter student phone' 
    value={this.state.text}
    onChangeText={(val)=>{
      this.setState({text:val})
    }
    } 
    style={{width:270,height:70,borderColor:'#d8c1af',backgroundColor:'white',borderWidth:3,marginVertical:260,borderRadius:10,alignSelf:'center'}}>
    </TextInput> 

   <TouchableOpacity   
    onPress={() => {
        
      this.nav()

      }}
style={{width:100,height:60,backgroundColor:'#d8c1af',alignSelf:'center',marginVertical:-170,borderRadius:20}}>
  <Text style={{fontSize:20,color:'white',textAlign:'center',marginTop:13}}>enter</Text>
   </TouchableOpacity> 


 














    </View>

  











        </>
    );
}
    }