
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {

    constructor(props){
        super(props)
         this.state = { 
        count:0,
        color1:'#636468',
        color2:'#636468',
        color3:'#636468',
        color4:'#636468',
        icon1:require('./image/1b.png'),
        icon2:require('./image/8b.png'),
        icon3:require('./image/13b.png'),
        icon4:require('./image/14b.png'),
      

    }}



    async getdata() {
        let old= await AsyncStorage.getItem("count")
        this.setState({count:old})
       }
     
     
        async count_plus() {
         let old_count = this.state.count
         old_count++
         this.setState({ count: old_count }) 
         await AsyncStorage.setItem("count",old_count+"")
     
        
       } 
       componentDidMount(){
         this.getdata()
       } 
        
        async getzero(){
       let new_count=0
         this.setState({count:new_count}) 
        await AsyncStorage.setItem("count",new_count+"")
        }


        render() {
            return (
          <>  
          <StatusBar backgroundColor={'#da4503'}></StatusBar>
   <View style={{width:'100%',height:'7%',backgroundColor:'#f57426',flexDirection:'row',justifyContent:'space-around',alignSelf:'center'}}>
      <Text style={{fontSize:25,fontWeight:'bold',color:'white',marginTop:10}}>السبحه</Text>  
     
      <TouchableOpacity style={{width:50,height:40}}
           onPress={()=>{
            this.getzero()
          }}>
      <Text style={{color:'white',fontSize:30}}>x</Text>
      </TouchableOpacity>
    </View>


  <TouchableOpacity style={{width:50,height:110,alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:270}}
  onPress={()=>{
    this.count_plus()
  }}>
    <Text style={{color:'#f18a15',fontSize:100,}}>{this.state.count}</Text>
  </TouchableOpacity>  
  

  <View style={{borderBottomColor:'#ec691c',borderBottomWidth:1,marginTop:296}}></View>


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











           </>
            );
        
        
        }


}