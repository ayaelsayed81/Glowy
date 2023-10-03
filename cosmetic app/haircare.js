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

            arr3:[
                { 
                    img:'https://cdn.salla.sa/VlyP/Q6hF7XGRD8JmYbdesjTxxelqtuk2mIyRbReFmIV2.jpg',
                    name:'OGX coconut shampoo',
                    price:'800 EGP',
              
                },
                { 
                    img:'https://cdn.salla.sa/EjOGQ/WPHROwj3OxGo1agrBFCYYqKsyk9jpU6grU54ShST.jpg',
                    name:'Hair Brust shampoo',
                    price:'400 EGP',
              
                },
                { 
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gjglPAVtM9a3qK1i1moo4WIhMHfMY8WC6Q&usqp=CAU',
                    name:'loreal ever pure shampoo',
                    price:'600 EGP',
              
                },
                { 
                    img:'https://cdn.shopify.com/s/files/1/1293/8895/products/tthm1_1024x1024.jpg?v=1595126979',
                    name:'Tea tree hydration Hair mask',
                    price:'100- EGP',
              
                },
                { 
                    img:'https://media.ulta.com/i/ulta/2257269?w=1020&h=1020',
                    name:'therapy session hair musk',
                    price:'900 EGP',
              
                },
                { 
                    img:'https://static.arrajol.com/users/user466146/181506--%20%D9%85%D8%B9%D8%AF%D9%84%20%D9%85%D9%88%D8%B1%D9%88%D9%83%D9%88.jpg',
                    name:'OGX moroccon oil conditioner',
                    price:'500 EGP',
              
                },
                { 
                    img:'https://www.sayidaty.net/sites/default/files/styles/900_scale/public/2019/03/07/5025136-401856847.jpg',
                    name:'kristase shampoo',
                    price:'1800 EGP',
              
                },
                { 
                    img:'https://cdn.salla.sa/ppqEl/Qs37iGIKZqUyMr0cgll5dPKyXEVhiOpVfZa7AFZf.png',
                    name:'Garnier conditioner',
                    price:'300 EGP',
              
                },
                { 
                    img:'https://sleekehair.com/cdn/shop/products/serum_2_webcopy_1024x1024.jpg?v=1678832469',
                    name:'silke hair serum',
                    price:'400 EGP',
              
                },
                { 
                    img:'https://cdn.shopify.com/s/files/1/1336/0857/products/gro-hair-serum-front-brown-background-matching_1_a436f9ce-7606-4d28-af84-2ebca87dd7fc.jpg?v=1680562630',
                    name:'GRO hair serum',
                    price:'900 EGP',
              
                },
                { 
                    img:'https://media-afr-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F42840%2F42840.png%3Fversion%3D1609776001&w=896&bc=%23f5f5f5&ib=%23f5f5f5&h=896&q=30',
                    name:'orflime conditioner',
                    price:'250 EGP',
              
                },
                { 
                    img:'https://cdn.shopify.com/s/files/1/0039/6073/3763/products/PPA_MaskCatalog1.webp?v=1666674966',
                    name:'Bare Anatomy hair mask',
                    price:'700 EGP',
              
                },
                { 
                    img:'https://cdn.shopify.com/s/files/1/0361/1987/1619/products/PDP_Gisou_Hair_Mask-01-4x5.jpg?v=1645454705',
                    name:'gisou hair muk',
                    price:'4000 EGP',
              
                },
                { 
                    img:'https://cdn.shopify.com/s/files/1/0601/5438/0518/products/Clary-Serum-100ml-_1_fb2c5ed4-ad4e-4c13-90c4-efb2e9cfe6a7-357899.jpg?v=1679090958',
                    name:'clary hair serum',
                    price:'250 EGP',
              
                },
                { 
                    img:'https://m.jamalouki.net/uploads//richTextEditor/default_richTextEditor/77e/2ea535766880cf64ce55ff5cae4b9836.webp',
                    name:'Kristase conditioner',
                    price:'1800 EGP',
              
                },
                { 
                    img:'https://cdn.shopify.com/s/files/1/0507/2391/3898/products/8e701fde738156813ef3e9bcdc0d5b7f376454e3_2000x.jpg?v=1681910006',
                    name:'Minu hair serum',
                    price:'650 EGP',
              
                },
                { 
                    img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635364206-moroccanoil-intense-hydrating-hair-mask-1635364193.jpg?crop=1xw:1xh;center,top&resize=980:*',
                    name:'Morocon oil hair mask',
                    price:'980 EGP',
              
                }, 
                { 
                  img:'https://www.kerastase-usa.com/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw0dfee1e7/2019/full-size/nutritive/kerastase-nutritive-8h-magic-night-serum.png',
                  name:'Kristase night hair serum',
                  price:'1800 EGP',
              
              },
              
               ],
           
              
            
              
              
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
              data={this.state.arr3}
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