import { exportDefaultSpecifier, whileStatement } from '@babel/types';
import * as React from 'react';
import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Modal,Dimensions } from 'react-native';

 export default class app extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
     
          arr2:[{
            item_name:'اذكار الاستيقاظ من النوم',
            heart:require('./image/heartblack.png')
         
          },{
            item_name:'اذكار الصباح',
            heart:require('./image/heartblack.png')
        
          },{
            item_name:'اذكار المساء',
            heart:require('./image/heartblack.png')
          },{
            item_name:'اذكار النوم',
            heart:require('./image/heartblack.png')
          },{
            item_name:'الدعاء اذا تقلب ليلا',
            heart:require('./image/heartblack.png')
          },{
            item_name:'دعاء الفزع فى النوم ومن بلى بالوحشه',
            heart:require('./image/heartblack.png')
          },{
            item_name:'ما يفعل من رأى الرؤيا او الحلم',
            heart:require('./image/heartblack.png')
          }
          ]  ,
          arr3:[{
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
          ]  ,
          arr4:[{
            item_name:'الدعاء عند افطار الصائم',
            heart:require('./image/heartblack.png')
         
          },{
            item_name:'الدعاء قبل الطعام',
            heart:require('./image/heartblack.png')
        
          },{
            item_name:'الدعاء عند الفراغ من الطعام',
            heart:require('./image/heartblack.png')
          },{
            item_name:'دعاء الضيف لصاحب الطعام',
            heart:require('./image/heartblack.png')
          },{
            item_name:'التعريض بالدعاء لطلب الطعام او الشراب',
            heart:require('./image/heartblack.png')
          },{
            item_name:'الدعاء اذا افطر عند اهل البيت',
            heart:require('./image/heartblack.png')
          },{
            item_name:'دعاء الصائم اذا حضر الطعام ولم يفطر',
            heart:require('./image/heartblack.png')
          }
        ],
        arr5:[{
          item_name:'دعاء الهم والحزن',
          heart:require('./image/heartblack.png')
       
        },
        {
          item_name:'دعاء الكرب',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء لقاء العدو وذى السلطان',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء من خاف ظلم السلطان',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء على العدو',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يقول من خاف قوما',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء من اصابه وسوسه فى الايمان',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء قضاء الدين',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء من اصيب بمصيبه',
          heart:require('./image/heartblack.png')
        },
        { item_name:'دعاء الخوف من الشرك',
        heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء كراهيه الطيره',
          heart:require('./image/heartblack.png')
        },
        { item_name:'من يقول من اتاه امر يسره او يكرهه',
        heart:require('./image/heartblack.png')
        },
        { item_name:'ما يقول عند التعجب والامر السار',
        heart:require('./image/heartblack.png')
        },
        { item_name:'ما يفعل من اتاه امر يسره',
        heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يقال عند الفزع',
          heart:require('./image/heartblack.png')
        }
        ]  ,
        arr6:[{
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
       
        ] ,
        arr7:[{
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
       
        ] ,
        
        arr8:[{
          item_name:'دعاء صلاه الاستخاره',
          heart:require('./image/heartblack.png')
       
        },
        { 
          item_name:'دعاء من استصعب اليه الامر',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'ما يقول ويفعل من اذنب ذنبا',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء حينما يقع ما لا يرضاه او غلب على امره',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'ما يعصم الله به من الدجال',
          heart:require('./image/heartblack.png')
        },
        {  
          item_name:'فضل الصلاه عالنبى',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الاستغفار والتوبه',
          heart:require('./image/heartblack.png')
        },
        {  
          item_name:'فضل التسبيح والتحميد والتهليل والتكبير',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'كيف كان النبى يسبح؟',
          heart:require('./image/heartblack.png')
        },
      
      
       
        ] ,
        arr9:[{
          item_name:'كيف يلبى المحرم فى الحج او العمره',
          heart:require('./image/heartblack.png')
       
        },
        { 
          item_name:'التكبير اذا اتى الحجر الاسود',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء بين الركن اليمانى والحجر الاسود',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء الوقوف على الصفا والمروه',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء يوم عرفه',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الذكر عند المشعر الحرام',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'التكبير عند رمى الجمار مع كل حصاه',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'ما يقول عند الذبح او النحر',
          heart:require('./image/heartblack.png')
        },
       
      
      
       
        ] ,
        arr10:[{
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
       
       
        ]  ,
        arr11:[{
          item_name:'دعاء الريح',
          heart:require('./image/heartblack.png')
       
        },
        {  
          item_name:'دعاء الرعد',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'من ادعيه الاستسقاء',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'الدعاء اذا راى المطر',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الذكر بعد نزول المطر',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'من ادعيه الاستصحاء',
          heart:require('./image/heartblack.png')
        },
        {
          item_name:'دعاء رؤيه الهلال',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء عند رؤيه باكوره الثمر',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء عند سماع صياح الديك ونهيق الحمار',
          heart:require('./image/heartblack.png')
        },
        { 
          item_name:'الدعاء عند سماح نباح الكلاب بالليل',
          heart:require('./image/heartblack.png')
        }
      
       
        ],
        
        arr12:[{
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
        change1(index)
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
   
    this.state.arr2.map((item,index)=>
    <>  
    <View>
     <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
    <Image 
    source={require('./image/2.png')}
    style={{width:55,height:55,}}>
  
      </Image>  
     <Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:20}}>{item.item_name}</Text>  
    <TouchableOpacity style={{marginLeft:30}}
    onPress={()=>{
     this.change1(index)
     
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
   {
  this.state.arr3.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
   <Image 
  source={require('./image/3.png')}
  style={{width:35,height:35,marginTop:5,marginLeft:10}}>

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
{
  this.state.arr4.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/4.png')}
  style={{width:50,height:50}}>

    </Image>  
   <Text style={{fontSize:16,color:'black',marginTop:14,marginLeft:15}}>{item.item_name}</Text>  
  <TouchableOpacity style={{marginLeft:20}}
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
{
  this.state.arr5.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/5.png')}
  style={{width:54,height:54,marginTop:5}}>

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
{
  this.state.arr6.map((item,index)=>
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
{
  this.state.arr7.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/7.png')}
  style={{width:40,height:40,marginTop:8,marginLeft:5}}>

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
{
  this.state.arr8.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/8.png')}
  style={{width:40,height:40,marginTop:8}}>

    </Image>  
   <Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:25}}>{item.item_name}</Text>  
  <TouchableOpacity style={{marginLeft:20}}
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
{
  this.state.arr9.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/9.png')}
  style={{width:40,height:40,marginTop:8}}>

    </Image>  
   <Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:25}}>{item.item_name}</Text>  
  <TouchableOpacity style={{marginLeft:20}}
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
{
  this.state.arr10.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/10.png')}
  style={{width:45,height:45,marginTop:8,}}>

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
{
  this.state.arr11.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/11.png')}
  style={{width:45,height:45,marginTop:8,}}>

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






  {
  
  this.state.arr12.map((item,index)=>
  <>  
  <View>
   <TouchableOpacity style={{width:'100%',height:57,backgroundColor:'white',borderColor:'#c7c7c7',borderBottomWidth:.9,flexDirection:'row'}}> 
  <Image 
  source={require('./image/12.png')}
  style={{width:55,height:55}}>

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