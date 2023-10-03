import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
     
        arr:[{
          item_name:'تهنئه المولود له وجوابه',
          heart:require('./image/heartblack.png')
       
        },
        {  
          item_name:'ما يقول الصائم اذا سابه احد',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء العطس',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يقال للكافر اذا عطس فحمد الله',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'دعاء المتزوج وشراء الدابه',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء الغضب',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء من راى مبتلى',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'ما يقال فى المجلس',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'كفاره المجلس',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء لمن قال غفر الله لك',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء لمن صنع اليك معروفا',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء لمن قال انى احبك فى الله',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء لمن عرض عليك ماله',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء لمن اقرض عند القضاء',
          heart:require('./image/heartblack.png')
        }, 
        {  
          item_name:'الدعاء لمن قال بارك الله فيك',
          heart:require('./image/heartblack.png')
        },
        {  
          item_name:'افشاء السلام',
          heart:require('./image/heartblack.png')
        },
        {  
          item_name:'كيف يرد السلام على الكافر اذا سلم',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء لمن سببته',
          heart:require('./image/heartblack.png')
        },
        {  
          item_name:'ما يقول المسلم اذا مدح المسلم',
          heart:require('./image/heartblack.png')
        },
        {  
          item_name:'ما يقول المسلم اذا ذكى',
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
  source={require('./image/10.png')}
  style={{width:45,height:45,marginTop:8,marginLeft:10}}>

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