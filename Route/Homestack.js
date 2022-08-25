import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Get from "../Screens/Get";
import Details from "../Screens/Details";
import Edit from '../Screens/Edit.js';
import react from "react";
import { StyleSheet , Text , View , Image, TouchableOpacity,Alert,Button } from 'react-native';


// const screens ={
// INTERNS:{
//     screen:Get,
  
// },
// INTERNS_INFO:{
//     screen:Details
// },
// EDIT:{
//     screen:Edit
// }

// }
const screens ={
    Get:{
        screen:Get,
        navigationOptions:{
            title: "INTERNS",
            headerStyle:{
            backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            
            // headerShown:false,
           
        },
       
       
    },
    Details:{
        screen:Details,
        navigationOptions:{
            title: "INTERNS_INFO",
            headerStyle:{
            backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },
    EDIT:{
            screen:Edit
         }
    
    
    }
const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack)
