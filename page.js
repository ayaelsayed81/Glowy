import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { 

            arr:[{
                item_icon:'', 
                item_name:'جميع الاذكار',
                item_count:'133ذكر'
            },{
                item_icon:'', 
                item_name:'اليوم والليله',
                item_count:'7اذكار'
          },{
                item_icon:'', 
                item_name:'البيت والاهل',
                item_count:'14ذكر'
          },{ 
                item_icon:'', 
                item_name:'الطعام والشراب',
               item_count:'7اذكار'
          },{ 
               item_icon:'', 
               item_name:'الفرح والخوف',
               item_count:'15ذكر'
          },{
            item_icon:'', 
            item_name:'السفر والتنقل',
            item_count:'11ذكر'
          },{
            item_icon:'', 
            item_name:'الوضوء والصلاه',
            item_count:'19ذكر'
          },{
            item_icon:'', 
            item_name:'التسابيح',
            item_count:'9اذكار'
          },{
            item_icon:'', 
            item_name:'الحج والعمره',
            item_count:'8اذكار'
          },{
            item_icon:'', 
            item_name:'التعامل والاداب',
            item_count:'8اذكار'
          },{
            item_icon:'', 
            item_name:'الطبيعه',
            item_count:'10ذكر'
          },{
            item_icon:'', 
            item_name:'المرض والجنائز',
            item_count:'13ذكر'
          }] ,color1:'#636468',
          color2:'#636468',
          color3:'#636468',
          color4:'#636468',
           
              
        }} 




        
  render() {
    return (
  <>  
  <StatusBar backgroundColor={'#da3e00'}></StatusBar>
 <View style={{width:'100%',height:'12%',backgroundColor:'#f57426'}}></View> 
 <View style={{backgroundColor:'#fff3ef',width:'100%',height:'88%'}}>
<TextInput 
placeholder='البحث فى اذكار حصن المسلم'
 style={{width:'90%',height:60,alignSelf:'center',borderColor:'#dadce0',borderWidth:1,marginTop:-30,backgroundColor:'white',borderRadius:5
,alignItems:'center'}}></TextInput>   
 <View style={{flexDirection:'row',width:400,alignItems:'center',justifyContent:'space-around',flexWrap:'wrap'}}>
  {this.state.arr.map((item,index)=> 
  <> 
  
     <TouchableOpacity style={{width:120,height:135,backgroundColor:'white',marginTop:10,borderRadius:5}}> 
     

     <View style={{borderBottomColor:'#dadce0',borderBottomWidth:1,marginTop:80}}></View> 
    <Text style={{fontSize:17,textAlign:'center',marginTop:5,color:'#636468'}}>{item.item_name}</Text>
    <Text style={{fontSize:17,textAlign:'center'}}>{item.item_count}</Text>

     </TouchableOpacity>
  
  </>
    )
  }

</View>

<View style={{borderBottomColor:'#f57426',borderBottomWidth:1,marginTop:30}}></View>


<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity 
  onPress={()=>{
   this.setState({color1:'#f57426',color2:'#636468',color3:'#636468',color4:'#636468',})
  }
  }> 
  <View> 

    <Text style={{marginTop:25,fontSize:17,color:this.state.color1}}>الاذكار</Text>
    </View>
  </TouchableOpacity> 

  <TouchableOpacity 
  onPress={()=>{
    this.setState({color2:'#f57426',color1:'#636468',color3:'#636468',color4:'#636468',}) 
    this.props.Navigation.Navigate(testpage)
   }
   }> 
    <View>

    <Text style={{marginTop:25,fontSize:17,color:this.state.color2}}>السبحه</Text>
    </View>
  </TouchableOpacity> 

  <TouchableOpacity
  onPress={()=>{
    this.setState({color3:'#f57426',color2:'#636468',color1:'#636468',color4:'#636468'})
   }
   }>
    <Text style={{marginTop:25,fontSize:17,color:this.state.color3}}>الصلاه</Text>
  </TouchableOpacity>

  <TouchableOpacity
  onPress={()=>{
    this.setState({color4:'#f57426',color2:'#636468',color3:'#636468',color1:'#636468'})
   }
   }>
    <Text style={{marginTop:25,fontSize:17,color:this.state.color4}}>الاعدادات</Text>
  </TouchableOpacity>
</View>






 </View>
   
  </>
    );
  }
    }    