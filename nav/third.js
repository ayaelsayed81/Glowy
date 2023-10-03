import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
     
        arr:[{
          item_name:'الذكر عند دخول المنزل',
          heart:require('./image/heartblack.png')
       
        },
        {
          item_name:'الذكر عند الخروج من المنزل',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء لبس الثوب الجديد',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء لمن لبس ثوبا جديدا',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يقول اذا وضع ثوبه',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء دخول الخلاء',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء الخروج من الخلاء',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء طرد الشيطان ووساوسه',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء للمتزوج',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء قبل اتيان الزوجه',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء من خشى ان يصيب شيئا بعينه',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يقول لرد كيد مرده الشياطين',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'من انواع الخير والاداب الجامعه',
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
  source={require('./image/3.png')}
  style={{width:35,height:35,marginTop:5,marginLeft:10}}>

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