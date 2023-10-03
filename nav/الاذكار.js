 import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
    
    arr:[{ 
      item_icon:require('./image/1.png'),
      item_name:'جميع الاذكار',
      item_no:'133 ذكر',

    },{
      item_icon:require('./image/2.png'),
      item_name:'اليوم والليله',
      item_no:'7 اذكار',
    },{
      item_icon:require('./image/3.png'),
      item_name:'البيت والاهل',
      item_no:'14 ذكر',
    },{
      item_icon:require('./image/4.png'),
      item_name:'الطعام والشراب',
      item_no:'7اذكار',
    },{
      item_icon:require('./image/5.png'),
      item_name: 'الفرح والخوف',
      item_no:'15 ذكر',
    },{
      item_icon:require('./image/6.png'),
      item_name:'السفر والتنقل',
      item_no:'11 ذكر',
    },{
      item_icon:require('./image/7.png'),
      item_name:'الوضوء والصلاه',
      item_no:'19 ذكر',
    },{
      item_icon:require('./image/8.png'),
      item_name:'التسابيح',
      item_no:'9 اذكار',
    },{
      item_icon:require('./image/9.png'),
      item_name:'الحج والعمره',
      item_no:'8 اذكار',
    },{
      item_icon:require('./image/10.png'),
      item_name:'التعامل والاداب',
      item_no:'20 ذكر',
    },{
      item_icon:require('./image/11.png'),
      item_name:'الطبيعه',
      item_no:'10 اذكار',
    },{
      item_icon:require('./image/12.png'),
      item_name:'المرض والجنائز',
      item_no:'13 ذكر',
    }],
    color1:'#636468',
    color2:'#636468',
    color3:'#636468',
    color4:'#636468',
    icon1:require('./image/1b.png'),
    icon2:require('./image/8b.png'),
    icon3:require('./image/13b.png'),
    icon4:require('./image/14b.png'),
  
  

        }}
    
        render() {
            return (
          <> 
     <StatusBar backgroundColor={'#da4503'}></StatusBar>
     <View style={{width:'100%',height:'12%',backgroundColor:'#ec691c'}}>  </View>
     <View style={{width:'100%',height:'88%',backgroundColor:'#f8eee8'}}> 
     <Image
     source={require('./image/icon.png')}
     style={{width:90,height:90,alignSelf:'center',marginTop:-85}}>
       </Image>
<TextInput 
placeholder='البحث فى اذكار حصن المسلم'
 style={{width:'95%',alignSelf:'center',height:50,marginTop:-30,borderColor:'white',borderWidth:1,borderRadius:3,backgroundColor:'white'}}>
 </TextInput>
<View style={{flexDirection: 'row',width:385,justifyContent:'space-around',marginTop:1,flexWrap:'wrap',alignItems:'center'}}> 
{
  this.state.arr.map((item,index)=>
  <> 
<TouchableOpacity style={{width:120,height:136,backgroundColor:'white',marginBottom:10,borderRadius:5,borderColor:'#c7c7c7',borderWidth:.3}}>
<Image
     source={item.item_icon}
     style={{width:90,height:50,alignSelf:'center',marginTop:20}}>
       </Image>
<View style={{borderBottomColor:'#c7c7c7',borderBottomWidth:1,marginTop:18}}></View> 
<Text style={{alignSelf:'center',textAlign:'center',marginTop:3,fontSize:16,color:'black'}}>{item.item_name}</Text>
<Text style={{alignSelf:'center',textAlign:'center',fontSize:15}}>{item.item_no}</Text>
</TouchableOpacity>
</>
  )}
   </View> 


   <View style={{borderBottomColor:'#ec691c',borderBottomWidth:1,marginTop:25}}></View>


   <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff3ef',height:60}}>
  <TouchableOpacity 
  onPress={()=>{
   this.setState({color1:'#f57426',color2:'#636468',color3:'#636468',color4:'#636468',vis2_a:true,icon1:require('./image/1.png'),icon2:require('./image/8b.png'),icon3:require('./image/13b.png'),icon4:require('./image/14b.png')}) 
  }
  }> 
  <View>  
<Image source={this.state.icon1}
style={{width:32,height:32}}>
  </Image>
    <Text style={{fontSize:17,color:this.state.color1}}>الاذكار</Text>
    </View>
  </TouchableOpacity> 

  <TouchableOpacity 
  onPress={()=>{
    this.setState({color2:'#f57426',color1:'#636468',color3:'#636468',color4:'#636468',vis1:true,icon2:require('./image/8.png'),icon1:require('./image/1b.png'),icon3:require('./image/13b.png'),icon4:require('./image/14b.png')})
   }
   }> 
    <View>
    <Image source={this.state.icon2}
style={{width:34,height:34,marginLeft:8}}>
  </Image>
    <Text style={{fontSize:17,color:this.state.color2}}>السبحه</Text>
    </View>
  </TouchableOpacity> 

  <TouchableOpacity
  onPress={()=>{
    this.setState({color3:'#f57426',color2:'#636468',color1:'#636468',color4:'#636468',icon3:require('./image/13.png'),icon1:require('./image/1b.png'),icon2:require('./image/8b.png'),icon4:require('./image/14b.png')})
   }
   }> 
   <View>
    <Image source={this.state.icon3}
style={{width:35,height:35,marginLeft:3}}>
  </Image> 
  <Text style={{fontSize:17,color:this.state.color3}}>الصلاه</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity
  onPress={()=>{
    this.setState({color4:'#f57426',color2:'#636468',color3:'#636468',color1:'#636468',icon4:require('./image/14.png'),icon1:require('./image/1b.png'),icon2:require('./image/8b.png'),icon3:require('./image/13b.png')})
   }
   }> 
   <View> 
   <Image source={this.state.icon4}
style={{width:35,height:35,marginLeft:9}}>
  </Image> 
    <Text style={{fontSize:17,color:this.state.color4}}>الاعدادات</Text>
  </View>
  </TouchableOpacity>
</View>






</View>
</>
            );
        }
 }