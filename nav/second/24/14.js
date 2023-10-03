import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 

       count:0,
      color:'#c7c7c7'


        }}


        render() {
          return (
        <> 
        <StatusBar backgroundColor={'#da4503'}></StatusBar>
         <View style={{width:'100%',height:'12%',backgroundColor:'#ec691c'}}>
          <Text style={{color:'white',fontSize:20,textAlign:'center',fontWeight:'bold',marginTop:20}}>اذكار الصباح</Text>
         </View>
         <View style={{width:'100%',height:'88%',backgroundColor:'#f8eee8'}}>


         <View
 style={{width:'95%',flexDirection:'row',alignSelf:'center',height:50,marginTop:-30,borderColor:'white',borderWidth:1,borderRadius:3,backgroundColor:'white'}}>
  <TouchableOpacity>
    <Text style={{fontSize:30,marginLeft:20}}>x</Text>
  </TouchableOpacity>

 </View> 
        <View style={{width:'97%',height:'94%',backgroundColor:'white',marginTop:7,alignSelf:'center'}}>
            <Text style={{fontSize:20,color:'black',textAlign:'center',marginTop:145}}>
        
            «رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عليهِ وسَلم نَبِيًّا»
            </Text>
            <View style={{borderBottomColor:'#c7c7c7',borderBottomWidth:1,marginTop:18}}></View> 
            <Text style={{fontSize:17,textAlign:'center',marginTop:20}}>
            من قالها ثلاثًا حين يصبح وثلاثًا حين يمسي كان حقًا على اللَّه أن يرضيه يوم القيامة. أحمد، ٤/ ٣٣٧، برقم ١٨٩٦٧، والنسائي في عمل اليوم والليلة، برقم ٤، وابن السني، برقم ٦٨، وأبو داود، ٤/ ٣١٨، برقم ١٥٣١، والترمذي، ٥/ ٤٦٥، برقم، ٣٣٨٩، وحسّنه ابن باز في تحفة الأخيار ص٣٩.
            </Text>
            <View style={{borderBottomColor:'#c7c7c7',borderBottomWidth:1,marginTop:235}}></View> 



           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
           <TouchableOpacity
           onPress={()=>
           { 
                   
            if(this.state.count<=2)
            { 
            let count=this.state.count
            count++ 
            this.setState({count,})
           
            }
          
            else
            null 
            if(this.state.count==2)
            {
              this.setState({color:'#ec691c'})
            }
           
           }}>
            <Text style={{color:'#ec691c',fontSize:25,fontWeight:'bold',marginTop:15}}>3مرات</Text>
            </TouchableOpacity>    

            <TouchableOpacity style={{width:90,height:90,borderRadius:45,marginTop:-45,borderColor:this.state.color,borderWidth:5,marginRight:50}}
               onPress={()=>
                {
                      
            if(this.state.count<=2)
            { 
            let count=this.state.count
            count++ 
            this.setState({count,})
           
            }
          
            else
            null 
            if(this.state.count==2)
            {
              this.setState({color:'#ec691c'})
            }
           
                }}>
            
             <Text style={{color:'#ec691c',alignSelf:'center',fontSize:20,marginTop:25}}>{this.state.count}</Text>
            </TouchableOpacity>
              
              <View style={{flexDirection:'row',marginTop:20}}>
              <Text style={{color:'#ec691c',fontSize:25}}>
              14
              </Text> 
              <Text style={{color:'#ec691c',fontSize:25}}>/</Text>
              <Text style={{color:'#ec691c',fontSize:25}}>24</Text>
              </View>

            </View>


         </View>
         </View>
        </>
          );
        }
      }
