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
class Search_sj extends Component{
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
      search=()=>{
        this.setState({search_data:[],page:1})
        const a=this.state.con
        if(a==undefined){
        //  this.refs.toast.show('请输入搜索内容',1000)
        Alert.alert('提示','请输入关键词',[{'text':'知道了'}])
        }else{
          this.get_data()
        }
      }
    
      more=()=>{
          
        this.setState({page:this.state.page+1},()=>{
          console.log('more:',this.state.page)
             this.get_data()
         })   
      }

      componentDidMount(){
          console.log('kk',this.props.datambx.skey);
          
      }
    render(){
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={styles.top_v}>
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.goBack()
             }}>
             <Ionicons name='ios-arrow-back' style={{fontSize:30,color:'white'}}/>
             </TouchableOpacity> 
             <SearchBar 
               containerStyle={styles.SearchBar}  
                style={{borderWidth:0}}
                inputContainerStyle={{backgroundColor:'white'}}
                inputStyle={{borderWidth:0}} 
                value={this.state.con}
                onSubmitEditing={()=>{
                    this.search()
                }}
                returnKeyType={'search'}
                onChangeText={(con)=>{
                  this.setState({con})
                }}
               />

            </View>
            <ScrollView style={{
                width:sass.sass_w
            }}>
{
    this.state.search_data.length==0?
    <View style={{width:sass.sass_w,height:sass.sass_h*.8,
    alignItems:'center',
    justifyContent:'center',
    padding:20
    }}>
        <View style={{width:sass.sass_w*.8,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:sass.Theme_hui2}}>暂时无适合匹配商机，有合适商机会随时通知你</Text>
        </View>
    </View>
    :
  this.state.search_data.map((item,index)=>{
    return(
        <TouchableOpacity style={{backgroundColor:sass.Theme_hui,marginTop:5,padding:20}}
         key={index} onPress={()=>{
             this.props.navigation.navigate('Search_sj_xq',{info:item,s:'ok',refresh:()=>{
                 this.setState({search_data:[]},this.search())
             }})
         }}>
       
<View style={{width:sass.sass_w,marginTop:5,flexDirection:'row',alignItems:'center'}}>
   <Badge badgeStyle={{backgroundColor:'#FF5A00FF'}} value={'优质'}/>
   <Text style={{marginLeft:10}}>{item.title.length<20?item.title:item.title.substr(0,20)+'..'}</Text>
 </View>
 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text>{item.link_man_short}</Text>
    <View style={{flexDirection:'row'}}>
    <Text>求购金额:</Text>
    <Text style={{color:'#FF5A00FF',marginLeft:2}}>{item.price}</Text>
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
export default Search_sj
const styles=StyleSheet.create({
    top_v:{
        width:sass.sass_w,
        height:sass.sass_h*.1,
        backgroundColor:sass.Theme,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    SearchBar:{
        width:'90%',
        backgroundColor:null,  
       
        borderBottomWidth:0,
        borderTopWidth:0,
       },
})