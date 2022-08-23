import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Get from "../Screens/Get";
import Details from "../Screens/Details";
import Edit from '../Screens/Edit.js';


const screens ={
INTERNS:{
    screen:Get
},
INTERNS_INFO:{
    screen:Details
},
EDIT:{
    screen:Edit
}

}
const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack)
