import { StatusBar } from 'expo-status-bar';
// import { useRoute } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Get({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //   const detail = () => {
    //     navigation.navigate('Info')


    //     console.log('i got clicked!!')
    //   }



    useEffect(() => {

        setLoading(true);
        axios.get("https://interns-new.herokuapp.com/list")
            .then((res) => {
                // return console.log(res.data.result);
                const data = res.data.result;
                setLoading(false);
                console.log(data)
                setData(data);
            })
            .catch((err) => console.log(err));
    }, []);


    //   const route=useRoute();


    return (<ScrollView>
        <View style={styles.container1}>
            <View
                style={styles.container0}
            >
                {data.map((data) => {
                    {/* {console.log(data)}   */ }



                    {/* const imgUrl = `https://interns-new.herokuapp.com${data.profile_image}`;  */ }
                    const altImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701__340.png";
                    const img = data.profile_image == null ? altImg : data.profile_image;



                    {/* <View  style={styles.maincontainer}  > */ }
                    console.log('data',data)
                    return <View style={styles.namecontainer}

                        key={data.id}>


                        {/* <Image src={img} 
              onError={(e) => e.target.src = altImg}
              /> */}
                        {/* <Image style={styles.image} source={image}/> */}
                       
                        <TouchableOpacity style={styles.namebut} onPress={() => navigation.navigate('INTERNS_INFO', data)}>

                            <Text style={styles.names}>{data.name}</Text>
                            <Text style={styles.desig}>{data.designation}</Text></TouchableOpacity>
                        {/* <Text>{data.mobile}</Text>
      <Text>{data.designation}</Text>
      <Text>{data.email}</Text> */}

                        <StatusBar style="auto" />
                        <View style={styles.imgcontainer}>
                            <Image style={styles.image} source={img} />
                        </View>
                    </View>
                    

                    {/* </View> */ }
                })}
                
            </View>
            

        </View>

    </ScrollView>);
}

const styles = StyleSheet.create({
    container1: {

        alignItems: 'center',
        // alignContent:'center',

        // backgroundColor: '#FFCE33',
        height: '100%',


    },
    container0: {
        alignItems: 'center',
    },
    namecontainer: {
        // borderWidth: 1,
        // alignItems: 'center',
        margin: 30,
        padding: 5,
        borderRadius: 20,
        height: 80,
        width: 290,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: '#470000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.3,
        elevation: 10,

    },

    names: {
        padding: 5,
        fontSize: 19,
        fontWeight: 'bold',
        position: 'absolute',
        top: -4,

        left: 55,
    },

    image: {
        height: 75,
        width: 75,
        borderRadius: 35,


    },
    namebut: {
        width: "100%",


    },

    imgcontainer: {


        borderWidth: 5,
        borderRadius: 50,
        position: 'absolute',
        top: 18,
        left: -15,
        // backgroundColor: 'black',
        // shadowColor: '#470000',
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.3,
        // elevation: 10,


    },
    desig:{
        position:'absolute',
        left:75,
        top:30,
    }
});