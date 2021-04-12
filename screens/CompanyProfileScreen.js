import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class CompanyProfileScreen extends Component{
    render(){
        return(
            <View>
                <Text style = {{fontSize:70,fontWeight:'bold',justifyContent:'center',alignSelf:'center',marginTop:200}}>Company Details</Text>
            </View>
        )
    }
}