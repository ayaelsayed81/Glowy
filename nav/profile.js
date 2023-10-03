import * as React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'


export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // "food_item":this.props.route.params.food_item
           item: this.props.route.params.item
        }
    }

   

    render() {
        return (
            <>  
            <View style={{width:'100%',height:'100%',backgroundColor:'#e5d9c8'}}>


                <Image source={{uri:this.state.item.img}}
                style={{width:'80%',height:400,alignSelf:'center',marginTop:40}}>

                </Image>
                 <Text style={{fontSize:30,color:'#873b35',alignSelf:'center',marginTop:20}}>{this.state.item.name}</Text> 
                 <Text style={{fontSize:30,color:'#873b35',alignSelf:'center',marginTop:20}}>Price : {this.state.item.price}</Text>
            </View>
            </>

        )
    }
}