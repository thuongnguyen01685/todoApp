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
    image: require("../../../assets/Images/tintuc/1.jpg"),
    title: "Cấy collagen tươi",
  },
  {
    image: require("../../../assets/Images/tintuc/4.jpeg"),
    title: "Cấy collagen tươi",
  },
  {
    image: require("../../../assets/Images/tintuc/2.jpeg"),
    title: "Cấy collagen tươi",
  },
];
const ListNewsHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Tin tức</Text>
        <TouchableOpacity>
          <Text style={styles.all}>Tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.viewNews}>
          {data.map((item, index) => (
            <TouchableOpacity style={styles.itemNews} key={index}>
              <Image source={item.image} style={styles.imageNews} />
              <Text style={styles.titleNews}>{item.title}</Text>
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
  viewNews: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  itemNews: {
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
  imageNews: {
    width: width * 0.7,
    height: width * 0.4,
  },
  titleNews: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    color: "#fff",
  },
});

//make this component available to the app
export default ListNewsHome;
