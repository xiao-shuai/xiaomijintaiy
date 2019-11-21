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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
@inject(["datambx"])
@observer // 监听当前组件
class Home extends Component{
    static navigationOptions = {
        title: '首页',
      };
    constructor(props){
      super(props)
      this.state={
        page:1,
        search_data:[],
        entries:[
            {
             img:require('../img/ban1.png')   
            },
            {
                img:require('../img/ban2.png')   
            },
           
        ]
      }
      
    }

 get_skey=()=>{
    let ts=Date.parse(new Date())
    let md = forge.md.md5.create();
    md.update(ts+'tJJ@SMqCPR8VAW4Q');//需要加密的字符串
    console.log('需要加密的字符串',ts+'tJJ@SMqCPR8VAW4Q')
    let end_md=md.digest().toHex()
    console.log('ts!!!',ts,'end_md!!',end_md,'ssss',`${api.skey}?ts=${ts}&sign=${end_md}`)
    let body=JSON.stringify({
      ts:ts,
      sign:end_md
    })
    fetch(`${api.skey}`,{
      method:'POST',
      body:body
    }).then(res=>res.json()).then(res=>{
      console.log('获取sky:',res)
     this.props.datambx.sky(res.skey)
      AsyncStorage.setItem('skey',res.skey)
      this.get_data()
    //   that._save(res.skey)
    }).catch(err=>{
     console.log('err!!',err)  
    })
 }   

 
 componentDidMount(){
      
 }   

 is_log=()=>{
  AsyncStorage.getItem('sass').then(res=>{
    console.log('sass:',res);
        if(res!==null){
          this.props.datambx.save_login(true)
        }else{
          this.props.navigation.navigate('LogEntry')
        }
  }).catch(err=>{

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
           this.get_data()
        }
      }
      ).catch()  

    }

    get_data=()=>{
      let body= JSON.stringify({
        'page':this.state.page,
        'login_from':45
    })
    fetch(`${api.recommend}`,{
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

    more=()=>{
          
      this.setState({page:this.state.page+1},()=>{
        console.log('more:',this.state.page)
           this.get_data()
       })   
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
          color:'#00c6ff',
          page:'Xc'
        },
        {
          icon:'table',
          name:'数据统计',
          color:'#5DADE2',
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
                 }}>
                 {/* <Image source={require('../img/lb.jpg')} style={{
                     width:'100%',height:sass.sass_h*.25,marginTop:10
                 }}/> */}
                 <Carousel
                 autoplay={true}
                //  layout={'stack'}
                 layoutCardOffset={`9`}
                 loop={true}
                 firstItem={1}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={({item,index})=>{
               return(
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Qybb_xq',{info:item})
                }}>
                  <View style={{width:sass.sass_w,marginTop:10}}>
                      <Image source={item.img} resizeMode='stretch' 
                      style={{width:sass.sass_w*.9,
                      height:sass.sass_h*.25}}/>
                  </View>
                  </TouchableOpacity>
               )
              }}
              sliderWidth={sass.sass_w}
              itemWidth={sass.sass_w*.9}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
            {
              tab.map((i,k)=>{
                return(
                  <TouchableOpacity key={k} style={{alignItems:'center'}} onPress={()=>{
                    login? this.props.navigation.navigate(i.page):this.please_login()
                  }}>
                   <FontAwesome name={i.icon} style={{fontSize:sass.sass_w*.1,color:i.color}}/>
                   <Text style={{marginTop:10,color:'#909497'}}>{i.name}</Text>
                  </TouchableOpacity>
                )
              })
            } 
             </View>
                 {/*商机推荐  */}
                 <View style={{padding:20}}>
                 <Text style={{fontSize:18,color:sass.Theme}}>推荐列表</Text>
                 </View>
                {
              this.state.search_data.length!==0&&this.state.search_data.map((item,index)=>{
                    return(
                        <TouchableOpacity style={{backgroundColor:sass.Theme_hui,marginTop:5,padding:20}}
                         key={index} onPress={()=>{
                             this.props.navigation.navigate('Search_sj_xq',{info:item,s:'ok',refresh:()=>{
                                 this.setState({search_data:[]},this.search())
                             }})
                         }}>
                       
                <View style={{width:sass.sass_w,marginTop:5,flexDirection:'row',alignItems:'center'}}>
                   <Badge badgeStyle={{backgroundColor:sass.Theme}} value={'优质'}/>
                   <Text style={{marginLeft:10}}>{item.title!==null&&item.title.length>=10?item.title.substr(0,10)+'...':item.title}</Text>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text>{item.link_man_short}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text>求购金额:</Text>
                    <Text style={{color:sass.Theme,marginLeft:2}}>{item.price}</Text>
                    </View>
                    
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text>发布时间:{item.create_date}</Text>
                    <Text>求购数量:{item.buy_sum}</Text>
                 </View>
                       </TouchableOpacity>
                    )
                    })
                }
                {/* 加载更多 */}
                {
    this.state.search_data.length<8?
    null
    :
    <Button title={'加载更多...'} 
    type={'clear'} 
    titleStyle={{color:sass.Theme_hui2,fontSize:16}}
    buttonStyle={{
      width:sass.sass_w*.3,marginTop:10,marginLeft:'33%',
    
    }} onPress={()=>{
         this.more()
    }} />
 } 

              
             </ScrollView>
           </SafeAreaView>
       )
    }
}
export default Home
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