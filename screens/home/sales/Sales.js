//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// create a component
const { width, height } = Dimensions.get("screen");
const Sales = () => {
  return (
    <View style={styles.sale}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: width * 0.5,
        }}>
        <Image
          source={require("../../../assets/icon/git.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontFamily: "Poppins_500Medium" }}>Ưu đãi của tôi</Text>
        <Ionicons name="chevron-forward" size={25} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Ionicons name="card-outline" size={20} />
        <Text style={{ fontFamily: "Poppins_500Medium", marginHorizontal: 5 }}>
          250.000
        </Text>
        <Ionicons name="chevron-forward" size={25} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  sale: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    width,
    borderBottomWidth: 4,
    borderColor: "#f8f8f8",
  },
});

//make this component available to the app
export default Sales;
