import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image,ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';  
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import AnimatedLottieView from 'lottie-react-native';
export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          x:[],
          text:'',
          flag:false,
          count:1,
          arr1:[ 
            {
                img:'https://feelunique.com/cdn-cgi/image/quality=70,format=auto,metadata=none,dpr=1,width=800/img/products/169102/alternative/rare_beauty_soft_pinch_liquid_blush_7_5ml-1-1677760041.jpg',
                name:'Rare Beauty Blusher',
                price:650 , 
                colors:['#da3f59','#9b638a','#e1600f','#ec756d'],
                state:'in stock',
                count:0
            },{
                img:'https://m.media-amazon.com/images/I/41h1woDtbbL.jpg',
                name:'NYX double touch lipsticl',
                price:480 , 
                colors:['#915b56','#95587a','#e898a8','#d98b7f','#e93352','#cf7e8c']
                ,state:'in stock',
                count:0
            },
      { 
          img:'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'the ordinary foundation',
          price:3000 ,
         colors:['#e2d0c4']
         ,state:'in stock',
         count:0
      },{
          img:'https://media.istockphoto.com/id/1199258384/photo/various-makeup-products-eyeshadow-palette-on-white-background.jpg?s=612x612&w=0&k=20&c=-d-UBiVsIQOxNfnfQnTIvJF2AWzTQSTeVVGx_Ga9_L0=',
          name:'technic eyeshadow pallete',
          price:400 , 
          colors:[ '#dcb1c1','#c1897b'] ,
          state:'in stock',
          count:0
      },{
          img:'https://media.istockphoto.com/id/1301253904/photo/open-pink-lip-gloss-container.jpg?s=612x612&w=0&k=20&c=6pmPw66XnrjjswKbDfLYU3esvVr7UQqCQNJ65Tuc1rw=',
          name:'Bourgios Blusher',
          price:500, 
          colors:['#de7156','#e1b2a6','#fea0a5'],
          state:'in stock'
          ,
          count:0
      },{
          img:'https://www.maybelline-me.com/~/media/mny/mena%20hub/face-make-up/concealer/fit-me-concealer/30096592_15_fair_t2.png?thn=0&w=380&hash=ABB3683D6CF6804E3AF2D24226B246BD091241F9',
          name:'fitme concelear Maybelline',
          price:250, 
          colors:['#af8f75','#cea381','#cbad95','#eacfb9']
          ,state:'in stock',
          count:0
      },
      {
        img:'https://www.nyxcosmetics.com/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw106e13c6/ProductImages/2020/Lips/Powder%20Puff%20Lippie/PPL03-NYX-Professional-Makeup-Lip-Makeup-POWDER-PUFF-LIPPIE-GROUP-LOVE-Lipstick-000-0800897140427-Main.png',
        name:'NYX powder puff lipstick',
        price:570 ,  
        colors:['#e87a69','#ff0000','#dc6d48','#c72c3d']
        ,state:'in stock',
        count:0
    },{
          img:'https://images.pexels.com/photos/8981524/pexels-photo-8981524.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'charlette telbury foundation',
          price:6000, 
          colors:['#dcb79b'],
          state:'out of stock',
          count:0
      },{
          img:'https://www.sephora.com/productimages/sku/s2328375-main-zoom.jpg',
          name:'Dior Blusher',
          price:1300, 
          colors:['#f8b5a4','#f8a4ed']
    ,state:'out of stock',
    count:0
        },{
          img:'https://www.sephora.com/productimages/sku/s2510949-main-zoom.jpg?imwidth=315',
          name:'Dior eyeliner',
          price:900, 
          colors:['black',],
          state:'in stock',
          count:0
      },{
          img:'https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/products/makeup/eye/mascara/telescopic-original-mascara/black/oap-make-up-eyes-telescopic--mascara--pack-open-.png',
          name:'loreal telescobic mascara',
          price:700,
          colors:['black'],
          state:'in stock',
          count:0
      },{
          img:'https://m.media-amazon.com/images/I/41S7LjjRt3L.jpg',
          name:'Rare Beauty Higlighter',
          price:2000,  
          colors:['#eadeda'],
          state:'out of stock',
          count:0
      },{
          img:'https://m.media-amazon.com/images/I/61NcdD+617L.jpg',
          name:'Nars concelear',
          price:1000, 
          colors:['#af8f75','#cea381','#cbad95','#eacfb9'],
          state:'in stock',
          count:0
      },{
          img:'https://media.gomyz.com/600x600/media/catalog/product/f/e/fenty_beauty_double_cheekd_up__1667327992_9379939a_progressive_1_.jpg',
          name:'Fenty Beauty Double Blusher',
          price:1000,
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://images.pexels.com/photos/2637820/pexels-photo-2637820.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'venus mascara',
          price:1000, 
          colors:['black'],
          state:'in stock',
          count:0
      },{
          img:'https://media.istockphoto.com/id/1299168842/photo/close-up-of-new-matte-eyeshadow-colorful-shades-palette.jpg?s=612x612&w=0&k=20&c=6wiBl7QQKv3UyOqF3ckvfDM5avS6pXzuvZfedAsyRy0=',
          name:'essence eyeshadow paleete',
          price:270, 
          colors:[ '#dcb1c1','#c1897b'],
          state:'in stock',
          count:0
      },{
          img:'https://media.gomyz.com/600x600/media/catalog/product/_/6/_6_4_645010_uncensored_1_1_1.jpg',
          name:'Fenty Beauty lipstic',
          price:900, 
          colors:['#d93025'],
          state:'out of stock',
          count:0
      },{
          img:'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/851903/1.jpg?5540',
          name:' maybelline Sky High mascara ',
          price:450, 
          colors:['black'],
          state:'in stock',
          count:0
      },{
          img:'https://cdn.shopify.com/s/files/1/0589/1715/9088/products/1-2021-08-31T200021.619_1200x630.jpg?v=1630432848',
          name:'Amanda eyeliner',
          price:130, 
          colors:['black'],
          state:'in stock',
          count:0
      },{
          img:'https://www.sephora.com/productimages/sku/s2629392-main-zoom.jpg?imwidth=315',
          name:'Rare Beauty lipstic',
          price:850,
          colors:['#c97a74'],
          state:'in stock',
          count:0
      },{
          img:'https://cdn.shopify.com/s/files/1/0079/5384/2257/products/diamond-bomb.png?v=1662558134',
          name:'Fenty Beauty Highlighter',
          price:850, 
          colors:['#e99e99'],
          atstate:'out of stock',
          count:0
      },
      {
          img:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL22_T2PRODUCT_CONCRETE_FENTY_ICON_VELVET_LIQUID_LIP_OPEN_MVP_1200x1500_ea016da9-a316-4f2b-8afd-9d822277a907.jpg?v=1669934439',
          name:'Fenty Beauty Iconic Velvet lipstic',
          price:1200 , 
          colors:['#814730','#d93025'] 
          ,state:'in stock',
          count:0
      },
      
    ]  ,
     arr2:[
      { 
          img:'https://www.almrsal.com/wp-content/uploads/2021/09/1598022697.webp',
          name:'vichy cleanser',
          price:600,
           colors:[] 
           ,state:'in stock',
           count:0
      },{
          img:'https://static.tajmeeli.com/site/articles/96/63/63152/addae392-6944-11ed-ae8e-0050568b0c83.jpg',
          name:'nytrojena hydroBoost',
          price:280, 
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://m.media-amazon.com/images/I/61t7KdOLdJL._AC_SY879_.jpg',
          name:'cerave foaming cleanser',
          price:350,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.salla.sa/zEazr/3QrKrcGZmSkWtVPBgCPMTC7Dn5f39hHhjcMFIvJx.jpg',
          name:'SVR cleanser',
          price:800,
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://cdn.al-ain.com/lg/images/2023/1/09/205-122419-best-moisturizing-face-cream-2022-5.jpeg',
          name:'cerave mostirizer',
          price:650 , 
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://cdn.chefaa.com/filters:format(webp)/public/uploads/products/la-roche-posay-retinol-b3-anti-wrinkle-serum-30ml-bdoe-01667815939.png',
          name:'Laroche posay Retonil serum',
          price:1000, 
          colors:[],
          state:'out of stock',
          count:0
      },
      { 
          img:'https://modo3.com/thumbs/fit630x300/243337/1557799512/%D9%85%D8%AA%D9%89_%D9%8A%D8%B3%D8%AA%D8%AE%D8%AF%D9%85_%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%D9%88%D9%85_%D9%84%D9%84%D9%88%D8%AC%D9%87.jpg',
          name:'Lancome serum',
          price:4000,
          colors:[],
          state:'out of stock',
          count:0
    
      },{
          img:'https://cdn.al-ain.com/lg/images/2023/1/09/205-122420-best-moisturizing-face-cream-2022-6.jpeg',
          name:'Bioderma mostirizer',
          price:250,
          state:'in stock',
          count:0
      },{
          img:'https://cdn.shopify.com/s/files/1/0582/9879/4181/products/ezgif.com-gif-maker_2.jpg?v=1636203701&width=533',
          name:'The ordinary niacanmide serum',
          price:700, 
          colors:[]
          ,state:'in stock',
          count:0
      },
      { 
          img:'https://www.thaqafnafsak.com/wp-content/uploads/2022/05/%D9%83%D8%B1%D9%8A%D9%85-%D8%A8%D9%8A%D9%88%D8%AF%D9%8A%D8%B1%D9%85%D8%A7-%D8%B3%D9%8A%D9%86%D8%B3%D9%8A%D8%A8%D9%8A%D9%88-%D9%85%D8%B1%D8%B7%D8%A8-%D9%84%D9%84%D8%B9%D9%8A%D9%86-Bioderma-Sensibio-Eye.jpg',
          name:'Bioderma eye cream',
          price:300,
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://m.media-amazon.com/images/I/71JvPEGVkML._AC_UF1000,1000_QL80_.jpg',
          name:'DR.Rashel serum',
          price:170, 
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://www.thaqafnafsak.com/wp-content/uploads/2022/05/%D9%83%D8%B1%D9%8A%D9%85-%D9%81%D9%8A%D8%B4%D9%8A-%D9%84%D9%8A%D9%81%D8%AA-%D8%A3%D9%83%D8%AA%D9%8A%D9%81-Vichy-Liftacive-Superme.jpg',
          name:'vichy eye cream',
          price:500, 
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://www.thaqafnafsak.com/wp-content/uploads/2017/12/%D8%A3%D9%81%D8%B6%D9%84-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%B3%D9%8A%D8%B1%D9%88%D9%85-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B11.jpg',
          name:'Clarinse serum',
          price:1300,
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://cdn.salla.sa/qpeaA/z6vZ4IyvBl4E4FqtsQtYKmSWoyDMT9O2WQ8217w4.png',
          name:'Laroche posay mostirizer',
          price:600, 
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://www.elitepharmacyonline.com/wp-content/uploads/2020/10/10.jpg',
          name:'Vichy cleanser',
          price:900, 
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://jameelaat.com/wp-content/uploads/2022/04/%D9%83%D9%84%D8%A7%D8%B1%D9%86%D8%B3-%D8%AF%D8%A8%D9%84-%D8%B3%D9%8A%D8%B1%D9%88%D9%85-5.jpg',
          name:'clarinse double eye serum',
          price:1200,
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://m.jamalouki.net/uploads//richTextEditor/froalaimage_richTextEditor/8c3/6300fb19cca9c13bed4a8545f64675f0.webp',
          name:'Estee lauder serum',
          price:3000 , 
          colors:[],
          state:'in stock',
          count:0
      },{
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUWtg2_QA0ysUVFrHQKpX2W_f6U6oJpnTKw&usqp=CAU',
          name:'vichy serum',
          price:800 , 
          colors:[],
          state:'in stock',
          count:0
      },
    ],
    
     arr3:[
      { 
          img:'https://cdn.salla.sa/VlyP/Q6hF7XGRD8JmYbdesjTxxelqtuk2mIyRbReFmIV2.jpg',
          name:'OGX coconut shampoo',
          price:800 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.salla.sa/EjOGQ/WPHROwj3OxGo1agrBFCYYqKsyk9jpU6grU54ShST.jpg',
          name:'Hair Brust shampoo',
          price:400 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gjglPAVtM9a3qK1i1moo4WIhMHfMY8WC6Q&usqp=CAU',
          name:'loreal ever pure shampoo',
          price:600 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/1293/8895/products/tthm1_1024x1024.jpg?v=1595126979',
          name:'Tea tree hydration Hair mask',
          price:100,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://media.ulta.com/i/ulta/2257269?w=1020&h=1020',
          name:'therapy session hair musk',
          price:900,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://static.arrajol.com/users/user466146/181506--%20%D9%85%D8%B9%D8%AF%D9%84%20%D9%85%D9%88%D8%B1%D9%88%D9%83%D9%88.jpg',
          name:'OGX moroccon oil conditioner',
          price:500,
          colors:[],
          state:'out of stock',
          count:0
      },
      { 
          img:'https://www.sayidaty.net/sites/default/files/styles/900_scale/public/2019/03/07/5025136-401856847.jpg',
          name:'kristase shampoo',
          price:1100,
          colors:[],
          state:'out of stock',
          count:0
      },
      { 
          img:'https://cdn.salla.sa/ppqEl/Qs37iGIKZqUyMr0cgll5dPKyXEVhiOpVfZa7AFZf.png',
          name:'Garnier conditioner',
          price:300,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://sleekehair.com/cdn/shop/products/serum_2_webcopy_1024x1024.jpg?v=1678832469',
          name:'silke hair serum',
          price:400,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/1336/0857/products/gro-hair-serum-front-brown-background-matching_1_a436f9ce-7606-4d28-af84-2ebca87dd7fc.jpg?v=1680562630',
          name:'GRO hair serum',
          price:900 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://media-afr-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F42840%2F42840.png%3Fversion%3D1609776001&w=896&bc=%23f5f5f5&ib=%23f5f5f5&h=896&q=30',
          name:'orflime conditioner',
          price:250 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0039/6073/3763/products/PPA_MaskCatalog1.webp?v=1666674966',
          name:'Bare Anatomy hair mask',
          price:700 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0361/1987/1619/products/PDP_Gisou_Hair_Mask-01-4x5.jpg?v=1645454705',
          name:'gisou hair muk',
          price:4000 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0601/5438/0518/products/Clary-Serum-100ml-_1_fb2c5ed4-ad4e-4c13-90c4-efb2e9cfe6a7-357899.jpg?v=1679090958',
          name:'clary hair serum',
          price:250,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://m.jamalouki.net/uploads//richTextEditor/default_richTextEditor/77e/2ea535766880cf64ce55ff5cae4b9836.webp',
          name:'Kristase conditioner',
          price:1800 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0507/2391/3898/products/8e701fde738156813ef3e9bcdc0d5b7f376454e3_2000x.jpg?v=1681910006',
          name:'Minu hair serum',
          price:650,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635364206-moroccanoil-intense-hydrating-hair-mask-1635364193.jpg?crop=1xw:1xh;center,top&resize=980:*',
          name:'Morocon oil hair mask',
          price:980,
          colors:[],
          state:'in stock',
          count:0
      }, 
      { 
        img:'https://www.kerastase-usa.com/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw0dfee1e7/2019/full-size/nutritive/kerastase-nutritive-8h-magic-night-serum.png',
        name:'Kristase night hair serum',
        price:1800,
        colors:[],
        state:'in stock',
        count:0
    },
    
     ],
     
     arr4:[
      { 
          img:'https://cdn.shopify.com/s/files/1/0097/9972/products/1500px_hibutter_coconut_02_3_600x600_crop_center.jpg?v=1649703720',
          name:'Hi coconut vanilla body butter',
          price:300,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://m.media-amazon.com/images/I/613jZr17keL._AC_UF1000,1000_QL80_.jpg',
          name:'eseentials strawberry body butter',
          price:450,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/1515/0462/products/VEGANCOLLAGENBODYBUTTERSTACKED_1x1_85073b7d-2a52-439d-84d5-384815ffc74c_1800x.jpg?v=1676053055',
          name:'Vegan body butter',
          price:500 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://www.brambleberry.com/on/demandware.static/-/Sites-brambleberry-master-catalog/default/dw279cbbb2/projectimages/PS000241-PS000260/PS000252_RoseBodyButter_main.jpg',
          name:'whipped rose buddy butter',
          price:250,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0549/3286/5231/products/SantalBloom_Lotion_PDP-1.jpg?v=1647378483',
          name:'Santal Bloombody lotion',
          price:600,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0277/1215/9846/products/BodyButterJar_1200x1200.jpg?v=1659311307',
          name:'dry skin body butter',
          price:300,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://www.victoriassecret.com.sa/assets/styles/VS/11204718/image-thumb__1552239__product_listing/11204718_8527_112047188527_of_f.jpg',
          name:'Victoria secre body lotion',
          price:800,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://assets.unileversolutions.com/v1/79259735.png',
          name:'Dove glow body lotion',
          price:450,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://www.bathandbodyworks.com.eg/assets/bbw/26291951_1.jpg',
          name:'Bath and Body body splash',
          price:500,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://www.target.com.au/medias/static_content/product/images/full/50/37/A1785037.jpg?impolicy=product_portrait_hero',
          name:'sea butter body butter',
          price:450 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/794922/1.jpg?6694',
          name:'ultimate desire body splash',
          price:480,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0438/9185/1432/products/BATH-BODY-WORKES-You-re-the-One-Body-Lotion-236ML-Anwar-Store-664_1024x1024.webp?v=1673128675',
          name:'bath and body body lotion',
          price:570 ,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://target.scene7.com/is/image/Target/GUEST_d7e0d771-41e1-464e-8da2-a40d40131bc0?wid=488&hei=488&fmt=pjpeg',
          name:'Tree hut vanilla body scrub',
          price:240,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://www.mecca.com.au/on/demandware.static/-/Sites-mecca-online-catalog/default/dw20a45ad4/product/goopbe/hr/i-047493-gtox-5-salt-body-scrub-7-2-940.jpg',
          name:'goop bodu scrub',
          price:1200,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0130/2514/8987/products/PressRestart_BodyLotion_01_1000x1000.jpg?v=1658271185',
          name:'versed body lotion',
          price:660,
          colors:[],
          state:'in stock',
          count:0
      },
      { 
          img:'https://cdn.shopify.com/s/files/1/0203/8454/products/Herbivore_CocoRose_BodyScrub_Texture_grande.jpg?v=1680552366',
          name:'Coco rose exfoliating body scrub',
          price:800,
          colors:[],
          state:'in stock',
          count:0
      },
    
    ] , 
    
   
          
           
      
            }}
            search() 
            {   
              
               
               let arr1=this.state.arr1 
               let arr2=this.state.arr2 
                let arr3=this.state.arr3  
                let arr4=this.state.arr4 
             let x=this.state.x 
             let flag=this.state.flag 
             if(x!=[]) 
             {
                x=[]
             } 
           
               for(let i=0;i<arr1.length;i++)
               {
               if(arr1[i].name.includes(this.state.text))
               { 
                   x.push(arr1[i])
             this.setState({x})    
             flag=true
           this.setState({flag}) 

               }   
               }   

        
           if(x.length==0 )
           {  
               for(let j=0;j<arr2.length;j++)
               {
               if(arr2[j].name.includes(this.state.text))
               { 
                   x.push(arr2[j])
             this.setState({x}) 
             flag=true
           this.setState({flag})
        
               }  
               }    
            
         
           
               if(x.length==0)
               { 
                   for(let z=0;z<arr3.length;z++)
                   {
                   if(arr3[z].name.includes(this.state.text))
                   { 
                       x.push(arr3[z])
                 this.setState({x}) 
                 flag=true
                 this.setState({flag})
                 
                   }  
                   }   
               }   
               if(x.length==0)
               { 
                   for(let y=0;y<arr4.length;y++)
                   {
                   if(arr4[y].name.includes(this.state.text))
                   { 
                       x.push(arr4[y])
                 this.setState({x}) 
                 flag=true
                 this.setState({flag}) 
              
                   }  
                   }   
               }   
              
          
            } 
          
        if(x.length==0)
        {
          
            flag='not'
            this.setState({flag})
            
        }
          
            } 
        
            plus()
            {
             let count=this.state.count
             count+=1
             this.setState({count}) 
         
            }
            minus()
            {
             let count=this.state.count 
             if(count!=1) {
             count-=1
             this.setState({count})}
            } 
            
            async push()
            {   if(this.state.x.state=='out of stock')
            {
             alert('sorry, this product is out of stock')
            } 
            else{
             this.state.x.count=this.state.count
             let cart_arr =await AsyncStorage.getItem("arr") 
              cart_arr = JSON.parse(cart_arr) 
             
             if(cart_arr == null  ){
               let array_data = []
               array_data.push(this.state.x) 
               await AsyncStorage.setItem("arr",JSON.stringify(array_data)) 
              
             }else{
               let array_data = cart_arr
                array_data.push(this.state.x)  
           
                await AsyncStorage.setItem("arr",JSON.stringify(array_data)) 
                alert('added successfly')
             } 
             console.log(count)
             console.log(cart_arr) 
            }}
           

    render() {
        return (
            <>  
      {this.state.flag==true?(<>  

           <ScrollView>
        <View   style={{flexDirection:'row',width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between',marginTop:30}}>    

  <TouchableOpacity 
  onPress={()=>{
    let text=this.state.text
    text=''
    this.setState({text})
    let x= this.state.x
    x=[]
    this.setState({x}) 
    let flag=this.state.flag
    flag=false
    this.setState({flag}) 

  }}>
  <AntDesign name="right" size={26} color="#E8859B" style={{padding:10}}/> 
  </TouchableOpacity>
     <View style={{flexDirection:'row'}}>
     <TextInput 
     
     value={this.state.text}
     onChangeText={(val)=>{
      this.setState({text:val})  
     
     }}
     placeholder='what are you looking for ?'
     > 
     </TextInput>   
     <TouchableOpacity onPress={()=>
 {   
 console.log(this.state.text)
     this.search()

 }}>
     <AntDesign name="search1" size={26} color="#E8859B" style={{padding:10}}/>   
     </TouchableOpacity>
     </View>
     </View>

        {this.state.x.map((item,index)=>
                <>      

<TouchableOpacity style={{width:'90%',height:130,borderRadius:25,borderWidth:2,borderColor:'#E8859B',alignSelf:'center',marginTop:30}}
  onPress={() => {  
    this.props.navigation.navigate("productNav", {
            item
})
 }}>

<View style={{flexDirection:'row',justifyContent:'space-around'}}> 

<View >
 <Text style={{color:'black',paddingStart:10}}>{item.name}</Text>    
 <Text style={{color:'black',marginTop:10,paddingStart:10}}>{item.price}  EGP</Text>   
 {item.state=='in stock'?(
          <> 
           <Text style={{fontSize:15,marginTop:10,marginRight:20,color:'green',fontWeight:'bold'}}>
            {item.state}
          </Text>   
          </>
        ):( 
          <> 
           <Text style={{fontSize:15,marginTop:10,marginRight:20,color:'red',fontWeight:'bold'}}>
            {item.state}
          </Text> 
          </>
        )}
           
          

 </View>

 <Image source={{uri:item.img}}
 style={{width:100,height:100,marginTop:10,borderRadius:10}}>

 </Image>
</View>
  

</TouchableOpacity>


</>
)} 

</ScrollView>

      </>):(
      <>
    {this.state.flag=='not'?
     (
        <>  


    
<View   style={{flexDirection:'row',width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between',marginTop:30}}>    

  <TouchableOpacity 
  onPress={()=>{
    let text=this.state.text
    text=''
    this.setState({text})
    let x= this.state.x
    x=[]
    this.setState({x}) 
    let flag=this.state.flag
    flag=false
    this.setState({flag}) 

  }}>
  <AntDesign name="right" size={26} color="#E8859B" style={{padding:10}}/> 
  </TouchableOpacity>
     <View style={{flexDirection:'row'}}>
     <TextInput 
     
     value={this.state.text}
     onChangeText={(val)=>{
      this.setState({text:val})  
     
     }}
     placeholder='what are you looking for ?'
     > 
     </TextInput>   
     <TouchableOpacity onPress={()=>
 {   
 console.log(this.state.text)
     this.search()

 }}>
     <AntDesign name="search1" size={26} color="#E8859B" style={{padding:10}}/>   
     </TouchableOpacity>
     </View>
     </View>

      
        <Text style={{color:'#E8859B',fontSize:20,alignSelf:'center',marginTop:200}}>not found</Text>

     <AnimatedLottieView
                  source={require('./lotties/OA0R6O4tS2.json')}
                  autoPlay
                  loop
                  style={{ height: 200, width: 200, alignSelf: 'center' }}
                 
                /> 
           
        </> 

     ):(
        <> 
             <View   style={{flexDirection:'row',width:'90%',height:50,borderWidth:2,borderColor:'#E8859B',borderRadius:30,alignSelf:'center',
     justifyContent:'space-between',marginTop:30}}>    

  <View></View>
     <View style={{flexDirection:'row'}}>
     <TextInput 
     
     value={this.state.text}
     onChangeText={(val)=>{
      this.setState({text:val})  
     
     }}
     placeholder='what are you looking for ?'
     > 
     </TextInput>   
     <TouchableOpacity onPress={()=>
 {   
 console.log(this.state.text)
     this.search()

 }}>
     <AntDesign name="search1" size={26} color="#E8859B" style={{padding:10}}/>   
     </TouchableOpacity>
     </View>
     </View>
 



     <AnimatedLottieView
                  source={require('./lotties/EJk0m8vDtx.json')}
                  autoPlay
                  loop
                  style={{ height: 400, width: 400, alignSelf: 'center',marginTop:30}}
                  resizeMode="contain"
                /> 


         
        </>
     )    
}
         
   
  
</>)
    
    }
  
     
      
  
       


  
     
      
  
        </>

        )
    }
}