//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAction } from "../../redux/actions/product.action";

// create a component
const DetailItemTodo = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.products.productDetail);
  useEffect(() => {
    dispatch(getProductDetailAction(id));
  }, []);
  return (
    <View style={styles.container}>
      <Text>{productDetail.title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default DetailItemTodo;
