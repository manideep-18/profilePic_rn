/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
  Button
} from 'react-native';

import {RNCamera} from 'react-native-camera'

const PendingView=()=>{
  <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
    <Text style={{fontSize:30,color:'red'}}>Loading...</Text>
  </View>
}

const App=()=>{
  const [image,setImage]=useState(null)

  const takePic=async (camera) =>{
    try{
      const options={quality:0.9,base64:false}
      const data=await camera.takePictureAsync(options)
      setImage(data.uri)
    }
    catch(error){
      console.warn(error)
    }
  }

  return(
    <>
    <View>
      <Text>Hello</Text>
    </View>
    </>
  )
}



export default App;
