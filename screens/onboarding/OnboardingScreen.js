//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

// create a component
const { width, height } = Dimensions.get("screen");
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const pages = [
    {
      backgroundColor: "#fff",
      image: (
        <Image
          source={require("../../assets/Images/intro1.jpg")}
          resizeMode='contain'
          style={styles.imageIntro}
        />
      ),
      title: "Welcome",
      subtitle: "Welcome to the first slide of the Onboarding Swiper.",
    },
    {
      backgroundColor: "#fff",
      image: (
        <Image
          source={require("../../assets/Images/intro2.jpg")}
          resizeMode='contain'
          style={styles.imageIntro}
        />
      ),
      title: "Explore",
      subtitle: "This is the second slide of the Onboarding Swiper.",
    },
    {
      backgroundColor: "#fff",
      image: (
        <Image
          source={require("../../assets/Images/intro3.jpg")}
          resizeMode='contain'
          style={[styles.imageIntro]}
        />
      ),
      title: "All Done",
      subtitle: "This is the Third slide of the Onboarding Swiper.",
    },
  ];

  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "#fff" : "#c0c0c0";
    return (
      <View
        style={{
          width: 7,
          height: 7,
          marginHorizontal: 3,
          backgroundColor,
          borderRadius: 50,
        }}
      />
    );
  };

  const Done = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: 20,
          fontFamily: "Poppins_400Regular",
        }}>
        Xong
      </Text>
    </TouchableOpacity>
  );
  const Skip = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: 20,
          fontFamily: "Poppins_400Regular",
        }}>
        Bỏ qua
      </Text>
    </TouchableOpacity>
  );
  const Next = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: 20,
          fontFamily: "Poppins_400Regular",
        }}>
        Tiếp
      </Text>
    </TouchableOpacity>
  );

  return (
    <Onboarding
      onSkip={() => navigation.replace("TabBottom")}
      onDone={() => navigation.replace("TabBottom")}
      DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DotComponent={Dots}
      pages={pages}
      titleStyles={{
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        color: "#A10707",
      }}
      subTitleStyles={{
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        color: "#A49F0A",
      }}
      containerStyles={styles.container}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageIntro: {
    width: width,
    height: width,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default OnboardingScreen;
