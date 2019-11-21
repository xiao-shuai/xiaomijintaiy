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
// import {lan} from '../../config/con_style'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import {Button} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import { sass } from '../theme/theme';
import { api } from '../interface/interface';
import { Divider,Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Myf extends Component{
   
    constructor(props){
        super(props)
        this.state={

        }
    }
 fed=()=>{
     if(this.state.asd==undefined){
         Alert.alert('提示','反馈内容不能为空哦',[{'text':'知道了'}])
     }else{
        Alert.alert('提示','谢谢你的反馈，我们将在1-3个工作日进行处理',[{'text':'知道了'}])
     }
 }
    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <KeyboardAwareScrollView >
            <View style={{
            width:sass.sass_w*.92,
            backgroundColor:'#F4F6F6',
            alignItems:'center',
            marginTop:20,
            padding:10
            }}>
            <TextInput style={{width:'100%',height:sass.sass_h*.2}}
             multiline={true}
             onChangeText={(asd)=>{
             this.setState({asd})
             }}
            />
            </View>
          <Button title='提交' buttonStyle={{marginTop:20,backgroundColor:sass.Theme}} 
           onPress={()=>{
               this.fed()
           }}
          />
            </KeyboardAwareScrollView>
         
        </SafeAreaView>
        )
    }

}

export default Myf