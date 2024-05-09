//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// create a component
const data = [
  {
    icon: <Ionicons name="heart" size={30} color={"#dd1f2e"} />,
    text: "Phun xăm",
  },
  {
    icon: <Ionicons name="heart" size={30} color={"#dd1f2e"} />,
    text: "Làm đẹp da",
  },
  {
    icon: <Ionicons name="heart" size={30} color={"#dd1f2e"} />,
    text: "Spa",
  },
  {
    icon: <Ionicons name="heart" size={30} color={"#dd1f2e"} />,
    text: "Mỹ phẩm",
  },
];
const OrtherPart = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
          }}
          key={index}>
          {item.icon}
          <Text style={styles.title}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 5,
    flexDirection: "row",
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    textAlign: "center",
  },
});

//make this component available to the app
export default OrtherPart;
