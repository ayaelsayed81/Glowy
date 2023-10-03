import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler'; 
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {  

           
              
 arr4:[
    { 
        img:'https://cdn.shopify.com/s/files/1/0097/9972/products/1500px_hibutter_coconut_02_3_600x600_crop_center.jpg?v=1649703720',
        name:'Hi coconut vanilla body butter',
        price:'300 EGP',
  
    },
    { 
        img:'https://m.media-amazon.com/images/I/613jZr17keL._AC_UF1000,1000_QL80_.jpg',
        name:'eseentials strawberry body butter',
        price:'450 EGP',
  
    },
    { 
        img:'https://cdn.shopify.com/s/files/1/1515/0462/products/VEGANCOLLAGENBODYBUTTERSTACKED_1x1_85073b7d-2a52-439d-84d5-384815ffc74c_1800x.jpg?v=1676053055',
        name:'Vegan body butter',
        price:'500 EGP',
  
    },
    { 
        img:'https://www.brambleberry.com/on/demandware.static/-/Sites-brambleberry-master-catalog/default/dw279cbbb2/projectimages/PS000241-PS000260/PS000252_RoseBodyButter_main.jpg',
        name:'whipped rose buddy butter',
        price:'250 EGP',
  
    },
    { 
        img:'https://cdn.shopify.com/s/files/1/0549/3286/5231/products/SantalBloom_Lotion_PDP-1.jpg?v=1647378483',
        name:'Santal Bloombody lotion',
        price:'600 EGP',
  
    },
    { 
        img:'https://cdn.shopify.com/s/files/1/0277/1215/9846/products/BodyButterJar_1200x1200.jpg?v=1659311307',
        name:'dry skin body butter',
        price:'300 EGP',
  
    },
    { 
        img:'https://www.victoriassecret.com.sa/assets/styles/VS/11204718/image-thumb__1552239__product_listing/11204718_8527_112047188527_of_f.jpg',
        name:'Victoria secret -bare vanilla- body lotion',
        price:'800 EGP',
  
    },
    { 
        img:'https://assets.unileversolutions.com/v1/79259735.png',
        name:'Dove skin glow body lotion',
        price:'450 EGP',
  
    },
    { 
        img:'https://www.bathandbodyworks.com.eg/assets/bbw/26291951_1.jpg',
        name:'Bath and Body body splash',
        price:'560 EGP',
  
    },
    { 
        img:'https://www.target.com.au/medias/static_content/product/images/full/50/37/A1785037.jpg?impolicy=product_portrait_hero',
        name:'sea butter body butter',
        price:'450 EGP',
  
    },
    { 
        img:'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/794922/1.jpg?6694',
        name:'ultimate desire body splash',
        price:'480 EGP',
  
    },
    { 
        img:'https://cdn.shopify.com/s/files/1/0438/9185/1432/products/BATH-BODY-WORKES-You-re-the-One-Body-Lotion-236ML-Anwar-Store-664_1024x1024.webp?v=1673128675',
        name:'bath and body -you are the one- body lotion',
        price:'570 EGP',
  
    },
    { 
        img:'https://target.scene7.com/is/image/Target/GUEST_d7e0d771-41e1-464e-8da2-a40d40131bc0?wid=488&hei=488&fmt=pjpeg',
        name:'Tree hut vanilla body scrub',
        price:'240 EGP',
  
    },
    { 
        img:'https://www.mecca.com.au/on/demandware.static/-/Sites-mecca-online-catalog/default/dw20a45ad4/product/goopbe/hr/i-047493-gtox-5-salt-body-scrub-7-2-940.jpg',
        name:'goop bodu scrub',
        price:'1200 EGP',
  
    },
    { 
        img:'https://cdn.shopify.com/s/files/1/0130/2514/8987/products/PressRestart_BodyLotion_01_1000x1000.jpg?v=1658271185',
        name:'versed body lotion',
        price:'660 EGP',
  
    },
    { 
        img:'https://cdn.shopify.com/s/files/1/0203/8454/products/Herbivore_CocoRose_BodyScrub_Texture_grande.jpg?v=1680552366',
        name:'Coco rose exfoliating body scrub',
        price:'800 EGP',
  
    },
  
  ]
  
        
              
        }}


        render() {
            return (
              <>    
              
     <TextInput 
     style={{width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-around',marginTop:20}}
     value={this.state.text}
     onChangeText={(val)=>{
      this.setState({text:val}) 
     }}
     placeholder='Search Any Product'
     >
     </TextInput>

              <FlatList
              data={this.state.arr4}
              contentContainerStyle={{
                marginTop: 10,
                paddingHorizontal: 10,
                paddingBottom: 40,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
                alignSelf:'center',
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `pro-${index}`}
              renderItem={({ item, index }) => {
          return(
            <>  
               <TouchableOpacity style={{backgroundColor:'#f5edec',width:170,height:350,marginVertical:10,borderRadius:10}} 
                 > 
                   
                      <Image source={{uri:item.img}}
                      style={{width:170,height:200,alignSelf:'center',borderRadius:10,flex:2.5}}>
                      </Image>
                     
                     <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,flex:.5}}>{item.name}</Text> 
                     
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Ionicons name="cart-outline" size={30} color="#E8859B" style={{padding:10}}/>
                      <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,flex:.5}}>{item.price}</Text>
              </View>
              </TouchableOpacity>

            </>
          )
                 
                  }}>
              </FlatList> 
 
              </>
            );
        }
    }