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
import { List, TextareaItem,Toast } from '@ant-design/react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-picker';
import { api } from '../interface/interface'

@inject(["datambx"])
@observer // 监听当前组件
class Release extends Component{
    static navigationOptions = {
        title: '发布',
        headerStyle: {
          backgroundColor: sass.Theme,
        },
        headerTintColor: '#fff',
      };
    constructor(props){
      super(props)
      this.state={
       picture:'',
       fabuc:''
      }
      
    }
    _onValueChange(val) {
      this.setState({
        fabuc:val
      })
    }
    _selectPhoto() {
      const options = {...options, includeBase64: true} 
      ImagePicker.launchImageLibrary(options,(response) => {
        if (response.didCancel) {
          console.log('user cancel select photo')
        } else if (response.error) {
          console.log('ImagePicker err',response.error)
        } else if (response.customButton) {
          console.log('user tapped custom button',response.customButton)
        } else {
          console.log('response',response)
          this.setState({
            picture:`data:image/jpeg;base64,${response.data}`
          })
        }
       })
    }
    _issue() {
      if (this.state.fabuc) {
        if (this.state.picture) {
          let article = {content:this.state.fabuc,picture:this.state.picture}
          // this.props.datambx.save_article(article)
          // this.props.navigation.navigate('Xc')
          Alert.alert('提示','发布成功，内容需后台审核，通过后优质的内容会优先展示哦',[{'text':'知道了'}])
        } else {
          Alert.alert('提示','请上传图片',[{'text':'知道了'}])
        }
      } else {
        Alert.alert('提示','请填写发布内容',[{'text':'知道了'}])
      }
    }
    please_login=()=>{
      Alert.alert('提示','您还未登录哦，请登录！',
      [{'text':'我再逛逛'},{'text':'去登录',onPress:()=>{
        this.props.navigation.navigate('LogEntry')
      }}])
   }  
  componentDidMount(){
    const login=this.props.datambx.login
    login?'':this.please_login()
  }  
    render(){

      const { picture } = this.state
       return(
           <SafeAreaView style={{flex:1}}>
             {/* <ImageBackground source={require('../img/jbs1.jpg')} 
             style={{backgroundColor:sass.Theme,width:'100%',
             height:sass.sass_h*.1,alignItems:'center',
             justifyContent:'center'}}
             >
              <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>发布商机</Text>
             </ImageBackground> */}
            <List 
              // renderHeader={'发布'}
              style={{marginTop:10}}
            >
              <TextareaItem
                rows={4}
                placeholder="请输入你要发布的内容"
                autoHeight
                style={{ paddingVertical: 5,backgroundColor:'#eee',height:200,paddingLeft:15,paddingRight:15 }}
                onChange={this._onValueChange.bind(this)}
              />
            </List>
            <View style={{marginTop:30,marginLeft:15}}>
              <TouchableOpacity
                style={{width:130,height:130,backgroundColor:'#eee',alignItems:'center',justifyContent:'center'}}
                onPress={this._selectPhoto.bind(this)}
              >
                {
                  picture 
                  ? <Image source={{uri:picture}} style={{width:130,height:130}} />
                  : <AntDesign name='plus' size={60} color='#666' />
                }
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{width:300,height:40,alignItems:'center',justifyContent:'center',lineHeight:40,backgroundColor:sass.Theme,marginTop:30,alignSelf:'center',borderRadius:40}}
              onPress={this._issue.bind(this)}
            >
              <Text style={{color:'#fff',fontSize:16}}>立即发布</Text>
            </TouchableOpacity>
           </SafeAreaView>
       )
    }
}
export default Release