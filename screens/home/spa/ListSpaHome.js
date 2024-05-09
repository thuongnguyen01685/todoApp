//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";

// create a component
const { width, height } = Dimensions.get("screen");
const data = [
  {
    image: require("../../../assets/Images/lamdepda/caycologentuoi.jpg"),
    title: "Cấy collagen tươi",
  },
  {
    image: require("../../../assets/Images/lamdepda/caytrangdamat.jpg"),
    title: "Cấy trắng da mặt",
  },
  {
    image: require("../../../assets/Images/lamdepda/giaidocda.jpg"),
    title: "CGiải độc da",
  },
  {
    image: require("../../../assets/Images/lamdepda/nangcogiamnhan.jpg"),
    title: "Nâng cơ giảm nhăn",
  },
  {
    image: require("../../../assets/Images/lamdepda/thunhochanlong.jpg"),
    title: "Thu nhỏ chân lông",
  },
  {
    image: require("../../../assets/Images/lamdepda/xoadomnau.jpg"),
    title: "Xóa đốm nâu",
  },
];
const ListSpaHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Đừng bỏ lỡ</Text>
        <TouchableOpacity>
          <Text style={styles.all}>Tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewSpa}>
        {data.map((item, index) => (
          <TouchableOpacity style={styles.itemSpa} key={index}>
            <Image source={item.image} style={styles.imageSpa} />
            <Text style={styles.titleSpa}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  viewSpa: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  itemSpa: {
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
  imageSpa: {
    width: width * 0.4,
    height: width * 0.4,
  },
  titleSpa: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    color: "#fff",
  },
});

//make this component available to the app
export default ListSpaHome;
