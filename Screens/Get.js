import { StatusBar } from 'expo-status-bar';
// import { useRoute } from '@react-navigation/native';
import Download from '../Assets/Download.jpg';
import editing from '../Assets/editing.png';
import loader from '../Assets/loader.gif';
import { CheckBox, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";
import bin from '../Assets/bin.png';
// import {Card, CardImage } from 'react-native-material-cards';
// import NavigationBar from 'react-native-navbar';

export default function Get({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSelected, setSelection] = useState(false);
    // const[refresh,setRefresh]=useState(false)

    //   const detail = () => {
    //     navigation.navigate('Info')


    //     console.log('i got clicked!!')
    //   }

    // const getInterns= ()=>{



    // const pullme=()=>{
    //     setRefresh(true)
    //     setTimeout(()=>{
    // setRefresh(false)
    //     },10000)
    //     {window.location.reload(false)};

    // }


    useEffect(() => {
        // navigation.addListener('focus', async() =>{
        getInterns()

    }, []

    );

    function getInterns() {
        setLoading(true);
        // await
        axios
            .get("https://interns-new.herokuapp.com/list")
            .then((res) => {
                // return console.log(res.data.result);
                const data = res.data.result;

                console.log(data)
                setData(data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
        // })
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
            })
            .catch((err) => {
                // setLoading(false);
                console.log(err)
            });
    }

    // }
    //   const route=useRoute();

    if (loading) {
        return (<View style={styles.loadcont}>
            <Text style={styles.load}>Please Wait While we load!</Text>
            <Image style={styles.loader} source={loader} />
        </View>
        )
    }

    return (<ScrollView
    //     refreshControl={
    //     <RefreshControl
    // refreshing={refresh}
    // onRefresh={()=>pullme()}
    //     />
    //     }
    >
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
                    console.log('data', data)
                    return <View style={styles.namecontainer}

                        key={data.id}>


                        {/* <Image src={img} 
              onError={(e) => e.target.src = altImg}
              /> */}
                        {/* <Image style={styles.image} source={image}/> */}

                        <TouchableOpacity style={styles.namebut} onPress={() => navigation.navigate('Details', data)}>

                            <Text style={styles.names}>{data.name}</Text>
                            <Text style={styles.desig}>{data.designation}</Text></TouchableOpacity>
                        {/* <Text>{data.mobile}</Text>
      <Text>{data.designation}</Text>
      <Text>{data.email}</Text> */}

                        <StatusBar style="auto" />
                        {/* <Card> */}
                        <View style={styles.imgcontainer}>
                            <Image style={styles.image}
                                source={{
                                    uri: img,
                                    // method: 'GET',
                                    // headers: {
                                    //     Pragma: 'no-cache'
                                    // },
                                    // body: 'Your Body goes here'
                                }}
                            // style={{ width: 80, height: 80,borderRadius:40}}
                            />
                            {/* <Image style={styles.image}  */}
                            {/* // source={{uri:`${img}`}}  */}
                            {/* /> */}
                            {/* <CardImage  source={{uri:data.profile_image}} title='image'/> */}
                        </View>
                        {/* </Card> */}
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('EDIT', data
                            // ,{getAgain:getAgain}
                        )}>
                            <Image style={styles.icon} source={editing} />
                        </TouchableOpacity>
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
                                            internDelete(data.id)

                                            // getagain()
                                        }
                                    }
                                ]
                            )
                                //  navigation.navigate('EDIT',data)
                            }
                        ><Image style={styles.icon} source={bin} /></TouchableOpacity>
                        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
                        {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
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
        height: '120%',
        backgroundColor: 'white',

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
        shadowColor: 'black',
        // shadowColor: '#470000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        elevation: 20,
        // shadowRadius:20,


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
    desig: {
        position: 'absolute',
        left: 75,
        top: 30,
    },
    header: {
        backgroundColor: 'black'
    },
    edit: {
        width: 40,
    },
    icon: {
        height: 20,
        width: 20,
        right: 25,
        margin: 5
    },
    load: {
        fontSize: 20,
        fontWeight: 'bold',


    },
    loadcont: {

        marginTop: 250,
        alignItems: 'center',
    },
    loader: {
        height: 40,
        width: 40,
    },

    delete: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 30,
    }
});