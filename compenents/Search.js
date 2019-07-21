import React from 'react'
import { TextInput, Image, Button, View} from 'react-native'
import { StackNavigator} from 'react-navigation'
import List from './List'
import Style from '../style'

class Search extends React.Component{

    static navigationOptions ={
        title: 'Rechercher une ville',
        tabBarIcon:() => {
        return <image source={ require('./icons/home.png')} style={{witdh:20, height:20}} />
        }
    }

    constructor(props)
    {
        super()
        this.state={
            city:'Gabes'
        }

    }
    setCity(city){
        this.setState({city})
    }

    submit(){
        this.props.navigation.navigate('result', {city: this.state.city})
    }
    
    render(){
        return(
            <View style={Style.container} >       
            <TextInput
            underlineColorAndroid='transparent'
            onChangeText={(text) =>this.setCity(text)}
            style={Style.input}
            value={this.state.city}
            />
            <Button color={Style.color} onPress={() =>this.submit()} title='rechercher'/>
            </View>

        )
    }
}
const navigationOptions = {
    headerStyle : Style.header,
    headerTitleStyle:Style.headerTitle
}
 export default StackNavigator ({
    Search:{
        screen: Search,
        navigationOptions
    },
    Result:{
        screen: List,
        navigationOptions
    }

})