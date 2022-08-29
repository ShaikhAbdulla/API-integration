import React from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from "react";
import Axios from "axios";


const Edit = ({ navigation }) => {

    const [name, setName] = useState(navigation.getParam('name'));
    const [mobile, setMobile] = useState(navigation.getParam('mobile'));
    const [desig, setDesig] = useState(navigation.getParam('designation'));
    const [email, setEmail] = useState(navigation.getParam('email'));
    // const [profile_image, setProfile_image] = useState(navigation.getParam('profile_image'))

    const id = navigation.getParam('id');


    function handleUpdate(id, name, mobile, designation, email,
        //  profile_image
         ) {
        const formData = new FormData();
        //         // setHeadingText("Your form got submitted!!");
        formData.append("id", id);
        formData.append("name", name);

        formData.append("mobile", mobile);
        formData.append("email", email);
        formData.append("designation", designation);
        // formData.append("profile_image", profile_image);
        // setHeader("Your Profile Got Updated!!")
        // setLoading(false);

        Axios.put("https://interns-new.herokuapp.com/list/" + id, formData)
            .then(res => {

                console.log("posting data", res);
            })
            // setLoading(true)
            .catch((error) => console.log(error));
        console.log(formData)
    }



    // console.log("navigate",navigation)



    return (<View style={styles.container}>
         {/* <Image source={profile_image} style={styles.img} ></Image> */}
        <View><Text>{id}</Text></View>
        <View><TextInput style={styles.tfield} value={name} onChange={(e) => setName(e.target.value)}></TextInput></View>
        <View><TextInput style={styles.tfield} value={mobile} onChange={(e) => setMobile(e.target.value)}></TextInput></View>
        <View><TextInput style={styles.tfield} value={desig} onChange={(e) => setDesig(e.target.value)}></TextInput></View>
        <View><TextInput style={styles.tfield} value={email} onChange={(e) => setEmail(e.target.value)}></TextInput></View>
        <TouchableOpacity style={styles.submit}
            onPress={handleUpdate(id, name, mobile, desig, email, 
            // profile_image
            )}>
            <Text style={styles.sub}>SUBMIT</Text>
        </TouchableOpacity>







    </View>)
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tfield: {
        padding: 10,
        margin: 20,
        backgroundColor: 'grey',
        height: 50,
        width: 300,
    },
    submit: {
        backgroundColor: '#FF7B7B',
        height: 30,
        width: 70,
    },
    sub: {
        fontSize: 18,
        textAlign: 'center',
    },
    img: {
        backgroundColor: 'black',
        height: 100,
        width: 100,
    }
})

export default Edit;