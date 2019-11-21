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

import Result from '@ant-design/react-native/lib/result'
import {inject,observer} from 'mobx-react'
import { sass } from '../theme/theme';
import { api } from '../interface/interface';
import { Divider ,ButtonGroup} from 'react-native-elements';
class News2 extends Component{
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
         show:true,
         selectedIndex: 0
       }
       this.updateIndex = this.updateIndex.bind(this)
    }
componentDidMount(){
  fetch('https://www.fastmock.site/mock/55de9bbe5737da4cd16e222deffcd115/qybb/news').then(res=>res.json())
  .then(res=>{
   this.setState({show:false})
  }).catch(err=>{

  })
}
updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
    render(){
        const buttons = ['已读', '未读']
    const { selectedIndex } = this.state
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
          {
           this.state.show?
           <ActivityIndicator size='large' style={{marginTop:sass.sass_h*.2}} />
           :
           <View style={{width:'100%'}}>
<ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: sass.sass_h*.05}}
      selectedButtonStyle={{backgroundColor:sass.Theme}}
    />
    {
        selectedIndex==0?
        <Result
           img={
             <Image
               source={require('../img/nodata.png')}
               resizeMode={'contain'}
               style={{ width: 100, height: 100,marginTop:100 }}
             />
           }
        
           message={<Text style={{color:'#CACFD2'}}>暂无相关内容</Text>}
         />
         :
         <Result
         img={
           <Image
             source={require('../img/nodata.png')}
             style={{ width: 100, height: 100,marginTop:100 }}
           />
         }
      
         message={<Text style={{color:'#CACFD2'}}>暂无相关内容</Text>}
       />

    }
           </View>
        //    <Result
        //    img={
        //      <Image
        //        source={require('../img/nodata.png')}
        //        style={{ width: 100, height: 100,marginTop:100 }}
        //      />
        //    }
        
        //    message={<Text style={{color:'#CACFD2'}}>暂无相关内容</Text>}
        //  />
          }
    
        </SafeAreaView>
        )
    }
}

export default News2