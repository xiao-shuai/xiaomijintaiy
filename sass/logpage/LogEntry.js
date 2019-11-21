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
import {Button,Divider,Input,ButtonGroup} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { api } from '../interface/interface';


@inject(["datambx"])
@observer // 监听当前组件
class LogEntry extends Component{

    constructor(){
        super()
        this.state={
            selectedIndex: 0,
            code_bt:'获取验证码',
            get_code_btn:false,
            i:60,
            regzz:[]
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
 denglu=()=>{
     if(this.state.dlacc==undefined||this.state.dlmm==undefined){
       Alert.alert('提示','账号或密码不能为空哦',[{'text':'知道了'}])
     }else{
        
        let body=JSON.stringify( {
            'username':this.state.dlacc,
            'passwd':this.state.dlmm,
            'login_from':45,
            'ver_type':0
           })
           
        let url= `${api.app_login}`
          console.warn('body!!',body,'url:',url)
         fetch(url,{
             method:'POST',
             body:body,
             headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-app-skey': this.props.datambx.skey
             }
         })
         .then(res=>res.json())
         .then(res=>{
             console.log('登录res',res)
             if(res.state==1){
                AsyncStorage.setItem('sass','ok')
                this.props.navigation.reset([NavigationActions.navigate({ routeName: 'TabNavigator' })], 0)
             }else{
                Alert.alert('提示',res.msg,[{'text':'知道了'}])
             }
         }).catch(err=>{
             console.log('mm_login_err',err)
             })
        
     }
 }
 reg=()=>{
     if(this.state.regzz==undefined||this.state.regyzm==undefined){
         Alert.alert('提示','账号或验证码不能为空哦')
     }else{
        let body=JSON.stringify({
            'mobile':this.state.regzz,
            'yzcode':this.state.regyzm,
            'login_from':45,
            'ver_type':1
           }) 
            
           fetch(`${api.app_login}`,{
            method:'POST',
            body:body,
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-app-skey': this.props.datambx.skey
             }
           })
           .then(res=>res.json())
           .then(res=>{
               console.log('code_login_res!!',res)
               if(res.msg=='您成功绑定账户'){
                AsyncStorage.setItem('sass','ok')
                this.props.navigation.reset([NavigationActions.navigate({ routeName: 'TabNavigator' })], 0)
             }else{
                //  this.refs.toast.show(res.msg,1000)
                Alert.alert('提示',res.msg,[{'text':'知道了'}])
             }
           }).catch(err=>{
               console.log('err!',err)  
           })
     }
 }
 
 get_yzm=()=>{
   
    if(this.state.regzz.length!==11){
        return  Alert.alert('提示','请输入正确的号码',[{'text':'知道了'}])
    }
   this.timer=setInterval(()=>{
       console.log('iiii',this.state.i)
       let now=this.state.i-1
       this.setState({
           i:now,
           code_bt:this.state.i+'秒',
           get_code_btn:true
       })
       if(this.state.i==0){
           this.setState({code_bt:'重新获取',i:60,get_code_btn:false})
           this.timer && clearInterval(this.timer);
       }
  

   },1000 )

  let body= JSON.stringify({
   'mobile':this.state.regzz,
   'ver_type':0,
  'login_from':45
})
   fetch(`${api.get_code}`,{
       method:'POST',
       body:body,
       headers:{
           'Content-Type': 'application/json',
           'x-app-skey': this.props.datambx.skey
       }
   }).then(res=>res.json()).then(res=>{
       console.log('get_code_res!',res)
   }
   ).catch(err=>{
       console.log('err!!',err)
   })

 }
 
    render(){
        const buttons = ['登录', '注册']
  const { selectedIndex } = this.state

        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
          <KeyboardAwareScrollView contentContainerStyle={{width:sass.sass_w,alignItems:'center'}}>
            <ImageBackground source={require('../img/jbs1.jpg')} style={styles.img_back}>
              <Image source={require('../img/logo2.png')} style={styles.logo}/>
            </ImageBackground>
            <View  style={styles.b_u_x}>
            <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height:sass.sass_h*.05}}
    //   buttonStyle={{backgroundColor:sass.Theme}}
    selectedButtonStyle={{backgroundColor:sass.Theme}}
    />
                {
                    selectedIndex==0?
                    <View style={{width:'100%',alignItems:'center'}}>
                    <Input
                    onChangeText={(dlacc)=>{
                     this.setState({dlacc})
                    }}
  placeholder='请输入账号'
  containerStyle={{
      backgroundColor:sass.Theme_bg,width:'90%',marginTop:20
  }}
  leftIconContainerStyle={{width:'10%'}}
  inputContainerStyle={{borderBottomWidth:0,}}
  inputStyle={{marginLeft:10}}
  
  leftIcon={
    <Ionicons name='ios-person' size={25} color={sass.Theme_hui2}/>
  }
/>
<Input
  placeholder='请输入密码'
  onChangeText={(dlmm)=>{
    this.setState({dlmm})
  }}
  secureTextEntry={true}
  containerStyle={{
      backgroundColor:sass.Theme_bg,width:'90%',marginTop:20,
  }}
  inputContainerStyle={{borderBottomWidth:0,}}
  inputStyle={{marginLeft:10}}
  leftIconContainerStyle={{width:'10%'}}
  leftIcon={
    <Ionicons name='ios-lock' size={25} color={sass.Theme_hui2} />
  }
/>
 <Button title='登录' buttonStyle={{marginTop:20,backgroundColor:sass.Theme}} containerStyle={{width:'90%'}}
   onPress={()=>{
       this.denglu()
   }}
 />
 <TouchableOpacity onPress={()=>{
this.props.navigation.navigate('Yszc')
 }}>
 <View style={{width:'90%',flexDirection:'row',
 justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:sass.Theme_hui3}}>登录代表您已同意《“金太阳管理软件”隐私政策》</Text>
 </View>
 </TouchableOpacity>
 </View>
 :
<View style={{width:'100%',alignItems:'center'}}>
 <Input
 onChangeText={(regzz)=>{
     this.setState({regzz})
 }}
  placeholder='请输入手机号'
  containerStyle={{
      backgroundColor:sass.Theme_bg,width:'90%',marginTop:20
  }}
  leftIconContainerStyle={{width:'10%'}}
  inputContainerStyle={{borderBottomWidth:0,}}
  inputStyle={{marginLeft:10}}
  leftIcon={
    <Ionicons name='ios-person' size={25} color={sass.Theme_hui2}/>
  }
/>
<Input
  onChangeText={(regyzm)=>{
      this.setState({regyzm})
   }}
   
  placeholder='验证码'
  containerStyle={{
      backgroundColor:sass.Theme_bg,width:'90%',marginTop:20,
  }}
  inputContainerStyle={{borderBottomWidth:0,}}
  inputStyle={{marginLeft:10}}
  leftIconContainerStyle={{width:'10%'}}
  leftIcon={
    <Ionicons name='ios-phone-portrait' size={25} color={sass.Theme_hui2} />
  }
  rightIcon={
      <Button title={this.state.code_bt}
      disabled={this.state.get_code_btn}
      
       type='clear'
       titleStyle={{fontSize:15,color:sass.Theme}}
       onPress={()=>{
           this.get_yzm()
       }}
       buttonStyle={{
          
      }}
      />

}
/>
 <Button title='注册' buttonStyle={{marginTop:20,backgroundColor:sass.Theme}} containerStyle={{width:'90%'}}
   onPress={()=>{
       this.reg()
   }}
 />
 <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate('Yszc')
 }}>
 <View style={{width:'90%',flexDirection:'row',
 justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:sass.Theme_hui3}}>注册代表您已同意《“金太阳管理软件”隐私政策》</Text>
 </View>
 </TouchableOpacity>
 </View>

                }
            

            </View>

    

          </KeyboardAwareScrollView>
          {/* <TouchableOpacity style={{}}>
       <Text style={{color:sass.Theme_hui3}}>登录代表您已同意《“金太阳管理软件”隐私政策》</Text>
       </TouchableOpacity> */}
        </SafeAreaView>
        )
    }
}
export default LogEntry
const styles=StyleSheet.create({
    b_u_x:{
        backgroundColor:'white',
        width:'92%',
        alignItems:'center',
        shadowColor:sass.Theme,
        shadowOpacity:.6,
        padding:20,
        shadowOffset:{width:2,height:3},
        marginTop:-sass.sass_h*.08,
        borderRadius:10,
        elevation: 2
    },
    img_back:{
        width:sass.sass_w,height:sass.sass_h*.3,alignItems:'center'
    },
    logo:{
        width:sass.sass_w*.3,
        height:sass.sass_w*.3,
        borderRadius:sass.sass_w*.15,
        marginTop:20
    }
})