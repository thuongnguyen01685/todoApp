//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAction,
  searchProductAction,
} from "../../redux/actions/product.action";
import ItemProduct from "../../components/item_product";
import _ from "lodash";
import { resetProducts } from "../../redux/reducers/product.reducer";
import AddProductModal from "./add_product_modal";

const TodoApp = () => {
  const [page, setPage] = useState(0);
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetchProducts();
    setLoadingMore(false);
  }, [page, key]);

  const fetchProducts = () => {
    dispatch(getProductAction(page, key));
  };

  const loadMore = () => {
    if (!loadingMore && products.length < total) {
      setLoadingMore(true);
      setPage(page + 10);
    }
  };

  const renderFooter = () => {
    if (loadingMore)
      return (
        <View style={styles.loadingMoreContainer}>
          <ActivityIndicator size='small' color='#0000ff' />
        </View>
      );
  };

  const handleSearch = (value) => {
    dispatch(resetProducts());
    setKey(value);
    setPage(0);
  };
  const uniqueProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Nhập từ khóa tìm kiếm...'
          value={key}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={openModal}>
          <Text style={styles.searchButtonText}>Thêm sản phẩm</Text>
        </TouchableOpacity>
        <AddProductModal isVisible={isModalVisible} onClose={closeModal} />
      </View>
      <FlatList
        data={uniqueProducts}
        renderItem={({ item }) => <ItemProduct item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  flatListContent: {
    flexGrow: 1,
  },
  loadingMoreContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
});

//make this component available to the app
export default TodoApp;
