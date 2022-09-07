import React from 'react'
import  { ComponentWillUnmount } from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,PermissionsAndroid,Button } from 'react-native';
import { useEffect, useState } from "react";
import Axios from 'axios';
import loader from '../Assets/loader.gif';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Add = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');

    const Addintern = (name,mobile,designation,email) => {
        const formData = new FormData()
        // setHeadingText("Your form got submitted!!");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("designation", designation);
        // formData.append("profile_image", profile_image);

        // e.preventDefault();
        // setLoading(true);

        Axios.post("https://interns-new.herokuapp.com/list", formData)
            .then(res => {
                // setLoading(false);
                console.log("posting data", res);
            })
            // setLoading(true)
            .catch((err) => console.log(err));

        }
  return (
   <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'grey'}}>
 <View ><TextInput style={styles.tfield}  onChangeText={name => setName(name)} placeholder='Name'></TextInput></View>
        <View><TextInput style={styles.tfield}  onChangeText={mobile=> setMobile(mobile)} placeholder='Contact No'></TextInput></View>
        <View><TextInput style={styles.tfield} onChangeText={designation => setDesignation(designation)} placeholder='Email ID'></TextInput></View>
        <View><TextInput style={styles.tfield}  onChangeText={email => setEmail(email)} placeholder='Designation'></TextInput></View>
       <Button style={{width:100}} title='SUBMIT' onPress={()=> Addintern(name,mobile,email,designation)

       }/>
   </View>
  )
}
const styles = StyleSheet.create({
tfield:{
    padding:25,
    margin:20,
    height:40,
    width:350,
    color:'white',
    borderWidth:3,
    borderColor:'white',
    borderRadius:30,

}



})

export default Add;
