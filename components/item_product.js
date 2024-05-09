//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";

// create a component
const ItemProduct = React.memo(({ item }) => {
  const navi = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navi.navigate("DetailItemTodo", { id: item.id })}
      style={styles.item}>
      <Image
        source={{ uri: item.thumbnail }}
        containerStyle={styles.image}
        PlaceholderContent={
          <View style={styles.centerLoading}>
            <ActivityIndicator size={"large"} color={"#0000ff"} />
          </View>
        }
      />
      <Text style={styles.textName}>{item.title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#eee",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    marginBottom: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  centerLoading: {
    width: "100%",
    height: 180,
    alignSelf: "center",
    justifyContent: "center",
  },
  textName: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    textAlign: "center",
  },
});
//make this component available to the app
export default ItemProduct;
