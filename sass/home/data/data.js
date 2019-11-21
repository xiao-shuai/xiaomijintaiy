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
// import {lan} from '../../config/con_style';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Button} from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Button from '@ant-design/react-native/lib/button';
import { Tabs } from '@ant-design/react-native';
import { VictoryLine, VictoryChart, VictoryTheme,VictoryAxis } from "victory-native";
import { api } from '../../interface/interface';
import { sass }  from '../../theme/theme'

class Data extends Component{
    static navigationOptions = {
        title: '数据统计',
        headerStyle: {
          backgroundColor: sass.Theme,
        },
        headerTintColor: '#fff',
      };
    constructor(props){
      super(props)
      this.state={
        daySelect:0,
        startDay:'',
        endDay:'',
        keyData:{'num':5,'price':3,'consume':15},
        chartNum:[
         {x:'09-01',y:5},
         {x:'09-02',y:9},
         {x:'09-03',y:17},
         {x:'09-04',y:14},
        ],
        chartNum2:[
          {x:'08-01',y:3},
          {x:'08-02',y:5},
          {x:'08-03',y:7},
          {x:'08-04',y:4},
         ],
         chartNum3:[
          {x:'07-01',y:9},
          {x:'07-02',y:3},
          {x:'07-03',y:4},
          {x:'07-04',y:10},
         ]
      }
    }
    _toggleDay(val) {
      if (val == 1) {
        this.setState({
          keyData:{'num':2,'price':3,'consume':6}
        })
      } else if (val == 2) {
        this.setState({
          keyData:{'num':10,'price':3,'consume':30}
        })
      } else if (val == 3) {
        this.setState({
          keyData:{'num':7,'price':3,'consume':21}
        })
      } else {
        this.setState({
          keyData:{'num':5,'price':3,'consume':15}
        })
      }
      this.setState({
        daySelect:val
      })
    }
    componentDidMount() {
    }
    render(){
      const { daySelect,keyData,chartNum,chartNum2,chartNum3 } = this.state
      const tabs = [
        { title: '爱采购' },
        { title: '订单直通车' },
        { title: '商机点' },
      ];
      const days = [
        { title:'昨天' },
        { title:'近7天' },
        { title:'近14天' },
        { title:'近30天' }
      ]
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View>
              <Tabs 
                tabs={tabs}
                tabBarActiveTextColor={sass.Theme}
                tabBarUnderlineStyle={{backgroundColor:sass.Theme}}
                onChange={() => this.setState({daySelect:0})}
              >
                <View style={styles.tab_item}>
                  <View style={{width:'100%',marginTop:15,display:'flex',flexDirection:'row'}}>
                    {
                      days.map((day,index) => {
                        return <TouchableOpacity
                                  key={index}
                                  style={{width:'25%',alignItems:'center'}}
                                  onPress={this._toggleDay.bind(this,index)}
                                >
                                  <Text style={[styles.day_text,daySelect == index ? styles.day_text_active : '']}>{day.title}</Text>
                              </TouchableOpacity>
                      })
                    }
                  </View>
                  <View style={{borderBottomColor:sass.Theme,borderBottomWidth:1,paddingBottom:15}}>
                    <Text style={{fontSize:16,fontWeight:'bold',marginTop:15}}>关键数据</Text>
                    <View style={styles.key_data_wrap}>
                      <Text style={styles.key_data_wrap_text}>点击（次）</Text>
                      <Text style={styles.key_data_wrap_text}>点击价（元）</Text>
                      <Text style={styles.key_data_wrap_text}>总消耗（元）</Text>
                    </View>
                    <View style={styles.key_data_wrap}>
                      <Text style={styles.key_data_wrap_text}>{keyData.num}</Text>
                      <Text style={styles.key_data_wrap_text}>{keyData.price}</Text>
                      <Text style={styles.key_data_wrap_text}>{keyData.consume}</Text>
                    </View>
                  </View>
                  <View style={{width:100,height:40,lineHeight:40,alignItems:'center',justifyContent:'center', marginTop:20,borderColor:'#ccc',borderWidth:1}}>
                    <Text style={{color:'#333',fontSize:14}}>点击量曲线图</Text>
                  </View>
                  <VictoryChart
                    theme={VictoryTheme.material}
                  >
                    <VictoryLine
                      style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                      }}
                      data={chartNum}
                    />
                  </VictoryChart>
                </View>
                <View style={styles.tab_item}>
                  <View style={{width:'100%',marginTop:15,display:'flex',flexDirection:'row'}}>
                      {
                        days.map((day,index) => {
                          return <TouchableOpacity
                                    key={index}
                                    style={{width:'25%',alignItems:'center'}}
                                    onPress={this._toggleDay.bind(this,index)}
                                  >
                                    <Text style={[styles.day_text,daySelect == index ? styles.day_text_active : '']}>{day.title}</Text>
                                </TouchableOpacity>
                        })
                      }
                    </View>
                    <View style={{borderBottomColor:sass.Theme,borderBottomWidth:1,paddingBottom:15}}>
                      <Text style={{fontSize:16,fontWeight:'bold',marginTop:15}}>关键数据</Text>
                      <View style={styles.key_data_wrap}>
                        <Text style={styles.key_data_wrap_text}>点击（次）</Text>
                        <Text style={styles.key_data_wrap_text}>点击价（元）</Text>
                        <Text style={styles.key_data_wrap_text}>总消耗（元）</Text>
                      </View>
                      <View style={styles.key_data_wrap}>
                        <Text style={styles.key_data_wrap_text}>9</Text>
                        <Text style={styles.key_data_wrap_text}>3</Text>
                        <Text style={styles.key_data_wrap_text}>27</Text>
                      </View>
                    </View>
                    <View style={{width:100,height:40,lineHeight:40,alignItems:'center',justifyContent:'center', marginTop:20,borderColor:'#ccc',borderWidth:1}}>
                      <Text style={{color:'#333',fontSize:14}}>点击量曲线图</Text>
                    </View>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLine
                        style={{
                          data: { stroke: "#c43a31" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={chartNum2}
                      />
                    </VictoryChart>
                </View>
                <View style={styles.tab_item}>
                <View style={{width:'100%',marginTop:15,display:'flex',flexDirection:'row'}}>
                      {
                        days.map((day,index) => {
                          return <TouchableOpacity
                                    key={index}
                                    style={{width:'25%',alignItems:'center'}}
                                    onPress={this._toggleDay.bind(this,index)}
                                  >
                                    <Text style={[styles.day_text,daySelect == index ? styles.day_text_active : '']}>{day.title}</Text>
                                </TouchableOpacity>
                        })
                      }
                    </View>
                    <View style={{borderBottomColor:sass.Theme,borderBottomWidth:1,paddingBottom:15}}>
                      <Text style={{fontSize:16,fontWeight:'bold',marginTop:15}}>关键数据</Text>
                      <View style={styles.key_data_wrap}>
                        <Text style={styles.key_data_wrap_text}>点击（次）</Text>
                      </View>
                      <View style={styles.key_data_wrap}>
                        <Text style={styles.key_data_wrap_text}>93</Text>
                      </View>
                    </View>
                    <View style={{width:100,height:40,lineHeight:40,alignItems:'center',justifyContent:'center', marginTop:20,borderColor:'#ccc',borderWidth:1}}>
                      <Text style={{color:'#333',fontSize:14}}>点击量曲线图</Text>
                    </View>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLine
                        style={{
                          data: { stroke: "#c43a31" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={chartNum3}
                      />
                    </VictoryChart>
                </View>
              </Tabs>
            </View>
            
           </SafeAreaView>
       )
    }
}
const styles=StyleSheet.create({
  tab_item:{
    width:'100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft:15,
    paddingRight:15
  },
  day_text:{
    color:'#333',
    fontSize:14,
  },
  day_text_active:{
    color:sass.Theme,
  },
  key_data_wrap:{
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:15
  },
  key_data_wrap_text:{
   textAlign:'center',
   width:'33.3%',
   color:'#333',
   fontSize:14
 },
})

export default Data