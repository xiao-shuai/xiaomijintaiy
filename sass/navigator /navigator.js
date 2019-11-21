import React,{Component} from 'react'
import { 
    
     createAppContainer,
      
    } from 'react-navigation';
    import {createStackNavigator} from 'react-navigation-stack'
import {ImageBackground} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {sass} from '../theme/theme'
import Home from '../home/Home'
import My from '../my/My'
import Release from '../release/Release'
import LogEntry from '../logpage/LogEntry'
import RegEntry from '../logpage/RegEntry'
import Data from '../home/data/data'
import Xc from '../home/xc/xc'
import XcDetail from '../home/xc/xc_detail'
import Market from '../home/market/market'
import News from '../my/News'
import News2 from '../my/News2'
import Myf from '../my/Myf'
import Search_sj  from '../home/Search_sj'
import Search_sj_xq  from '../home/Search_sj_xq'
import Qybb_xq from '../home/Qybb_xq'
import Fenxi from '../home/Fenxi'
import Yszc from '../logpage/Yszc'
import { isModuleDeclaration } from '@babel/types';
  const TabNavigator=createBottomTabNavigator(
    {
        Home: Home,
        Fenxi:Fenxi,
        My:My,
        // Search_sj_xq:Search_sj_xq
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
           
            let iconName;
            if (routeName === 'Home') {
              iconName = 'home';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'My') {
                 iconName = `user`;
            } 
            else if (routeName==='Fenxi'){
                iconName=`send`
            }
            else if (routeName==`LogEntry`){
                iconName=`earth`
            }
    
            // You can return any component that you like here!
            return <FontAwesome name={iconName} style={{fontSize:25,color:focused?sass.Theme:sass.Theme_hui2}}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: sass.Theme,
          inactiveTintColor: 'gray',
        },
      }
  )

    const StackNavigator=createStackNavigator({

        TabNavigator:{
            screen:TabNavigator,
            navigationOptions:()=>({
                header:null,
                headerBackTitle:null,
            })
          },
          Data:{screen:Data},
          Market:{screen:Market},
          News:{screen:News},
          News2:{screen:News2},
          Release:{screen:Release},
          Myf:{
            screen:Myf,
            navigationOptions:()=>({
                // header:null,
                // headerBackTitle:null,
                title:'反馈',
                headerStyle: {
                  backgroundColor: sass.Theme,
                },
                headerTintColor: '#fff',
            })
          },
          Search_sj:{
            screen:Search_sj,
            navigationOptions:()=>({
                header:null,
                // headerBackTitle:null,
                // title:'反馈'
              
            })
          },
          LogEntry:{
            screen:LogEntry,
            navigationOptions:()=>({
                header:null,
                // headerBackTitle:null,
                // title:'反馈'
            })
          },
          Search_sj_xq:{
            screen:Search_sj_xq,
            navigationOptions:()=>({
                // header:null,
                headerBackTitle:null,
                title:'详情'
            })
          },
          Yszc:{
            screen:Yszc,
            navigationOptions:()=>({
                // header:null,
                headerBackTitle:null,
                title:'用户隐私政策'
            })
          },
          Xc:{screen:Xc},
          XcDetail:{screen:XcDetail},
          Qybb_xq:{screen:Qybb_xq},
        //   Home:{
        //     screen:Home,
        //     navigationOptions:()=>({
        //         header:null,
        //         headerBackTitle:null,
        //     })
        //   },
         
       
          
      
     })   
     export default createAppContainer(StackNavigator)
