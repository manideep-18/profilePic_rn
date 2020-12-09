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
    <View style={styles.container}>
      <Text>Hello</Text>
      {image?(<Text>Image is there</Text>):
      (<RNCamera style={styles.preview}
         type={RNCamera.Constants.Type.back} 
        captureAudio={false}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title:"Permission to use camera",
          message:"longer text to use camera",
          buttonPositive:"Ok",
          buttonNegative:"Cancel"
        }}
        androidRecordAudioPermissionOptions={{
          title:"Permission to use audio",
          message:"longer text to use audio",
          buttonPositive:"Ok",
          buttonNegative:"Cancel"
        }}
      >
        {({camera,status})=>{
          if(status !== 'READY') return <PendingView/>
          return (
            <View style={{flex:'0',flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity onPress={()=>takePicture(camera)} style={styles.capture}>
                <Text>SNAP</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      </RNCamera>)}
    </View>
    </>
  )
}



export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"#0A79DF"
  },
  preview:{
    flex:1,
    justifyContent:"space-around",
    alignItems:'center'
  },
  capture:{
    flex:0,
    backgroundColor:'orange',
    padding:20,
    alignSelf:'center'
  }
})