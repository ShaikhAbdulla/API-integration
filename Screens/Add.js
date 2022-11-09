import React from 'react'
import { ComponentWillUnmount } from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, PermissionsAndroid, Button, Alert } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import loader from '../Assets/loader.gif';
import * as ImagePicker from 'expo-image-picker';

const Add = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [header, setHeader] = useState('Registration Form')
  const [loading, setLoading] = useState(false); 

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [imageUri, setImageUri] = useState('https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701__340.png')


  useEffect(() => {
    (async () => {

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted')


    })();


  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageUri(result.uri);
    }




  }

  const alert = () => {
    Alert.alert(
      "Profile Got Successfully Added!!",
      "",
      [
        {
          text: "",

        },
        {
          text: "OK", onPress: () => {

            navigation.navigate('Get');

          }
        }
      ]
    )
  }






  const Addintern = async (
    name, mobile, designation, email
    // ,imageUri
  ) => {

    axios.post('https://interns-new.herokuapp.com/list', {
      name: name, mobile: mobile, email: email, designation: designation
      // ,profile_image: imageUri   
    })

      .then(response => console.log(response.data));
    setLoading(true);

    setHeader('Registration successfull')

    setTimeout(() => {
      alert();
    }, 10000);



  };


  if (loading) {
    return (<View style={styles.loadcont}>
      <Text style={styles.load}>Please Wait..Intern is being added!</Text>
      <Image style={styles.loader} source={loader} />

    </View>
    )
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey', alignContent: 'center' }}>
      {/* <Text style={{ fontSize: 35, bottom: 90, fontWeight: 'bold', marginTop: 60 }}>{header}</Text> */}
      <View style={{ alignItems: 'center', justifyContent: 'center', top: 50 }}>
        <View style={{ bottom: 15 }}><TouchableOpacity onPress={() => { pickImage() }} >{imageUri &&
          <Image
            style={{ height: 150, width: 150, bottom: 50 }}
            source={{ uri: imageUri }} />}</TouchableOpacity></View>

        <View style={{ bottom: 40, alignItems: 'center', justifyContent: 'center' }}><TextInput style={styles.tfield}
          onChangeText={name => setName(name)} placeholder='Name'></TextInput>
          <TextInput style={styles.tfield} onChangeText={mobile => setMobile(mobile)} placeholder='Contact No'></TextInput>
          <TextInput style={styles.tfield} onChangeText={designation => setDesignation(designation)} placeholder='Email ID'></TextInput>
          <TextInput style={styles.tfield} onChangeText={email => setEmail(email)} placeholder='Designation'></TextInput>
          <View style={{ width: 100, alignContent: 'center' }}>
            <Button style={{ width: 50 }} title='SUBMIT' onPress={() => Addintern(
              name, mobile, email, designation
            )
            } /></View><Text>{imageUri}</Text></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  tfield: {
    backgroundColor: 'white',
    padding: 15,
    margin: 15,
    height: 60,
    width: 300,
    color: 'black',
    // borderWidth: 3,
    // borderColor: 'white',
    borderRadius: 5,

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
