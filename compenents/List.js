import React from 'react' ;
import style from '../style'
import axios from 'react-native-axios'
import {Text, ActivityIndicator, ListView} from 'react-native'

export default class List extends React.Component{
    static navigationOptions =(navigation) => {
        return {
title: ' METEO / ${navigation.state.params.city}'
    }}
    constructor (props){
        super()
        console.log('state', this.props.navigation.state)
        this.state = {
            city:this.props.navigation.state.params.city,
            report:null
        }
        this.fetchWeather()
    }
 fetchWeather(){
     axios.get("http://samples.openweathermap.org/data/2.5/weather?q=${this.state.city},uk&appid=b6907d289e10d714a6e88b30761fae22")
 .then((Response) => {
     this.setState({report: Response.data})
 }
)
 }
    render(){
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={style.color} size="large" />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return(
                <ListView
                dataSource={ds.cloneWithRows(this.state.report)}
            renderRow={(row) => <Text>{row.temp.day}</Text> }  />  )
        }
       
    }
}