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
import {Button,SearchBar,Divider,Input,Badge} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {api} from '../interface/interface'
@inject(["datambx"])
@observer // 监听当前组件
class Search_sj_xq extends Component{
    static navigationOptions = {
        title: '',
      };
    constructor(props){
      super(props)
      this.state={
         page:1,
         search_data:[],
      }
      
    }

    get_data=()=>{
        let body= JSON.stringify({
          'q':this.state.con,
          'page':this.state.page,
          'login_from':45
      })
      fetch(`${api.sj_search}`,{
        method:'POST',
        body:body,
        headers:{
          Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-app-skey': this.props.datambx.skey
        }
    }).then(res=>res.json()).then(res=>{
        console.log('商机数据:',res)
        let a=res.data.result
        for(let i=0;i<a.length;i++){
          this.state.search_data.push(a[i])
        }
        this.setState({search_data:this.state.search_data})
    }
    ).catch(err=>{
        console.log('err!!',err)
    })
    
      } 
     

      componentDidMount(){
          console.log('kk',this.props.datambx.skey);
          
      }
    render(){
        const info =this.props.navigation.getParam('info')
        console.log('info:',info);
        
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
              <View style={{width:'100%',padding:20}}>
              <Text style={{color:sass.Theme,fontSize:18}}>{info.title}</Text>
              <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{color:sass.Theme_hui3,fontSize:16}}>交货地点:</Text>
                  <Text style={{color:sass.Theme_hui3,marginLeft:10,fontSize:16}}>面议</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{color:sass.Theme_hui3,fontSize:16}}>求购金额:</Text>
                  <Text style={{color:sass.Theme_hui3,marginLeft:10,fontSize:16}}>面议</Text>
                  </View>
                  
              </View>

              <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{color:sass.Theme_hui3,fontSize:16}}>求购时间:</Text>
                  <Text style={{color:sass.Theme_hui3,marginLeft:10,fontSize:16}}>2019/7/1</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{color:sass.Theme_hui3,fontSize:16}}>求购数量:</Text>
                  <Text style={{color:sass.Theme_hui3,marginLeft:10,fontSize:16}}>面议</Text>
                  </View>
                  
              </View>

              
              <View style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
                  <Ionicons name='ios-contacts' style={{fontSize:20,color:sass.Theme}}/>
                  <Text style={{fontSize:16,color:sass.Theme_hui3,marginLeft:10}}>{info.link_man_short}</Text>
              </View>
              <View style={{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Ionicons name='ios-call' style={{fontSize:20,color:sass.Theme}}/>
                  <Text style={{fontSize:16,marginLeft:10,color:sass.Theme_hui3}}>18827******</Text>
                  </View>
                 
                  <Button title='拨打电话' titleStyle={{fontSize:16}} buttonStyle={{}} type='outline' onPress={()=>{
                     Linking.openURL(`tel:18827567896`)
                  }}/>
              </View>
              <Divider style={{width:sass.sass_w,height:1,backgroundColor:'#E5E8E8',marginTop:20,marginLeft:-20}}/>

              <Text style={{fontSize:16,color:sass.Theme,marginTop:20}}>求购描述 :</Text>
              <View style={{width:'100%',marginTop:20}}>
                  <Text style={{color:sass.Theme_hui2}}>{info.title}</Text>
              </View>

              </View>
           </SafeAreaView>
       )
    }
}
export default Search_sj_xq
const styles=StyleSheet.create({

    
})