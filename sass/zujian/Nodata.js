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
import {inject,observer} from 'mobx-react'
import { sass } from '../theme/theme';
import { api } from '../interface/interface';
import { Divider } from 'react-native-elements';