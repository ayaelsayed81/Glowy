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


            arr2:[
                { 
                    img:'https://www.almrsal.com/wp-content/uploads/2021/09/1598022697.webp',
                    name:'vichy cleanser',
                    price:'600 EGP',
              
                },{
                    img:'https://static.tajmeeli.com/site/articles/96/63/63152/addae392-6944-11ed-ae8e-0050568b0c83.jpg',
                    name:'nytrojena hydroBoost',
                    price:'230 EGP',
                },{
                    img:'https://m.media-amazon.com/images/I/61t7KdOLdJL._AC_SY879_.jpg',
                    name:'cerave foaming cleanser',
                    price:'350 EGP',
                },
                { 
                    img:'https://cdn.salla.sa/zEazr/3QrKrcGZmSkWtVPBgCPMTC7Dn5f39hHhjcMFIvJx.jpg',
                    name:'SVR cleanser',
                    price:'800 EGP',
              
                },{
                    img:'https://cdn.al-ain.com/lg/images/2023/1/09/205-122419-best-moisturizing-face-cream-2022-5.jpeg',
                    name:'cerave mostirizer',
                    price:'650 EGP',
                },{
                    img:'https://cdn.chefaa.com/filters:format(webp)/public/uploads/products/la-roche-posay-retinol-b3-anti-wrinkle-serum-30ml-bdoe-01667815939.png',
                    name:'Laroche posay Retonil serum',
                    price:'1000 EGP',
                },
                { 
                    img:'https://modo3.com/thumbs/fit630x300/243337/1557799512/%D9%85%D8%AA%D9%89_%D9%8A%D8%B3%D8%AA%D8%AE%D8%AF%D9%85_%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%D9%88%D9%85_%D9%84%D9%84%D9%88%D8%AC%D9%87.jpg',
                    name:'Lancome serum',
                    price:'400 EGP',
              
                },{
                    img:'https://cdn.al-ain.com/lg/images/2023/1/09/205-122420-best-moisturizing-face-cream-2022-6.jpeg',
                    name:'Bioderma mostirizer',
                    price:'250 EGP',
                },{
                    img:'https://cdn.shopify.com/s/files/1/0582/9879/4181/products/ezgif.com-gif-maker_2.jpg?v=1636203701&width=533',
                    name:'The ordinary niacanmide serum',
                    price:'700 EGP',
                },
                { 
                    img:'https://www.thaqafnafsak.com/wp-content/uploads/2022/05/%D9%83%D8%B1%D9%8A%D9%85-%D8%A8%D9%8A%D9%88%D8%AF%D9%8A%D8%B1%D9%85%D8%A7-%D8%B3%D9%8A%D9%86%D8%B3%D9%8A%D8%A8%D9%8A%D9%88-%D9%85%D8%B1%D8%B7%D8%A8-%D9%84%D9%84%D8%B9%D9%8A%D9%86-Bioderma-Sensibio-Eye.jpg',
                    name:'Bioderma eye cream',
                    price:'380 EGP',
              
                },{
                    img:'https://m.media-amazon.com/images/I/71JvPEGVkML._AC_UF1000,1000_QL80_.jpg',
                    name:'DR.Rashel serum',
                    price:'170 EGP',
                },{
                    img:'https://www.thaqafnafsak.com/wp-content/uploads/2022/05/%D9%83%D8%B1%D9%8A%D9%85-%D9%81%D9%8A%D8%B4%D9%8A-%D9%84%D9%8A%D9%81%D8%AA-%D8%A3%D9%83%D8%AA%D9%8A%D9%81-Vichy-Liftacive-Superme.jpg',
                    name:'vichy eye cream',
                    price:'500 EGP',
                },
                { 
                    img:'https://www.thaqafnafsak.com/wp-content/uploads/2017/12/%D8%A3%D9%81%D8%B6%D9%84-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%B3%D9%8A%D8%B1%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B11.jpg',
                    name:'Clarinse serum',
                    price:'1300 EGP',
              
                },{
                    img:'https://cdn.salla.sa/qpeaA/z6vZ4IyvBl4E4FqtsQtYKmSWoyDMT9O2WQ8217w4.png',
                    name:'Laroche posay mostirizer',
                    price:'600 EGP',
                },{
                    img:'https://www.elitepharmacyonline.com/wp-content/uploads/2020/10/10.jpg',
                    name:'Vichy cleanser',
                    price:'900 EGP',
                },
                { 
                    img:'https://jameelaat.com/wp-content/uploads/2022/04/%D9%83%D9%84%D8%A7%D8%B1%D9%86%D8%B3-%D8%AF%D8%A8%D9%84-%D8%B3%D9%8A%D8%B1%D9%88%D9%85-5.jpg',
                    name:'clarinse double eye serum',
                    price:'1200 EGP',
              
                },{
                    img:'https://m.jamalouki.net/uploads//richTextEditor/froalaimage_richTextEditor/8c3/6300fb19cca9c13bed4a8545f64675f0.webp',
                    name:'Estee lauder serum',
                    price:'3000 EGP',
                },{
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUWtg2_QA0ysUVFrHQKpX2W_f6U6oJpnTKw&usqp=CAU',
                    name:'vichy serum',
                    price:'800 EGP',
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
              data={this.state.arr2}
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