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
import Button from '@ant-design/react-native/lib/button'
import {inject,observer} from 'mobx-react'
import { sass } from '../theme/theme';
import { api } from '../interface/interface';
import { Divider } from 'react-native-elements';

@inject(["datambx"])
@observer // 监听当前组件
class My extends Component{
    static navigationOptions = {
        title: '我的',
      };
    constructor(props){
      super(props)
      this.state={

      }
    }
    get_u_i=()=>{
      let b=JSON.stringify({
        'login_from':45,
      })
      fetch(api.userinfo,{
       method:'POST',
       body:b,
       headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-app-skey': this.props.datambx.skey
       }
      }).then(res=>res.json()).then(res=>{
          console.log('res:',res)
          this.setState({
            user_data:res.data.info,
            uer_xx:res.data
            // show:false,
            // tx:res.data.avatarUrl
          })
    
      }).catch(err=>{
        console.log('err:',err)
        })
    }
    componentDidMount(){
      this.get_u_i()
    }
  
    log_out=()=>{
      AsyncStorage.removeItem('sass')
      AsyncStorage.removeItem('skey')
      this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LogEntry' })], 0)
    }
    please_login=()=>{
      Alert.alert('提示','您还未登录哦，请登录！',
      [{'text':'我再逛逛'},{'text':'去登录',onPress:()=>{
        this.props.navigation.navigate('LogEntry')
      }}])
   }  
    render(){
      const user_data=this.state.user_data
      console.log('user_data:',user_data,this.props.datambx.skey);
      const login=this.props.datambx.login
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ImageBackground style={{
              width:sass.sass_w,
              height:sass.sass_h*.25,
              alignItems:'center',
              justifyContent:'center'
            }} source={require('../img/jbs1.jpg')} >
               <Image source={require('../img/tx.png')} 
               style={{
                 width:sass.sass_w*.26,
                    height:sass.sass_w*.26,
                    borderRadius:sass.sass_w*.13
               }} />
               <Text style={{fontSize:18,marginTop:10,color:'white'}}>金太阳管理软件</Text>
            </ImageBackground>
            <Divider style={{width:'100%',height:10,backgroundColor:sass.Theme_hui}}/>
            
             <TouchableOpacity style={styles.abn} onPress={()=>{
               
               this.props.navigation.navigate('News2')
             }}>
             <Text style={{fontSize:18,color:sass.Theme_hui3}}>我的消息</Text>
             <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:sass.Theme_hui3}}/>
             </TouchableOpacity>
             {/*  */}
             <TouchableOpacity style={styles.abn} onPress={()=>{
               login?
               this.props.navigation.navigate('News')
               :this.please_login()
             }}>
             <Text style={{fontSize:18,color:sass.Theme_hui3}}>我的发布</Text>
             <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:sass.Theme_hui3}}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.abn} onPress={()=>{
                login?
                 this.props.navigation.navigate('News')
                 :
                 this.please_login()
             }}>
             <Text style={{fontSize:18,color:sass.Theme_hui3}}>我的收藏</Text>
             <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:sass.Theme_hui3}}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.abn} onPress={()=>{
               login? this.props.navigation.navigate('Myf'):this.please_login()
             }}>
             <Text style={{fontSize:18,color:sass.Theme_hui3}}>意见反馈</Text>
             <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:sass.Theme_hui3}}/>
             </TouchableOpacity>
             
               <Divider style={{width:'100%',height:10,backgroundColor:'#F2F4F4'}}/>
             <TouchableOpacity style={[styles.abn,{alignItems:'center',justifyContent:'center'}]} onPress={()=>{
             login?this.log_out() :this.please_login()
             }}>
             <Text style={{fontSize:18,color:'red'}}>{login?'退出登录':'未登录'}</Text>
             {/* <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:sass.Theme_hui3}}/> */}
             </TouchableOpacity>
             <Divider style={{width:'100%',height:10,backgroundColor:'#F2F4F4'}}/>
   
          
           </SafeAreaView>
       )
    }
}
export default My
const styles=StyleSheet.create({
  abn:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor:'#F2F3F4',
    borderBottomWidth:1,
    padding:20
  },
})