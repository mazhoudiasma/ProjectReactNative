import React from 'react'
import {StyleSheet, View , Text, Image, Button} from 'react-native'
import Style from '../style'
export default class About extends React.Component{
    static navigationOption ={
        tabBarIcon:() => {
        return <image source={ require('./icons/user.png')} style={{witdh:20, height:20}} />
        }
    }

    search(){
        this.props.navigation.navigate('Search')
    }
    render(){
        return(
            <View style={Style.container}>
            <Text style={Style.title} > a propos de l'app </Text>
            <Text>La météorologie est une science qui a pour objet l'étude des phénomènes atmosphériques tels que les nuages, les précipitations ou le vent dans le but de comprendre comment ils se forment et évoluent en fonction des paramètres mesurés tels que la pression, la température et l'humidité</Text>
            <Button color={Style.color} onPress={() => this.Search} title="rechercher une ville" />
            </View>
        )
    }
        

}