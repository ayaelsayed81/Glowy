import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = {  
           arr:[{
            img:'https://images.pexels.com/photos/2831040/pexels-photo-2831040.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'pink Roses Boquet',
            price:'1200',
            rate:4.5,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Pastel Red Roses Boquet',
            price:'1500',
            rate:5,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/931155/pexels-photo-931155.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'tulip Roses Boquet',
            price:'850',
            rate:4.9,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Pastel Roses Boquet',
            price:'1000',
            rate:4.3,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/5706666/pexels-photo-5706666.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Red Roses Boquet',
            price:'1100',
            rate:4.2,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/931171/pexels-photo-931171.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'fav Roses Boquet',
            price:'1250',
            rate:4,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Purple Roses Boquet',
            price:'1200',
            rate:4.5,
            heart:require('./image/heartblack.png')
           },{
            img:'https://images.pexels.com/photos/1233441/pexels-photo-1233441.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Rosy Roses Boquet',
            price:'1350',
            rate:4.7,
            heart:require('./image/heartblack.png')
           }],
           text:"",
            



        }


    }

    
            render()
             {
                  return (
                   <>   
                
          <View style={{width:'100%',height:'100%',backgroundColor:'#f5e7e7'}}>
              <ScrollView>
              <View>
             <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
            
             <Image
               source={require('./image/heartblack.png')}
               style={{width:50,height:50,marginTop:10,}}>
               </Image>


                 <View style={{flexDirection:'row'}}>
                 <View>
                  <Text style={{color:'#8b5276',marginTop:10,fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Hey Nush!</Text>
                  <Text style={{color:'#8b5276',fontSize:15,paddingLeft:10}}>welcome to Flora</Text>
              </View>
            <View style={{width:60,height:60,borderRadius:30,borderWidth:3,borderColor:'#8b5276'}}>
                <Image source={{uri:'https://images.pexels.com/photos/7348625/pexels-photo-7348625.jpeg?auto=compress&cs=tinysrgb&w=600'}}
                style={{width:54,height:55,borderRadius:30}}>

                </Image>
            </View>
            </View>
             </View>

           <TextInput  
           placeholder='search'
           value={this.state.text}
           onChangeText={(val)=>{
            this.setState({text:val})
           }}
            style={{width:'90%',height:50,borderColor:'#8b5276',borderWidth:2,alignSelf:'center',backgroundColor:'white',borderRadius:5 ,marginTop:30}}>
            
          </TextInput>
         
           <View style={{width:'90%',height:140,marginTop:30,borderColor:'#8b5276',borderWidth:2,alignItems:'flex-end',alignSelf:'center',backgroundColor:'#d1afc3',borderRadius:10}}>
             <Text style={{color:'#8b5276',fontSize:18,marginTop:20,paddingLeft:20,fontWeight:'bold'}}>2023 New Year Sale !</Text>  
             <View style={{width:250}}>
             <Text style={{color:'#8b5276',fontSize:14,marginTop:10,paddingLeft:20}}>let's celebrate this year with some colour
             and fragrance.Get up to 50% offer on all kinds of flowers</Text>  
             </View>
            </View>   
       
            <Text style={{color:'#8b5276',fontSize:19,marginTop:30,paddingLeft:20,fontWeight:'bold'}}>Best sellers</Text>


            <View style={{flexDirection:'row',flexWrap:'wrap',alignSelf:'center',alignItems:'center',justifyContent:'space-around'}}>
             {this.state.arr.map((item,index)=>
                <>    
               
               <TouchableOpacity  
             
                style={{backgroundColor:'white',width:170,height:200,marginVertical:10,borderRadius:10}}> 
                 <Image source={{uri:item.img}}
                 style={{width:150,height:130,alignSelf:'center',marginTop:10,borderRadius:10}}>
                 </Image> 
                 <Text style={{textAlign:'center',alignSelf:'center',color:'#8b5276',marginTop:5,fontWeight:'bold'}}>{item.name}</Text> 
                 <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                 <Text style={{textAlign:'center',alignSelf:'center',color:'#8b5276',marginTop:5,fontWeight:'bold'}}>{item.price}</Text> 
                 <Text style={{textAlign:'center',alignSelf:'center',color:'#8b5276',marginTop:5,fontWeight:'bold'}}>{item.rate}</Text> 
                 </View>
               </TouchableOpacity>
                 

                </>
             )}
           </View>



              </View>
              </ScrollView>
          </View>
        

















        </>



    );
}









}

        

