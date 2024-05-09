import { getNews, postNews, setStatusReducer } from "../reducers/news.reducer";

export const postNewsAction = (id, title) => async (dispatch) => {
  try {
    dispatch(
      postNews({
        news: [
          {
            id: id,
            title: title,
          },
        ],
        status: "Thêm thành công!!!",
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const setStatusAction = () => async (dispatch) => {
  try {
    dispatch(
      setStatusReducer({
        status: "Vui lòng nhập tiêu đề",
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const putNewsAction = (id, title, listNews) => async (dispatch) => {
  try {
    let newList = listNews.map((item) => {
      if (item.id === id) {
        return { ...item, title: title };
      }
      return item;
    });
    dispatch(
      getNews({
        listNews: newList,
        status: "Chỉnh sửa thành công!!!",
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const deleteNewsAction = (id, listNews) => async (dispatch) => {
  try {
    let newList = listNews.filter((item) => item.id !== id);
    dispatch(
      getNews({
        listNews: newList,
        status: "Xóa thành công!!!",
      })
    );
  } catch (err) {
    console.log(err);
  }
};
