import React, { ComponentWillUnmount } from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, PermissionsAndroid, Alert } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import loader from '../Assets/loader.gif';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
// import { Picker } from 'react-native-web';


const Edit = ({ navigation }) => {

    //    const route=useRoute();

    const [name, setName] = useState(navigation.getParam('name'));
    const [mobile, setMobile] = useState(navigation.getParam('mobile'));
    const [designation, setDesignation] = useState(navigation.getParam('designation'));
    const [email, setEmail] = useState(navigation.getParam('email'));
    // const [profile_image, setProfile_image] = useState(navigation.getParam('profile_image'))
    const [loading, setLoading] = useState(false);
    const id = navigation.getParam('id');
   

    const alert = () => {
        Alert.alert(
            "Your Profile Got Updated Successfully!!",
            "",
            [
                {
                    text: "",

                },
                {
                    text: "OK", onPress: () =>
                    // internDelete(id)
                    {
                        navigation.navigate('Get')

                        // getagain()
                    }
                }
            ]
        )
    }

   
    const handleUpdate = async (id, name, mobile, designation, email,
        //  profile_image
    ) => {
        

        axios.put("https://interns-new.herokuapp.com/list/" + id,
            // formData
            { name: name, mobile: mobile, email: email, designation: designation }
        )

            .then(res => {

                console.log("posting data", res);
            })

            .catch((error) => console.log(error));
       
        setLoading(true)
        setTimeout(() => {
            alert();
        }, 10000);


    }


    if (loading) {
        return (<View style={styles.loadcont}>
            <Text style={styles.load}>Please Wait Your Profile is Being Updated!</Text>

            <Image style={styles.loader} source={loader} />

        </View>
        )
    }
    // console.log("navigate",navigation)

    const image = navigation.getParam('profile_image');
    const altImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701__340.png";

    const img1 = image == null ? altImg : image;

    return (<View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Get')}><Text>Back</Text></TouchableOpacity>
        <TouchableOpacity >
            <Image
                // style={styles.img}
                source={{
                    uri: img1,

                }}
                style={{ width: 100, height: 100, borderRadius: 65 }}
            />
        </TouchableOpacity>
        <View><Text>{id}</Text></View>
        <View><TextInput style={styles.tfield} defaultValue={name} onChangeText={name => setName(name)}></TextInput></View>
        <View><TextInput style={styles.tfield} defaultValue={mobile} onChangeText={mobile => setMobile(mobile)}></TextInput></View>
        <View><TextInput style={styles.tfield} defaultValue={designation} onChangeText={designation => setDesignation(designation)}></TextInput></View>
        <View><TextInput style={styles.tfield} defaultValue={email} onChangeText={email => setEmail(email)}></TextInput></View>
        <TouchableOpacity style={styles.submit}
            onPress={() => {
                handleUpdate(id, name, mobile, designation, email,
                    // profile_image
                )
                // ; nav()
                // ;get()
            }}>
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
        borderRadius: 10,
    },
    submit: {
        borderRadius: 10,
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

export default Edit;