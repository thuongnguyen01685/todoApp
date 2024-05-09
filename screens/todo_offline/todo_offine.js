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
  deleteNewsAction,
  postNewsAction,
  putNewsAction,
  setStatusAction,
} from "../../redux/actions/news.action";
import WarningModal from "./warning_modal";
import { removeAll, setStatusReducer } from "../../redux/reducers/news.reducer";

const TodoOffline = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.listNews);
  const status = useSelector((state) => state.news.status);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdd, setIsAdd] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const generateRandomId = () => {
    const randomNumber = Math.random();
    const randomId = randomNumber.toString(36).slice(2);

    return randomId;
  };

  const handleAddNews = () => {
    if (title == "") {
      dispatch(setStatusAction());
    } else {
      if (isAdd) {
        dispatch(postNewsAction(generateRandomId(), title));
        setTitle("");
      } else {
        dispatch(putNewsAction(id, title, news));
        setTitle("");
        setIsAdd(true);
      }
    }
    setIsModalVisible(true);
  };

  const handleUpdateForm = (item) => {
    setTitle(item.title);
    setId(item.id);
    setIsAdd(false);
  };

  const handleCancel = () => {
    setIsAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteNewsAction(id, news));
  };

  const handleAllDelete = () => {
    dispatch(
      removeAll({
        status: "Tất cả đã được xóa.",
      })
    );
    setIsModalVisible(true);
  };
  const ItemNews = ({ item }) => (
    <View style={styles.viewItem}>
      <Text style={styles.textTitle}>{item.title}</Text>
      <View style={styles.viewRightItem}>
        {isAdd ? (
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "#ffcc00" }]}
            onPress={() => handleUpdateForm(item)}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: "#ffcc00" }]}
            onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: "#ff0000" }]}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Nhập tiêu đề...'
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleAddNews}>
          <Text style={styles.searchButtonText}>
            {isAdd ? "Thêm tin tức" : "Chỉnh sửa"}
          </Text>
        </TouchableOpacity>
      </View>
      <WarningModal
        isVisible={isModalVisible}
        onClose={closeModal}
        title={status}
      />
      {news.length >= 2 ? (
        <View
          style={{
            alignSelf: "flex-end",
          }}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {
                backgroundColor: "#ff0000",
                marginVertical: 8,
                width: 100,
                marginHorizontal: 8,
              },
            ]}
            onPress={handleAllDelete}>
            <Text style={styles.buttonText}>Remove all</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      <FlatList
        data={news}
        renderItem={({ item }) => <ItemNews item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
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
  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  viewRightItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default TodoOffline;
