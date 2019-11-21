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
import { sass } from '../../theme/theme';
@inject(["datambx"])
@observer 

class Xc extends Component{
    static navigationOptions = {
        title: '企业宣传',
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
    componentDidMount() {
      console.log('article',this.props.datambx.article)
    }
    render(){
      const articleList = [
        {
          title:'川西高原的诱惑：从塔公草原到理塘高城',
          img:require('../../img/xz3.jpg'),
          id:1
        },
        {
          title:'苏州人有多传统，绿豆汤就有多魔幻',
          img:require('../../img/ld1.jpg'),
          id:2
        },
        {
          title:'汶水情悠悠',
          img:require('../../img/ws2.jpg'),
          id:3
        }
      ]
      // const articleList=this.props.datambx.article
      
       return(
           <SafeAreaView style={{flex:1}}>
            <ScrollView>
              <View>
                {
                  articleList.map((wz,index) => {
                    return <TouchableOpacity 
                            style={{width:'100%',paddingLeft:15,paddingRight:15,marginTop:20}}
                            key={index}
                            onPress={() => this.props.navigation.navigate('XcDetail',{id:wz.id})}
                          >
                              <Text style={{fontSize:16,color:'#333',fontWeight:'bold'}}>{wz.title}</Text>
                              <Image source={wz.img} style={{width:'100%',height:200,marginTop:10}} />
                            </TouchableOpacity>
                  })
                }
              </View>
            </ScrollView>
           </SafeAreaView>
       )
    }
}
export default Xc