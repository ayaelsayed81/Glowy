import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = {  
            
           
        }}
    

 render()
{
    return (
        <>  
      <View style={{width:'100%',height:'100%',backgroundColor:'#d8c1af'}}>

      <Text style={{fontSize:45,color:'#895832',marginTop:40,paddingLeft:20}}>sally Ahmed</Text>      
    <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:20}}>student id:           3</Text>
    <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>student grade:     2</Text>
    <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>student faculty:   science</Text>
    <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>student city:         Menoufia</Text>
    <Text style={{color:'white',paddingLeft:50,fontSize:18,marginTop:10}}>student email:     sally4444@gmail.com</Text>
     <Text style={{fontSize:20,color:'#895832',marginTop:20,paddingLeft:50}}>Total paid:   200</Text>

      <Text style={{color:'white',fontSize:25,paddingLeft:10,marginTop:20}}>rounds</Text>

      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>round id:     2</Text>
      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>price After discount:     100</Text>
      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>price before discount:     200</Text>
      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>discount value:     100</Text>
 
     

      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:50}}>round id:     3</Text>
      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>price After discount:     100</Text>
      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>price before discount:     250</Text>
      <Text style={{color:'white',paddingLeft:50,fontSize:20,marginTop:10}}>discount value:     150</Text>
 


    </View>

  











        </>
    );
}
    }