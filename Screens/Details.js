import React, { useEffect, useState } from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png';
import bin from '../Assets/bin.png';
import imgedit from '../Assets/imgedit.png';
// import React,  from "react";
// import { Shadow } from 'react-native-neomorph-shadows';
// import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal } from 'react-native';
// import { Button } from 'react-native-web';
import axios from 'axios';
import { Button } from 'react-native-web';
// import InsetShadow from "react-native-inset-shadow";
// import InsetShadow from 'react-native-inset-shadow'
// import  { useEffect, useState } from "react";
// import axios from "axios";
// import empty from '../Assets/empty.png';
// import hearts from '../Assets/hearts.png';
const Details = ({ navigation }) => {
  const image = navigation.getParam('profile_image');
  const altImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701__340.png";
  const img1 = image == null ? altImg : image;
  const [heart, setHeart] = useState('🖤')
  const [show, setShow] = useState(false)
 
  // console.log('data',data)
  const fav = () => {
    setHeart('♥');
  }
  const alert = () => {
    Alert.alert(
      navigation.getParam('name') + "Got Deleted Successfully!!",
      '',
      [
        {

          text: '',

        },
        {
          text: "OK", onPress: () => {

            navigation.navigate('Get');


          }
        }]
    )
  }
  const internDelete = (id) => {
    // e.preventDefault();
    // setLoading(true);
    axios.delete("https://interns-new.herokuapp.com/list/" + id
      // , formData
    )
      .then(res => {
        // setLoading(true);
        console.log("Deleted", res);
        alert()
        // alert(navigation.getParam('name')+' Got Deleted')
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err)
        // alert(navigation.getParam('name'),'got deleted')
      });
  }
  const id = navigation.getParam('id');
  const nav = () => {
    navigation.navigate('Get');
  }


  return (<View style={styles.container2}>
    {/* <Image style={styles.bgimg} source={Download}/> */}

    <View
      style={styles.datacontainer}
    >

      <TouchableOpacity style={styles.edit} onPress={fav}>
        {/* <Image style={styles.iconh} source={heart}/> */}
        <Text style={styles.iconh}>{heart}</Text>
      </TouchableOpacity>
      {/* <View style={styles.imgcontainer}> */}
      {/* </View> */}
      {/* <Text style={styles.data}>{navigation.getParam('profile_image')== null? altImg : navigation.getParam('profile_image')}</Text> */}
      <View style={styles.imgcont}>
        {/* <Image style={styles.img} source={Download}
//    {navigation.getParam('profile_image') == null? altImg : navigation.getParam('profile_image') }
   /> */}
        <TouchableOpacity onPress={() => setShow(true)}>
          <Image style={styles.img}
            source={{
              uri: img1,
            }}
          // style={{ width: 129, height: 129,borderRadius:65}}
          />
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={show}>
          <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
            <View style={{ backgroundColor: 'black', margin: 50, padding: 40, borderRad: 10, flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                // style={styles.img}
                source={{
                  uri: img1,

                }}
                style={{
                  width: 373, height: 350
                  // ,borderRadius:65
                }} 
              />
              <View style={{ flexDirection: 'row', position: 'absolute', left: 8, top: 5, }}>
                <TouchableOpacity onPress={() => {
                  setShow(false)
                }}><Text style={{ fontSize: 40, color: 'white', transform: [{ rotate: '180deg' }] }}>➔</Text></TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'white', top: 5, left: 30 }}>{navigation.getParam('name')}</Text>

              </View>
              <View style={{ left: 153, bottom: 483 }}>
                <TouchableOpacity>
                  <Image source={imgedit} style={{ height: 40, width: 40, }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.textcont}>

        <Text style={styles.data}>Employe id : {id} </Text>
        <Text style={styles.data}>Name : {navigation.getParam('name')}</Text>
        <Text style={styles.data}>Contact No : {navigation.getParam('mobile')}</Text>
        <Text style={styles.data}>Designation : {navigation.getParam('designation')}</Text>
        <Text style={styles.data}>Email ID : {navigation.getParam('email')}</Text>


      </View>
      {/* <View style={styles.ht}><TouchableOpacity style={styles.edit} onPress={fav} ><Image style={styles.iconh} source={heart}/></TouchableOpacity></View> */}
      <TouchableOpacity style={styles.delete}
        onPress={() => Alert.alert(
          "Are you sure you Want to Delete This?",
          "The Intern will be deleted permanently",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "YES", onPress: () =>
              // internDelete(id)
              {
                internDelete(id);
                // nav();
                // getagain()
              }
            }
          ]
        )
          //  navigation.navigate('EDIT',data)
        }
      ><Image style={styles.icon} source={bin} /></TouchableOpacity>

    </View>



  </View>
  )
}
const styles = StyleSheet.create({
  container2: {

    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1

  },
  datacontainer: {

    padding: 20,
    height: '89%',
    width: '90%',
    textAlign: 'center',
    borderRadius: 20,
    // justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // backgroundColor:'#00C9A7',
    shadowColor: 'black',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    elevation: 10,
    marginBottom: 35,


    // width:300,

  },
  data: {
    margin: 10,
    backgroundColor: 'white',
    // backgroundColor:'#B1F3CC',
    padding: 8,
    width: '93%',

    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 10,
    shadowColor: 'black',
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
  img: {
    height: 130,
    width: 130,
    borderRadius: 40,

  },
  // bgimg:{
  //     // flex:1,
  //     height:500,
  //     width:500,
  // },
  imgcont: {
    height: 150,
    width: 150,
    // borderColor:'black',
    borderRadius: 40,
    borderWidth: 10,
    backgroundColor: 'black',
    shadowColor: '#470000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    elevation: 10,
  },
  textcont: {
    alignItems: 'flex-start',
    width: '95%',

  },
  edit: {
    position: 'absolute',
    top: -5,
    right: 5,
    // width:40,

  },
  icon: {
    height: 30,
    width: 30,
  },
  delete: {
    position: 'absolute',
    top: 5,
    left: 5
  },
  iconh: {
    fontSize: 40,
    fontWeight: 'bold',

  },



})

export default Details;    

