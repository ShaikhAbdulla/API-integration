import React from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png';
import bin from '../Assets/bin.png';
// import { useRoute } from '@react-navigation/native';

import { StyleSheet , Text , View , Image, TouchableOpacity,Alert } from 'react-native';
import { Button } from 'react-native-web';

// import  { useEffect, useState } from "react";
// import axios from "axios";

const Details = ({navigation}) => {
    const altImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701__340.png";
    //     const img1 = data.profile_image == null ? altImg : data.profile_image;
    // console.log('data',data)
  return (<View style={styles.container2}>
   {/* <Image style={styles.bgimg} source={Download}/> */}
   
  <View style={styles.datacontainer}>
  {/* <View style={styles.imgcontainer}> */}
  

  {/* </View> */}
 {/* <Text style={styles.data}>{navigation.getParam('profile_image')== null? altImg : navigation.getParam('profile_image')}</Text> */}
 <View style={styles.imgcont}>
   <Image style={styles.img} source={navigation.getParam('profile_image') == null? altImg : navigation.getParam('profile_image') }/>
   </View>
   <View style={styles.textcont}>
   <Text style={styles.data}>Employe id : {navigation.getParam('id')}</Text>

    <Text style={styles.data}>Name : {navigation.getParam('name')}</Text>
    <Text style={styles.data}>Contact No : {navigation.getParam('mobile')}</Text>
    <Text style={styles.data}>Designation : {navigation.getParam('designation')}</Text>
    <Text style={styles.data}>Email ID : {navigation.getParam('email')}</Text>
    

    </View>
    <TouchableOpacity style={styles.edit} onPress={()=> navigation.navigate('EDIT',navigation)}><Image style={styles.icon} source={editing}/></TouchableOpacity>
    <TouchableOpacity style={styles.delete}
     onPress={()=>Alert.alert('you sure you want to delete')
    //  navigation.navigate('EDIT',data)
    }
     ><Image style={styles.icon} source={bin}/></TouchableOpacity>
   
    </View>


    </View>
  )
}
const styles = StyleSheet.create({
    container2:{
       
        flex:1,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
       
    },
    datacontainer:{
        padding:20,
        height:'89%',
        width:'90%',
        textAlign:'center',
        borderRadius:20,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        // backgroundColor:'#00C9A7',
        shadowColor: '#470000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.3,
        elevation: 10,
       
       
        // width:300,
       
    },
    data:{
       margin:10,
       backgroundColor:'white',
        // backgroundColor:'#B1F3CC',
        padding:8,
        width:'93%',
      
        fontSize:22,
        fontWeight:'bold',
        borderRadius:10,
        shadowColor: '#470000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.3,
        elevation: 10,
        
        // borderWidth:2,
    },
    // imgcontainer:{
    //     height:200,
    //     width:200,
    //     position:'absolute',
    //     top:5,
    //     left:80,
       
       
       
    // },
    img:{
        height:130,
        width:130,
        borderRadius:40,
       
    },
    // bgimg:{
    //     // flex:1,
    //     height:500,
    //     width:500,
    // },
    imgcont:{
        height:150,
        width:150,
        // borderColor:'black',
        borderRadius:40,
        borderWidth: 10,
        backgroundColor:'black',
        shadowColor: '#470000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.3,
        elevation: 10,
    },
    textcont:{
        alignItems:'flex-start',
        width:'95%',

    },
    edit:{
        position:'absolute',
        top:5,
        right:5
    },
    icon:{
       height:30,
       width:30, 
    },
    delete:{
        position:'absolute',
        top:5,
       left:5
    }


})

export default Details;
