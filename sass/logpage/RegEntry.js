import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert,Linking,ImageBackground
} from 'react-native'
import {sass} from '../theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,SearchBar,Divider} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'

class RegEntry extends Component{

    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
          
        </SafeAreaView>
        )
    }
}
export default RegEntry