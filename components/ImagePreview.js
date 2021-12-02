import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'

const ImagePreview = ({imagePreview,retakePhoto}) => {
    return (
        <View style={{justifyContent:"flex-end",backgroundColor:"#000"}}>
        <Image
          source={{ uri: imagePreview.uri }}
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        />
         <TouchableOpacity
        style={{ marginVertical: 10, alignItems: "center" }}
        onPress={retakePhoto}
      >
        <View
          style={{
            height: 70,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: 40,
            width: "50%",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
Retake Photo
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    )
}

export default ImagePreview

