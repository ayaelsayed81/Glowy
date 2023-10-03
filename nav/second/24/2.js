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
            <Text style={{fontSize:20,color:'black',textAlign:'center',marginTop:80}}>
       الله اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ 
            </Text>
            <View style={{borderBottomColor:'#c7c7c7',borderBottomWidth:1,marginTop:18}}></View> 
            <Text style={{fontSize:17,textAlign:'center',marginTop:20}}>
            سورة البقرة، الآية: ٢٥٥. من قالها حين يصبح أُجير من الجن حتى يمسي، ومن قالها حين يمسي أُجير منهم حتى يصبح. أخرجه الحاكم، ١/ ٥٦٢، وصححه الألباني في صحيح الترغيب والترهيب، ١/ ٢٧٣، وعزاه إلى النسائي، والطبراني، وقال: «إسناد الطبراني جيد».
            </Text>
            <View style={{borderBottomColor:'#c7c7c7',borderBottomWidth:1,marginTop:220}}></View> 



           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
           <TouchableOpacity
           onPress={()=>
           { 
            if(this.state.count==0)
            {
            let count=this.state.count
            count++ 
           
           this.setState({color:'#ec691c',count,})
            }
            else
            null
           }}>
            <Text style={{color:'#ec691c',fontSize:25,fontWeight:'bold',marginTop:15}}>مره واحده</Text>
            </TouchableOpacity>    

            <TouchableOpacity style={{width:90,height:90,borderRadius:45,marginTop:-45,borderColor:this.state.color,borderWidth:5,marginRight:50}}
               onPress={()=>
                {
                  if(this.state.count==0)
                  {
                  let count=this.state.count
                  count++ 
               
                 this.setState({color:'#ec691c',count,})
                  }
                  else
                  null
                }}>
            
             <Text style={{color:'#ec691c',alignSelf:'center',fontSize:20,marginTop:25}}>{this.state.count}</Text>
            </TouchableOpacity>
              
              <View style={{flexDirection:'row',marginTop:20}}>
              <Text style={{color:'#ec691c',fontSize:25}}>
              2
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
