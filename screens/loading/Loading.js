//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useSelector } from "react-redux";

// create a component
const Loading = () => {
  const loading = useSelector((state) => state.system.loading);
  return (
    loading && (
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 1,
          backgroundColor: "#d8d8d8",
          opacity: 0.8,
        }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            opacity: 1,
          }}>
          <Image
            source={require("../../assets/icon.png")}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 105,
              height: 105,
            }}>
            <ActivityIndicator size={small} />
          </View>
        </View>
      </View>
    )
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Loading;
