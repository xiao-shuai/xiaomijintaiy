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
import AntDesign from 'react-native-vector-icons/AntDesign'
import { sass } from '../../theme/theme';
// @inject(["datambx"])
// @observer // 监听当前组件

class XcDetail extends Component{
    static navigationOptions = {
        title: '文章详情',
        headerStyle: {
          backgroundColor: sass.Theme,
        },
        headerTintColor: '#fff',
      };
    constructor(props){
      super(props)
      this.state={
        isHeart:false,
        id:0
      }
    }
    componentWillMount() {
      this.setState({id:this.props.navigation.state.params.id})
    }
    render(){
      const { isHeart,id } = this.state
       return(
           <SafeAreaView style={{flex:1}}>
                <ScrollView
                    style={{width:'100%',paddingLeft:15,paddingRight:15}}
                  >
                    <Text style={{fontSize:16,color:'#333',marginTop:15}}>
                    {
                      {
                        1:'川西高原的诱惑：从塔公草原到理塘高城',
                        2:'苏州人有多传统，绿豆汤就有多魔幻',
                        3:'汶水情悠悠'
                      }[id]
                    }
                    </Text>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                      <Text style={{fontSize:14,color:'#666'}}>
                        {
                          {
                            1:'2019-09-03',
                            2:'2019-09-05',
                            3:'2019-09-09'
                          }[id]
                        }
                      </Text>
                      <TouchableOpacity
                        style={{display:'flex',flexDirection:'row'}}
                        onPress={() => {
                          this.setState({isHeart:true})
                          if (this.state.isHeart) {
                            Alert.alert('已经加入收藏')
                          }
                        }}
                      >
                        <AntDesign name={isHeart ? 'heart' : 'hearto'} color='red' size={14} />
                        <Text style={{fontSize:14,color:'#666',marginLeft:10}}>加入收藏</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20}}>
                      {
                        {
                          1:<Image source={require('../../img/xz1.jpg')} style={{width:'95%',height:200}} />,
                          2:<Image source={require('../../img/ld2.jpg')} style={{width:'95%',height:200}} />,
                          3:<Image source={require('../../img/ws1.jpg')} style={{width:'95%',height:200}} />,
                        }[id]
                      }
                      <Text style={{fontSize:14,color:'#333',marginTop:20,lineHeight:18}}>
                        {
                          {
                            1:'早晨，新都桥客栈的老板给我叫了两出租车，我们谈好价钱就出发了。',
                            2:'每个夏天，包邮区都要经历一番非人的代遇，先是梅雨季‘上蒸下煮’，随后是连续5小时35+度的高温超长待机',
                            3:'我的故乡就在汶水南畔，属于泰安地区。每当回老家的时候，总是在途径大汶口时隔着车望一眼汶河水。'
                          }[id]
                        }
                      </Text>
                      {
                        {
                          1:<Image source={require('../../img/xz2.jpg')} style={{width:'95%',height:200}} />,
                          3:<Image source={require('../../img/ws3.jpg')} style={{width:'95%',height:200,marginTop:30}} />,
                        }[id]
                      }
                    </View>
                  </ScrollView>
           </SafeAreaView>
       )
    }
}
export default XcDetail