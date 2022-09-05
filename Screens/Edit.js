import React ,{ComponentWillUnmount} from 'react';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png'
import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from "react";
import axios from 'axios';
import loader from '../Assets/loader.gif';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker'
// import { Picker } from 'react-native-web';


const Edit = ({ navigation,route }) => {

//    const route=useRoute();

    const [name, setName] = useState(navigation.getParam('name'));
    const [mobile, setMobile] = useState(navigation.getParam('mobile'));
    const [desig, setDesig] = useState(navigation.getParam('designation'));
    const [email, setEmail] = useState(navigation.getParam('email'));
    // const [profile_image, setProfile_image] = useState(navigation.getParam('profile_image'))
    const [loading, setLoading] = useState(false);
    const id = navigation.getParam('id');
// const get=()=>{
//     route.param.getAgain;
// }
// const options={
//     title:'pick an image',
//     storageOptions:{
//         skipBackup:true,
//         path:'images',
//     },
// };

// const openPicker=()=>{
//     ImagePicker.launchImageLibrary(options,(response)=>{
//         if(response.didCancel){
//             console.log('User cancelled Image Picker');
//         }   else if(response.error){
//             console.log('Image picker error:',response.error)
//         } else if(response.customeButton){
//             console.log('User Tapped CustomButton',response.customeButton)
//         }else {
//             const source={uri:response.uri};
//         }
       
//     })
// }




const nav =()=>{
    
    navigation.navigate('Get')
    // componentWillUnmount
    // {
    //     alert('im pressed')
    //     const {params}=this.props.navigation.state;
    //     params.callGet();
    // }
  
}
    function handleUpdate(id, name, mobile, designation, email,
        //  profile_image
         ) {
            setLoading(false)
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
       
        axios.put("https://interns-new.herokuapp.com/list/" + id, formData)
       
            .then(res => {

                console.log("posting data", res);
            })
          
            .catch((error) => console.log(error));
        console.log(formData)
        setLoading(true)
    }


    if (loading){
        return (<View style={styles.loadcont}>
            <Text style={styles.load}>Please Wait Your Profile is Being Updated!</Text>
            <Image style={styles.loader} source={loader}/>
            </View>
        )
    }
    // console.log("navigate",navigation)

    const image=navigation.getParam('profile_image');
    const altImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701__340.png";

    const img1 = image == null ? altImg : image ;

    return (<View style={styles.container}>
    <TouchableOpacity >
    <Image 
    // style={styles.img}
                                source={{
                                    uri: img1,
                                    
                                }}
                                style={{ width: 100, height: 100,borderRadius:65}}
                            />
         </TouchableOpacity>
        <View><Text>{id}</Text></View>
        <View><TextInput style={styles.tfield} value={name} onChange={(e) => setName(e.target.value)}></TextInput></View>
        <View><TextInput style={styles.tfield} value={mobile} onChange={(e) => setMobile(e.target.value)}></TextInput></View>
        <View><TextInput style={styles.tfield} value={desig} onChange={(e) => setDesig(e.target.value)}></TextInput></View>
        <View><TextInput style={styles.tfield} value={email} onChange={(e) => setEmail(e.target.value)}></TextInput></View>
        <TouchableOpacity style={styles.submit}
            onPress={()=> {handleUpdate(id, name, mobile, desig, email, 
            // profile_image
            )
            ;nav()
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
        borderRadius:10,
    },
    submit: {
        borderRadius:10,
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
    load:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
       
   
    },
    loadcont:{
      
        marginTop:250,
        alignItems:'center',
    },
    loader:{
        height:40,
        width:40,
    }
})

export default Edit;