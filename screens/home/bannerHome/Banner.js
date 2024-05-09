//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-native-banner-carousel-updated";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");
const Banner = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { opacity } = props;

  const images = [
    {
      hinh_anh: require("../../../assets/Images/bgng1.jpg"),
    },
    {
      hinh_anh: require("../../../assets/Images/bgng.png"),
    },
    {
      hinh_anh: require("../../../assets/Images/doinguktv.jpg"),
    },
  ];

  const renderPage = (item, index) => {
    return (
      <ImageBackground
        style={{
          width,
          height: 210,
        }}
        source={item.hinh_anh}
        key={index}>
        <Animated.View
          style={{
            zIndex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            opacity: opacity,
            marginTop: Constants.statusBarHeight || 20,
            backgroundColor: "#fff",
            width,
            height: 50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              textAlign: "center",
            }}>
            Trang chủ
          </Text>
        </Animated.View>
      </ImageBackground>
    );
  };

  return (
    <Carousel autoplay autoplayTimeout={3000} loop index={0} pageSize={width}>
      {images?.map((image, index) => renderPage(image, index))}
    </Carousel>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Banner;
