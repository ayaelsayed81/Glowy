import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
     
        arr:[{
          item_name:'ما يعوذ به الاولاد',
          heart:require('./image/heartblack.png')
       
        },
        {  
          item_name:'الدعاء للمريض فى عيادته',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'فضل عياده المريض',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء المريض الذى ياس من حياته',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'تلقين المحتضر',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء عند اغماض الميت',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء للميت فى الصلاه عليه',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء للفرط فى الصلاه عليه',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'دعاء التعزيه',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء عند ادخال الميت القبر',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء بعد دفن الميت',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء زياره القبور',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يفعل او يقول من احس وجعا بجسده',
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
  source={require('./image/12.png')}
  style={{width:55,height:55,marginLeft:10}}>

    </Image>  
   <Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:20}}>{item.item_name}</Text>  
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