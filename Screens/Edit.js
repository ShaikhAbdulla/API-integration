import React from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import  { useEffect, useState } from "react";
import axios from "axios";


const Edit = ({navigation}) => {




// console.log("navigate",navigation)



    return (<View style={styles.container}>
        <View><Text>{navigation.getParam('name')}</Text></View>
        <View><TextInput style={styles.tfield} value={navigation.getParam('name')}></TextInput></View>
        <View><TextInput style={styles.tfield} >{navigation.getParam('mobile')}</TextInput></View>
        <View><TextInput style={styles.tfield} >{navigation.getParam('designation')}</TextInput></View>
        <View><TextInput style={styles.tfield} >{navigation.getParam('email')}</TextInput></View>
        <TouchableOpacity style={styles.submit}><Text style={styles.sub}>SUBMIT</Text></TouchableOpacity>







    </View>)
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    tfield:{
        margin:20,
        backgroundColor:'grey',
        height:50,
        width:300,
    },
    submit:{
        backgroundColor:'#FF7B7B',
        height:30,
        width:70,
    },
    sub:{
        fontSize:18,
        textAlign:'center',
    }
})

export default Edit;