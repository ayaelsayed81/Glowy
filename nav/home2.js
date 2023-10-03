
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import axios from 'axios'
import AnimatedLottieView from 'lottie-react-native'






const App = ({navigation})=>{
const [arr,setarr] = useState([])
const [loading,setloading]= useState()
const [inputVal, setInputVal] = useState("")
  

const getBooksData = () => {
    // alert(inputVal)
    axios.get("https://api.itbook.store/1.0/search/" + inputVal).then(res => {
      console.log(res.data.books)
        setarr(res.data.books)

    })
}








    return(
    <>   
   
    <TextInput  value={inputVal}
                onChangeText={(val) => {
                 
                    setInputVal(val)
                }}

                style={{
                    width: '90%',
                    borderWidth: 5,
                    alignSelf: 'center',
                    fontSize: 20
                }}>

    </TextInput> 


    <TouchableOpacity  
    style={{width:90,height:70,backgroundColor:'brown',alignSelf:'center',marginTop:30}}
      onPress={() => {
     getBooksData()
    }}>

    </TouchableOpacity> 
   
        <ScrollView>
    <View style={{width:'100%',height:'100%',backgroundColor:'#e5d9c8'}}>   

   <Text style={{color:'brown',fontSize:30,fontWeight:'bold',alignSelf:'center'}}>Boquets</Text>
  <View style={{flexDirection:'row',flexWrap:'wrap',width:320,justifyContent:'space-between',alignSelf:'center'}}>
    
    {
                        arr.map((item, index) =>
                            <>
                             <TouchableOpacity style={{width:150,height:200,borderColor:'#8f662b',alignSelf:'center',marginBottom:30}}
                                onPress={() => {  
                      navigation.navigate("profileNav", {
                            item
                })
                 }}>    
                 <Image source={{uri:item.img}}
                 style={{width:150,height:200}}>

                 </Image>
                 
                                  
                             </TouchableOpacity>
                            </>

                        )
    }

</View>





    </View>
   
    </ScrollView>





    </>)




} 


export default App