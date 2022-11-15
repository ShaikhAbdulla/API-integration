import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Navigator from "./Route/Homestack";
import NetInfo from '@react-native-community/netinfo';
import nowifi from './Assets/nowifi.png'

export default function App() {
  const [error, setError] = useState('')
  const [netInfo, setNetInfo] = useState('')

useEffect(()=>{
  const unsubscribe = NetInfo.addEventListener((state) => {
    setNetInfo(`connectionType:${state.type}      
    isConnected?${state.isConnected}`)
    // if (state.isConnected==false) {
    //     setError(alert('Connection Lost'),
    //      <View style={{flexDirection:'row',alignItems:'center'}}>
        
    //      <Image style={{height:50,width:50}} source={nowifi}/><Text style={{ color: 'red', fontSize: 15 }}>Connection Lost</Text>
    //     </View>
    //     )
    // }
     if (state.isConnected==false) {
        // const timeout1 = setTimeout(() => {
          
            
            const time= setTimeout(()=> {
                setError(<View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:40,width:40}} source={nowifi}/>
                <Text style={{ color: 'red', fontSize: 15 }}>Connection Lost</Text></View>)

            },3000);
      
        setError(
         <View style={{flexDirection:'row',alignItems:'center'}}>
        
         {/* <Image style={{height:50,width:50}} source={nowifi}/> */}
        </View>
        )
    // }, 1000);
    } 
     else { 
        
        setError(
        <View style={{alignItems:'center',backgroundColor:'green',width:370
         }}>
        <Text style={{color:'white'}}>Back online</Text>
        </View>
        )
        const timeout = setTimeout(() => {
          
            setError()
            
        }, 2000);
        
        // setError()
    }


    // Toast.show({
    //   type: 'error',
    //   text1: `You're offline. Please check your internet connection`,
    //   position: 'top',
    // autoHide: false 
    // })

})



return () => unsubscribe()
}, []
);


  return (
    <View style={styles.container}>
       

      <Navigator/>
      <View style={{alignItems:'center',backgroundColor:'white'}}><Text>{error}</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});