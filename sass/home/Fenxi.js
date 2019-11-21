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
import {Button,SearchBar,Divider,Badge} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {api} from '../interface/interface'
import forge from 'node-forge'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel';
import { VictoryLine, VictoryChart, VictoryTheme,VictoryAxis 
    ,VictoryBar,VictoryGroup,VictoryPie} from "victory-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
@inject(["datambx"])
@observer // 监听当前组件
class Feixi extends Component{
    static navigationOptions = {
        title: '数据分析',
      };
    constructor(props){
      super(props)
      this.state={
      
     
      }
      
    }

 componentDidMount(){
      fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/get/info').then(res=>res.json())
      .then(res=>{
        
      })
      .catch(err=>{

      })
 }   

 
    componentWillMount(){
    //  AsyncStorage.removeItem('skey')
      AsyncStorage.getItem('skey').then(e=>{
        console.log('ee',e)
        this.props.datambx.sky(e)
        if(e==null){
          this.get_skey()
        }else{
           this.is_log()
        }
      }
      ).catch()  

    }

   

  please_login=()=>{
     Alert.alert('提示','您还未登录哦，请登录！',
     [{'text':'我再逛逛'},{'text':'去登录',onPress:()=>{
       this.props.navigation.navigate('LogEntry')
     }}])
  }  
    render(){
      console.log('login:',this.props.datambx.login,'data:',this.state.search_data)
      const login=this.props.datambx.login
      const tab=[
        {
          icon:'shopping-cart',
          name:'服务超市',
          color:'#70e1f5',
          page:'Market'
        },
        {
          icon:'bullhorn',
          name:'企业宣传',
          color:'#ffd194',
          page:'Xc'
        },
        {
          icon:'table',
          name:'数据统计',
          color:'#00c6ff',
          page:'Data'
        },
      ]
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <ImageBackground source={require('../img/jbs1.jpg')} style={styles.t_s_v}>

               {/* </TouchableOpacity> */}
               <View style={styles.top_v}>
               <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Release')
               }}>
               <Ionicons name='ios-add-circle-outline' style={{color:'white',fontSize:sass.sass_w*.08}}/> 
               </TouchableOpacity>
               <Button 
               onPress={()=>{
                  login?
                 this.props.navigation.navigate('Search_sj')
                 :
                 this.please_login()
               }}
               title='商机搜索'
               titleStyle={{color:sass.Theme_hui2,marginLeft:20}}
               icon={
               <Ionicons name='ios-search' style={{fontSize:20,color:'#B2BABB'}}
               />} 
               buttonStyle={{backgroundColor:'white',width:sass.sass_w*.7}}/>
               <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('News2')
               }}>
               <Ionicons name='ios-notifications-outline' style={{color:'white',fontSize:sass.sass_w*.08}}/> 
               </TouchableOpacity>
               </View>

               </ImageBackground>
           
             
             <ScrollView contentContainerStyle={{
                  width:sass.sass_w
                 }} showsVerticalScrollIndicator={false}>

                 <View style={{width:sass.sass_w,padding:20}}>
                     <Text style={{marginTop:10,fontSize:18,fontWeight:'500'}}>增长率统计</Text>
                     <View style={{flexDirection:'row',padding:10}}>
                      <View>
                      <Badge  badgeStyle={{backgroundColor:'#00c6ff',width:20,height:20}}/>
                      <Text style={{fontSize:13,marginTop:10,color:sass.Theme_hui2}}>商机点击增长率</Text>
                      </View>
                      <View style={{marginLeft:'10%'}}>
                      <Badge  badgeStyle={{backgroundColor:'#0072ff',width:20,height:20}}/>
                      <Text style={{fontSize:13,marginTop:10,color:sass.Theme_hui2}}>活跃度增长率</Text>
                      </View>
                     </View>
                     <Text style={{fontSize:13,color:sass.Theme_hui2,marginLeft:10}}>（y轴为增长的百分点）</Text>
                 <VictoryChart>
                 <VictoryGroup
  offset={25}
  colorScale={["#00c6ff", "#0072ff"]}
>
  <VictoryBar
    data={[{x: "前天", y: 2}, {x: "昨天", y: 3}, {x: "今天", y: 5}]}
  />
 
  <VictoryBar
    data={[{x: "前天", y: 3}, {x: "昨天", y: 2}, {x: "今天", y: 3}]}
  />
</VictoryGroup>
              </VictoryChart>

              {/*  */}
              <Text style={{marginTop:10,fontSize:18,fontWeight:'500'}}>转化率统计</Text>
                     <View style={{flexDirection:'row',padding:10}}>
                      <View>
                      <Badge  badgeStyle={{backgroundColor:'#00c6ff',width:20,height:20}}/>
                      <Text style={{fontSize:13,marginTop:10,color:sass.Theme_hui2}}>爱采购转化率</Text>
                      </View>
                      <View style={{marginLeft:'10%'}}>
                      <Badge  badgeStyle={{backgroundColor:'#0072ff',width:20,height:20}}/>
                      <Text style={{fontSize:13,marginTop:10,color:sass.Theme_hui2}}>直通车转化率</Text>
                      </View>
                      <View style={{marginLeft:'10%'}}>
                      <Badge  badgeStyle={{backgroundColor:'#85C1E9',width:20,height:20}}/>
                      <Text style={{fontSize:13,marginTop:10,color:sass.Theme_hui2}}>商机点转化率</Text>
                      </View>
                     </View>
                     <Text style={{fontSize:13,color:sass.Theme_hui2,marginLeft:10}}>（所示图为各占比部分）</Text>
              <VictoryPie
              height={250}
              animate={{
                duration: 2000
              }}
              colorScale={["#00c6ff", "#0072ff", "#85C1E9" ]}
  data={[
    { x: "爱采购转化率", y: 35 },
    { x: "直通车转化率", y: 40 },
    { x: "商机点转化率", y: 55 }
  ]}
/>

                 </View>

                <View style={{width:'100%',alignItems:'center',marginBottom:10}}>
                <Text style={{fontSize:13,color:sass.Theme_hui2,marginLeft:10}}>(*后期将开放更多的统计功能*)</Text>
                </View>


             </ScrollView>
           </SafeAreaView>
       )
    }
}
export default Feixi
const styles=StyleSheet.create({
    top_v:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        height:'100%',
        alignItems:'center'
      },
    
        item_view:{
            width:'47%',height:sass.sass_h*.4,justifyContent:'space-between'
        },
        img_text:{
            fontSize:18,fontWeight:'500',color:'white',marginTop:10
        },
        img_back:{
            width:'100%',height:sass.sass_h*.18,alignItems:'center',justifyContent:'center'
        },
        diliv:{
            backgroundColor:sass.Theme_hui,height:10,width:'100%',marginTop:5
        },
        SearchBar:{
         width:'90%',
         backgroundColor:null,  
        
         borderBottomWidth:0,
         borderTopWidth:0,
        },
        t_s_v:{
            width:'100%',
            height:sass.sass_h*.1,
            backgroundColor:sass.Theme,
            alignItems:'center',
            
            
        }

})