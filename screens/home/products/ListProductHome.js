//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "react-native-elements";

// create a component
const { width, height } = Dimensions.get("screen");
const data = [
  {
    image: require("../../../assets/Images/product/huyetthanhtrinam.jpg"),
    title: "Cấy collagen tươi",
  },
  {
    image: require("../../../assets/Images/product/kemtrinam.jpg"),
    title: "Cấy collagen tươi",
  },
  {
    image: require("../../../assets/Images/product/tinhchattrangda.jpg"),
    title: "Cấy collagen tươi",
  },
];
const ListProductHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Mỹ phẩm</Text>
        <TouchableOpacity>
          <Text style={styles.all}>Tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.viewPro}>
          {data.map((item, index) => (
            <TouchableOpacity style={styles.itemPro} key={index}>
              <Image source={item.image} style={styles.imagePro} />
              <Text style={styles.titlePro}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width,
    marginTop: 10,
  },
  viewTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
  },
  all: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#dd1f2e",
  },
  viewPro: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  itemPro: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#dd1f2e",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 10,
  },
  imagePro: {
    width: width * 0.4,
    height: width * 0.4,
  },
  titlePro: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    color: "#fff",
  },
});

//make this component available to the app
export default ListProductHome;
