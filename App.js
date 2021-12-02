import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import CameraIcon from "react-native-vector-icons/Feather";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import ImagePreview from "./components/ImagePreview";
import TakePhoto from "./components/TakePhoto";

const App = () => {
  const [cameraStarted, setCameraStarted] = useState(false);
  const [flash, setFlashOn] = useState("off");
  const [camera, setCamera] = useState(null);
  const [imagePreview, setimagePreview] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  console.log(camera);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setCameraStarted(true);
    } else {
      alert("You Have not gave us Permission");
    }
  };
  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setimagePreview(photo);
    console.log(photo);
  };
const retakePhoto = () =>{
  setimagePreview(null)
  takePicture()
}
const flashHandler = () =>{
  if (flash==="on") {
    setFlashOn("off")
  }else if(flash==="off"){
    setFlashOn("on")
  }
}

const switchCamera = () => {
  if (cameraType === 'back') {
    setCameraType('front')
  } else {
    setCameraType('back')
  }
}
return (
    <View style={styles.container}>
      {cameraStarted ? (
        imagePreview ? (
         <ImagePreview  imagePreview={imagePreview} retakePhoto={retakePhoto}/>
        ) : (
          <>
            <Camera
              style={{
                flex: 1,
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              ref={(r) => {
                setCamera(r);
              }}
              flashMode={flash}
              type={cameraType}
            >
              <View
                style={{
                  marginBottom: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingHorizontal: 40,
                }}
              >
                <TouchableOpacity onPress={flashHandler}>
                  <View style={{ padding: 10, borderRadius: 80 }}>
                    <Icon
                      name={flash ==="off"? "flash-off-outline" : "flash-outline"}
                      color="#fff"
                      size={28}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePicture}>
                  <View
                    style={{
                      backgroundColor: "red",
                      padding: 20,
                      borderRadius: 80,
                    }}
                  >
                    <CameraIcon name="camera" color="#fff" size={34} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={switchCamera}>
                  <View style={{ padding: 10, borderRadius: 80 }}>
                    <Icon
                      name="md-camera-reverse-outline"
                      color="#fff"
                      size={28}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          </>
        )
      ) : (
      <TakePhoto startCamera={startCamera} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
