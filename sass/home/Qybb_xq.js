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

class Qybb_xq extends Component {
    static navigationOptions = {
        title: '金太阳管理软件',
        headerStyle: {
          backgroundColor: sass.Theme,
        },
        headerTintColor: '#fff',
      };
    constructor(props){
     super(props)
     this.state={

     }
    }

    render(){
        const info =this.props.navigation.getParam('info')
     return(
     <SafeAreaView style={{flex:1,alignItems:'center'}}>
         <ScrollView contentContainerStyle={{alignItems:'center'}}>
         <View style={{width:'100%',alignItems:'center',padding:20}}>
             <Text style={{fontSize:18,fontWeight:'500',color:sass.Theme_hui3}}>什么是金太阳管理软件 ?</Text>
         </View>
         <View style={{width:'100%',alignItems:'center',padding:20,paddingTop:0}}>
             <Text style={{fontSize:16,color:sass.Theme_hui3,lineHeight:22,letterSpacing:1}}>
             金太阳管理软件是帮助中小企业更高效率的获取客户，全面利用AI技术对于全网的流量，用户进行画像分析，把客户需要的产品及服务推荐给客户。从而帮助企业更低成本，更加快速的获得客户，并且帮助企业在获取客户的过程中，协助企业进行销售及获取客户的过程管理，采用先进成熟技术构建而成的一款好用的SAAS产品。
             </Text>
         </View>
        <Image source={info.img} resizeMode='stretch' 
                      style={{width:sass.sass_w*.9,
                      height:sass.sass_h*.25,
                      marginTop:20
                      }}/>
         <View style={{width:'100%',alignItems:'center',padding:20}}>
             <Text style={{fontSize:18,fontWeight:'500',color:sass.Theme_hui3}}>我们拥有的四大特色功能 ?</Text>
         </View>
         <View style={{width:'100%',alignItems:'center',padding:20,paddingTop:0}}>
             <Text style={{fontSize:16,color:sass.Theme_hui3,lineHeight:22,letterSpacing:1}}>
           1) 媒体同步：内容可同步至微信公众号、百家号、腾讯企鹅号、知乎机构号、新浪微博、头条号、一点号等，获取全网流量，进行一站式管理。
             </Text>
         </View>
         <View style={{width:'100%',alignItems:'center',padding:20,paddingTop:0}}>
             <Text style={{fontSize:16,color:sass.Theme_hui3,lineHeight:22,letterSpacing:1}}>
           2) 数据展现：一站式覆盖多家自媒体渠道，数据实时更新，可视化呈现，流量变化尽在掌握
             </Text>
         </View>
         <View style={{width:'100%',alignItems:'center',padding:20,paddingTop:0}}>
             <Text style={{fontSize:16,color:sass.Theme_hui3,lineHeight:22,letterSpacing:1}}>
           3) 线索获取：根据企业的特征获取最符合企业的销售线索，以低成本获取高转化线索，不错过任何一个商机
             </Text>
         </View>
         <View style={{width:'100%',alignItems:'center',padding:20,paddingTop:0}}>
             <Text style={{fontSize:16,color:sass.Theme_hui3,lineHeight:22,letterSpacing:1}}>
           4) 线索转化：对意向客户进行跟踪管理，精准获取行为轨迹，掌握精准销售线索，实时更新意向客户跟踪进度，帮助企业销售人员尽快跟踪意向客户
             </Text>
         </View>
         
         </ScrollView>
     </SafeAreaView>
     )
    }
}
export default Qybb_xq