import React from 'react'
import { ComponentWillUnmount } from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, PermissionsAndroid, Button, Alert } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import loader from '../Assets/loader.gif';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Add = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [header, setHeader] = useState('Registration Form')
  const [loading, setLoading] = useState(false);

  const Addintern = async (
    name, mobile, designation, email
  ) => {
    // const formData = new FormData()
    // // setHeadingText("Your form got submitted!!");
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("mobile", mobile);
    // formData.append("designation", designation);
    // // formData.append("profile_image", profile_image);

    // e.preventDefault();
    // setLoading(true);
    axios.post('https://interns-new.herokuapp.com/list', { name: name, mobile: mobile, email: email, designation: designation })

      .then(response => console.log(response.data));
    setLoading(true);
    setHeader('Registration successfull')


  };
  // axios.post("https://interns-new.herokuapp.com/list",{'name_text':'name','mobile_text':'mobile','email_text':'email','designation_text':'designation'})
  //     .then(res => {
  //         // setLoading(false);
  //         console.log("posting data", res);
  //     })
  //     // setLoading(true)
  //     .catch((err) => console.log(err));

  // }
 
  if (loading) {
    return (<View style={styles.loadcont}>
      <Text style={styles.load}>Please Wait..Intern is being added!</Text>
      <Image style={styles.loader} source={loader} />
      {Alert.alert(
        "Profile Got Successfully Added!!",
        "",
        [
          {
            text: "",

          },
          {
            text: "OK", onPress: () =>
            // internDelete(id)
            {
              // nav()
              navigation.navigate('Get');

              // getagain()
            }
          }
        ]
      )}
    </View>
    )
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
      <Text style={{ fontSize: 35, bottom: 90, fontWeight: 'bold' }}>{header}</Text>
      <View ><TextInput style={styles.tfield}
        onChangeText={name => setName(name)} placeholder='Name'></TextInput></View>
      <View><TextInput style={styles.tfield} onChangeText={mobile => setMobile(mobile)} placeholder='Contact No'></TextInput></View>
      <View><TextInput style={styles.tfield} onChangeText={designation => setDesignation(designation)} placeholder='Email ID'></TextInput></View>
      <View><TextInput style={styles.tfield} onChangeText={email => setEmail(email)} placeholder='Designation'></TextInput></View>
      <Button style={{ width: 100 }} title='SUBMIT' onPress={() => Addintern(
        name, mobile, email, designation
      )

      } />
    </View>
  )
}
const styles = StyleSheet.create({
  tfield: {
    backgroundColor: 'white',
    padding: 15,
    margin: 20,
    height: 60,
    width: 300,
    color: 'black',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 30,

  },
  load: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',


  },
  loadcont: {

    marginTop: 250,
    alignItems: 'center',
  },
  loader: {
    height: 40,
    width: 40,
  }



})

export default Add;
