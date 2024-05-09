//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Banner from "./bannerHome/Banner";

import Sales from "./sales/Sales";
import OrtherPart from "./otherPart/OrtherPart";
import ListSpaHome from "./spa/ListSpaHome";
import ListProductHome from "./products/ListProductHome";
import ListNewsHome from "./news/ListNewsHome";

// create a component
const { width, height } = Dimensions.get("screen");
const HEADER_HEIGHT = 170;
const DATA = [
  {
    id: 1,
    title: "The Hunger Games",
  },
  {
    id: 2,
    title: "Harry Potter and the Order of the Phoenix",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
  },
  {
    id: 5,
    title: "Twilight",
  },
  {
    id: 6,
    title: "The Book Thief",
  },
  {
    id: 7,
    title: "The Chronicles of Narnia",
  },
  {
    id: 8,
    title: "Animal Farm",
  },
  {
    id: 9,
    title: "Gone with the Wind",
  },
  {
    id: 10,
    title: "The Shadow of the Wind",
  },
  {
    id: 11,
    title: "The Fault in Our Stars",
  },
  {
    id: 12,
    title: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    id: 13,
    title: "The Giving Tree",
  },
  {
    id: 14,
    title: "Wuthering Heights",
  },
  {
    id: 15,
    title: "The Da Vinci Code",
  },
];
const Home = () => {
  const navigation = useNavigation();

  const offset = useRef(new Animated.Value(0)).current;
  const opacity = new Animated.Value(0);

  const [tamp, setTamp] = useState(offset);

  const insets = useSafeAreaInsets();

  const headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });

  const handleScroll = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    offset.setValue(y);
    if (y > 120) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar style={{ paddingTop: Constants.statusBarHeight || 20 }} />
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            height: headerHeight,
            backgroundColor: "lightblue",
          }}>
          <Banner opacity={opacity} />
        </Animated.View>
        <ScrollView
          style={{ flex: 1, backgroundColor: "white" }}
          contentContainerStyle={{
            alignItems: "center",
            paddingTop: 210,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={handleScroll}>
          <Sales />
          <OrtherPart />
          <ListSpaHome />
          <ListProductHome />
          <ListNewsHome />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
export default Home;
