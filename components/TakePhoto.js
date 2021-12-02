import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const TakePhoto = ({startCamera}) => {
    return (
        <TouchableOpacity
        style={{justifyContent:"center",  alignItems: "center",backgroundColor:"#000",flex:1 }}
        onPress={startCamera}
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
            Open Camera
          </Text>
        </View>
      </TouchableOpacity>
    )
}

export default TakePhoto
