import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {  
       arr:[{
        img:'https://images.pexels.com/photos/2831040/pexels-photo-2831040.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'pink Roses Boquet',
        price:'1200',
        rate:4.5,
     
       },{
        img:'https://images.pexels.com/photos/931168/pexels-photo-931168.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Pastel Red Roses Boquet',
        price:'1500',
        rate:5,
       
       },{
        img:'https://images.pexels.com/photos/931155/pexels-photo-931155.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'tulip Roses Boquet',
        price:'850',
        rate:4.9,
      
       },{
        img:'https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Pastel Roses Boquet',
        price:'1000',
        rate:4.3,
      
       },{
        img:'https://images.pexels.com/photos/5706666/pexels-photo-5706666.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Red Roses Boquet',
        price:'1100',
        rate:4.2,
     
       },{
        img:'https://images.pexels.com/photos/931171/pexels-photo-931171.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'fav Roses Boquet',
        price:'1250',
        rate:4,
      
       },{
        img:'https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Purple Roses Boquet',
        price:'1200',
        rate:4.5,
        
      },{
       img:'https://images.pexels.com/photos/1233441/pexels-photo-1233441.jpeg?auto=compress&cs=tinysrgb&w=600',
       name:'Rosy Roses Boquet',
       price:'1350',
       rate:4.7,
    
      }],
    }}

    render() {
        return (
          <> 


            <View style={{width:'100%',height:'100%',backgroundColor:'#DDC5CA'}}> 
              <Text style={{fontSize:35,color:'#653D46',textAlign:'center',marginTop:30}}>
               Home
              </Text> 

              <FlatList
              data={this.state.arr}
              contentContainerStyle={{
                marginTop: 30,
                paddingHorizontal: 10,
                paddingBottom: 40,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
                alignSelf:'center',
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `pro-${index}`}
              renderItem={({ item, index }) => {
                  return ( 
                   <TouchableOpacity style={{backgroundColor:'white',width:170,height:200,marginVertical:10,borderRadius:10}} 
                 > 
                   
                      <Image source={{uri:item.img}}
                      style={{width:150,height:130,alignSelf:'center',marginTop:10,borderRadius:10}}>
                      </Image>
                     
                     <Text style={{textAlign:'center',alignSelf:'center',color:'#653D46',marginTop:5,fontWeight:'bold'}}>{item.name}</Text> 
                     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                     <Text style={{textAlign:'center',alignSelf:'center',color:'#653D46',marginTop:5,fontWeight:'bold'}}>{item.price}</Text> 
                     <Text style={{textAlign:'center',alignSelf:'center',color:'#653D46',marginTop:5,fontWeight:'bold'}}>{item.rate}</Text> 
                    <TouchableOpacity onPress={()=>
                    {
                  
                    }}>
                    <Ionicons name="heart" size={25} color="red" />
                    </TouchableOpacity>
                     </View>
                 </TouchableOpacity>
                     
                  );
                 
                }}>
            </FlatList> 
         








            </View>









          </>


        )}













}
