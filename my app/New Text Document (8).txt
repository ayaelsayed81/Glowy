import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
     
        arr:[{
          item_name:'دعاء الركوب',
          heart:require('./image/heartblack.png')
       
        },
        {
          item_name:'دعاء السفر',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء دخول القريه او البلده',
          heart:require('./image/heartblack.png')
        },
        {
           item_name:'دعاء دخول السوق',
        heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء اذا تعس المركوب',
        heart:require('./image/heartblack.png')
        },
        { 
          item_name:'دعاء المسافر للمقيم',
        heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء المقيم للمسافر',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'التكبير والتسبيح فى سير السفر',
        heart:require('./image/heartblack.png')
        },
        { 
          item_name:'دعاء المسافر اذا اسحر',
        heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء اذا نزل منزلا فى سفر او غيره',
        heart:require('./image/heartblack.png')
        },
        {
          item_name:'ذكر الرجوع من السفر',
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
  source={require('./image/6.png')}
  style={{width:35,height:35,marginTop:8,marginLeft:10}}>

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