import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = {  
           value:1
        }


    }
          plus()
          {
           let value=this.state.value 
           value+=1 
            this.setState({value})
          } 
          minus()
          {
           let value=this.state.value 
           if(value!=1)
            value--
            this.setState({value})
          }
          clear()
         {
            let value=this.state.value
            value=1
            this.setState({value})
         }
            render()
             {
                  return (
                   <>   
                
        <View style={{width:'100%',height:'100%',backgroundColor:'#f5e7e7'}}>
        <Text style={{color:'#653D46',fontSize:25,fontWeight:'bold',textAlign:'center',marginTop:20}}>product</Text> 
          <Image style={{width:'90%',height:300,alignSelf:'center',borderColor:'#653D46',borderWidth:3,borderRadius:20,marginTop:25}}
          source={{uri:'https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=600'}}>

         </Image>
       

            <Text style={{color:'#653D46',fontSize:20,fontWeight:'bold',paddingLeft:25,marginTop:20}}>Pastel Roses Boquet</Text>
             
            <Text style={{color:'#653D46',fontSize:18,paddingLeft:25,marginTop:10}}>A harmonious asymmetric composition of 
            pastel shades of roses ,dahlias and peonies.perfect gift for any occation</Text>
            <Text style={{color:'#653D46',fontSize:18,paddingLeft:25,marginTop:10}}><Text style={{color:'#653D46',fontWeight:'bold',fontSize:18,paddingLeft:25,marginTop:10}}>price </Text>:  1000</Text>
            <Text style={{color:'#653D46',fontSize:18,paddingLeft:25,marginTop:10}}><Text style={{color:'#653D46',fontWeight:'bold',fontSize:18,paddingLeft:25,marginTop:10}}>size </Text> :   40cm *45cm</Text>
            <Text style={{color:'#653D46',fontSize:18,paddingLeft:25,marginTop:10}}><Text style={{color:'#653D46',fontWeight:'bold',fontSize:18,paddingLeft:25,marginTop:10}}>Nof of flowers</Text> :  25pcs</Text>
            <Text style={{color:'#653D46',fontSize:14,paddingLeft:25,}}>(customize)</Text>
            <Text style={{color:'#653D46',fontSize:18,paddingLeft:25,marginTop:10}}><Text style={{color:'#653D46',fontWeight:'bold',fontSize:18,paddingLeft:25,marginTop:10}}>Wrap for Boquet</Text> :  Toupe wrap </Text>
            <Text style={{color:'#653D46',fontSize:14,paddingLeft:25,}}>(customize)</Text> 
            <View style={{flexDirection:'row',alignItems:'flex-end',marginLeft:215}}>
            <View style={{backgroundColor:'#653D46',width:70,height:30,marginTop:10,borderRadius:5,flexDirection:'row'}}>
                <TouchableOpacity  
                onPress={()=>
                {
                    this.plus()
                }}
                style={{marginLeft:10,width:10,height:20}}>
                    <Text style={{color:'white',fontSize:20}}>+</Text>
                </TouchableOpacity> 
              
                    <Text style={{color:'white',fontSize:20,marginLeft:10,width:10,height:30}}>{this.state.value}</Text>

                <TouchableOpacity
                  onPress={()=>
                    {
                        this.minus()
                    }}
                 style={{marginLeft:10,width:10,height:20}}>
                    <Text style={{color:'white',fontSize:20}}>-</Text>
                </TouchableOpacity>
              
            </View>
            <Text style={{color:'#653D46',fontSize:18,paddingLeft:25,fontWeight:'bold',marginTop:10}}>Quantity : </Text>
            </View>
          
              <View style={{backgroundColor:'#653D46',width:'100%',height:70,marginTop:15,borderRadius:20,flexDirection:'row',justifyContent:"space-around"}}> 
              <TouchableOpacity style={{width:90,height:35,backgroundColor:'#f5e7e7',marginTop:10,borderRadius:10}}>
                <Text style={{color:'#653D46',fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:1}}>Next</Text>
              </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{
                    this.clear()
                }}>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',paddingLeft:25,marginTop:10}}>Clear all</Text>
                </TouchableOpacity> 
                

             
              </View>


        </View>
        </>



    );
}









}

        

