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


            arr1:[
                { 
                    img:'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600',
                    name:'the ordinary foundation',
                    price:'3000 EGP',
              
                },{
                    img:'https://media.istockphoto.com/id/1199258384/photo/various-makeup-products-eyeshadow-palette-on-white-background.jpg?s=612x612&w=0&k=20&c=-d-UBiVsIQOxNfnfQnTIvJF2AWzTQSTeVVGx_Ga9_L0=',
                    name:'technic eyeshadow pallete',
                    price:'400 EGP',
                },{
                    img:'https://media.istockphoto.com/id/1301253904/photo/open-pink-lip-gloss-container.jpg?s=612x612&w=0&k=20&c=6pmPw66XnrjjswKbDfLYU3esvVr7UQqCQNJ65Tuc1rw=',
                    name:'Bourgios Blusher',
                    price:'500 EGP',
                },{
                    img:'https://www.maybelline-me.com/~/media/mny/mena%20hub/face-make-up/concealer/fit-me-concealer/30096592_15_fair_t2.png?thn=0&w=380&hash=ABB3683D6CF6804E3AF2D24226B246BD091241F9',
                    name:'fitme concelear Maybelline',
                    price:'250 EGP',
                },{
                    img:'https://images.pexels.com/photos/8981524/pexels-photo-8981524.jpeg?auto=compress&cs=tinysrgb&w=600',
                    name:'charlette telbury foundation',
                    price:'6000 EGP',
                },{
                    img:'https://www.sephora.com/productimages/sku/s2328375-main-zoom.jpg',
                    name:'Dior Blusher',
                    price:'1300 EGP',
                },{
                    img:'https://www.sephora.com/productimages/sku/s2510949-main-zoom.jpg?imwidth=315',
                    name:'Dior eyeliner',
                    price:'900 EGP',
                },{
                    img:'https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/products/makeup/eye/mascara/telescopic-original-mascara/black/oap-make-up-eyes-telescopic--mascara--pack-open-.png',
                    name:'loreal telescobic mascara',
                    price:'700 EGP',
                },{
                    img:'https://m.media-amazon.com/images/I/41S7LjjRt3L.jpg',
                    name:'Rare Beauty Higlighter',
                    price:'2000 EGP',
                },{
                    img:'https://m.media-amazon.com/images/I/61NcdD+617L.jpg',
                    name:'Nars concelear',
                    price:'1000 EGP',
                },{
                    img:'https://media.istockphoto.com/id/1204656881/photo/beautiful-woman-is-makeup-artist-performance-in-the-theater.jpg?s=612x612&w=0&k=20&c=Toe9Iqbxd5QnORj3ChcyYLfBUIoJHilSEz1V1E6sWhI=',
                    name:'wet n wild eye shadow palette',
                    price:'300 EGP',
                },{
                    img:'https://media.gomyz.com/600x600/media/catalog/product/f/e/fenty_beauty_double_cheekd_up__1667327992_9379939a_progressive_1_.jpg',
                    name:'Fenty Beauty Double Blusher',
                    price:'1800 EGP',
                },{
                    img:'https://images.pexels.com/photos/2637820/pexels-photo-2637820.jpeg?auto=compress&cs=tinysrgb&w=600',
                    name:'venus mascara',
                    price:'1000 EGP',
                },{
                    img:'https://m.media-amazon.com/images/I/31dLbJY2tIL._AC_UF1000,1000_QL80_.jpg',
                    name:'Kiko Lipstic',
                    price:'380 EGP',
                },{
                    img:'https://media.istockphoto.com/id/1299168842/photo/close-up-of-new-matte-eyeshadow-colorful-shades-palette.jpg?s=612x612&w=0&k=20&c=6wiBl7QQKv3UyOqF3ckvfDM5avS6pXzuvZfedAsyRy0=',
                    name:'essence eyeshadow paleete',
                    price:'270 EGP',
                },{
                    img:'https://www.nyxcosmetics.com/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw106e13c6/ProductImages/2020/Lips/Powder%20Puff%20Lippie/PPL03-NYX-Professional-Makeup-Lip-Makeup-POWDER-PUFF-LIPPIE-GROUP-LOVE-Lipstick-000-0800897140427-Main.png',
                    name:'NYX powder puff lipstick',
                    price:'570 EGP',
                },{
                    img:'https://media.gomyz.com/600x600/media/catalog/product/_/6/_6_4_645010_uncensored_1_1_1.jpg',
                    name:'Fenty Beauty lipstic',
                    price:'900 EGP',
                },{
                    img:'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/851903/1.jpg?5540',
                    name:' maybelline Sky High mascara ',
                    price:'450 EGP',
                },{
                    img:'https://feelunique.com/cdn-cgi/image/quality=70,format=auto,metadata=none,dpr=1,width=800/img/products/169102/alternative/rare_beauty_soft_pinch_liquid_blush_7_5ml-1-1677760041.jpg',
                    name:'Rare Beauty Blusher',
                    price:'650 EGP',
                },{
                    img:'https://m.media-amazon.com/images/I/41h1woDtbbL.jpg',
                    name:'NYX double touch lipsticl',
                    price:'480 EGP',
                },{
                    img:'https://cdn.shopify.com/s/files/1/0589/1715/9088/products/1-2021-08-31T200021.619_1200x630.jpg?v=1630432848',
                    name:'Amanda eyeliner',
                    price:'130 EGP',
                },{
                    img:'https://www.sephora.com/productimages/sku/s2629392-main-zoom.jpg?imwidth=315',
                    name:'Rare Beauty lipstic',
                    price:'850 EGP',
                },{
                    img:'https://cdn.shopify.com/s/files/1/0079/5384/2257/products/diamond-bomb.png?v=1662558134',
                    name:'Fenty Beauty Highlighter',
                    price:'850 EGP',
                },
                {
                    img:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL22_T2PRODUCT_CONCRETE_FENTY_ICON_VELVET_LIQUID_LIP_OPEN_MVP_1200x1500_ea016da9-a316-4f2b-8afd-9d822277a907.jpg?v=1669934439',
                    name:'Fenty Beauty Iconic Velvet lipstic',
                    price:'1200 EGP',
                },
                {
                    img:'https://media.gomyz.com/600x600/media/catalog/product/s/c/screenshot_6485__1.jpg',
                    name:'Dior lipgloss',
                    price:'1500 EGP',
                },
                {
                  img:'https://images.asos-media.com/products/nyx-professional-makeup-butter-gloss-lip-gloss-madeleine/24100908-4?$n_640w$&wid=513&fit=constrain',
                  name:'NYX lipgloss',
                  price:'400 EGP',
                }]
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
              data={this.state.arr1}
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