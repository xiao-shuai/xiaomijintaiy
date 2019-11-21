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
    SafeAreaView,Alert,Linking
} from 'react-native'
// import {lan} from '../../config/con_style'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import {Button} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import Button from '@ant-design/react-native/lib/button';
import { sass }  from '../../theme/theme'
import AntDesign from 'react-native-vector-icons/AntDesign'


class Market extends Component{
    static navigationOptions = {
        title: '服务超市',
        headerStyle: {
          backgroundColor: sass.Theme,
        },
        headerTintColor: '#fff',
      };
    constructor(props){
      super(props)
      this.state={
        whichTab:0,
        tab:[{
          title:'企业营销'
        },{
          title:'优惠套餐'
        }]
      }
    }

		toggleTab(val) {
			this.setState({
				whichTab:val
			})
		}
    render(){
      const qyyxList = [{
        img:require('../../img/market_tab_ztc.png'),
        title:'订单直通车',
        content:'智能竞价工具，获取更多流量。',
      },{
       img:require('../../img/market_tab_point.png'),
       title:'商机点',
       content:'日均更新数千条采购商机，让您随时获取最新采购商机。',
     },{
       img:require('../../img/market_tab_jj.png'),
       title:'爱采购',
       content:'与百度搜索无缝对接，满足用户对于采购信息检索的需求。',
     }]
     const tcList = [{
       img:require('../../img/jingjia.png'),
       title:'竞价套餐',
       past:'原总价值：14980元',
       now:'现打包售价：',
       now_price:'9980',
     },{
       img:require('../../img/baonian.png'),
       title:'包年套餐',
       past:'原总价值：11480元',
       now:'现打包售价：',
       now_price:'3980',
     }]
     const { whichTab,tab } = this.state
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',paddingLeft:15,paddingRight:15}}>
							<View style={{width:100,height:sass.sass_h,backgroundColor:'#F6F6F6'}}>
								{
									tab.map((tab,index) => {
										return <TouchableOpacity 
															key={index}
															style={[styles.tab_l_wrap,whichTab == index ? styles.tab_l_wrap_active : '']}
															onPress={this.toggleTab.bind(this,index)}
														>
															<Text style={[styles.tab_l_text,whichTab == index ? styles.tab_l_text_active : '']}>{tab.title}</Text>
                              <AntDesign name='right' size={14} color={whichTab == index ? '#fff' : '#333'} />
														</TouchableOpacity>
									})
								}
							</View>
							<View style={{flex:1}}>
								{
									whichTab == 0
									? <View>
										{
											qyyxList.map((qyyx,index) => {
												return <TouchableOpacity 
																	key={index} style={styles.tab_r_item_wrap}
																	onPress={() => Alert.alert('提示','详情请联系客服4006501097',[{'text':'知道啦'}])}
															 >
																<View style={styles.img_wrap}><Image style={styles.tab_r_img} source={qyyx.img} /></View>
																<View style={styles.tab_r_con}>
																	<Text style={styles.tab_r_con_title}>{qyyx.title}</Text>
																	<Text style={styles.tab_r_con_info}>{qyyx.content}</Text>
																</View>
															</TouchableOpacity>
											})
										}
										</View>
									: null
								}
								{
									whichTab == 1
									? <View>
											{
												tcList.map((tc,index) => {
													return <TouchableOpacity
																	key={index}
																	style={styles.tab_r_item_wrap}
																	onPress={() => Alert.alert('提示','详情请联系客服4006501097',[{'text':'知道啦'}])}
																>
																	<View style={styles.img_wrap}><Image style={styles.tab_r_img} source={tc.img} /></View>
																	<View style={styles.tab_r_con}>
																		<Text style={styles.tab_r_con_title}>{tc.title}</Text>
																		<View style={{position:'relative',paddingLeft:10,marginTop:6}}>
																			<Text style={{fontSize:12,color:'#666'}}>{tc.past}</Text>
																			<View style={{position:'absolute',top:6,borderColor:'#FF1F1F',borderWidth:1,width:118}}></View>
																		</View>
																		<View style={{display:'flex',flexDirection:'row',marginTop:6,paddingLeft:10}}>
																			<Text style={{fontSize:12,color:'#666'}}>{tc.now}</Text>
																			<Text style={{fontSize:12,color:'#FF1F1F'}}>{tc.now_price}</Text>
																		</View>
																	</View>
																</TouchableOpacity>
												})
											}
										</View>
									: null
								}
							</View>
						</View>
           </SafeAreaView>
       )
    }
}

const styles=StyleSheet.create({
  tab_l_wrap:{
   display:'flex',	
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   alignContent:'center',		
   width:'100%',
    height:35,
   paddingLeft:9,
   paddingRight:9,
   },
   tab_l_wrap_active:{
     backgroundColor:sass.Theme,
   },
   tab_l_text:{
     fontSize:15,
     color:'#333'
   },
   tab_l_text_active:{
     color:'#fff',
   },
  arrow_right:{
   width:7,
   height:13,
  },
  tab_r_item_wrap:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    padding:9,
   borderBottomColor:'#eee',
   borderBottomWidth:1
  },
  tab_r_img:{
    width:60,
    height:60,
  },
  img_wrap:{
    width:62,
    height:62,
   borderColor:'#eee',
   borderWidth:1,
   marginRight:8

 },
  tab_r_con:{
    display:'flex',
  },
  tab_r_con_title:{
    color:'#333',
    fontSize:15,
    fontWeight:'bold'
  },
  tab_r_con_info:{
    width:170,
   fontSize:12,
   color:'#666',
   marginTop:10,
   lineHeight:17
  }
})
export default Market