import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
     
        arr:[{
          item_name:'الذكر قبل الوضوء',
          heart:require('./image/heartblack.png')
       
        },
        {  item_name:'الذكر بعد الفراغ من الوضوء',
        heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء الذهاب اللى المسجد',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء دخول المسجد',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'دعاء الخروج من المسجد',
          heart:require('./image/heartblack.png')
        },
        {  item_name:'اذكار الاذان',
        heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء الاستفتاح',
          heart:require('./image/heartblack.png')
        },
        {   item_name:'دعاء الركوع',
        heart:require('./image/heartblack.png')
        },
        { 
            item_name:'دعاء الرفع من الركوع',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'دعاء السجود',
          heart:require('./image/heartblack.png')
        },
        {  item_name:'دعاء الجلسه بين السجدتين',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'دعاء سجود التلاوه',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'التشهد',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'الصلاه على النبى بعد التشهد',
        heart:require('./image/heartblack.png')
        }, 
        {  item_name:'الدعاء بعد التشهد الاخير قبل السلام',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'الاذكار بعد السلام من الصلاه',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'دعاء قنوت الوتر',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'الذكر عقب السلام من الوتر',
        heart:require('./image/heartblack.png')
        },
        {  item_name:'دعاء الوسوسه فى الصلاه والقراءه',
        heart:require('./image/heartblack.png')
        },
       
        ]  
      
        }}  
        change(index)
        {
          let arr=this.state.arr
          let newheart=arr[index].heart
          if(arr[index].heart==require('./image/heartblack.png'))
          {
          newheart=require('./image/heartorange.png')
          arr[index].heart=newheart
          this.setState({})
          }
          else{
            newheart=require('./image/heartblack.png')
            arr[index].heart=newheart
            this.setState({})
          }
        }

        render() {
          return (
        <> 
   <StatusBar backgroundColor={'#da4503'}></StatusBar> 
   
   <View style={{width:'100%',height:'12%',backgroundColor:'#ec691c'}}></View>
  
   <View style={{width:'100%',height:'88%',backgroundColor:'#f8eee8'}}> 
     <Image
     source={require('./image/icon.png')}
     style={{width:90,height:90,alignSelf:'center',marginTop:-85}}>
       </Image>
<TextInput 
placeholder='البحث فى اذكار حصن المسلم'
 style={{width:'95%',marginBottom:10,alignSelf:'center',height:50,marginTop:-30,borderColor:'white',borderWidth:1,borderRadius:3,backgroundColor:'white'}}>
 </TextInput>  


 <ScrollView>
<View>
 {
  this.state.arr.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/7.png')}
  style={{width:40,height:40,marginTop:8,marginLeft:10}}>

    </Image>  
   <Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:25}}>{item.item_name}</Text>  
  <TouchableOpacity style={{marginLeft:30}}
  onPress={()=>{
   this.change(index)
   
  }}>
   <Image source={item.heart}
   style={{width:40,height:40,marginTop:5,}}>

   </Image>
   </TouchableOpacity>
   </TouchableOpacity>
</View>
  </>
  )
}


</View>
</ScrollView>



</View>
</>
          );
        }














      }